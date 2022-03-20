import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, TextInput, Pressable, Image } from 'react-native';

export default function App() {
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
    button: {
      width: 300,
      margin: 20,
      padding: 10,
      fontSize: 30,
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: 'auto',
      borderRadius: 20,
      backgroundColor: '#81a1c1',
    },
    input: {
      borderWidth: 1,
      borderColor: '#fff',
      borderRadius: 10,
      color: '#fff',
      marginHorizontal: 20,
      marginVertical: 10,
      padding: 5,
      fontSize: 25
    },
    result: {
      fontSize: 40,
      textAlign: 'center',
      borderWidth: 2,
      borderColor: '#fff',
      width: 200,
    },
    img: {
      width: 300,
      height: 200,
      borderRadius: 10,
      borderColor: '#fff',
      borderWidth: 2,
      marginVertical: 10
    },
  }
  const [result, setResult] = React.useState(null)
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jogo do número aleatório</Text>
      <View style={{alignItems: 'center'}}>
        <Image source={{uri: 'https://images.pexels.com/photos/356079/pexels-photo-356079.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}} style={styles.img}/>
      </View>
      <View style={{alignItems: 'center'}}>
        <Pressable style={styles.button} onPress={()=>{
          let random = Math.floor(Math.random()*10)
          setResult(random)
        }}>
          <Text style={styles.text}>
            Descobrir
          </Text>
        </Pressable>
      </View>
      <Text style={{...styles.text, textAlign: 'center', color: '#8fbcbb'}}>Pense em um nº de 0 a 10</Text>
      <View style={{alignItems: 'center', marginVertical: 20}}>
        <Text style={{...styles.result, ...styles.text}}>{result}</Text>
      </View>
      <StatusBar style="light" />
    </View>
  );
}
