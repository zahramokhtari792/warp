import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { darkPink, darkPurple, lightBlue, lightPink, lightYellow, Pink, Purple } from './Colors'

const Size = ({item, selected, setSelected}) => {
  return (
    <Pressable style={[styles.circle, item.id==selected&&{backgroundColor:Purple}]} onPress={()=>{
        setSelected(item.id)
    }} >
      <Text style={[{fontSize:12, color:darkPurple, fontWeight:'bold'},item.id==selected&&{color:"#fff"}]}>{item.title}</Text>
    </Pressable>
  )
}

export default Size

const styles = StyleSheet.create({
    circle:{
        borderRadius:100,
        borderWidth:1,
        height:50,
        width:50,
        borderWidth:1,
        borderColor:lightPink,
        backgroundColor:'#fff',
        elevation:2,
        marginBottom:10,
        marginHorizontal:5,
        shadowColor:darkPink,
        alignItems:'center',
        justifyContent:'center',
        
    }
})