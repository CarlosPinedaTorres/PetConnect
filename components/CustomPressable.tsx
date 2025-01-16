import { Pressable, Text } from "react-native";
import { GlobalStyles } from "@/themes/GlobalStyles";
import { Colors } from "@/themes/Colors";
interface Props {
    label: string,
    type?: string,
    width?: number,
    height?: number,
}

export const Button = ({ label, width, height }: Props) => {
    return (
        <Pressable style={[GlobalStyles.button, { height, width }]}>
            <Text style={{ color: Colors.negro, fontSize: 20 ,fontFamily:"PoppinsBold"}}>{label}</Text>
        </Pressable>
    )
};

