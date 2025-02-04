
import { GlobalStyles } from "@/themes/GlobalStyles";
import { useState } from "react";
import { View, Text, Image } from "react-native";
import { Colors } from "@/themes/Colors";
import { StyleSheet } from "react-native";
import CustomTextInput from "@/components/CustomTextInput";
import { Button } from "@/components/CustomPressable";
import { Link } from "expo-router";
export default function index() {

    const [dataUser, setdataUser] = useState({
      email:"",
      password:""
    })

    const userDataChange=(dato:"email"| "password",value:string)=>{
        setdataUser((prevState)=>({
          ...prevState,
          [dato]:value,
        }))
    }

  return (
    <View style={[GlobalStyles.fondoAzul, { flex: 1 }]}>
      <Image
        style={GlobalStyles.logoLogin}
        resizeMode="contain"
        source={require("@/assets/images/logo.png")}
      />
      <Text style={[styles.textColor, styles.textMedium, { marginTop: 55 }]}>Bienvenido a</Text>
      <Text style={[styles.textColor, styles.textLarge, { marginBottom: 50 }]}>PetConnect</Text>
      <View style={[styles.containerLogin]}>

        <Image
          style={[styles.imageLogin]}
          resizeMode="contain"
          source={require("@/assets/images/animalesLogin.png")}
        />

        <Image
          style={[GlobalStyles.huellas, styles.huellaIzq]}
          resizeMode="contain"
          source={require("@/assets/images/huellaIzq.png")}
        />




        <Text
          style={[styles.tituloLogin]}
          numberOfLines={1}

        >
          Accede al refugio
        </Text>
        <Image
          style={[GlobalStyles.huellas, styles.huellaDer]}
          resizeMode="contain"
          source={require("@/assets/images/huellaDer.png")}
        />
        <View style={[styles.inputText, { marginTop: 30 }]}>
          <CustomTextInput placeholder="Email" type="email" onChangeText={(value) => userDataChange("email", value)} value={dataUser.email} width={350} height={50} />
        </View>
        <View style={[styles.inputText]}>
          <CustomTextInput placeholder="Contraseña" type="password"  value={dataUser.password}  onChangeText={(value)=>userDataChange("password",value)} width={350} height={50} />
        </View>
        <View style={styles.buttonContainer}>
          <Link href="/drawer" style={[GlobalStyles.linkButton, { marginTop: 15,marginLeft:40 }]}>Acceder</Link>

          <Link href="/register" style={[styles.registerText, { marginRight: 65, marginTop: 15 }]}>Registrate</Link>


        </View>


      </View>

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={[styles.forgetPassword]}>
          ¿Olvidaste la contraseña?
        </Text>
      </View>




    </View>
  );

}
const styles = StyleSheet.create({
  forgetPassword: {
    fontFamily: "PoppinsBold",
    color: Colors.blanco,
    fontSize: 20,
    textDecorationLine: 'underline',
  }
  ,

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginLeft: 20,

  },


  registerText: {
    fontFamily: 'PoppinsRegular',
    fontWeight: "regular",
    fontSize: 16,
    textAlign: 'right',
    textDecorationLine: 'underline',
    color: Colors.colorPrimario,
    paddingTop:5

  },
  imageLogin: {
    width: 500,
    height: 230,
    position: "absolute",
    top: -45

  },
  containerLogin: {
    backgroundColor: Colors.blanco,
    padding: 16,
    borderRadius: 40,
    alignItems: "center",
    width: "100%",
    maxWidth: 720,
    height: 490,

  },
  tituloLogin: {
    fontFamily: "PoppinsBold",
    fontSize: 40,
    color: Colors.colorPrimario,
    marginTop: 160,
    width: "100%",
    textAlign: "center",

  },
  huellaDer: {
    position: "absolute",
    right: 15,
    top: 210

  },
  huellaIzq: {
    position: "absolute",
    left: 15,
    top: 150

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
    textAlign: "center",
    width: "100%",
  },
  textLarge: {
    fontFamily: "WendyOne",
    fontSize: 60,
    fontWeight: "regular",
    marginBottom: 20,
    textAlign: "center",
    width: "100%",
  },
  inputText: {
    margin: 10
  },


});

