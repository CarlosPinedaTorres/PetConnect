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
    }
})