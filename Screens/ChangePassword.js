import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, StatusBar, KeyboardAvoidingView, Alert } from 'react-native';
import axios from 'axios';
import Loader from './Loader';
import { link } from './Link';
import FillBtn from '../Components/FillBtn';
import CustomTextInput from '../Components/CustomTextInput';
import { darkPurple } from '../Components/Colors';

const ChangePassword = ({ route, navigation }) => {

    const params = route.params;
    const phone = params.phone;
    const [password, setPassword] = useState(null);
    const [repassword, setRepassword] = useState(null);
    const [loader, setLoader] = useState(false);
    const [modal, setModal] = useState(false)

    const changePassword = () => {
        axios.post(`${link}changePassword.php`, JSON.stringify({ phone: phone, password: password }))
            .then(response => {
                console.log(response.data);
                if (response.data == 'yes') {
                    alert('رمز عبور شما با موفقیت تغییر پیدا کرد.');
                    navigation.navigate('Login', { phone: phone, password: password });
                    setLoader(false);
                    setModal(true);
                } else {
                    alert('تغییرات اعمال نشد');
                    setLoader(false);
                    setModal(true);
                }
            })
            .catch(error => console.log(error))
    }

    return (
        <KeyboardAvoidingView behavior='height' style={{ flex: 1, backgroundColor: '#FAFAFE', alignItems: 'center', paddingTop: '25%' }}>

            <StatusBar barStyle='dark-content' backgroundColor={"#FAFAFE"} />

            {loader && <Loader />}

            <View style={{ width: '85%', height: 325, justifyContent: 'space-between', alignItems: 'center' }}>

                <Text style={{ fontSize: 24, fontWeight: '800', }}>تغییر رمز عبور</Text>

                <View style={{ width: '100%', height: 255, justifyContent: 'space-between' }}>

                    <View style={{ width: '100%', height: 145, justifyContent: 'space-between', alignItems: 'flex-end', }}>
                        <Text>رمز عبور جدید خود را وارد کنید.</Text>
                        <CustomTextInput secureTextEntry={true} placeholder='رمز عبور' value={password} setValue={setPassword} />
                        <CustomTextInput secureTextEntry={true} placeholder='تکرار رمز عبور' value={repassword} setValue={setRepassword} />
                    </View>
                    <FillBtn textBtn={"ثبت"}  onPress={() => { { setLoader(true); if (password == repassword) { changePassword() } else { Alert.alert('تطابق ندارند.'); setLoader(false) } } }} />
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
        color: '#000',

        elevation: 2,
        shadowColor: '#000',
        shadowRadius: 5,
        shadowOpacity: 0.3,
        shadowOffset: { x: 2, y: -2 },
        overflow: 'hidden',
    },

});

export default ChangePassword

