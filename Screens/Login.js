import React, { useEffect, useRef, useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, StatusBar, KeyboardAvoidingView, Dimensions, Alert } from 'react-native';
import axios from 'axios';
import Loader from './Loader';
import { link } from './Link';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FillBtn from '../Components/FillBtn';
import BorderBtn from '../Components/BorderBtn';
import CustomTextInput from '../Components/CustomTextInput';
import { darkPurple } from '../Components/Colors';

const Login = ({ navigation }) => {

    const [phone, setphone] = useState(null)
    const [password, setPassword] = useState(null)
    const [loader, setLoader] = useState(false)
    const [modal, setModal] = useState(false)

    const checkUserExistence = () => {
        axios.post(`${link}checkUserExistence.php`, JSON.stringify({ phone: phone }))
            .then(response => {
                if (response.data == 'yes') {
                    login();
                } else {
                    Alert.alert(' برو به رجیستر کاربری با این شماره تلفن ثبت‌نام نکرده‌است.');
                    setLoader(false);
                    setModal(true);
                }
            })
            .catch(error => console.log(error))
    }

    const login = () => {
        axios.post(`${link}login.php`, JSON.stringify({ phone: phone, password: password }))
            .then(response => {
                if (response.data == 'yes') {
                    setCoockie();
                } else {
                    Alert.alert('شماره موبایل یا پسورد اشتباه است')
                    setLoader(false);
                    setModal(true);
                }
            })
            .catch(error => {
                console.log(error);
                Alert.alert('وضعیت نت خوب نیست');
                setLoader(false);
                setModal(true);
            })
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

            <View style={{ width: '85%', height: 400, justifyContent: 'space-between', alignItems: 'center' }}>

                <Text style={{ fontSize: 24, fontWeight: '800', }}>ورود کاربر</Text>

                <View style={{ width: '100%', height: 330, justifyContent: 'space-between' }}>

                    <View style={{ width: '100%', height: 160, justifyContent: 'space-between', alignItems: 'flex-end', }}>
                        <Text>شماره موبایل</Text>
                        <CustomTextInput placeholder='شماره موبایل' value={phone} secureTextEntry={false} keyboardType='phone-pad' setValue={setphone} />

                        <Text>رمز عبور</Text>
                        <CustomTextInput placeholder='رمز عبور' value={password} secureTextEntry={true} setValue={setPassword} />
                    </View>

                    <View style={{ width: '100%', height: 110, justifyContent: 'space-between' }}>

                        <FillBtn textBtn={"ورود"} onPress={() => { setLoader(true); checkUserExistence() }} />

                        <BorderBtn textBtn={" رمز‌عبور خود را فراموش کرده‌اید؟"} onPress={() => {
                            navigation.navigate("ForgotPassword")
                        }} />
                    </View>

                </View>

            </View>

        </KeyboardAvoidingView >

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

    btn2: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        backgroundColor: '#FAFAFE',
        borderWidth: 1,
        borderColor: darkPurple
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

export default Login

