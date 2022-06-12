import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./src/pages/Home";
import Dados from "./src/pages/Dados";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Abertura de conta"
          component={Home}
          options={{
            headerStyle: { backgroundColor: "#434c5e" },
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen
          name="Dados"
          component={Dados}
          options={{
            headerStyle: { backgroundColor: "#434c5e" },
            headerTintColor: "#fff",
          }}
        />
      </Stack.Navigator>
      <StatusBar style="light" />
    </NavigationContainer>
  );
}
