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
        marginTop: 30
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
          height: 120,

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
          height: 120,
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
          height: 120,
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
          height: 120,
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
          height: 120,
        },
      }}
    />



  </Drawer>



}

const styles = StyleSheet.create({

  inconMenu: {
    paddingLeft: 25,
    transform: [{ scale: 1.5 }],
  },

  logoDrawerMain: {
    width: 50,
    height: 50,
    position: "absolute",
    right: -135,
  },


  logoDrawerPatitas: {
    width: 50,
    height: 50,
    position: "absolute",
    right: -75,
  },

  logoDrawerPerros: {
    width: 50,
    height: 50,
    position: "absolute",
    right: -170,
  },

})
export default LayoutDrawer
