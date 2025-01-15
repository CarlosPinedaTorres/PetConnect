import { View, Text,StyleSheet,Image } from 'react-native'
import React from 'react'
import { Colors } from '@/themes/Colors'
import { GlobalStyles } from '@/themes/GlobalStyles'

const MapaRescate = () => {
  return (
    <View>
     <View style={[styles.containerInformacion]}>
        <Text style={[styles.textoInformacion]}>Indica el punto donde un animal,{"\n"}
           una colonia o una situación{"\n"}
           requiere atención y descríbela para{"\n"}
          que podamos actuar juntos.</Text>


      </View>
    <View style={[styles.contenedorMapa]}>
    <Image
                style={[styles.mapaImage]}
                resizeMode="contain"
                source={require("@/assets/images/mapa.png")}
              /> 
    </View>
    
    <View>
        

    </View>
        


    </View>
  
  )
}
const styles = StyleSheet.create({
  
 
  containerInformacion: {
    backgroundColor: Colors.azulClaro,
    borderRadius: 20,
    alignContent: "center",
    alignItems: "center",
    marginTop:30,
    marginLeft:20,
    marginRight:20,
  },

  textoInformacion:{
    padding: 16,
    justifyContent:"center",
    alignItems:"center",
    alignContent:"center",
    fontSize:20,
    fontFamily:"PoppinsRegular",
  },
  mapaImage:{
    resizeMode:"contain",
    width:350,
    height:310,
  },
  contenedorMapa:{
    justifyContent:"center",
    alignItems:"center",
    alignContent:"center",
  }

});


export default MapaRescate