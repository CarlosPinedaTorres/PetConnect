import { View, Text, Image } from 'react-native'
import React from 'react'
import { Redirect } from 'expo-router'
import { GlobalStyles } from '@/themes/GlobalStyles'
import { Colors } from "@/themes/Colors";
import { StyleSheet } from "react-native";
import CustomTextInput from "@/components/CustomTextInput";


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
              style={styles.icono}
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
    marginTop: 40,
  },
  imagen_perfil: {
    width: 80,
    height: 80,
    marginLeft: 18,
    position: "absolute",
    top: 10
  },
  texto_nombre: {
    fontFamily: 'PoppinsRegular',
    fontSize: 26,
    textAlign: 'center',
    marginRight: 60,
    marginTop: 20,
    color: Colors.blanco
  },
  texto_correo: {
    fontFamily: 'WendyOne',
    fontSize: 16,
    textAlign: 'center',
    marginTop: -3,
    marginRight: 66,
    color: Colors.blanco
  },
  seccion: {
    color: Colors.naranjaClaro,
    marginLeft: 15,
    marginTop: 10,
    textAlign: 'left',
    fontSize: 30,
    fontFamily: 'PoppinsBold'
  },
  cuadrosContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  cuadroIndividual: {
    width: 120,
    height: 120,
    backgroundColor: Colors.naranjaClaro,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  icono: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  textoCuadro: {
    fontSize: 15,
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
    fontSize: 22,
    color: Colors.blanco,
    textAlign: 'center',
    marginBottom: 10,
    marginTop: 15,
  },
  imagenesProtectoras: {
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  imagenProtectora: {
    width: 165,
    height: 165,
    borderRadius: 150,
    marginRight: 20,
    marginLeft: 20,
  },
  


})

export default ScreenPrincipal