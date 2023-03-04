import { StyleSheet } from 'react-native'
import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Home from './Home';
import Cart from './Cart';
import Profile from './Profile';
import Category from './Category';
import { lightPink,Purple } from '../Components/Colors';
import HomeIcon from '../Components/HomeIcon';
import CartIcon from '../Components/CartIcon';
import ProfileIcon from '../Components/ProfileIcon';
import CategoryIcon from '../Components/CategoryIcon'
import DrawerProfile from './DrawerProfile';
const Bottom = createMaterialBottomTabNavigator();

const Main = ({ route }) => { 

    const param = route.params;

    return (
        <Bottom.Navigator initialRouteName='Home' activeColor={lightPink} inactiveColor={Purple} barStyle={styles.barStyle}>
            <Bottom.Screen initialParams={param} name='Home' component={Home} options={{ tabBarLabel: 'خانه', tabBarIcon: ({ color }) => (<HomeIcon color={color} />) }} />
            <Bottom.Screen initialParams={param} name='Category' component={Category} options={{ tabBarLabel: 'دسته‌بندی‌ها', tabBarIcon: ({ color }) => (<CategoryIcon color={color} />) }} />
            <Bottom.Screen initialParams={param} name='Cart' component={Cart} options={{ tabBarLabel: 'سبد خرید', tabBarIcon: ({ color }) => (<CartIcon color={color} />) }} />
            <Bottom.Screen initialParams={param} name='DrawerProfile' component={DrawerProfile} options={{ tabBarLabel: 'پروفایل', tabBarIcon: ({ color }) => (<ProfileIcon color={color} />) }} />
        </Bottom.Navigator>
    );

}

export default Main;

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