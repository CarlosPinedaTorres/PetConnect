import { StyleSheet } from "react-native"
import { Colors } from "./Colors"
export const GlobalStyles = StyleSheet.create({
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
    logo: {
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
        color: Colors.blanco,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "PoppinsRegular",
        textAlign:"center",
        fontSize:25,
        paddingTop:5
    }
})