import { TextInput } from 'react-native'
import React from 'react'
import { GlobalStyles } from '@/themes/GlobalStyles'
import { Colors } from '@/themes/Colors'
interface Props {
  placeholder: string,
  height?: number,
  width?: number,
  value:string,
  type?:"email"|"password"|"nombre"|"repeatPassword",
  onChangeText:(value:string)=>void
}
const CustomTextInput = ({ placeholder, height, width,value,type ,onChangeText}: Props) => {
  return (
    
    <TextInput
      onChangeText={onChangeText}
      placeholderTextColor={Colors.negro}
      placeholder={placeholder}
      value={value}
      secureTextEntry={type==="password"|| type==="repeatPassword"}
      style={[GlobalStyles.textInput, { height, width ,fontSize:30,fontFamily:"PoppinsRegular",fontWeight:"regular"}]}

    />


  )
}

export default CustomTextInput