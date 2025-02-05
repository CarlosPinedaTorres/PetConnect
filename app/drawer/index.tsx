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
    marginTop: 20,
  },
  imagen_perfil: {
    width: 75,
    height: 75,
    marginLeft: 18,
    position: "absolute",
    marginTop: 20
  },
  texto_nombre: {
    fontFamily: 'PoppinsRegular',
    fontSize: 24,
    textAlign: 'center',
    marginRight: 40,
    marginTop: 20,
    color: Colors.blanco
  },
  texto_correo: {
    fontFamily: 'WendyOne',
    fontSize: 24,
    textAlign: 'center',
    marginTop: -2,
    marginRight: -12,
    color: Colors.blanco
  },
  seccion: {
    color: Colors.naranjaClaro,
    marginLeft: 15,
    marginTop: 12,
    textAlign: 'left',
    fontSize: 24,
    fontFamily: 'PoppinsBold'
  },
  cuadrosContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  cuadroIndividual: {
    width: 100,
    height: 100,
    backgroundColor: Colors.naranjaClaro,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  icono: {
    width: 40,
    height: 40,
    marginBottom: 5,
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
    marginTop:5,
    backgroundColor: Colors.colorPrimario,
  },
  textoProtectoras: {
    fontFamily: 'PoppinsBold',
    fontSize: 18,
    color: Colors.blanco,
    textAlign: 'center',
    marginBottom: 10,
    marginTop: 15,
  },
  imagenesProtectoras: {
    marginTop: -5,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  imagenProtectora: {
    width: 120,
    height: 120,
    borderRadius: 150,
    marginRight: 20,
    marginLeft: 20,
  },
  


})

export default ScreenPrincipal