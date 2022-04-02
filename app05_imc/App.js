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
      width: 200,
      height: 180,
      borderRadius: 10,
      borderColor: '#fff',
      borderWidth: 2,
      marginVertical: 10
    }
  }
  const [altura, setAltura] = React.useState(null)
  const [peso, setPeso] = React.useState(null)
  const [result, setResult] = React.useState(null)
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cálculo IMC</Text>
      <View style={{alignItems: 'center'}}>
        <Image source={{uri: 'https://images.pexels.com/photos/53404/scale-diet-fat-health-53404.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}} style={styles.img}/>
      </View>
      <TextInput style={styles.input} placeholderTextColor="#777" placeholder="Peso (KG)" value={peso} onChangeText={txt=>setPeso(txt.replace(/[^0-9]/g, ''))}/>
      <TextInput style={styles.input} placeholderTextColor="#777" placeholder="Altura (CM)" value={altura} onChangeText={txt=>setAltura(txt.replace(/[^0-9]/g, ''))}/>
      <View style={{alignItems: 'center'}}>
        <Pressable style={styles.button} onPress={()=>{
          if(altura&&peso){
            const imc = peso/(altura/100)**2
            switch(true){
              case (imc<18.5):
                setResult({
                  number: imc,
                  txt: 'Abaixo do peso ideal',
                })
              break
              case (imc<24.9):
                setResult({
                  number: imc,
                  txt: 'Peso ideal'
                })
              break
              case(imc<29.9):
                setResult({
                  number: imc,
                  txt: 'Sobrepeso'
                })
              break
              case(imc<34.9):
                setResult({
                  number: imc,
                  txt: 'Obesidade Grau I'
                })
              break
              case(imc<39.9):
                setResult({
                  number: imc,
                  txt: 'Obesidade Grau II'
                })
              break
              case(imc>=40):
                setResult({
                  number: imc,
                  txt: 'Obesidade mórbida'
                })
              break
            }
          }
        }}>
          <Text style={styles.text}>
            Calcular
          </Text>
        </Pressable>
      </View>
      <View>
        <Text style={{...styles.result, ...styles.text}}>{result.number.toFixed(2)}</Text>
        <Text style={{...styles.result, ...styles.text}}>{result.txt}</Text>
      </View>
      <StatusBar style="light" />
    </View>
  );
}
