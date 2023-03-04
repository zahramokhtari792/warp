import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Styles from './Styles'
import { FlatList } from 'react-native'
import CardList from '../Components/CardList'
import BottomModal from '../Components/BottomModal'
import FillBtn from '../Components/FillBtn'
import { darkPink, Pink, lightPink } from '../Components/Colors';

const Cart = ({navigation}) => {
  const [modal, setModal] = useState(false)
  return (
    <View style={[Styles.container, { paddingBottom: 85 }]}>
      <FlatList style={{ paddingVertical: 10 }} data={[{ id: 1 }, { id: 2 }]} renderItem={({ item }) => {
        return (
          <CardList navigation={navigation} item={item} remove={() => { setModal(true) }} />
        )
      }} />
      <View style={{ flexDirection: 'row' , alignItems:'center', justifyContent:'space-evenly', paddingVertical:20, backgroundColor:'#fff', borderTopColor:'rgba(221, 205, 255, 0.5)', borderTopWidth:2, }}>
        <Text style={{color:darkPink, fontFamily:'BHoma', fontSize:20}}>500.000 تومان</Text>
        <View style={{width:'40%'}}>
          <FillBtn textBtn={"پرداخت"} onPress={() => { }} />
        </View>
      </View>
      <BottomModal modal={modal} setModal={setModal} text="آیا از حذف این محصول از سبد خرید خود اطمینان دارید؟" action={() => { setModal(false) }} />
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({

})