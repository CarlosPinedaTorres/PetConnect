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
    marginTop: 35,

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
    fontSize: 30,
  },
  textInfo: {
    fontSize: 30,
    fontFamily: "PoppinsRegular",
    fontWeight: "regular",
    paddingLeft: 15
  },

  informacion: {
    backgroundColor: Colors.naranjaClaro,
    margin: 20,
    borderRadius: 50,
    width: 680,
    height: 350,
  },
  titleInfo: {
    fontSize: 30,
    fontFamily: "PoppinsBold",
    alignContent: "center",
    justifyContent: "center",
    color: Colors.colorPrimario
  },
  imageTitleInfo: {
    flexDirection: "row",
    padding: 20
  },
  imageInformacion: {
    width: 100,
    height: 80,
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
    width: 50,
    height: 50,
    marginRight: 5,
  },

  textoMensajes: {
    fontSize: 30,
    color: Colors.colorPrimario,
    fontFamily:"PoppinsBold"
  },
  cajaTemaDiscusion: {
    backgroundColor: Colors.azulClaro,
    height: 170,
    marginTop: 40,
    marginBottom: 10,
    padding: 15,
    position: 'relative',
  },
  textCaja: {
    color: Colors.negro,
    fontFamily: "PoppinsBold",
    padding: 20,
    fontSize: 30,


  },


})

export default ComunidadAnimal