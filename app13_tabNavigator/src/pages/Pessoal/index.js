import React from "react";
import { View, Text, Pressable, Image, Linking } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#1c1e24",
    paddingTop: 30,
  },
  text: {
    marginLeft: 16,
    color: "#eceff4",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    marginVertical: 10,
  },
  img: {
    width: 250,
    aspectRatio: 1,
    borderWidth: 5,
    borderColor: "#3b4252",
    borderRadius: 10,
    alignSelf: "center",
    marginTop: 48,
  },
  wrapper: {
    backgroundColor: "#2e3440",
    marginTop: 18,
    marginHorizontal: 10,
    borderRadius: 10,
    paddingVertical: 16,
  },
};

export default function Pessoal() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://github.com/gabrielcavdias.png" }}
        style={styles.img}
      />
      <View style={styles.wrapper}>
        <Text style={{ ...styles.text, ...styles.title }}>Dados Pessoais</Text>
        <Text style={styles.text}>
          <Text style={{ fontWeight: "bold" }}>Nome: </Text>Helio Gabriel
          Cavalcante Dias
        </Text>
        <Text style={styles.text}>
          <Text style={{ fontWeight: "bold" }}>Data de nascimento: </Text>
          10/08/1996
        </Text>

        <StatusBar style="light" />
      </View>
    </View>
  );
}
