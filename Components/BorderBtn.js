import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { darkPurple } from './Colors';

const BorderBtn = ({textBtn, onPress}) => {
  return (
    <Pressable style={styles.btn2} onPress={onPress}>
    <LinearGradient colors={['#A2EDFF', '#FFCAF2', ]} start={{ x: 1, y: 1 }} end={{ x: 0, y: 0.4 }} style={[styles.btn1, { height: '100%', width: '100%' }]}>
      <View style={{backgroundColor:'#fff', height:'94%', width:'99%', justifyContent:'center', alignItems:'center',borderRadius: 15,alignSelf:'center'}}>

        <Text style={{ fontSize: 14, fontFamily:'Casablanca_Heavy_MRT', color: darkPurple }}>
          {textBtn}
        </Text>
      </View>
    </LinearGradient>

  </Pressable>
  )
}

export default BorderBtn

const styles = StyleSheet.create({
    btn2: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        backgroundColor: '#FAFAFE',
        // borderWidth: 1,
        // borderColor: darkPurple
      },
      btn1: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        backgroundColor: darkPurple,
    
        elevation: 2,
        shadowColor: '#000',
        shadowRadius: 2,
        shadowOpacity: 0.3,
        shadowOffset: { x: 2, y: -2 }
      },
})