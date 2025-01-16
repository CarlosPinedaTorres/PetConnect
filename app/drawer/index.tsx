import { View, Text, Image } from 'react-native'
import React from 'react'
import { Redirect } from 'expo-router'
import { GlobalStyles } from '@/themes/GlobalStyles'
import { Colors } from "@/themes/Colors";
import { StyleSheet } from "react-native";
import CustomTextInput from "@/components/CustomTextInput";


const ScreenPrincipal = () => {
  return (
    <View style={[GlobalStyles.fondoAzul,{flex:1}]}>
      <View>
        <Image
            style={[styles.imagen_perfil]}
            resizeMode="contain"
            source={require("@/assets/images/perfil_usuario.png")}
          />
        <Text style = {[styles.texto_nombre]}>Sonia M.</Text>
        <Text style = {[styles.texto_correo]}>@soniampets</Text>
      </View>
      <View style={[GlobalStyles.fondoBlanco,styles.aux]}>
        <Text style = {[styles.seccion]} >Secciones</Text>
      </View>
      <View style = {[styles.cuadro,{flexDirection:'row'}]}>

      </View>

    </View>
  )
  
}

const styles=StyleSheet.create({
  aux:{
    marginTop: 40,
  },
  imagen_perfil:{
    width: 80,
    height: 80,
    marginLeft: 18,
    position: "absolute",
    top: 10
  },
  texto_nombre:{
    fontFamily: 'PoppinsRegular',
    fontSize: 26,
    textAlign: 'center',
    marginRight: 60,  
    marginTop: 20,
    color: Colors.blanco
  },
  texto_correo:{
    fontFamily: 'WendyOne',
    fontSize: 16,
    textAlign: 'center',
    marginTop: -3,
    marginRight: 66,
    color: Colors.blanco
  },
  seccion:{
    color: Colors.naranjaClaro,
    textAlign: 'left',
    fontSize: 30,
    fontFamily: 'PoppinsBold'
  },
  cuadro:{
    backgroundColor: Colors.naranjaClaro,
    borderRadius: 30,
  }
  
})

export default ScreenPrincipal