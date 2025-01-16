import { StyleSheet } from "react-native"
import { Colors } from "./Colors"
export const GlobalStyles = StyleSheet.create({
    drawerTitle:{
        fontFamily:"WendyOne",
        fontSize:25,
        color:Colors.blanco,
        textAlign: "center", 
        
    },
    
    drawer:{ 
        flexDirection: "row", 
        alignItems: "center", 
        justifyContent: "center",
         flex: 1, 
         position: "relative",
         height: 60, 
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
    logoLogin: {
        width: 60,
        height: 60,
        position: "absolute",
        right: 20,
        top: 5

    },
  
    huellas: {
        width: 40,
        height: 40,
    },
    fondoAzul: {
        backgroundColor: Colors.colorPrimario,
    },
    linkButton:{
        width:120,
        height:40,
        backgroundColor: Colors.naranjaClaro,
        color: Colors.negro,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "PoppinsBold",
        textAlign:"center",
        fontSize:20,
        paddingTop:7
    },
    fondoBlanco: {
        backgroundColor: Colors.blanco,
    }
})