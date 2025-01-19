import React from 'react'
import { View, Text, Image } from 'react-native'
import { GlobalStyles } from '@/themes/GlobalStyles'
import { Colors } from "@/themes/Colors";
import { StyleSheet } from "react-native";


const index = () => {
  return (
    <View style={[GlobalStyles.fondoBlanco, { flex: 1 }]}>

      <View style={[styles.header]}>
        <View style={styles.searchContainer}>
          <Text style={[styles.searchInput, { fontWeight: 'bold', fontSize: 18 }]}>Buscar...</Text>
          <Image style={[{ width: 35, height: 35 }]} source={require("@/assets/images/lupa2.png")} />
        </View>
      </View>
      <View style={[{ flexDirection: 'row' }]}>
        <Text style={[styles.texto_categoria]}>Categorias</Text>
        <Text style={[styles.texto_vertodo]}>Ver todo</Text>
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
            style={[{ width: 130, height: 90, borderRadius: 15 }]}
            source={require("@/assets/images/Pluto.png")}
          />
          <Text style={[{ fontSize: 18, fontWeight: 'bold', marginRight: 85 }]}>Pluto</Text>
          <Text style={[{ fontSize: 16, marginRight: 12 }]}>Macho, 1.5 años</Text>
          <Image
            style={[{ marginLeft: 100, width: 22, height: 20,marginTop:12,marginBottom:10 }]}
            source={require("@/assets/images/huella.png")}
          />
        </View>
        <View style={[styles.cuadroIndividual2]}>
          <Image
            style={[{ width: 130, height: 90, borderRadius: 15 }]}
            source={require("@/assets/images/Afro y Shaggy.png")}
          />
          <Text style={[{ fontSize: 18, fontWeight: 'bold', marginRight: 16 }]}>Afro y Shaggy</Text>
          <Text style={[{ fontSize: 16, marginRight: 8 }]}>Machos, 3 meses</Text>
          <Image
            style={[{ marginLeft: 100, width: 35, height: 35,marginTop:7 }]}
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
    fontSize: 18,
    color: Colors.blanco,
    fontWeight: 'bold',
  },
  texto_categoria: {
    fontFamily: 'PoppinsRegular',
    fontSize: 16,
    textAlign: 'left',
    marginLeft: 30,
    marginTop: 20,
    color: Colors.negro,
    fontWeight: 'bold',
  },
  texto_vertodo: {
    fontFamily: 'PoppinsRegular',
    fontSize: 16,
    textAlign: 'right',
    textDecorationLine: 'underline',
    marginLeft: 210,
    marginTop: 20,
    color: Colors.negro,
    fontWeight: 'bold',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.blanco,
    borderRadius: 10,
    marginTop: 10,
    padding: 15,
    margin: 15,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: Colors.negro,
  },
  sectionTitle: {
    fontSize: 18,
    color: Colors.colorPrimario,
    marginBottom: 10,
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
    marginTop: 20,
  },
  cuadroIndividual: {
    width: 100,
    height: 100,
    backgroundColor: Colors.naranjaClaro,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  cuadroIndividual2: {
    width: 160,
    height: 200,
    backgroundColor: Colors.naranjaClaro,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  textoCuadro: {
    fontSize: 18,
    fontFamily: 'PoppinsRegular',
    color: Colors.negro,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  icono: {
    width: 60,
    height: 60,
  },
  footer: {
    backgroundColor: Colors.colorPrimario,
    padding: 90,
  },
  imagen_animal: {
    width: 412,
    height: 60,
    alignItems:'center'
    
  },
});

export default index