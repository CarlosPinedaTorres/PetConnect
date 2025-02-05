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
          style={[{height:15,width:15,marginTop:10}]}
          source={require("@/assets/images/punto.png")}
        />
        <View style={[styles.fila_icono]}>
          <Text style={[styles.nombre_perro,{marginLeft:25}]}>Pluto</Text>
          <Image
            style={[styles.icono, { marginTop: 18, marginRight: 25 }]}
            source={require("@/assets/images/megusta_negro.png")}
          />
        </View>
        <View style={[{ flexDirection: 'row', marginRight: 180, }]}>
          <Image
            style={[{ height: 25, width: 25, marginRight: 5}]}
            source={require("@/assets/images/ubicacion.png")}

          />
          <Text style={[{ fontSize: 15,fontFamily:'PoppinsRegular'}]}>Murcia</Text>
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
        <View style={[styles.cuadrosContainer,{marginTop: 10}]}>
          <Image
            style={[styles.foto_icono, { marginRight: 10 }]}
            source={require("@/assets/images/Eros.png")}
          />
          <Text style={[styles.texto_normal, { fontSize: 15 }]}>Ana{"\n"}PerrosAbandona2</Text>
          <Image
            resizeMode='contain'
            style={[styles.icono_utilidad, { marginTop: 10, marginLeft: 10 }]}
            source={require("@/assets/images/llamar.png")}
          />
          <Image
            resizeMode='contain'
            style={[styles.icono_utilidad, { marginTop: 10, marginLeft: 10 }]}
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
    fontSize:15,
  },
  boton:{
    width:90,
    height:60,
    backgroundColor: Colors.naranjaClaro,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:-5,
  },
  icono:{
    width:30,
    height:30
  },
  container:{
    margin:20,
    backgroundColor:Colors.naranjaClaro,
    borderRadius:20,
    padding:10,
    alignItems:'center',
  },
  titulo:{
    fontSize:20,
    fontFamily:"PoppinsBold",
  },
  texto_normal:{
    fontSize:12,
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
    fontSize:20,
  },
  foto:{
    justifyContent:'center',
    width:250,
    height:200,
    borderRadius:20,
  },
  cuadrosContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
    marginBottom:5,
    justifyContent:'space-between'
  },
  cuadroIndividual: {
    width:85,
    height:80,
    backgroundColor: Colors.blanco,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:5,
    marginHorizontal:6.5,
    
  },
  foto_icono:{
    width:50,
    height:50,
    borderRadius: 50,
  },
  icono_utilidad:{
    height:30,
    width:35,
    backgroundColor:Colors.blanco,
    borderRadius:20,
  },
})

export default Mascota