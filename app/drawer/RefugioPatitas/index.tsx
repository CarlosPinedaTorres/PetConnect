import React from 'react'
import { View, Text, Image } from 'react-native'
import { GlobalStyles } from '@/themes/GlobalStyles'
import { Colors } from "@/themes/Colors";
import { StyleSheet } from "react-native";
import { TextInput } from 'react-native-gesture-handler';

const index = () => {
  return (
    <View style={[GlobalStyles.fondoBlanco, { flex: 1 }]}>

      <View style={[styles.header]}>
        <View style={[styles.searchContainer]}>
          <TextInput
            placeholderTextColor={Colors.negro}
            placeholder={'Buscar...'}
            value={''}
            style={[GlobalStyles.textInput2, { height: 60, width: 340, fontSize: 30 }]}
          />
        </View>
        <Image
          style={[{ position: 'absolute', width: 60, height: 60, left: 560 }]}
          source={require("@/assets/images/lupa2.png")}
        />
      </View>
      <View style={[{ flexDirection: 'row' }]}>
        <Text style={[styles.texto_categoria]}>Categorias</Text>
        <Text style={[styles.texto_vertodo,{marginLeft:370}]}>Ver todo</Text>
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
            style={[{ width: 220, height: 180, borderRadius: 15 }]}
            source={require("@/assets/images/Pluto.png")}
          />
          <Text style={[{ fontSize: 30, fontWeight: 'bold', marginRight: 138 }]}>Pluto</Text>
          <Text style={[{ fontSize: 26, marginRight:30}]}>Macho, 1.5 años</Text>
          <Image
            style={[{ marginLeft: 180, width: 35, height: 35,marginTop:28}]}
            source={require("@/assets/images/huella.png")}
          />
        </View>
        <View style={[styles.cuadroIndividual2]}>
          <Image
            style={[{ width: 220, height:185, borderRadius: 15 }]}
            source={require("@/assets/images/Afro y Shaggy.png")}
          />
          <Text style={[{ fontSize: 30, fontWeight: 'bold',marginRight:8 }]}>Afro & Shaggy</Text>
          <Text style={[{ fontSize: 26,marginRight:20}]}>Machos, 3 meses</Text>
          <Image
            style={[{ marginLeft: 180, width: 52, height: 52,marginTop:15}]}
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
        <Text style={[styles.texto_animales, {margin: -50,marginTop:-70,textAlign:'justify'}]}>Adoptar es un compromiso para toda la vida, piensalo bien antes de dar el paso. {'\n'}{'\n'}Si no puedes cuidarlo hoy, mañana y siempre; no adoptes.</Text>
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
    fontSize: 30,
    color: Colors.blanco,
    fontFamily: 'PoppinsBold',
  },
  texto_categoria: {
    fontFamily: 'PoppinsRegular',
    fontSize: 28,
    textAlign: 'left',
    marginLeft: 30,
    marginTop: 20,
    color: Colors.negro,
    fontWeight: 'bold',
  },
  texto_vertodo: {
    fontFamily: 'PoppinsBold',
    fontSize: 28,
    textDecorationLine: 'underline',
    marginBottom:20,
    marginTop: 20,
    color: Colors.negro,
    
  },
  searchContainer: {
    width:580,
    height:90,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.blanco,
    borderRadius: 10,
    marginTop: 30,
    padding: 15,
    marginBottom:30,
  },
  searchInput: {
    flex: 1,
    fontSize: 30,
    color: Colors.negro,
    fontWeight:'bold',
  },
  cuadrosContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  animalesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginTop: 40,
  },
  cuadroIndividual: {
    width: 200,
    height: 200,
    backgroundColor: Colors.naranjaClaro,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  cuadroIndividual2: {
    width: 270,
    height: 360,
    backgroundColor: Colors.naranjaClaro,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  textoCuadro: {
    fontSize: 34,
    fontFamily: 'PoppinsRegular',
    color: Colors.negro,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop:10,
  },
  icono: {
    width: 110,
    height: 110,
  },
  footer: {
    backgroundColor: Colors.colorPrimario,
    padding: 90,
  },
  imagen_animal: {
    marginTop:18,
    width: 720,
    height: 105,
    alignItems:'center'
    
  },
});

export default index