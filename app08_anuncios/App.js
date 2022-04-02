import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Anuncio from "./components/Anuncio";
export default function App() {
  const anuncios = [
    {
      src: "https://www.techexplorist.com/wp-content/uploads/2017/04/flying-car1.jpg",
      title: "Carro voador",
      body: "Carro voador seminovo pronto para enfrentar os céus de 2015, sofreu alguns arranhões de pombo mas nada que atrapalhe na funcionalidade",
      price: 70000,
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/PSP-2000.jpg/1200px-PSP-2000.jpg",
      title: "PSP 2000",
      body: "Videogame portátil clássico, acompanha cabo componente para jogar na TV e se divertir com toda a família, é possível conectar um controle bluetooth",
      price: 750,
    },
    {
      src: "https://www.harpyja.com.br/imagens/uploads/2020/02/IMGPROD_ventilador-mondial-repelente-52.jpg",
      title: "Ventilador Mondial",
      body: "Ventilador novo de qualidade indiscutível, especialmente para palmeirenses que vão poder dizer que tem Mondial",
      price: 350,
    },
    {
      src: "https://www.techexplorist.com/wp-content/uploads/2017/04/flying-car1.jpg",
      title: "Carro voador",
      body: "Carro voador seminovo pronto para enfrentar os céus de 2015, sofreu alguns arranhões de pombo mas nada que atrapalhe na funcionalidade",
      price: 70000,
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/PSP-2000.jpg/1200px-PSP-2000.jpg",
      title: "PSP 2000",
      body: "Videogame portátil clássico, acompanha cabo componente para jogar na TV e se divertir com toda a família, é possível conectar um controle bluetooth",
      price: 750,
    },
    {
      src: "https://www.harpyja.com.br/imagens/uploads/2020/02/IMGPROD_ventilador-mondial-repelente-52.jpg",
      title: "Ventilador Mondial",
      body: "Ventilador novo de qualidade indiscutível, especialmente para palmeirenses que vão poder dizer que tem Mondial",
      price: 350,
    },
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Anúncios</Text>
      <View style={{ height: 500, marginTop: 20 }}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {anuncios.map(anuncio => {
            return (
              <Anuncio
                key={Math.random()}
                src={anuncio.src}
                title={anuncio.title}
                body={anuncio.body}
                price={anuncio.price}
              />
            );
          })}
        </ScrollView>
      </View>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: "#1c1e24",
  },
  title: {
    fontWeight: "bold",
    color: "#81a1c1",
    fontSize: 35,
    marginVertical: 10,
    textAlign: "center",
    marginTop: 45,
  },
});
