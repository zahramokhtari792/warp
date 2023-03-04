import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert, TouchableOpacity, StatusBar, KeyboardAvoidingView } from 'react-native';
import axios from 'axios';
import { link } from './Link';
import Loader from './Loader';
import FillBtn from '../Components/FillBtn';
import CustomTextInput from '../Components/CustomTextInput';
import { darkPurple } from '../Components/Colors';

const ForgotPassword = ({ navigation }) => {

    const [phone, setphone] = useState(null)
    const [loader, setLoader] = useState(false)
    const [modal, setModal] = useState(false)

    // const [forgotpassword, setforgotpassword] = useState('byphone'
    // if (phone) {
    //     if (phone.includes('@')) {
    //         setforgotpassword('byemail');
    //         console.log(forgotpassword, phone);
    //     }
    // };

    const checkUserExistence = () => {
        axios.post(`${link}checkUserExistence.php`, JSON.stringify({ phone: phone }))
            .then(response => {
                if (response.data == 'yes') {
                    getVerificationCode();
                } else {
                    Alert.alert(' برو به رجیستر کاربری با این شماره تلفن ثبت‌نام نکرده‌است.');
                    setModal(true);
                    setLoader(false);
                }
            })
            .catch(error => console.log(error))
    }

    const getVerificationCode = () => {
        axios.post(`${link}sendVerificationCode.php`, JSON.stringify({ phone: phone }))
            .then(response => {
                console.log(response.data);
                if (response.data !== 'no') {
                    navigation.navigate('Verify', { phone: phone, verificationCode: response.data, changePassword: true });
                    setLoader(false);
                } else {
                    setLoader(false);
                    setModal(true);
                    alert('کد ارسال نشد. لطفا از درستی شماره تماس خود یا اینترنت اطمینان حاصل کنید.')
                }
            })
            .catch(error => console.log(error))
    }

    return (
        <KeyboardAvoidingView behavior='height' style={{ flex: 1, backgroundColor: '#FAFAFE', alignItems: 'center', paddingTop: '25%' }}>

            <StatusBar barStyle='dark-content' backgroundColor={"#FAFAFE"} />

            {loader && <Loader />}

            <View style={{ width: '85%', height: 260, justifyContent: 'space-between', alignItems: 'center' }}>

                <Text style={{ fontSize: 24, fontWeight: '800', }}>بازیابی رمزعبور</Text>

                <View style={{ width: '100%', height: 190, justifyContent: 'space-between' }}>

                    <View style={{ width: '100%', height: 80, justifyContent: 'space-between', alignItems: 'flex-end', }}>
                        <Text>لطفاً شماره موبایل خود را وارد کنید.</Text>
                    <CustomTextInput placeholder='شماره موبایل' value={phone} keyboardType='phone-pad' setValue={setphone} />
                    </View>

                    <FillBtn textBtn={"دریافت کد یک‌بار مصرف"} onPress={() => { setLoader(true); checkUserExistence() }} />

                </View>

            </View>

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

export default ForgotPassword

