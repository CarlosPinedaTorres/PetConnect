import React from 'react'
import { View, Text, Image } from 'react-native'
import { GlobalStyles } from '@/themes/GlobalStyles'
import { Colors } from "@/themes/Colors";
import { StyleSheet } from "react-native";
import { TextInput } from 'react-native-gesture-handler';
import { useState } from 'react';
const index = () => {
  const [nameAnimal, setNameAnimal] = useState("")
  const buscarAnimal=(value:string)=>{
      setNameAnimal(value)
  }
  return (
    <View style={[GlobalStyles.fondoBlanco, { flex: 1 }]}>

      <View style={[styles.header]}>
        <View style={[styles.searchContainer]}>
          <TextInput
            placeholderTextColor={Colors.negro}
            placeholder={'Buscar...'}
            value={nameAnimal}
            onChangeText={(value)=>buscarAnimal(value)}
            style={[GlobalStyles.textInput2, { height: 50, width: 140, fontSize: 20 }]}
          />
        </View>
        <Image
          style={[{ position: 'absolute', width: 40, height: 40, left: 280 }]}
          source={require("@/assets/images/lupa2.png")}
        />
      </View>
      <View style={[{ flexDirection: 'row' }]}>
        <Text style={[styles.texto_categoria]}>Categorias</Text>
        <Text style={[styles.texto_vertodo,{marginLeft:170}]}>Ver todo</Text>
      </View>
      <View style={[styles.cuadrosContainer]}>
        <View style={[styles.cuadroIndividual]}>
          <Image
            style={styles.icono}
            source={require("@/assets/images/gatito animado.png")}
          />
          <Text style={styles.textoCuadro}>GATOS</Text>
        </View>
        <View style={[styles.cuadroIndividual]}>
          <Image
            style={styles.icono}
            source={require("@/assets/images/perrito animado.png")}
          />
          <Text style={styles.textoCuadro}>PERROS</Text>
        </View>
        <View style={[styles.cuadroIndividual]}>
          <Image
            style={styles.icono}
            source={require("@/assets/images/conejito animado.png")}
          />
          <Text style={styles.textoCuadro}>CONEJOS</Text>
        </View>
      </View>
      <View style={[styles.animalesContainer]}>
        <View style={[styles.cuadroIndividual2]}>
          <Image
            style={[{ width: 120, height: 90, borderRadius: 15 }]}
            source={require("@/assets/images/Pluto.png")}
          />
          <Text style={[{ fontSize: 17, fontWeight: 'bold', marginRight: 75 }]}>Pluto</Text>
          <Text style={[{ fontSize: 15, marginRight:8}]}>Macho, 1.5 años</Text>
          <Image
            style={[{ marginLeft: 80, width: 19, height: 19,marginTop:2}]}
            source={require("@/assets/images/huella.png")}
          />
        </View>
        <View style={[styles.cuadroIndividual2]}>
          <Image
            style={[{ width: 120, height:90, borderRadius: 15 }]}
            source={require("@/assets/images/Afro y Shaggy.png")}
          />
          <Text style={[{ fontSize: 18, fontWeight: 'bold',marginRight:7 }]}>Afro & Shaggy</Text>
          <Text style={[{ fontSize: 15,marginRight:7}]}>Machos, 3 meses</Text>
          <Image
            style={[{ marginLeft: 80, width: 20, height: 20,marginTop:2}]}
            source={require("@/assets/images/megusta_negro.png")}
          />
        </View>
      </View>
      <View>
        <Image
          style={[styles.imagen_animal]}
          source={require("@/assets/images/perritos y gatitos.png")}
        />
      </View>
      <View style={[styles.footer]}>
        <Text style={[styles.texto_animales, {marginTop:-2,textAlign:'justify'}]}>Adoptar es un compromiso para toda la vida, piensalo bien antes de dar el paso. {'\n'}{'\n'}Si no puedes cuidarlo hoy, mañana y siempre; no adoptes.</Text>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.colorPrimario,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  texto_animales: {
    fontSize: 12,
    color: Colors.blanco,
    fontFamily: 'PoppinsBold',
  },
  texto_categoria: {
    fontFamily: 'PoppinsBold',
    fontSize: 15,
    textAlign: 'left',
    marginLeft: 20,
    marginTop: 12,
    color: Colors.negro,
  },
  texto_vertodo: {
    fontFamily: 'PoppinsBold',
    fontSize: 15,
    textDecorationLine: 'underline',
    marginBottom:10,
    marginTop: 10,
    color: Colors.negro,
    
  },
  searchContainer: {
    width:300,
    height:60,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.blanco,
    borderRadius: 10,
    marginTop: -5,
    padding: 10,
    marginBottom:-5,
  },
  searchInput: {
    flex: 1,
    fontSize: 20,
    color: Colors.negro,
    fontWeight:'bold',
  },
  cuadrosContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  animalesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginTop: 25,
  },
  cuadroIndividual: {
    width: 90,
    height: 90,
    backgroundColor: Colors.naranjaClaro,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: -10,
  },
  cuadroIndividual2: {
    width: 150,
    height: 190,
    backgroundColor: Colors.naranjaClaro,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 3,
  },
  textoCuadro: {
    fontSize: 15,
    fontFamily: 'PoppinsRegular',
    color: Colors.negro,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop:5,
  },
  icono: {
    width: 40,
    height: 40,
  },
  footer: {
    backgroundColor: Colors.colorPrimario,
    padding: 10,
  },
  imagen_animal: {
    marginTop:15,
    width: 360,
    height: 54,
    alignItems:'center'
    
  },
});

export default index