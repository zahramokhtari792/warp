import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { darkPurple } from './Colors';

const FillBtn = ({textBtn, onPress}) => {
  return (
    <Pressable style={styles.btn1} onPress={onPress}>
        <LinearGradient colors={['#FFCAF2', '#A2EDFF']} start={{ x: 1, y: 1 }} end={{ x: 0, y: 0.4 }} style={[styles.btn1, { height: '100%', width: '100%' }]}>

          <Text style={{ fontSize: 16,fontFamily:'Casablanca_Heavy_MRT', color: darkPurple }}>
            {textBtn}
          </Text>
        </LinearGradient>
      </Pressable>
  )
}

export default FillBtn

const styles = StyleSheet.create({
    btn1: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        backgroundColor: darkPurple,
    
        elevation: 2,
        shadowColor: '#000',
        shadowRadius: 5,
        shadowOpacity: 0.3,
        shadowOffset: { x: 2, y: -2 },
        overflow: 'hidden',
      },
})