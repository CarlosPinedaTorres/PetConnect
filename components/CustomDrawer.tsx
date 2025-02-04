import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import React from "react";
import { Colors } from "@/themes/Colors";
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

import { useRouter } from "expo-router";
const CustomDrawer = (props: DrawerContentComponentProps) => {
  const router = useRouter();

  const logout = () => {
    router.push("/");
  };
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={[styles.drawerContainer]}>

      <View style={[styles.perfilContain]}>
        <Image
          style={[styles.imagen_perfil]}
          resizeMode="contain"
          source={require("@/assets/images/Eros-circle.png")}
        />
        <Text style={[styles.texto_nombre]}>Sonia M.</Text>
        <Text style={[styles.texto_correo]}>@soniampets</Text>
      </View>
      {/* Esto sirve para colocar debajo de los Drawer Screens */}
      <DrawerItemList {...props} />
      <View style={[styles.botonLogout]}>
        <TouchableOpacity onPress={logout} style={[styles.linkStyle]}>
          <Text style={[styles.textLinkStyle]}>Logout</Text>
          <Image
            style={[styles.iconLogout]}
            resizeMode="contain"
            source={require("@/assets/images/logout.png")}
          />

        </TouchableOpacity>
      </View>

    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  textLinkStyle: {
    fontFamily: "PoppinsBold",
    fontSize: 15
  },

  linkStyle: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  iconLogout: {
    marginTop: 5,
    width: 20,
    height: 20,
    marginLeft: 20,
  },
  botonLogout: {
    alignContent: "center",
    alignItems: "center",
    backgroundColor: Colors.blanco,
    padding: 10,
    flexDirection: "row",
    justifyContent: "flex-start",
    height: 55,
    borderRadius: 15,
    position: "absolute",
    bottom: 30,
    marginLeft:10


  },
  perfilContain: {
    marginBottom: 30,
    marginTop: 30,
    backgroundColor: Colors.blanco,
    height: 100,
    borderRadius: 25
  },
  drawerContainer: {
    flex: 1,
    backgroundColor: Colors.colorPrimario
  },
  imagen_perfil: {
    width: 80,
    height: 70,
    marginLeft: 18,
    position: "absolute",
    top: 15
  },
  texto_nombre: {
    fontFamily: 'PoppinsRegular',
    fontSize: 26,
    textAlign: 'center',
    marginLeft: 10,
    marginTop: 20,
    color: Colors.negro
  },
  texto_correo: {
    fontFamily: 'WendyOne',
    fontSize: 15,
    textAlign: 'center',
    marginTop: -3,
    marginLeft: 10,
    color: Colors.negro
  },
})
export default CustomDrawer;
