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
      <Text style={[styles.textColor, styles.textMedium, { marginTop: 35 }]}>Registrate en</Text>
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
          <CustomTextInput placeholder="Nombre" value={dataUser.nombre}  onChangeText={(value)=>changeDataUser("nombre",value)} type={"nombre"}  width={320} height={50} />
        </View>
        <View style={[styles.inputText]}>
          <CustomTextInput placeholder="Email"  value={dataUser.email}  onChangeText={(value)=>changeDataUser("email",value)} type={"email"}  width={320} height={50} />
        </View>
        <View style={[styles.inputText]}>
          <CustomTextInput placeholder='Contraseña' value={dataUser.password}  onChangeText={(value)=>changeDataUser("password",value)} type={"password"}   width={320} height={50} />
        </View>
        <View style={[styles.inputText]}>
          <CustomTextInput placeholder='Repetir contraseña' value={dataUser.repeatPassword}  onChangeText={(value)=>changeDataUser("repeatPassword",value)} type={"repeatPassword"}  width={320} height={50} />
        </View>
        <View style={styles.buttonContainer}>
          <Link href="/" style={[GlobalStyles.linkButton, { marginLeft: 10, marginTop: 10 }]}>Registrate</Link>
          <Link href="/" style={[GlobalStyles.linkButton, { marginRight: 10, marginTop: 10 }]}>Cancelar</Link>
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
    fontSize: 20,
    color: Colors.colorPrimario,
    marginTop: 15,
    marginBottom: 25
  },
  animalesRegister: {
    position: "absolute",
    width: 250,
    height: 120,
    left: 50,
    top: 122,
  
  },
  huellaDer: {
    position: "absolute",
    right: 15,
    top: 60

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
  },


  loginText: {
    fontFamily: 'PoppinsBold',
    fontSize: 15,
    textDecorationLine: 'underline',
    color: Colors.blanco,
    marginRight: 10,
    paddingTop: 10


  },
  textCuenta: {
    fontFamily: 'PoppinsRegular',
    fontSize: 15,
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
    height: 390,
  

  },
  textColor: {
    color: Colors.blanco,
    fontFamily: "WendyOne",
    textAlign: "center",

  },
  textMedium: {
    fontSize: 20,
    marginBottom: 10,
    fontFamily: "WendyOne",
    fontWeight: "regular",
    textAlign: "center",
    width: "100%",
  },
  textLarge: {
    fontFamily: "WendyOne",
    fontSize: 35,
    fontWeight: "regular",
    textAlign: "center",
    width: "100%",
  },
  inputText: {
    margin: 5
  },


});
export default register