import { Colors } from '@/themes/Colors';
import { GlobalStyles } from '@/themes/GlobalStyles';
import { Drawer } from 'expo-router/drawer';
import { Image, View, Text, StyleSheet } from "react-native";

import CustomDrawer from '@/components/CustomDrawer';
import React from 'react';
import { DrawerToggleButton } from '@react-navigation/drawer';
const LayoutDrawer = () => {
  return <Drawer
    drawerContent={CustomDrawer}

    screenOptions={{
      overlayColor: 'rgba(0,0,0,0.4)',
      drawerInactiveTintColor: Colors.negro,
      drawerActiveBackgroundColor: Colors.blanco,
      drawerActiveTintColor: Colors.negro,
      drawerItemStyle: {
        borderRadius: 10,
        backgroundColor: Colors.blanco,
        marginTop: 20
      },
      drawerStyle: {
        backgroundColor: Colors.colorPrimario
      },
      drawerLabelStyle: {
        fontFamily: "PoppinsBold",
        fontSize: 15
      },
      headerLeft: (_props) => (
        <View style={[styles.inconMenu]}>
          <DrawerToggleButton tintColor={Colors.blanco} />
        </View>
      ),

    }}>
    <Drawer.Screen
      name="index"
      options={{
        drawerLabel: "PetConnect",
        headerTitle: () => (
          <View style={[GlobalStyles.drawer]}>
            <Text style={[GlobalStyles.drawerTitle]}>PETCONNECT</Text>

            <Image
              source={require("@/assets/images/logo.png")}
              style={[styles.logoDrawerMain]}
              resizeMode="contain"
            />

          </View>
        ),

        headerTintColor: Colors.blanco,
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: Colors.colorPrimario,
          height: 70,

        },

      }}
    />





    <Drawer.Screen
      name="MapaRescate"
      options={{
        drawerLabel: "Patitas al rescate",
        headerTitle: () => (
          <View style={[GlobalStyles.drawer]}>
            <Text style={[GlobalStyles.drawerTitle]}>PATITAS AL RESCATE</Text>

            <Image
              source={require("@/assets/images/logo.png")}
              style={[styles.logoDrawerPatitas]}
              resizeMode="contain"
            />

          </View>
        ),
        headerTintColor: Colors.blanco,
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: Colors.colorPrimario,
          height: 70,
        },
      }}
    />


    <Drawer.Screen
      name="ComunidadAnimal"
      options={{
        drawerLabel: "Comunidad Animal",
        headerTitle: () => (
          <View style={[GlobalStyles.drawer]}>
            <Text style={[GlobalStyles.drawerTitle]}>COMUNIDAD ANIMAL</Text>

            <Image
              source={require("@/assets/images/logo.png")}
              style={[styles.logoDrawerPatitas]}
              resizeMode="contain"
            />

          </View>
        ),
        headerTintColor: Colors.blanco,
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: Colors.colorPrimario,
          height: 70,
        },
      }}
    />

    <Drawer.Screen
      name="RefugioPatitas/index"
      options={{
        drawerLabel: "Refugio de patitas",
        headerTitle: () => (
          <View style={[GlobalStyles.drawer]}>
            <Text style={[GlobalStyles.drawerTitle]}>REFUGIO DE PATITAS</Text>

            <Image
              source={require("@/assets/images/logo.png")}
              style={[styles.logoDrawerPatitas]}
              resizeMode="contain"
            />

          </View>
        ),
        headerTintColor: Colors.blanco,
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: Colors.colorPrimario,
          height: 70,
        },
      }}
    />


    <Drawer.Screen
      name="RefugioPatitas/[id]"
      options={{
        drawerLabel: "Perros",
        headerTitle: () => (
          <View style={[GlobalStyles.drawer]}>
            <Text style={[GlobalStyles.drawerTitle]}>PERROS</Text>

            <Image
              source={require("@/assets/images/logo.png")}
              style={[styles.logoDrawerPerros]}
              resizeMode="contain"
            />

          </View>
        ),
        headerTintColor: Colors.blanco,
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: Colors.colorPrimario,
          height: 70,
        },
      }}
    />



  </Drawer>



}

const styles = StyleSheet.create({

  inconMenu: {
    paddingLeft: 5,
    transform: [{ scale: 1.5 }],
  },

  logoDrawerMain: {
    width: 40,
    height: 40,
    position: "absolute",
    right: -90,
  },


  logoDrawerPatitas: {
    width: 40,
    height: 40,
    position: "absolute",
    right: -60,
  },

  logoDrawerPerros: {
    width: 40,
    height: 40,
    position: "absolute",
    right: -120,
  },

})
export default LayoutDrawer
