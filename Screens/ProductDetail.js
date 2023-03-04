import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Styles from './Styles'
import { lightBlue, lightGreen, lightPurple, Pink } from '../Components/Colors'
import { darkPink, lightYellow, Purple, lightPink, darkPurple } from '../Components/Colors';
import FillBtn from '../Components/FillBtn';
import CartIcon from '../Components/CartIcon2';
import { FlatList } from 'react-native';
import Size from '../Components/Size';
import CommentIcon from '../Components/CommentIcon';

const ProductDetail = () => {
    const [selected, setSelected] = useState("")
    const description = "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد."
    return (
        <View style={Styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} style={{}}>
                <View style={{ borderBottomLeftRadius: 30, borderBottomRightRadius: 30, elevation: 15, marginBottom: 27, shadowColor: darkPink }}>
                    <Image source={require('../Images/1.jpg')} style={{ height: 400, width: '100%', borderBottomLeftRadius: 40, borderBottomRightRadius: 40 }} resizeMode='cover' />
                </View>
                <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', paddingHorizontal: 20 }}>
                    <Text style={{ fontFamily: 'BHoma', color: darkPink, fontSize: 20 }}>250.000 تومان</Text>
                    <View>
                        <Text style={{ fontFamily: 'Casablanca_Heavy_MRT', fontSize: 20, color: darkPink }}>پیرهن و کت لی دخترانه</Text>
                        <Text style={{ fontFamily: 'Casablanca_Light_MRT', fontSize: 16, color: Pink }}>لباس دخترانه</Text>
                    </View>
                </View>
                <FlatList style={{marginLeft:10,}} horizontal={true} data={[{id:1, title:'Small'},{id:2, title:'Larg'}]} renderItem={({item})=>{return(
                    <Size item={item} selected={selected} setSelected={setSelected} />
                )}} />
                <Text style={{paddingHorizontal:20, textAlign:'justify',fontFamily:'BHoma', lineHeight:30, fontSize:16, color:darkPurple}}>{description}</Text>
            </ScrollView>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20, justifyContent: 'space-between', width: '100%', alignSelf: 'center', borderTopColor: lightPurple, borderTopWidth: 1, paddingTop: 20, paddingHorizontal: 20 }}>

                <View style={{ width: '50%' }}>
                    <FillBtn textBtn={"خرید"} />
                </View>
                <TouchableOpacity style={{ borderRadius: 100, height: 60, width: 60, backgroundColor: lightYellow, alignItems: 'center', justifyContent: 'center', elevation: 2 }}>
                    <CartIcon color={Purple} />
                </TouchableOpacity>
                <TouchableOpacity style={{ borderRadius: 100, height: 60, width: 60, backgroundColor: lightGreen, alignItems: 'center', justifyContent: 'center', elevation: 2 }}>
                    <CommentIcon color={Pink} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ProductDetail

const styles = StyleSheet.create({})