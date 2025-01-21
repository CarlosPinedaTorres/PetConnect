import { TextInput } from 'react-native'
import React from 'react'
import { GlobalStyles } from '@/themes/GlobalStyles'
import { Colors } from '@/themes/Colors'
interface Props {
  placeholder: string,
  height?: number,
  width?: number,
}
const CustomTextInput = ({ placeholder, height, width }: Props) => {
  return (
    
    <TextInput
      placeholderTextColor={Colors.negro}
      placeholder={placeholder}
      value={''}
      style={[GlobalStyles.textInput, { height, width ,fontSize:30,fontFamily:"PoppinsRegular",fontWeight:"regular"}]}

    />


  )
}

export default CustomTextInput