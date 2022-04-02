import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Switch,
  Pressable,
  ScrollView,
} from "react-native";
import Slider from "@react-native-community/slider";
import { Picker } from "@react-native-picker/picker";
import FormInput from "./components/FormInput";
export default function App() {
  const styles = {
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight,
      backgroundColor: "#1c1e24",
      paddingHorizontal: 20,
    },
    title: {
      fontWeight: "bold",
      color: "#eceff4",
      fontSize: 35,
      marginVertical: 10,
      textAlign: "center",
      marginTop: 45,
    },
    text: {
      color: "#eceff4",
      fontSize: 18,
      fontWeight: "bold",
    },
    button: {
      width: 300,
      margin: 20,
      padding: 10,
      fontSize: 30,
      alignItems: "center",
      justifyContent: "center",
      marginHorizontal: "auto",
      borderRadius: 20,
      backgroundColor: "#81a1c1",
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
    result: {
      fontSize: 40,
      textAlign: "center",
      borderWidth: 2,
      borderColor: "#fff",
      width: 200,
    },
    img: {
      width: 300,
      height: 200,
      borderRadius: 10,
      borderColor: "#fff",
      borderWidth: 2,
      marginVertical: 10,
    },
  };
  const [account, setAccount] = React.useState({});
  const [result, setResult] = React.useState(null);
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Abertura de conta</Text>
        <FormInput
          name="Nome"
          change={txt => {
            let copy = { ...account };
            copy.nome = txt;
            setAccount(copy);
          }}
          account={account}
          setAccount={setAccount}
          value={account.nome}
        />
        <FormInput
          name="Idade"
          change={txt => {
            let copy = { ...account };
            copy.idade = txt.replace(/[^0-9]/g, "");
            setAccount(copy);
          }}
          account={account}
          setAccount={setAccount}
          value={account.idade}
        />
        {/* Genero */}
        <View>
          <Text style={styles.text}>Gênero:</Text>
          <View
            style={{
              borderColor: "#fff",
              borderWidth: 1,
              borderRadius: 10,
              marginVertical: 10,
            }}
          >
            <Picker
              selectedValue={account.genero}
              dropdownIconColor="#fff"
              onValueChange={(itemValue, itemIndex) => {
                let copy = { ...account };
                copy.genero = itemValue;
                setAccount(copy);
              }}
            >
              <Picker.Item
                label="Masculino"
                value="masculino"
                color="#81a1c1"
              />
              <Picker.Item label="Feminino" value="feminino" color="#81a1c1" />
            </Picker>
          </View>
        </View>
        {/* Escolaridade */}
        <View>
          <Text style={styles.text}>Escolaridade:</Text>
          <View
            style={{
              borderColor: "#fff",
              borderWidth: 1,
              borderRadius: 10,
              marginVertical: 10,
            }}
          >
            <Picker
              selectedValue={account.escolaridade}
              dropdownIconColor="#fff"
              onValueChange={(itemValue, itemIndex) => {
                let copy = { ...account };
                copy.escolaridade = itemValue;
                setAccount(copy);
              }}
            >
              <Picker.Item
                label="Ensino fundamental incompleto"
                value="ensino fundamental incompleto"
                color="#81a1c1"
              />
              <Picker.Item
                label="Ensino fundamental completo"
                value="ensino fundamental completo"
                color="#81a1c1"
              />
              <Picker.Item
                label="Ensino médio incompleto"
                value="ensino médio incompleto"
                color="#81a1c1"
              />
              <Picker.Item
                label="Ensino médio completo"
                value="ensino médio completo"
                color="#81a1c1"
              />
              <Picker.Item
                label="Ensino superior incompleto"
                value="ensino superior incompleto"
                color="#81a1c1"
              />
              <Picker.Item
                label="Ensino superior completo"
                value="ensino superior completo"
                color="#81a1c1"
              />
            </Picker>
          </View>
        </View>
        {/* Limite */}
        <View>
          <Text style={styles.text}>Limite:</Text>
          <Slider
            style={{ width: 320, marginVertical: 20 }}
            minimumValue={10}
            maximumValue={500}
            minimumTrackTintColor="#5e81ac"
            maximumTrackTintColor="#fff"
            thumbTintColor="#88c0d0"
            step={10}
            onValueChange={itemValue => {
              let copy = { ...account };
              copy.limite = itemValue;
              setAccount(copy);
            }}
          />
        </View>
        {/* Nacionalidade */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={styles.text}>Nacionalidade:</Text>
          <Switch
            value={account.nacionalidade == "br" ? true : false}
            onValueChange={value => {
              let copy = { ...account };
              if (value) {
                copy.nacionalidade = "br";
              } else {
                copy.nacionalidade = "no";
              }
              setAccount(copy);
            }}
          />
        </View>
        <View style={{ alignItems: "center" }}>
          <Pressable
            style={styles.button}
            onPress={() => {
              setResult(`
Nome: ${account.nome || "Não informado"} \n
Idade: ${account.idade || "Não informado"} \n
Sexo: ${
                account.genero[0].toUpperCase() + account.genero.substring(1) ||
                "Não informado"
              } \n
Escolaridade: ${account.escolaridade || "Não informado"} \n
Limite: ${"R$ " + account.limite.toFixed(2) || "Não informado"} \n
Brasileiro: ${
                account.nacionalidade == "br" ? "Sim" : "Não" || "Não informado"
              } \n
            `);
            }}
          >
            <Text style={styles.text}>Verificar</Text>
          </Pressable>
        </View>
        <View>
          {result != null && (
            <>
              <Text style={{ ...styles.title, color: "#5e81ac" }}>
                Dados Informados:
              </Text>
              <Text style={{ ...styles.text, fontSize: 18 }}>{result}</Text>
            </>
          )}
        </View>
        <StatusBar style="light" />
      </ScrollView>
    </View>
  );
}
