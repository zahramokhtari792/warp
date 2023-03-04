import { StyleSheet } from 'react-native'
import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Home from './Home';
import Cart from './Cart';
import Profile from './Profile';
import Category from './Category';
import { lightPink, lightPurple, Pink, Purple } from '../Components/Colors';
import HomeIcon from '../Components/HomeIcon';
import CartIcon from '../Components/CartIcon';
import ProfileIcon from '../Components/ProfileIcon';
import CategoryIcon from '../Components/CategoryIcon'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { darkPurple, darkPink, lightYellow ,lightGreen} from './../Components/Colors';
const Drawer = createDrawerNavigator();

const DrawerProfile = ({ route }) => {

    const param = route.params;

    return (
        <Drawer.Navigator screenOptions={{ headerTransparent: true, headerTitleAlign: 'center',drawerStyle:{backgroundColor:lightPurple} }} >
            <Drawer.Screen options={{
                headerTitle: 'حساب من', headerTitleStyle: {
                    color: darkPurple, fontFamily:'Casablanca_MRT' }, drawerLabel:'حساب من', drawerLabelStyle:{color:darkPink }, drawerItemStyle:{backgroundColor:lightPink}
            }} initialParams={param} name='Profile' component={Profile} />
        </Drawer.Navigator>
    );

}

export default DrawerProfile;

const styles = StyleSheet.create({

    barStyle: {
        height: 65,
        width: '90%',
        paddingHorizontal: 15,
        backgroundColor: '#fff',
        position: 'absolute',
        bottom: '3%',
        left: '5%',
        borderRadius: 35,
        justifyContent: 'center'
    }

})