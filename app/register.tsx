import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import CustomTextInput from '@/components/CustomTextInput'
import { Button } from '@/components/CustomPressable'
import { GlobalStyles } from '@/themes/GlobalStyles'
import { Colors } from '@/themes/Colors'
import { Link } from 'expo-router'

const register = () => {
  return (
    <View style={[GlobalStyles.fondoAzul, { flex: 1 }]}>
      <Image
        style={GlobalStyles.logo}
        resizeMode="contain"
        source={require("@/assets/images/logo.png")}
      />
      <Text style={[styles.textColor, styles.textMedium, { marginTop: 55 }]}>Bienvenido a</Text>
      <Text style={[styles.textColor, styles.textLarge, { marginBottom: 140 }]}>PetConnect</Text>
      <Image
        style={[styles.animalesRegister]}
        resizeMode="contain"
        source={require("@/assets/images/animales-register.png")}
      />
      <View style={[styles.containerRegister]}>


        <Image
          style={[GlobalStyles.huellas, styles.huellaIzq]}
          resizeMode="contain"
          source={require("@/assets/images/huellaIzq.png")}
        />




        <Text
          style={[{
            fontFamily: "PoppinsBold",
            fontSize: 30, color: Colors.colorPrimario
          ,marginTop:25,marginBottom:25}]}
          numberOfLines={1}

        >
          ¡Hazte parte del refugio!
        </Text>
        <Image
          style={[GlobalStyles.huellas, styles.huellaDer]}
          resizeMode="contain"
          source={require("@/assets/images/huellaDer.png")}
        />
        <View style={[styles.inputText]}>
          <CustomTextInput placeholder="Nombre" width={340} height={50} />
        </View>
        <View style={[styles.inputText]}>
          <CustomTextInput placeholder="Email" width={340} height={50} />
        </View>
        <View style={[styles.inputText]}>
          <CustomTextInput placeholder='Contraseña' width={340} height={50} />
        </View>
        <View style={[styles.inputText]}>
          <CustomTextInput placeholder='Repetir contraseña' width={340} height={50} />
        </View>
        <View style={styles.buttonContainer}>
          <Button label="Registrate" width={120} height={40} />
          <Link href="/" style={[GlobalStyles.linkButton,{marginRight: 25}]}>Cancelar</Link>
        </View>


      </View>
      <View style={styles.buttonContainer}>
          <Text style={[styles.textCuenta]}> ¿Tienes ya una cuenta?</Text>
          <Link href="/" style={[styles.loginText]}>Accede al refugio</Link>
        </View>


    </View>
  )
}

const styles = StyleSheet.create({
  animalesRegister: {
    position: "absolute",
    width: 200,
    height: 200,
    left:100,
    top:120
  },
  huellaDer: {
    position: "absolute",
    right: 15,
    top: 70

  },
  huellaIzq: {
    position: "absolute",
    left: 15,
    top: 15

  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginLeft: 20,

  },


  loginText: {
    fontFamily: 'PoppinsRegular',
    fontSize: 16,
    textDecorationLine: 'underline',
    color: Colors.blanco,
    marginRight:50,
    paddingTop:10
   

  },
  textCuenta: {
    fontFamily: 'PoppinsRegular',
    fontSize: 16,
    textAlign: 'left',
    color: Colors.blanco,
    paddingTop:10

  },
  imageLogin: {
    width: 500,
    height: 230,
    position: "absolute",
    top: -45

  },
  containerRegister: {
    backgroundColor: Colors.blanco,
    padding: 16,
    borderRadius: 40,
    alignContent: "center",
    alignItems: "center",
    height: 440,

  },
  textColor: {
    color: Colors.blanco,
    fontFamily: "WendyOne",
    textAlign: "center",

  },
  textMedium: {
    fontSize: 30,
    marginBottom: 10,
    fontFamily: "WendyOne",
    fontWeight: "regular",
  },
  textLarge: {
    fontFamily: "WendyOne",
    fontSize: 60,
    fontWeight: "regular",
    marginBottom: 20,
  },
  inputText: {
    margin: 10
  },


});
export default register