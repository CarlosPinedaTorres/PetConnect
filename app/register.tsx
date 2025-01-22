import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import CustomTextInput from '@/components/CustomTextInput'
import { Button } from '@/components/CustomPressable'
import { GlobalStyles } from '@/themes/GlobalStyles'
import { Colors } from '@/themes/Colors'
import { Link } from 'expo-router'
import { useState } from 'react'

const register = () => {
  const [dataUser, setdataUser] = useState({
    nombre:"",
    email:"",
    password:"",
    repeatPassword:"",
  })

  const changeDataUser=(dato:"nombre"|"email"|"password"|"repeatPassword",value:string)=>{
    setdataUser((prevState)=>({
      ...prevState,
      [dato]:value
    }))
  }

  return (
    <View style={[GlobalStyles.fondoAzul, { flex: 1 }]}>
      <Image
        style={GlobalStyles.logoLogin}
        resizeMode="contain"
        source={require("@/assets/images/logo.png")}
      />
      <Text style={[styles.textColor, styles.textMedium, { marginTop: 120 }]}>Bienvenido a</Text>
      <Text style={[styles.textColor, styles.textLarge, { marginBottom: 100 }]}>PetConnect</Text>
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
          style={[
            styles.titulo
          ]}
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
          <CustomTextInput placeholder="Nombre" value={dataUser.nombre}  onChangeText={(value)=>changeDataUser("nombre",value)} type={"nombre"}  width={650} height={100} />
        </View>
        <View style={[styles.inputText]}>
          <CustomTextInput placeholder="Email"  value={dataUser.email}  onChangeText={(value)=>changeDataUser("email",value)} type={"email"}  width={650} height={100} />
        </View>
        <View style={[styles.inputText]}>
          <CustomTextInput placeholder='Contraseña' value={dataUser.password}  onChangeText={(value)=>changeDataUser("password",value)} type={"password"}   width={650} height={100} />
        </View>
        <View style={[styles.inputText]}>
          <CustomTextInput placeholder='Repetir contraseña' value={dataUser.repeatPassword}  onChangeText={(value)=>changeDataUser("repeatPassword",value)} type={"repeatPassword"}  width={650} height={100} />
        </View>
        <View style={styles.buttonContainer}>
          <Link href="/" style={[GlobalStyles.linkButton, { marginRight: 25, marginTop: 25 }]}>Registrate</Link>
          <Link href="/" style={[GlobalStyles.linkButton, { marginRight: 35, marginTop: 25 }]}>Cancelar</Link>
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

  titulo: {
    fontFamily: "PoppinsBold",
    fontSize: 50,
    color: Colors.colorPrimario,
    marginTop: 45,
    marginBottom: 55
  },
  animalesRegister: {
    position: "absolute",
    width: 350,
    height: 270,
    left: 190,
    top: 147,
    marginTop: 100
  },
  huellaDer: {
    position: "absolute",
    right: 15,
    top: 120

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
    marginLeft: 35,


  },


  loginText: {
    fontFamily: 'PoppinsBold',
    fontSize: 30,
    textDecorationLine: 'underline',
    color: Colors.blanco,
    marginRight: 50,
    paddingTop: 10


  },
  textCuenta: {
    fontFamily: 'PoppinsRegular',
    fontSize: 30,
    textAlign: 'left',
    color: Colors.blanco,
    paddingTop: 10

  },
  containerRegister: {
    backgroundColor: Colors.blanco,
    padding: 16,
    borderRadius: 40,
    alignItems: "center",
    width: "100%",
    maxWidth: 720,
    height: 850,
    marginTop: 100

  },
  textColor: {
    color: Colors.blanco,
    fontFamily: "WendyOne",
    textAlign: "center",

  },
  textMedium: {
    fontSize: 50,
    marginBottom: 10,
    fontFamily: "WendyOne",
    fontWeight: "regular",
    textAlign: "center",
    width: "100%",
  },
  textLarge: {
    fontFamily: "WendyOne",
    fontSize: 100,
    fontWeight: "regular",
    marginBottom: 20,
    textAlign: "center",
    width: "100%",
  },
  inputText: {
    margin: 10
  },


});
export default register