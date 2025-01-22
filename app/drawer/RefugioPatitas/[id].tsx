import { View, Text, Image } from 'react-native'
import React from 'react'
import { Colors } from "@/themes/Colors";
import { StyleSheet } from "react-native";


const Mascota = () => {
  return (
    <View style={[styles.fondo]}>
      <View style={[styles.container]}>
        <Image
          style={[styles.foto,{marginTop:20}]}
          source={require("@/assets/images/Pluto.png")}
        />
        <Image
          style={[{height:25,width:25,marginTop:20}]}
          source={require("@/assets/images/punto.png")}
        />
        <View style={[styles.fila_icono]}>
          <Text style={[styles.nombre_perro,{marginLeft:38}]}>Pluto</Text>
          <Image
            style={[styles.icono, { marginTop: 38, marginRight: 20 }]}
            source={require("@/assets/images/megusta_negro.png")}
          />
        </View>
        <View style={[{ flexDirection: 'row', marginRight: 310, }]}>
          <Image
            style={[{ height: 55, width: 47, marginRight: 10 }]}
            source={require("@/assets/images/ubicacion.png")}

          />
          <Text style={[{ fontSize: 35,fontFamily:'PoppinsRegular'}]}>Murcia</Text>
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
        <View style={[styles.cuadrosContainer,{marginTop: 40}]}>
          <Image
            style={[styles.foto_icono, { marginRight: 10 }]}
            source={require("@/assets/images/Eros.png")}
          />
          <Text style={[styles.texto_normal, { fontSize: 30 }]}>Ana{"\n"}PerrosAbandona2</Text>
          <Image
            resizeMode='contain'
            style={[styles.icono_utilidad, { marginTop: 30, marginLeft: 10 }]}
            source={require("@/assets/images/llamar.png")}
          />
          <Image
            resizeMode='contain'
            style={[styles.icono_utilidad, { marginTop: 30, marginLeft: 10 }]}
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
    flex:1,
    backgroundColor: Colors.blanco,
    alignItems: 'center',
  },
  texto_boton:{
    fontFamily:"PoppinsBold",
    fontSize:35,
  },
  boton:{
    width:380,
    height:100,
    backgroundColor: Colors.naranjaClaro,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:50,
  },
  icono:{
    width:60,
    height:60
  },
  container:{
    backgroundColor:Colors.naranjaClaro,
    margin:20,
    borderRadius:20,
    padding:15,
    alignItems:'center',
  },
  titulo:{
    fontSize:30,
    fontFamily:"PoppinsBold",
  },
  texto_normal:{
    fontSize:25,
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
    fontSize:50,
    marginTop:15,
  },
  foto:{
    justifyContent:'center',
    width:500,
    height:420,
    borderRadius:20,
  },
  cuadrosContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 40,
    marginBottom:20,
    justifyContent:'space-between'
  },
  cuadroIndividual: {
    width:170,
    height:150,
    backgroundColor: Colors.blanco,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:20,
    marginHorizontal:6.5,
    
  },
  foto_icono:{
    width:100,
    height:100,
    borderRadius: 50,
  },
  icono_utilidad:{
    height:60,
    width:65,
    backgroundColor:Colors.blanco,
    borderRadius:20,
  },
})

export default Mascota