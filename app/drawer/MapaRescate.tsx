import { View, Text,StyleSheet,Image ,TextInput} from 'react-native'
import React from 'react'
import { Colors } from '@/themes/Colors'
import { GlobalStyles } from '@/themes/GlobalStyles'
import { Button } from '@/components/CustomPressable'
const MapaRescate = () => {
  return (
    <View>
     <View style={[styles.containerInformacion]}>
        <Text style={[styles.textoInformacion]}>Indica el punto donde un animal,
           una colonia o una situación
           requiere atención y descríbela para
          que podamos actuar juntos.</Text>


      </View>
    <View style={[styles.contenedorMapa]}>
    <Image
                style={[styles.mapaImage]}
                resizeMode="contain"
                source={require("@/assets/images/mapa.png")}
              /> 
    </View>
    
    <View style={[styles.informacionUbicacion]} >
        <Image 
          style={[styles.locationImage]}
          resizeMode="contain"
          source={require("@/assets/images/location.png")}
        />
          <Text style={[styles.textoInfoUbi]}>La ubicación se añadirá automáticamente {"\n"}cuando se seleccione en el mapa. </Text>

    </View>
    <View style={[styles.contenedorMensaje]}>
      <TextInput
        placeholder="Describe tu problema..."
        multiline={true}
        numberOfLines={4}
         style={[styles.mensajeEnviar]}
      />
      
    </View>
        <View style={[styles.buttonEnviar]}>
        <Button label={"Enviar"} width={120} height={40}/>
        </View>
    

     
      



    </View>
  
  )
}
const styles = StyleSheet.create({
  mensajeEnviar:{
    fontSize:15
  },
  buttonEnviar:{
      alignItems:"center",
      marginTop:15,

  },
  contenedorMensaje:{
      backgroundColor:Colors.azulClaro,
      height:140,
      marginLeft:20,
      marginRight:20,
      marginTop:20,
      borderRadius: 20,
      padding:10,
     
  },
  locationImage:{
    width:60,
    height:60,
  
  },
  textoInfoUbi:{
    fontSize:14,
    fontFamily:"PoppinsBold",
    paddingRight: 30,
    justifyContent:"center",
    alignItems:"center",
    alignContent:"center",
    color:Colors.blanco
  },
  informacionUbicacion:{
    flexDirection: 'row',
  
    backgroundColor: Colors.negro,
    borderRadius: 20,
    alignContent: "center",
    alignItems: "center",
    marginLeft:20,
    marginRight:20,
  },
 
  containerInformacion: {
    backgroundColor: Colors.azulClaro,
    borderRadius: 20,
    marginTop:11,
    marginLeft:20,
    marginRight:20,
    height:120,
    
  },

  textoInformacion:{
    padding: 13,
    justifyContent:"flex-end",
    fontSize:18,
    fontFamily:"PoppinsRegular",
    color:Colors.negro
  },
  mapaImage:{
    resizeMode:"contain",
    width:350,
    height:290,
  },
  contenedorMapa:{
    justifyContent:"center",
    alignItems:"center",
    alignContent:"center",
    marginTop:0
  }

});


export default MapaRescate