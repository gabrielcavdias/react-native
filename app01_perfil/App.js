import { StatusBar } from 'expo-status-bar';
import React from 'react';
import  { Text, View, Image, Linking } from 'react-native';

export default function App() {
  const styles = {
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight,
      backgroundColor: '#1c1e24',
    },
    text:{
      marginLeft: 16,
      color: '#eceff4',
    },
    title:{
      fontWeight: 'bold',
      fontSize: 18,
      marginVertical: 10
    },
    img: {
      width: 250,
      aspectRatio: 1,
      borderWidth: 5,
      borderColor: '#3b4252',
      borderRadius: 10,
      alignSelf: 'center',
      marginTop: 48
    },
    wrapper: {
      backgroundColor: '#2e3440',
      marginTop: 18,
      marginHorizontal: 10,
      borderRadius: 10,
      paddingVertical: 16
    }
  }
  return (
    <View style={styles.container}>
      <Image source={{uri: 'https://github.com/gabrielcavdias.png'}} style={styles.img}/>
      <View style={styles.wrapper}>
        <Text style={{...styles.text, ...styles.title}}>Dados Pessoais</Text>
        <Text style={styles.text}><Text style={{fontWeight: 'bold'}}>Nome: </Text>Helio Gabriel Cavalcante Dias</Text>
        <Text style={styles.text}><Text style={{fontWeight: 'bold'}}>Data de nascimento: </Text>10/08/1996</Text>
        <Text style={{...styles.text, ...styles.title}}>Formação</Text>
        <Text style={styles.text}><Text style={{fontWeight: 'bold'}}>Cursando: </Text>Sistemas para Internet - Fatec Rubens Lara</Text>
        <Text style={{...styles.text, ...styles.title}}>Experiência</Text>
        <Text style={styles.text}><Text style={{fontWeight: 'bold'}}>Estágio: </Text>Desenvolvedor Frontend</Text>
        <Text style={{...styles.text, ...styles.title}}>Projetos</Text>
        <Text style={styles.text}>
          Confira todos os meus projetos na minha
          <Text style={{color:'#ebcb8b', textDecorationLine: 'underline'}} onPress={()=>Linking.openURL('https://github.com/gabrielcavdias')}> página do Github</Text>
          </Text>
      </View>
      <StatusBar style="light" />
    </View>
  );
}