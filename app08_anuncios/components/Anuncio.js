import { StyleSheet, View, Text, Image } from "react-native";
import React from "react";

const Anuncio = ({ src, title, body, price }) => {
  return (
    <View style={styles.anuncio}>
      <Image source={{ uri: src }} style={styles.img} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.body}>{body}</Text>
      <Text
        style={{
          ...styles.body,
          fontSize: 20,
          fontWeight: 700,
          color: "#fff",
          marginVertical: 20,
        }}
      >
        R$ {price.toFixed(2)}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
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
  },
  anuncio: {
    borderWidth: 2,
    borderColor: "#fff",
    margin: 20,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: "#434c5e",
  },
});
export default Anuncio;
