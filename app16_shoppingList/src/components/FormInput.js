import React from "react";
import { value, Text, TextInput, View } from "react-native";

const FormInput = ({
  placeholder,
  change,
  value,
  placeholderTextColor,
  size,
}) => {
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
    lg: {
      width: 180,
    },
    sm: {
      width: 80,
    },
  };
  let width = size == "small" ? styles.sm : styles.lg;
  return (
    <View>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        style={{ ...styles.input, ...width }}
        value={value}
        onChangeText={change}
      />
    </View>
  );
};

export default FormInput;
