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
      width: 200,
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
      textAlign: 'center'
    },
    img: {
      width: 300,
      height: 200,
      borderRadius: 10,
      borderColor: '#fff',
      borderWidth: 2,
      marginVertical: 10
    }
  }
  const [result, setResult] = React.useState(null)
  const [gasolina, setGasolina] = React.useState(null)
  const [etanol, setEtanol] = React.useState(null)
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Álcool ou Gasolina</Text>
      <View style={{alignItems: 'center'}}>
        <Image source={{uri: 'https://images.pexels.com/photos/9796/car-refill-transportation-transport.jpg?cs=srgb&dl=pexels-skitterphoto-9796.jpg&fm=jpg'}} style={styles.img}/>
      </View>
      <TextInput style={styles.input} placeholderTextColor="#777" placeholder="Preço do álcool" value={etanol} onChangeText={txt=>setEtanol(txt.replace(/[^0-9]/g, ''))}/>
      <TextInput style={styles.input} placeholderTextColor="#777" placeholder="Preço da Gasolina"value={gasolina} onChangeText={txt=>setGasolina(txt.replace(/[^0-9]/g, ''))}/>
      <View style={{alignItems: 'center'}}>
        <Pressable style={styles.button} onPress={()=>{
          if(gasolina&&etanol){
            if(etanol/gasolina>0.7) setResult("Gasolina é melhor")
            else setResult("Álcool é melhor")
          }
        }}>
          <Text style={styles.text}>
            Verificar
          </Text>
        </Pressable>
      </View>
      <View>
        <Text style={{...styles.result, ...styles.text}}>{result}</Text>
      </View>
      <StatusBar style="light" />
    </View>
  );
}
