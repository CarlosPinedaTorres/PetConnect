import { View, Text, Image } from 'react-native'
import React from 'react'
import { GlobalStyles } from '@/themes/GlobalStyles'
import { Colors } from "@/themes/Colors";
import { StyleSheet } from "react-native";

const ScreenPrincipal = () => {
  return (
    <View style={[GlobalStyles.fondoAzul, { flex: 1 }]}>
      <View>
        <Image
          style={[styles.imagen_perfil]}
          resizeMode="contain"
          source={require("@/assets/images/perfil_usuario.png")}
        />
        <Text style={[styles.texto_nombre]}>Sonia M.</Text>
        <Text style={[styles.texto_correo]}>@soniampets</Text>
      </View>
      <View style={[GlobalStyles.fondoBlanco, styles.aux]}>
        <Text style={[styles.seccion]} >Secciones</Text>
        <View style={styles.cuadrosContainer}>
          <View style={styles.cuadroIndividual}>
            <Image
              style={styles.icono}
              source={require("@/assets/images/huella patitas al rescate.png")}
            />
            <Text style={styles.textoCuadro}>Patitas al rescate</Text>
          </View>
          <View style={styles.cuadroIndividual}>
            <Image
              style={styles.icono}
              source={require("@/assets/images/huellitas patas en marcha.png")}
            />
            <Text style={styles.textoCuadro}>Patitas en marcha</Text>
          </View>
          <View style={styles.cuadroIndividual}>
            <Image
              style={[styles.icono]}
              source={require("@/assets/images/adopt me.png")}
            />
            <Text style={styles.textoCuadro}>Refugio de patitas</Text>
          </View>
          <View style={styles.cuadroIndividual}>
            <Image
              style={styles.icono}
              source={require("@/assets/images/manos agarrando huellita.png")}
            />
            <Text style={styles.textoCuadro}>Comunidad Animal</Text>
          </View>
          <View style={styles.cuadroIndividual}>
            <Image
              style={styles.icono}
              source={require("@/assets/images/lupa.png")}
            />
            <Text style={styles.textoCuadro}>Sobre Petconnect</Text>
          </View>
        </View>
        <View style={styles.protectorasContainer}>
          <Text style={styles.textoProtectoras}>PROTECTORAS EN COLABORACIÓN</Text>
          <View style={styles.imagenesProtectoras}>
            <Image
              style={styles.imagenProtectora}
              source={require("@/assets/images/logo protectora 1.png")} 
            />
            <Image
              style={styles.imagenProtectora}
              source={require("@/assets/images/logo protectora 2.png")} 
            />
          </View>
        </View>

      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  aux: {
    marginTop: 60,
  },
  imagen_perfil: {
    width: 120,
    height: 120,
    marginLeft: 18,
    position: "absolute",
    marginTop: 30
  },
  texto_nombre: {
    fontFamily: 'PoppinsRegular',
    fontSize: 48,
    textAlign: 'center',
    marginRight: 160,
    marginTop: 30,
    color: Colors.blanco
  },
  texto_correo: {
    fontFamily: 'WendyOne',
    fontSize: 30,
    textAlign: 'center',
    marginTop: -2,
    marginRight: 160,
    color: Colors.blanco
  },
  seccion: {
    color: Colors.naranjaClaro,
    marginLeft: 25,
    marginTop: 22,
    textAlign: 'left',
    fontSize: 55,
    fontFamily: 'PoppinsBold'
  },
  cuadrosContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginTop: 25,
  },
  cuadroIndividual: {
    width: 220,
    height: 220,
    backgroundColor: Colors.naranjaClaro,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  icono: {
    width: 95,
    height: 95,
    marginBottom: 15,
  },
  textoCuadro: {
    fontSize: 27,
    fontFamily: 'PoppinsRegular',
    color: Colors.negro,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  protectorasContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginTop:20,
    backgroundColor: Colors.colorPrimario,
  },
  textoProtectoras: {
    fontFamily: 'PoppinsBold',
    fontSize: 40,
    color: Colors.blanco,
    textAlign: 'center',
    marginBottom: 10,
    marginTop: 25,
  },
  imagenesProtectoras: {
    marginTop: 35,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  imagenProtectora: {
    width: 300,
    height: 300,
    borderRadius: 150,
    marginRight: 20,
    marginLeft: 20,
  },
  


})

export default ScreenPrincipal