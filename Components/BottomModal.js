import { Modal, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React, { useState } from 'react'
import FillBtn from './FillBtn';
import BorderBtn from './BorderBtn';
import { darkPurple } from './Colors';


const BottomModal = ({ modal, setModal, text, action }) => {

    // const [loader, setLoader] = useState(false)

    return (
        <Modal animationType='slide' visible={modal} transparent={true}>

            {/* {loader && <Loader />} */}

            <TouchableWithoutFeedback onPress={() => { setModal(false); }}>
                <View style={{ height: '100%', width: '100%',backgroundColor:'rgba(0,0,0,0.05)' }}>
                    <View style={styles.modal}>
                        <Text style={{ textAlign: 'center', color: darkPurple, fontSize: 16, fontFamily:'Casablanca_Heavy_MRT' }}>
                            {text}
                        </Text>
                        <View style={{ flexDirection: 'row', width: '70%', justifyContent: 'space-between' }}>
                            
                            <View style={{width: '48%',}} >
                                <BorderBtn textBtn={"بله"}  onPress={action}/>
                            </View>
                            <View style={{width: '48%',}}>
                            <FillBtn textBtn={"خیر"} onPress={() => { setModal(false) }}/>

                            </View>
                            
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    )
}

export default BottomModal

const styles = StyleSheet.create({

    btn1: {
        width: '48%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        borderColor: darkPurple,
        borderWidth: 1,
    },

    btn2: {
        width: '48%',
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

    modal: {
        height: '30%',
        width: '100%',
        backgroundColor: "#FFF",
        alignItems: "center",
        justifyContent: 'space-evenly',
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,

        elevation: 12,
        shadowColor: '#000',
        shadowRadius: 5,
        shadowOpacity: 0.3,
        shadowOffset: { x: 0, y: 10 },
        // overflow: 'hidden',
    },

})