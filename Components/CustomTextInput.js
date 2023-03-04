import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { darkPurple } from './Colors';

const CustomTextInput = ({value, setValue, placeholder,keyboardType,secureTextEntry}) => {
  return (
    <TextInput cursorColor={darkPurple} style={styles.textinput} secureTextEntry={secureTextEntry} keyboardType={keyboardType} maxLength={11} placeholder={placeholder} value={value} onChangeText={(text) => setValue(text)} />
  )
}

export default CustomTextInput

const styles = StyleSheet.create({
    textinput: {
        width: '100%',
        height: 50,
        paddingRight: 20,
        borderRadius: 10,
        backgroundColor: 'rgba(255, 255, 255, 1)',
        textAlign: 'right',
        fontSize: 14,
        fontWeight: '600',
        color: darkPurple,

        elevation: 2,
        shadowColor: '#000',
        shadowRadius: 2,
        shadowOpacity: 0.3,
        shadowOffset: { x: 2, y: -2 },
      
    },
})