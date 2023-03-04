import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Styles from './Styles'
import Carousel from 'react-native-reanimated-carousel'
import { lightPurple, Pink } from '../Components/Colors'
import { darkPink, Purple, lightPink } from './../Components/Colors';
import { LinearGradient } from 'expo-linear-gradient'

const Profile = () => {
  const [banners0] = useState([{ id: 0, image: require('../Images/Banners/banner1.jpg') }, { id: 1, image: require('../Images/Banners/banner6.jpg') }, { id: 2, image: require('../Images/Banners/banner.jpg') }]);

  return (
    <View style={[Styles.container, { alignItems: 'center' }]}>

      <View style={{width:'100%', height:270, borderBottomRightRadius:30, borderBottomLeftRadius:30, elevation:10, shadowColor:darkPink}}>
        <LinearGradient colors={['#FFCAF2', '#A2EDFF']} start={{ x: 1, y: 1 }} end={{ x: 0, y: 0.4 }} style={{height:'100%', width:'100%',borderBottomRightRadius:30, borderBottomLeftRadius:30}}>

        </LinearGradient>
      </View>
      {/* <Carousel style={{ borderRadius: 25, elevation:10, backgroundColor:lightPurple, shadowColor:darkPink, }} loop width={350} height={200} autoPlay={true} data={banners0} scrollAnimationDuration={4000} showLength={banners0.length - 1}
        renderItem={({ item }) => (
          <Image style={{ width: '100%', height: 200, resizeMode: 'cover'}} source={item.image} />
        )}
      /> */}
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
    
})