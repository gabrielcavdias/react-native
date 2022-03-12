import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Button, Pressable } from 'react-native';

export default function App() {
  const [counter, setCounter] = React.useState(0);
  const styles = {
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight,
      backgroundColor: '#1c1e24',
    },
    title:{
      fontWeight: 'bold',
      color: '#eceff4',
      fontSize: 35,
      marginVertical: 10,
      textAlign: 'center',
      marginTop: 45,
    },
    text: {
      color: '#eceff4',
      fontSize: 32,
      fontWeight: 'bold',
    },
    counter: {
      fontSize: 20,
      color: '#fff',
      margin: 50,
      borderWidth: 2,
      borderColor: '#eceff4',
      padding: 20,
      textAlign: 'center'
    },
    button: {
      margin: 20,
      padding: 20,
      fontSize: 30,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 20,
    },
    plus: {
      backgroundColor: '#a3be8c',
    },
    minus: {
      backgroundColor: '#bf616a',
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador de Pessoas</Text>
      <Text style={styles.counter}>{counter}</Text>
      <Pressable style={{...styles.button, ...styles.plus}} onPress={()=>setCounter(counter+1)}>
        <Text style={styles.text}>+</Text>
      </Pressable>
      <Pressable style={{...styles.button, ...styles.minus}} onPress={()=> counter!=0? setCounter(counter-1): ''}>
      <Text style={styles.text}>-</Text>
      </Pressable>
      <StatusBar style="light" />
    </View>
  );
}