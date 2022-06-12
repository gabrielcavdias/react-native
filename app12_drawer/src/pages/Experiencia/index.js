import React from "react";
import { View, Text, Pressable } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#1c1e24",
    marginTop: StatusBar.currentHeight,
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
      <Pressable
        style={{
          paddingBottom: 10,
          paddingTop: 30,
          backgroundColor: "rgba(0, 122, 255, 0.12)",
        }}
        onPress={() => navigation.toggleDrawer()}
      >
        <Text
          style={{
            textAlign: "center",
            fontSize: 20,
            fontWeight: "bold",
            color: "rgb(0, 122, 255)",
          }}
        >
          Menu
        </Text>
      </Pressable>
      <Text style={{ ...styles.text, ...styles.title }}>Experiência</Text>
      <Text style={styles.text}>
        <Text style={{ fontWeight: "bold" }}>Estágio: </Text>Desenvolvedor
        Frontend
      </Text>
      <Text style={{ ...styles.text, ...styles.title }}>Projetos</Text>
      <Text style={styles.text}>
        Confira todos os meus projetos na minha
        <Text
          style={{ color: "#ebcb8b", textDecorationLine: "underline" }}
          onPress={() => Linking.openURL("https://github.com/gabrielcavdias")}
        >
          {" "}
          página do Github
        </Text>
      </Text>
    </View>
  );
}
