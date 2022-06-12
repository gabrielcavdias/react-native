import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Dados({ route }) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.result}>Nome: {route.params?.name}</Text>
      <Text style={styles.result}>Idade: {route.params?.age}</Text>
      <Text style={styles.result}>Sexo: {route.params?.sexs}</Text>
      <Text style={styles.result}>Escolaridade: {route.params?.schooling}</Text>
      <Text style={styles.result}>
        Brasileiro: {route.params?.nationality ? "Sim" : "Não"}
      </Text>
      <Text style={styles.result}>Limite: {route.params?.limit}</Text>

      <Pressable style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.text}>Voltar para tela Inicial</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1c1e24",
    padding: 20,
  },
  label: {
    marginBottom: 5,
    paddingTop: 20,
    color: "#fff",
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#fff",
    color: "#fff",
    padding: 5,
  },
  switch: {
    alignSelf: "flex-start",
    marginTop: 8,
    marginBottom: 20,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    backgroundColor: "#3b4252",
    width: "100%",
    marginTop: 20,
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  result: {
    textAlign: "center",
    color: "#fff",
  },
});
