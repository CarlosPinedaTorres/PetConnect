import { View, Text, Image,StyleSheet } from "react-native";
import { Link } from "expo-router";
import React from "react";
import { Colors } from "@/themes/Colors";
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { GlobalStyles } from "@/themes/GlobalStyles";

const CustomDrawer = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView {...props}>
   
        <View style={[styles.perfilContain]}>
          <Image
            style={[styles.imagen_perfil]}
            resizeMode="contain"
            source={require("@/assets/images/Eros-circle.png")}
          />
          <Text style={[styles.texto_nombre]}>Sonia M.</Text>
          <Text style={[styles.texto_correo]}>@soniampets</Text>
        </View>
        {/* Esto sirve para colocar los Drawer Screens */}
        <DrawerItemList {...props} />
        <View style={{ padding: 10 }}>
          <Link href={"/"} style={{ color: "blue" }}>
            Atras
          </Link>
        </View>
   
    </DrawerContentScrollView>
  );
};

const styles=StyleSheet.create({
    perfilContain:{
         marginBottom: 60 ,
         backgroundColor:Colors.colorPrimario,
         height:150,
         borderRadius:25
    },
    drawerContainer:{
        backgroundColor:Colors.colorPrimario
    },
     imagen_perfil: {
        width: 100,
        height: 100,
        marginLeft: 18,
        position: "absolute",
        top: 10
      },
      texto_nombre: {
        fontFamily: 'PoppinsRegular',
        fontSize: 36,
        textAlign: 'center',
        marginLeft: 80,
        marginTop: 20,
        color: Colors.blanco
      },
      texto_correo: {
        fontFamily: 'WendyOne',
        fontSize: 26,
        textAlign: 'center',
        marginTop: -3,
        marginLeft:80,
        color: Colors.blanco
      },
})
export default CustomDrawer;
