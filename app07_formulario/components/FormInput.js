import React from "react";
import { Text, TextInput, View } from "react-native";

const FormInput = ({ account, setAccount, name, change, value }) => {
  const styles = {
    input: {
      borderWidth: 1,
      borderColor: "#fff",
      borderRadius: 10,
      color: "#fff",
      marginVertical: 10,
      padding: 5,
      fontSize: 20,
    },
    text: {
      color: "#eceff4",
      fontSize: 18,
      fontWeight: "bold",
    },
  };
  return (
    <View>
      <Text style={styles.text}>{name}:</Text>
      <TextInput style={styles.input} value={value} onChangeText={change} />
    </View>
  );
};

export default FormInput;
