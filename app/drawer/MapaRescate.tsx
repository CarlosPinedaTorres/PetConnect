import { View, Text, StyleSheet, Image, TextInput } from 'react-native'
import React from 'react'
import { Colors } from '@/themes/Colors'
import { GlobalStyles } from '@/themes/GlobalStyles'
import { Button } from '@/components/CustomPressable'
import { Link } from 'expo-router'
const MapaRescate = () => {
  return (
    <View>
      <View style={[styles.containerInformacion]}>
        <Text style={[styles.textoInformacion]}>Indica el punto donde un animal,
          una colonia o una situación
          requiere atención y descríbela para
          que podamos actuar juntos.</Text>


      </View>
      <View style={[styles.contenedorMapa]}>
        <Image
          style={[styles.mapaImage]}
          resizeMode="contain"
          source={require("@/assets/images/mapa.png")}
        />
      </View>

      <View style={[styles.informacionUbicacion]} >
        <Image
          style={[styles.locationImage]}
          resizeMode="contain"
          source={require("@/assets/images/location.png")}
        />
        <Text style={[styles.textoInfoUbi]}>La ubicación se añadirá automáticamente cuando se seleccione en el mapa. </Text>

      </View>

      <View style={[styles.contenedorMensaje]}>
        <TextInput
          placeholder="Describe tu problema..."
          multiline={true}
          numberOfLines={4}
          style={[styles.mensajeEnviar]}
        />

      </View>

      <View style={[styles.buttonEnviar]}>

        <Link href="/drawer/MapaRescate" style={[GlobalStyles.linkButton]}>Enviar</Link>

      </View>


    </View>

  )
}
const styles = StyleSheet.create({
  mensajeEnviar: {
    fontSize: 15,
    fontFamily: "PoppinsRegular",
    fontWeight: "regular",
    padding: 15
  },
  buttonEnviar: {
    alignItems: "center",
    marginTop: 10,

  },
  contenedorMensaje: {
    backgroundColor: Colors.azulClaro,
    height: 100,
    marginLeft: 20,
    marginRight: 20,
    marginTop:10,
    borderRadius: 20,
    padding: 10,

  },
  locationImage: {
    width: 50,
    height: 50,

  },
  textoInfoUbi: {
    fontSize: 12,
    fontFamily: "PoppinsBold",
    paddingRight: 30,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    color: Colors.blanco
  },
  informacionUbicacion: {
    flexDirection: 'row',
    backgroundColor: Colors.negro,
    borderRadius: 20,
    alignContent: "center",
    alignItems: "center",
    justifyContent:"center",
    marginLeft:15,
    width:330
  },

  containerInformacion: {
    backgroundColor: Colors.azulClaro,
    borderRadius: 20,
    marginTop: 20,
    marginLeft: 25,
    marginRight: 25,
    height: 100,
   

  },

  textoInformacion: {
    padding: 20,
    justifyContent: "flex-end",
    fontSize: 15,
    fontFamily: "PoppinsRegular",
    color: Colors.negro,
    fontWeight: "regular"
  },
  mapaImage: {
    resizeMode: "contain",
    width: 310,
    height: 250,
  },
  contenedorMapa: {
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  }

});


export default MapaRescate