import React from "react";
import { View, Text, Image } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

export default function CustomDrawer(props) {
  return (
    <DrawerContentScrollView
      {...props}
      style={{ flex: 1, backgroundColor: "#1c1e24" }}
    >
      <View
        style={{
          width: "100%",
          height: 120,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#1c1e24",
        }}
      >
        <Image
          source={{ uri: "https://github.com/gabrielcavdias.png" }}
          style={{
            width: 80,
            aspectRatio: 1,
            borderRadius: 10,
            alignSelf: "center",
            marginTop: 48,
          }}
        />
        <Text
          style={{
            color: "#FFF",
            fontSize: 17,
            marginTop: 5,
            marginBottom: 45,
          }}
        >
          Helio Dias
        </Text>
      </View>

      <DrawerItemList {...props} labelStyle={{ color: "#fff" }} />
    </DrawerContentScrollView>
  );
}
