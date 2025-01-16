
import { GlobalStyles } from "@/themes/GlobalStyles";
import { View, Text, Image } from "react-native";
import { Colors } from "@/themes/Colors";
import { StyleSheet } from "react-native";
import CustomTextInput from "@/components/CustomTextInput";
import { Button } from "@/components/CustomPressable";
import { Link } from "expo-router";
export default function Index() {

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
          style={[{
            fontFamily: "PoppinsBold",
            fontSize: 40, color: Colors.colorPrimario, marginTop: 160
          }]}
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
          <CustomTextInput placeholder="Email" width={350} height={50} />
        </View>
        <View style={[styles.inputText]}>
          <CustomTextInput placeholder="Contraseña" width={350} height={50} />
        </View>
        <View style={styles.buttonContainer}>
        <Link href="/drawer" style={[GlobalStyles.linkButton]}>Acceder</Link>

          <Link href="/register" style={[styles.registerText, { marginRight: 25, marginTop: 10 }]}>Registrate</Link>


        </View>


      </View>

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginLeft: 10 }}>
        <Text style={[{ fontFamily: "PoppinsBold", color: Colors.blanco }]}>
          ¿Olvidaste la contraseña?
        </Text>
      </View>




    </View>
  );

}
const styles = StyleSheet.create({
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
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginLeft: 20,

  },


  registerText: {
    fontFamily: 'PoppinsRegular',
    fontSize: 16,
    textAlign: 'right',
    textDecorationLine: 'underline',
    color: Colors.colorPrimario,

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
    alignContent: "center",
    alignItems: "center",
    height: 470,

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

