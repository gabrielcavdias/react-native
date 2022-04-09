import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Picker } from "@react-native-picker/picker";

export default function App() {
  const [valor, setValor] = React.useState(null);
  const dolar = 4.7;
  const euro = 5.11;
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Conversor de Moedas</Text>
        <Text
          style={{
            ...styles.title,
            fontSize: 20,
            color: "#8fbcbb",
          }}
        >
          Dólar, Real e Euro
        </Text>
        <Text>{valor}</Text>
      </ScrollView>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1c1e24",
    paddingTop: 26,
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
});
