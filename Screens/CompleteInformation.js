import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, StatusBar, KeyboardAvoidingView, ScrollView, Dimensions } from 'react-native';
import axios from 'axios';
import { link } from './Link';
import Loader from './Loader';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomTextInput from '../Components/CustomTextInput';
import FillBtn from '../Components/FillBtn';
import { darkPurple } from '../Components/Colors';

const CompleteInformation = ({ route, navigation }) => {

    const params = route.params;
    const phone = params.phone;
    console.log(params);
    const [fname, setFname] = useState(null)
    const [lname, setLname] = useState(null)
    const [password, setPassword] = useState(null)
    const [repassword, setRepassword] = useState(null)
    const [loader, setLoader] = useState(false)
    const [modal, setModal] = useState(false)

    const register = () => {
        axios.post(`${link}register.php`, JSON.stringify({ phone: phone, fname: fname, lname: lname, password: password }))
            .then(response => {
                if (response.data == 'yes') {
                    setCoockie()
                } else {
                    setLoader(false);
                    setModal(true);
                    alert('ثبت نام نشدید')
                    console.log(response.data);
                }
            })
            .catch(error => console.log(error))
    }

    const setCoockie = async () => {
        await AsyncStorage.setItem('phone', phone);
        await AsyncStorage.setItem('password', password);
        navigation.navigate('Main', { phone: phone });
        setLoader(false);
    }

    return (
        <KeyboardAvoidingView behavior='height' style={{ flex: 1, backgroundColor: '#FAFAFE', alignItems: 'center', paddingTop: '25%' }}>

            <StatusBar barStyle='dark-content' backgroundColor={"#FAFAFE"} />

            {loader && <Loader />}

            {/* <ScrollView style={{ backgroundColor: '#FAFAFE' }} showsVerticalScrollIndicator={false} > */}

            <View style={{ width: '85%', height: 505, justifyContent: 'space-between', alignItems: 'center', }}>
                <Text style={{ fontSize: 24, fontWeight: '800' }}>تکمیل اطلاعات</Text>
                <View style={{ width: '100%', height: 435, justifyContent: 'space-between' }}>
                    <View style={{ width: '100%', height: 320, justifyContent: 'space-between', alignItems: 'flex-end', }}>
                        <Text>نام</Text>
                        <CustomTextInput placeholder='نام' value={fname} setValue={setFname} />
                        <Text>نام خانوادگی</Text>
                        <CustomTextInput placeholder='نام خانوادگی' value={lname} setValue={setLname} />
                        <Text>رمز عبور</Text>
                        <CustomTextInput secureTextEntry={true} placeholder='رمز عبور' value={password} setValue={setPassword} />
                        <Text>تکرار رمز عبور</Text>
                        <CustomTextInput secureTextEntry={true} placeholder='تکرار رمز عبور' value={repassword} setValue={setRepassword} />
                    </View>
                    
                    <FillBtn textBtn={"ثبت"} onPress={() => { if (password == repassword) { setLoader(true); register() } else { setModal(true); setLoader(false); alert('پسورد یکسان نیست با تکرار رمز عبور') } }} />
                </View>
            </View>
            {/* </ScrollView> */}
        </KeyboardAvoidingView>
    )
}
const stylesheet = StyleSheet.create({

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
        shadowRadius: 5,
        shadowOpacity: 0.3,
        shadowOffset: { x: 2, y: -2 },
        overflow: 'hidden',
    },


});

export default CompleteInformation

