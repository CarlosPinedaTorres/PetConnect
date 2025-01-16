import { Colors } from '@/themes/Colors';
import { GlobalStyles } from '@/themes/GlobalStyles';
import { Drawer} from 'expo-router/drawer';
import { Image, View, Text,StyleSheet } from "react-native";
const LayoutDrawer = () => {
  return <Drawer > 
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
      backgroundColor:Colors.colorPrimario,
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
      backgroundColor:Colors.colorPrimario,
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
      backgroundColor:Colors.colorPrimario,
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
      backgroundColor:Colors.colorPrimario,
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
      backgroundColor:Colors.colorPrimario,
    },
  }}
/>
  
  </Drawer>
  
    
  
}

const styles=StyleSheet.create({

  logoDrawerMain: {
    width: 50,
    height: 50,
    position: "absolute",
    right: -95, 
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
  right: -130, 
},

})
export default LayoutDrawer
