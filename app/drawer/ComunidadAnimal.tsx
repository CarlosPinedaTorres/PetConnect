import { View, Text,  Image, StyleSheet } from 'react-native'
import React from 'react'
import { Button } from '../../components/CustomPressable';
import { Colors } from '@/themes/Colors';

const ComunidadAnimal = () => {
  return (
    <View>
    <View style={[styles.informacion]}>
      <View style={[styles.imageTitleInfo]} > 
  
      <Image
      style={[styles.imageInformacion]}
        resizeMode='contain'
        source={require("@/assets/images/calendario.png")}
      />
        <Text>tambien  PATITAS EN MARCHA (eventos)</Text>
        </View>
      <View>
        <Text>
        Descubre eventos solidarios creados por la comunidad.
        Cada participación suma para ayudar a los animales que más lo necesitan. ¡Únete y sé parte del cambio!
        </Text>
      </View>
    </View>

    <View style={[{paddingLeft:10,paddingTop:10,paddingBottom:0}]}>
      <Text style={[{color:Colors.colorPrimario,fontFamily:"PoppinsBold"}]}>TEMAS DE DISCUSIÓN </Text>
    </View>
    <View style={[{flexDirection:"column"}]}>
      <View style={[styles.cajaTemaDiscusion]}>
        <Text style={[styles.textCaja]}>Guías de alimentación B.A.R.F. para tu animal.</Text>
      </View>
      <View style={[styles.cajaTemaDiscusion]}>
        <Text style={[styles.textCaja]}>Consejos para sobrellevar la ola de calor con tu mascota</Text>
      </View>
      <View style={[styles.cajaTemaDiscusion]}>
        <Text style={[styles.textCaja]}>Como empezar a adiestrar a tu mascota</Text>
      </View>
    </View>
    <View style={[styles.cajaBoton]}>
      <Button label="Nueva" width={120} height={40} />
    </View>
   
 
    </View>
  )
}

const styles=StyleSheet.create({
  informacion:{
    backgroundColor:Colors.naranjaClaro,
    margin:20,
    borderRadius:25,
    width:350,
    height:150,
  },
  imageTitleInfo:{
    flexDirection:"row"
  },
  imageInformacion:{
    width:50,
    height:50,
  },
  textBlue:{
    color:Colors.colorPrimario
  },
  textBlack:{
    color:Colors.negro
  },
  cajaTemaDiscusion:{
    backgroundColor:Colors.azulClaro,
    height:100,
    marginTop:10,
    marginBottom:10,
  },
  textCaja:{
    color:Colors.negro,
    fontFamily:"PoppinsBold",
    padding:10,
    fontSize:20,


  },
  cajaBoton:{

  }

})

export default ComunidadAnimal