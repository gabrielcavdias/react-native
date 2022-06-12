import React from "react";
import { Text, TextInput, View } from "react-native";

const FormInput = ({ change, value }) => {
  const styles = {
    input: {
      borderWidth: 1,
      width: 280,
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
      <TextInput style={styles.input} value={value} onChangeText={change} />
    </View>
  );
};

export default FormInput;
