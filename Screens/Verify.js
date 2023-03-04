import { Alert, Animated, KeyboardAvoidingView, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell, } from 'react-native-confirmation-code-field';
import  { Styles,ACTIVE_CELL_BG_COLOR, CELL_BORDER_RADIUS, CELL_SIZE, DEFAULT_CELL_BG_COLOR, NOT_EMPTY_CELL_BG_COLOR, } from './Styles';
import Loader from './Loader';
import axios from 'axios';
import { link } from './Link';
import FillBtn from '../Components/FillBtn';
import BorderBtn from '../Components/BorderBtn';

const { Value, Text: AnimatedText } = Animated;
const CELL_COUNT = 6;
const animationsColor = [...new Array(CELL_COUNT)].map(() => new Value(0));
const animationsScale = [...new Array(CELL_COUNT)].map(() => new Value(1));

const animateCell = ({ hasValue, index, isFocused }) => {
    Animated.parallel([
        Animated.timing(animationsColor[index], {
            useNativeDriver: false,
            toValue: isFocused ? 1 : 0,
            duration: 250,
        }),
        Animated.spring(animationsScale[index], {
            useNativeDriver: false,
            toValue: hasValue ? 0 : 1,
            duration: hasValue ? 300 : 250,
        }),
    ]).start();
};

const Verify = ({ route, navigation }) => {

    const params = route.params;
    const phone = params.phone;
    const [verificationCode, setVerificationCode] = useState(params.verificationCode);
    const changePassword = params.changePassword;
    const [loader, setLoader] = useState(false)
    const [modal, setModal] = useState(false)
    console.log(route);

    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });

    const renderCell = ({ index, symbol, isFocused }) => {
        const hasValue = Boolean(symbol);
        const animatedCellStyle = {
            backgroundColor: hasValue
                ? animationsScale[index].interpolate({
                    inputRange: [0, 1],
                    outputRange: [NOT_EMPTY_CELL_BG_COLOR, ACTIVE_CELL_BG_COLOR],
                })
                : animationsColor[index].interpolate({
                    inputRange: [0, 1],
                    outputRange: [DEFAULT_CELL_BG_COLOR, ACTIVE_CELL_BG_COLOR],
                }),
            borderRadius: animationsScale[index].interpolate({
                inputRange: [0, 1],
                outputRange: [CELL_SIZE, CELL_BORDER_RADIUS],
            }),
            transform: [
                {
                    scale: animationsScale[index].interpolate({
                        inputRange: [0, 1],
                        outputRange: [0.2, 1],
                    }),
                },
            ],
        };

        // Run animation on next event loop tik
        // Because we need first return new style prop and then animate this value
        setTimeout(() => {
            animateCell({ hasValue, index, isFocused });
        }, 0);

        return (
            <AnimatedText
                key={index}
                style={[Styles.cell, animatedCellStyle]}
                onLayout={getCellOnLayoutHandler(index)}>
                {symbol || (isFocused ? <Cursor /> : null)}
            </AnimatedText>
        );
    };

    const getVerificationCode = () => {
        axios.post(`${link}sendVerificationCode.php`, JSON.stringify({ phone: phone }))
            .then(response => {
                console.log(response.data);
                if (response.data !== 'no') {
                    setVerificationCode(response.data);
                    setLoader(false);
                } else {
                    setLoader(false);
                    setModal(true);
                    Alert.alert('کد ارسال نشد. لطفا از درستی شماره تماس خود یا اینترنت اطمینان حاصل کنید.')
                }
            })
            .catch(error => console.log(error))
    }

    return (
        <KeyboardAvoidingView behavior='height' style={{ flex: 1, backgroundColor: '#FAFAFE', alignItems: 'center', paddingTop: '25%' }}>

            <StatusBar barStyle='dark-content' backgroundColor={"#FAFAFE"} />

            {loader && <Loader />}

            <View style={{ width: '85%', height: 315, justifyContent: 'space-between', alignItems: 'center' }}>

                <Text style={{ fontSize: 24, fontWeight: '800', }}>احراز هویت</Text>
                <View style={{ width: '100%', height: 245, justifyContent: 'space-between' }}>

                    <View style={{ width: '100%', height: 75, justifyContent: 'space-between' }}>
                        <Text>لطفاً کد پیامک شده را وارد کنید.</Text>
                        <CodeField
                            ref={ref}
                            {...props}
                            value={value}
                            onChangeText={(text) => { setValue(text) }}
                            cellCount={CELL_COUNT}
                            rootStyle={Styles.codeFieldRoot}
                            keyboardType='number-pad'
                            textContentType='oneTimeCode'
                            renderCell={renderCell}
                        />
                    </View>

                    <View style={{ width: '100%', height: 110, justifyContent: 'space-between' }}>
                        <FillBtn onPress={() => {
                            if (value == verificationCode) {
                                if (changePassword) {
                                    navigation.navigate('ChangePassword', { phone: phone })
                                }
                                else {
                                    navigation.navigate('CompleteInformation', { phone: phone })
                                }
                            } else {
                                setModal(true);
                                alert('کد یکبار‌مصرف را اشتباه وارد کردید1)تلاش مجدد2)تغییر شماره.')
                            }
                        }} textBtn={"تأیید"} />
                        <BorderBtn textBtn={"ارسال مجدد"} onPress={() => { setLoader(true), getVerificationCode() }} />
                    </View>
                </View>

            </View>

        </KeyboardAvoidingView>
    );
};

export default Verify