import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Vaga from "./components/Vaga";
export default function App() {
  const vagas = [
    {
      title: "Desenvolvedor Front-End Junior",
      salary: 3500,
      description:
        "Desenvolver páginas modernas utilizando-se dos frameworks Vue.js e React.js",
      contact: "contato@vagasdev.com.br",
    },
    {
      title: "Desenvolvedor Back-End Junior",
      salary: 4000,
      description:
        "Desenvolver o server-side de aplicaçoes modernas utilizando-se de frameworks como Nest.js e Express.js",
      contact: "contato@vagasdev.com.br",
    },
    {
      title: "Gerente de projetos Junior",
      salary: 5000,
      description:
        "Auxiliar no gerenciamento de times de desenvolvimento para o aplicativo PagaNoiz",
      contact: "contato@paganoiz.com.br",
    },
    {
      title: "Desenvolvedor Front-End Junior",
      salary: 3500,
      description:
        "Desenvolver páginas modernas utilizando-se dos frameworks Vue.js e React.js",
      contact: "contato@vagasdev.com.br",
    },
    {
      title: "Desenvolvedor Back-End Junior",
      salary: 4000,
      description:
        "Desenvolver o server-side de aplicaçoes modernas utilizando-se de frameworks como Nest.js e Express.js",
      contact: "contato@vagasdev.com.br",
    },
    {
      title: "Gerente de projetos Junior",
      salary: 5000,
      description:
        "Auxiliar no gerenciamento de times de desenvolvimento para o aplicativo PagaNoiz",
      contact: "contato@paganoiz.com.br",
    },
  ];
  7;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Vagas</Text>
      <View style={{ height: 500, marginTop: 20 }}>
        <ScrollView showsHorizontalScrollIndicator={false}>
          {vagas.map(vaga => {
            return (
              <Vaga
                title={vaga.title}
                salary={vaga.salary}
                description={vaga.description}
                contact={vaga.contact}
              />
            );
          })}
        </ScrollView>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: "#1c1e24",
  },
  title: {
    fontWeight: "bold",
    color: "#81a1c1",
    fontSize: 35,
    marginVertical: 10,
    textAlign: "center",
    marginTop: 45,
  },
});
