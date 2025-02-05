import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from '@/themes/Colors';
import { GlobalStyles } from '@/themes/GlobalStyles';
import { Link } from 'expo-router';
const ComunidadAnimal = () => {
  return (
    <View>
      <View style={[styles.informacion]}>
        <View style={[styles.imageTitleInfo]} >

          <Image
            style={[styles.imageInformacion]}
            resizeMode='contain'
            source={require("@/assets/images/calendario.png")}
          />
          <Text style={[styles.titleInfo]}>PATITAS EN MARCHA (eventos)</Text>
        </View>
        <View >
          <Text style={[styles.textInfo]}>
            Descubre eventos solidarios creados por la comunidad.
            Cada participación suma para ayudar a los animales que más lo necesitan. ¡Únete y sé parte del cambio!
          </Text>
        </View>
      </View>

      <View style={[styles.containerTituloDiscusion]}>
        <Text style={[styles.tituloDiscusion]}>TEMAS DE DISCUSIÓN </Text>

      </View>
      <View style={[styles.containerTemas]}>
        <View style={[styles.cajaTemaDiscusion]}>
          <Text style={[styles.textCaja]}>Guías de alimentación B.A.R.F. para tu animal.</Text>
          <View style={styles.mensajesContainer}>
            <Image source={require("@/assets/images/mensaje.png")} style={styles.iconoMensaje} />
            <Text style={styles.textoMensajes}>21</Text>
          </View>
        </View>
        <View style={[styles.cajaTemaDiscusion]}>
          <Text style={[styles.textCaja]}>Consejos para sobrellevar la ola de calor con tu mascota</Text>
          <View style={styles.mensajesContainer}>
            <Image source={require("@/assets/images/mensaje.png")} style={styles.iconoMensaje} />
            <Text style={styles.textoMensajes}>45</Text>
          </View>

        </View>
        <View style={[styles.cajaTemaDiscusion]}>
          <Text style={[styles.textCaja]}>Como empezar a adiestrar a tu mascota</Text>
          <View style={styles.mensajesContainer}>
            <Image source={require("@/assets/images/mensaje.png")} style={styles.iconoMensaje} />
            <Text style={styles.textoMensajes}>45</Text>
          </View>

        </View>
      </View>
      <View style={[styles.buttonEnviar]}>

        <Link href="/drawer/ComunidadAnimal" style={[GlobalStyles.linkButton]}>Nueva</Link>

      </View>


    </View>
  )
}

const styles = StyleSheet.create({
  buttonEnviar: {
    alignItems: "center",

  },
  containerTemas: {
    flexDirection: "column"
  },
  containerTituloDiscusion: {
    paddingLeft: 20,
    paddingTop: 10,
  },
  tituloDiscusion: {
    color: Colors.colorPrimario,
    fontFamily: "PoppinsBold",
    fontSize: 15,
  },
  textInfo: {
    fontSize: 15,
    fontFamily: "PoppinsRegular",
    fontWeight: "regular",
    padding: 15
  },

  informacion: {
    backgroundColor: Colors.naranjaClaro,
    borderRadius: 30,
    margin:20,
    width: 320,
    height: 190,
  },
  titleInfo: {
    fontSize: 15,
    fontFamily: "PoppinsBold",
    alignContent: "center",
    justifyContent: "center",
    color: Colors.colorPrimario,
    paddingTop:5
  },
  imageTitleInfo: {
    flexDirection: "row",
    padding: 10
  },
  imageInformacion: {
    width: 50,
    height: 40,
  },
  textBlue: {
    color: Colors.colorPrimario
  },
  textBlack: {
    color: Colors.negro
  },
  mensajesContainer: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },

  iconoMensaje: {
    width: 25,
    height: 25,
    marginRight: 5,
  },

  textoMensajes: {
    fontSize: 12,
    color: Colors.colorPrimario,
    fontFamily:"PoppinsBold"
  },
  cajaTemaDiscusion: {
    backgroundColor: Colors.azulClaro,
    height: 80,
    marginTop: 10,
    marginBottom: 5,
    position: 'relative',
  },
  textCaja: {
    color: Colors.negro,
    fontFamily: "PoppinsBold",
    padding: 20,
    fontSize: 15,


  },


})

export default ComunidadAnimal