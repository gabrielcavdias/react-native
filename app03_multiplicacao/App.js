import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, TextInput, Pressable } from 'react-native';

export default function App() {
  const [result, setResult] = React.useState('');
  const [valueOne, setValueOne] = React.useState(null);
  const [valueTwo, setValueTwo] = React.useState(null);
  const styles = {
    container: {
      flex: 1,
      backgroundColor: '#3b4252',
    },
    text: {
      color: '#eceff4',
      fontSize: 32,
      fontWeight: 'bold',
    },
    title:{
      fontWeight: 'bold',
      color: '#eceff4',
      fontSize: 35,
      marginVertical: 10,
      textAlign: 'center',
      marginTop: 45,
    },
    button: {
      margin: 20,
      padding: 20,
      fontSize: 30,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 20,
      backgroundColor: '#5e81ac',
    },
    input: {
      borderWidth: 1,
      borderColor: '#fff',
      color: '#fff',
      marginHorizontal: 20,
      marginVertical: 10,
      padding: 5,
      fontSize: 25
    }
  }
  return (
    <View style={styles.container}>
    <Text style={styles.title}>Multiplicador de Números</Text>
    <TextInput style={styles.input} placeholderTextColor="#aaa"  placeholder='Digite o primeiro nº' keyboardType='numeric' value={valueOne} onChangeText={txt=>setValueOne(txt.replace(/[^0-9]/g, ''))}/>
    <TextInput style={styles.input} placeholderTextColor="#aaa" placeholder='Digite o segundo nº' keyboardType='numeric' value={valueTwo} onChangeText={txt=>setValueTwo(txt.replace(/[^0-9]/g, ''))}/>
    <Pressable style={styles.button} onPress={()=>setResult(valueOne*valueTwo)}>
      <Text style={styles.text}>
        Calcular
      </Text>
    </Pressable>
    <View style={styles.result}>
      <Text style={styles.text}>
        {result!=null ? result : ''}
      </Text>
    </View>
    <StatusBar style="light" />
    </View>
  );
}