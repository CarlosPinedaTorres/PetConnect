import { Drawer} from 'expo-router/drawer';
import { Image, View, Text } from "react-native";
const LayoutDrawer = () => {
  return <Drawer > 
<Drawer.Screen
        name="index"
        options={{
          drawerLabel: "Inicio",
          headerTitle: () => (
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={require("@/assets/images/logo.png")} 
                style={{ width: 30, height: 30, marginRight: 10 }}
                resizeMode="contain"
              />
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                PetConnect
              </Text>
            </View>
          ),
          headerTitleAlign: "center", 
          headerStyle: {
            backgroundColor: "#f8f9fa", 
          },
        }}
      />

<Drawer.Screen
   name="MapaRescate"
   options={{
    drawerLabel: "Patitas al rescate",
    headerTitle: () => (
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          source={require("@/assets/images/logo.png")} 
          style={{ width: 30, height: 30, marginRight: 10 }}
          resizeMode="contain"
        />
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          PetConnect
        </Text>
      </View>
    ),
    headerTitleAlign: "center", 
    headerStyle: {
      backgroundColor: "#f8f9fa", 
    },
  }}

/>

  </Drawer>
  
    
  
}

export default LayoutDrawer
