import { Dimensions, StyleSheet, View } from 'react-native';
import React, { useRef } from 'react';
import LottieView from 'lottie-react-native';

const Loader = () => {

    const animation = useRef(null)

    return (
        <View style={styles.loader}>
            <LottieView
                autoPlay={true}
                ref={animation}
                style={{ height: 120 }}
                source={require('../loader.json')}
            />
        </View>
    )
}

const styles = StyleSheet.create({

    loader: {
        position: 'absolute',
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        zIndex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }

})

export default Loader