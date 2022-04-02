import { StyleSheet, View, Text, Image } from "react-native";
import React from "react";

const Vaga = ({ title, salary, description, contact }) => {
  return (
    <View style={styles.vaga}>
      <Text style={styles.title}>{title}</Text>
      <Text
        style={{
          ...styles.body,
          fontSize: 20,
          fontWeight: 700,
          color: "#fff",
          marginVertical: 20,
        }}
      >
        Salario: R$ {salary.toFixed(2)}
      </Text>
      <Text style={styles.body}>Descrição: {description}</Text>
      <Text style={styles.body}>Contato: {contact}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    color: "#a3be8c",
    fontSize: 25,
    marginTop: 45,
  },
  text: {
    color: "#eceff4",
    fontSize: 32,
    fontWeight: "bold",
  },
  img: {
    width: 300,
    height: 180,
    borderRadius: 10,
    borderColor: "#fff",
    borderWidth: 2,
    marginVertical: 10,
  },
  body: {
    color: "#eceff4",
    width: 320,
    marginVertical: 5,
  },
  vaga: {
    borderWidth: 2,
    borderColor: "#fff",
    margin: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: "#434c5e",
  },
});
export default Vaga;
