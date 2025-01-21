import { StyleSheet } from "react-native"
import { Colors } from "./Colors"
export const GlobalStyles = StyleSheet.create({
    drawerTitle:{
        fontFamily:"WendyOne",
        fontSize:50,
        color:Colors.blanco,
        textAlign: "center", 
        
    },
    
    drawer: { 
        flexDirection: "row", 
        alignItems: "center", 
        justifyContent: "center",
    },
 
    
    button: {
        backgroundColor: Colors.naranjaClaro,
        color: Colors.blanco,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "PoppinsBold"
    },
    textInput: {
        backgroundColor: Colors.naranjaClaro,
        borderRadius: 50,
        justifyContent: "center",
        paddingLeft: 20,
        fontFamily: " PoppinsRegular",
        color: Colors.colorPrimario
    },
    textInput2: {
        backgroundColor: Colors.blanco,
        borderRadius: 10,
        justifyContent: "center",
        paddingLeft: 20,
        fontFamily: " PoppinsBold",
        color: Colors.negro,
    },
    logoLogin: {
        width: 90,
        height: 90,
        position: "absolute",
        right:40,
        top:10

    },
  
    huellas: {
        width: 70,
        height:70,
    },
    fondoAzul: {
        backgroundColor: Colors.colorPrimario,
    },
    linkButton:{
        width:200,
        height:70,
        backgroundColor: Colors.naranjaClaro,
        color: Colors.negro,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "PoppinsBold",
        textAlign:"center",
        fontSize:30,
        paddingTop:12,
    },
    fondoBlanco: {
        backgroundColor: Colors.blanco,
    },
    drawerUserContainer:{
        backgroundColor: 'indigo',
        justifyContent: 'space-around',
        marginHorizontal: 0,
        marginBottom: 30,
        height: 140,
        borderRadius: 10,
        flexDirection:"row",
        alignItems:"center"
        
    },
    drawerUserImg:{
        resizeMode:"contain",
        width: 100, 
        height: 90, 
        justifyContent: 'flex-end',
        borderRadius: 10
    }
})