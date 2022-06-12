import { StatusBar } from "expo-status-bar";
import React from "react";
import * as SQLite from "expo-sqlite";
import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import FormInput from "./src/components/FormInput";
const db = SQLite.openDatabase("tarefas.db");

export default function App() {
  const [todoList, setTodoList] = React.useState([]);
  const [task, setTask] = React.useState("");
  async function createTables() {
    db.transaction(txn => {
      txn.executeSql(
        `CREATE TABLE IF NOT EXISTS tarefas (id INTEGER PRIMARY KEY AUTOINCREMENT, nome VARCHAR(20))`,
        [],
        (sqlTxn, res) => {
          console.log("Tabela criada com sucesso!");
        },
        error => {
          console.log("Erro ao criar tabela " + error.message);
        }
      );
    });
  }
  async function getTarefas() {
    db.transaction(txn => {
      txn.executeSql(
        `SELECT * FROM tarefas ORDER BY id DESC`,
        [],
        (sqlTxn, res) => {
          console.log("Tarefas lidas com sucesso!");
          let len = res.rows.length;

          if (len > 0) {
            let results = [];
            for (let i = 0; i < len; i++) {
              let item = res.rows.item(i);
              results.push({ id: item.id, nome: item.nome });
            }

            setTodoList(results);
          }
        },
        error => {
          console.log("Erro ao obter Tarefas " + error.message);
        }
      );
    });
  }

  const handleAddList = () => {
    if (!task) {
      alert("Informe uma tarefa");
      return false;
    }

    db.transaction(txn => {
      txn.executeSql(
        `INSERT INTO tarefas (nome) VALUES (?)`,
        [task],
        (sqlTxn, res) => {
          console.log(`${task} Tarefa adicionada com sucesso!`);
          getTarefas();
          setTask("");
        },
        error => {
          console.log("Erro ao inserir uma Tarefa " + error.message);
        }
      );
    });
  };
  React.useEffect(() => {
    createTables();
    getTarefas();
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Tarefas</Text>
      <View style={styles.wrapper}>
        <FormInput change={texto => setTask(texto)} />
        <Pressable style={styles.button} onPress={() => handleAddList()}>
          <Text style={styles.btnText}>+</Text>
        </Pressable>
      </View>
      <View style={styles.box}>
        {todoList.map(item => (
          <View style={styles.task}>
            <Text style={styles.taskText}>{`${item.id} - ${item.nome}`}</Text>
            <Pressable
              style={styles.deletar}
              onPress={() => {
                db.transaction(txn => {
                  txn.executeSql(`DELETE FROM tarefas WHERE id = (?)`, [
                    item.id,
                  ]);
                  getTarefas();
                });
              }}
            >
              <Text style={styles.taskText}>X</Text>
            </Pressable>
          </View>
        ))}
      </View>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1c1e24",
    paddingTop: 30,
  },
  wrapper: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-around",
  },
  title: {
    fontSize: 30,
    textAlign: "center",
    marginVertical: 20,
    marginHorizontal: 20,
    color: "#fff",
    borderBottomColor: "#fff",
    borderBottomWidth: 2,
    paddingBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 10,
    color: "#fff",
    marginVertical: 10,
    padding: 5,
    fontSize: 20,
  },
  button: {
    backgroundColor: "#81a1c1",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    borderRadius: 20,
  },
  btnText: {
    color: "#fff",
  },
  box: {
    marginTop: 20,
    marginHorizontal: 10,
    borderColor: "#fff",
    borderWidth: 2,
    padding: 15,
    flexDirection: "column-reverse",
  },
  task: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  deletar: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 10,
  },
  taskText: {
    color: "#fff",
  },
});
