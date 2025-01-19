import { View, Text, Image } from 'react-native'
import React from 'react'
import { Redirect } from 'expo-router'
import { GlobalStyles } from '@/themes/GlobalStyles'
import { Colors } from "@/themes/Colors";
import { StyleSheet } from "react-native";


const Mascota = () => {
  return (
    <View style={[styles.fondo]}>
      <View style={[styles.container]}>
        <Image
          style={[styles.foto]}
          source={require("@/assets/images/Pluto.png")}
        />
        <Image
          style={[{height:15,width:15,marginTop:10}]}
          source={require("@/assets/images/punto.png")}
        />
        <View style={[styles.fila_icono]}>
          <Text style={[styles.nombre_perro,{marginLeft:18}]}>Pluto</Text>
          <Image
            style={[styles.icono, { marginTop: 18, marginRight: 20 }]}
            source={require("@/assets/images/megusta_negro.png")}
          />
        </View>
        <View style={[{ flexDirection: 'row', marginRight: 212 }]}>
          <Image
            style={[{ height: 35, width: 27, marginRight: 10 }]}
            source={require("@/assets/images/ubicacion.png")}

          />
          <Text style={[{ fontSize: 20,fontFamily:'PoppinsRegular'}]}>Murcia</Text>
        </View>
        <View style={[styles.cuadrosContainer]}>
          <View style={[styles.cuadroIndividual]}>
            <Text style={[styles.titulo]}>Sexo</Text>
            <Text style={[styles.texto_normal]}>Macho</Text>
          </View>
          <View style={[styles.cuadroIndividual]}>
            <Text style={[styles.titulo]}>Edad</Text>
            <Text style={[styles.texto_normal]}>1.5 años</Text>
          </View>
          <View style={[styles.cuadroIndividual]}>
            <Text style={[styles.titulo]}>Tipo</Text>
            <Text style={[styles.texto_normal]}>Bodeguero</Text>
          </View>
        </View>
        <View style={[styles.cuadrosContainer]}>
          <Image
            style={[styles.foto_icono, { marginRight: 10 }]}
            source={require("@/assets/images/Eros.png")}
          />
          <Text style={[styles.texto_normal, { fontSize: 17 }]}>Ana{"\n"}PerrosAbandona2</Text>
          <Image
            resizeMode='contain'
            style={[styles.icono_utilidad, { marginTop: 15, marginLeft: 10 }]}
            source={require("@/assets/images/llamar.png")}
          />
          <Image
            resizeMode='contain'
            style={[styles.icono_utilidad, { marginTop: 15, marginLeft: 10 }]}
            source={require("@/assets/images/mensajes.png")}
          />

        </View>
      </View>
      <View style={[styles.boton]}>
        <Text style={[styles.texto_boton]}>ADÓPTAME</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  fondo:{
    backgroundColor: Colors.blanco,
    alignItems: 'center',
  },
  texto_boton:{
    fontFamily:"PoppinsBold",
    fontSize:25,
  },
  boton:{
    width:180,
    height:60,
    backgroundColor: Colors.naranjaClaro,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:10,
  },
  icono:{
    width:40,
    height:40
  },
  container:{
    backgroundColor:Colors.naranjaClaro,
    margin:20,
    borderRadius:20,
    padding:15,
    alignItems:'center',
  },
  titulo:{
    fontSize:18,
    fontFamily:"PoppinsBold",
  },
  texto_normal:{
    fontSize:15,
    fontFamily:"PoppinsBold",
  },
  fila_icono:{
    flexDirection: 'row',
    alignItems: 'center', 
    justifyContent: 'space-between', 
    width: '100%',
  },
  nombre_perro:{
    fontFamily:"PoppinsBold",
    fontSize:27,
    marginTop:15,
  },
  foto:{
    justifyContent:'center',
    width:300,
    height:240,
    borderRadius:20,
  },
  cuadrosContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
    marginBottom:20,
    justifyContent:'space-between'
  },
  cuadroIndividual: {
    width:100,
    height:90,
    backgroundColor: Colors.blanco,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:20,
    marginHorizontal:6.5,
    
  },
  foto_icono:{
    width:50,
    height:50,
    borderRadius: 50,
  },
  icono_utilidad:{
    height:40,
    width:45,
    backgroundColor:Colors.blanco,
    borderRadius:20,
  },
})

export default Mascota