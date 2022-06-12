import React from "react";
import { View, Text, Pressable } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#1c1e24",
    marginTop: StatusBar.currentHeight,
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

export default function Formacao() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={{ ...styles.text, ...styles.title }}>Formação</Text>
      <Text style={styles.text}>
        <Text style={{ fontWeight: "bold" }}>Cursando: </Text>Sistemas para
        Internet - Fatec Rubens Lara
      </Text>
    </View>
  );
}
