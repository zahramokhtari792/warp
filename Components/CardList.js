import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import TrashIcon from './TrashIcon'
import MinusIcon from './MinusIcon'
import PlusIcon from './PlusIcon'
import { darkPink, lightPurple } from './Colors';


const CardList = ({ item, remove, navigation }) => {
  return (
    <Pressable  style={styles.card} onPress={()=>{
      navigation.navigate("ProductDetail")
    }}>
      <View style={{ elevation: 3, backgroundColor: '#fff', borderRadius: 18, marginHorizontal: 10 }}>
        <Image style={{ height: 100, width: 100, borderRadius: 18, }} source={item.id == 1 ? require('../Images/1.jpg') : require('../Images/2.jpg')} resizeMode="center" />
      </View>
      <View style={{ width: '62%', height: '100%', justifyContent: 'space-evenly' }}>

        <View style={styles.row}>

          <TouchableOpacity onPress={remove}>
            <TrashIcon />
          </TouchableOpacity>
          <Text style={{ color: darkPink, fontFamily: 'Casablanca_Heavy_MRT', fontSize: 18 }}>پیرهن و کت لی دخترانه </Text>
        </View>
        <View style={[styles.row, { width: '100%', alignItems: 'center' }]}>
          <View style={[styles.row, { alignItems: 'center', backgroundColor: lightPurple, borderRadius: 10, paddingVertical: 2, justifyContent: 'center', paddingHorizontal: 1 }]}>
            <TouchableOpacity style={[styles.btn, { marginLeft: 5, }]}>

              <MinusIcon />
            </TouchableOpacity>
            <Text style={{ fontSize: 18, marginHorizontal: 5, color: darkPink, fontFamily: 'BHoma' }}>2</Text>
            <TouchableOpacity style={[styles.btn, { marginRight: 5, }]}>
              <PlusIcon />
            </TouchableOpacity>
          </View>
          <Text style={{ color: darkPink, fontSize: 20, fontFamily: 'BHoma' }}>250.000 <Text style={{ color: darkPink, fontSize: 12, fontWeight: 'normal' }}>تومان</Text></Text>
        </View>
      </View>
    </Pressable>
  )
}

export default CardList

const styles = StyleSheet.create({
  card: {
    width: '90%',
    height: 116,
    borderRadius: 18,
    elevation: 15,
    backgroundColor: '#fff',
    alignSelf: 'center',
    margin: 10,
    shadowColor: 'rgba(173, 182, 255, 0.7)',
    shadowOpacity: 1,
    shadowOffset: {
      height: 1,
      width: 1
    },
    shadowRadius: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row-reverse',

    justifyContent: 'space-between',
  },
  btn: {
    padding: 2, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', borderRadius: 8, elevation: 2,
  }
})