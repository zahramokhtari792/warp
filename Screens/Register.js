import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, StatusBar, KeyboardAvoidingView, Alert, Pressable } from 'react-native';
import axios from 'axios';
import { link } from './Link';
import Loader from './Loader';
import { useRef } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import FillBtn from '../Components/FillBtn'
import BorderBtn from '../Components/BorderBtn';
import CustomTextInput from '../Components/CustomTextInput';
import { darkPurple } from '../Components/Colors';


const Register = ({ navigation, route }) => {
  const [phone, setPhone] = useState(null)
  const [loader, setLoader] = useState(false)
  const [modal, setModal] = useState(false)


  const checkUserExistence = () => {
    axios.post(`${link}checkUserExistence.php`, JSON.stringify({ phone: phone }))
      .then(response => {
        if (response.data == 'yes') {
          alert('شما با این شماره موبایل ثبت‌نام کرده‌اید.1)تغییر شماره2)ورود با رمز3) تغییر رمز  ')
          setLoader(false);
          setModal(true);
        } else {
          getVerificationCode();
        }
      })
      .catch(error => console.log(error))
  }

  const getVerificationCode = () => {
    axios.post(`${link}sendVerificationCode.php`, JSON.stringify({ phone: phone }))
      .then(response => {
        console.log(response.data);
        if (response.data !== 'no') {
          navigation.navigate('Verify', { phone: phone, verificationCode: response.data, forgotPassword: false });
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

      <View style={{ width: '85%', height: 320, justifyContent: 'space-between', alignItems: 'center' }}>

        <Text style={{ fontSize: 24, fontWeight: '800', }}>ثبت‌نام کاربر</Text>

        <View style={{ width: '100%', height: 250, justifyContent: 'space-between' }}>

          <View style={{ width: '100%', height: 80, justifyContent: 'space-between', alignItems: 'flex-end', }}>
            <Text>لطفاً شماره موبایل خود را وارد کنید.</Text>
          <CustomTextInput placeholder={'شماره موبایل'} keyboardType={'phone-pad'} value={phone} setValue={setPhone}/>
          </View>

          <View style={{ width: '100%', height: 110, justifyContent: 'space-between' }}>
           
            <FillBtn textBtn={"دریافت کد یکبار مصرف"} onPress={() => {
              setLoader(true); checkUserExistence()
              // navigation.navigate("Verify")
            }} />
            
            <BorderBtn textBtn={"حساب کاربری دارید؟ وارد شوید."} onPress={()=>{
              navigation.navigate('Login')
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
    // borderWidth: 1,
    // borderColor: {darkPurple}
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

export default Register

