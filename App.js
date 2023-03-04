import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Svg, { Path } from 'react-native-svg';
import Profile from './Screens/Profile';
import Home from './Screens/Home';
import Card from './Screens/Card';
import Appointments from './Screens/Appointments';
import Login from './Screens/Login';
import Register from './Screens/Register';
import Verify from './Screens/Verify';
import CompleteInformation from './Screens/CompleteInformation';
import ChangePassword from './Screens/ChangePassword';
import ForgotPassword from './Screens/ForgotPassword';
import { useFonts } from 'expo-font';
import ProductDetail from './Screens/ProductDetail';
import HomeIcon from './Components/HomeIcon';
import Main from './Screens/Main';



const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();


// function Main({ route }) {
//   return (
//     <Tab.Navigator
//       initialRouteName='Home'
//       activeColor='#FFB2B1'
//       inactiveColor='#A2EDFF'
//       barStyle={{ height: 60, width: '95%', paddingHorizontal: 15, backgroundColor: '#FAFAFE', position: 'absolute', bottom: '2%', left: '2.5%', borderRadius: 20, alignItems: 'center', justifyContent: 'center' }}
//     >
//       <Tab.Screen

//         name='Home'
//         component={Home}
//         options={{ tabBarLabel: 'خانه', tabBarIcon: ({ color }) => (<HomeIcon color={color} />) }}
//       />

//       <Tab.Screen
//         name='Card'
//         component={Card}
//         options={{
//           tabBarLabel: 'سبد‌خرید',
//           tabBarIcon: ({ color }) => (

//             <Svg width="25" height="25" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
//               <Path d="M12.5833 33.5C10.2916 33.5 8.43748 35.375 8.43748 37.6667C8.43748 39.9583 10.2916 41.8333 12.5833 41.8333C14.875 41.8333 16.75 39.9583 16.75 37.6667C16.75 35.375 14.875 33.5 12.5833 33.5ZM0.083313 0.166672V4.33334H4.24998L11.75 20.1458L8.93748 25.25C8.60415 25.8333 8.41665 26.5208 8.41665 27.25C8.41665 29.5417 10.2916 31.4167 12.5833 31.4167H37.5833V27.25H13.4583C13.1666 27.25 12.9375 27.0208 12.9375 26.7292L13 26.4792L14.875 23.0833H30.3958C31.9583 23.0833 33.3333 22.2292 34.0416 20.9375L41.5 7.41667C41.6719 7.09873 41.7584 6.74163 41.751 6.38027C41.7436 6.01891 41.6426 5.66565 41.4579 5.35498C41.2732 5.04432 41.011 4.78687 40.6971 4.60781C40.3831 4.42874 40.0281 4.33417 39.6666 4.33334H8.85415L6.89581 0.166672H0.083313ZM33.4166 33.5C31.125 33.5 29.2708 35.375 29.2708 37.6667C29.2708 39.9583 31.125 41.8333 33.4166 41.8333C35.7083 41.8333 37.5833 39.9583 37.5833 37.6667C37.5833 35.375 35.7083 33.5 33.4166 33.5Z" fill={color}/>
//             </Svg>

//           ),
//         }}
//       />

//       <Tab.Screen

//         name='Appointments'
//         component={Appointments}
//         options={{
//           tabBarLabel: 'نوبت‌ها',
//           tabBarIcon: ({ color }) => (
//             <Svg width='22' height='24' viewBox='0 0 37 41'>
//               <Path d='M25.6819 0.100676C26.531 0.0986818 27.2024 0.758351 27.2043 1.63791L27.2063 3.13716C32.7156 3.56894 36.3549 7.32306 36.3608 13.0802L36.3825 29.9317C36.3904 36.2086 32.447 40.0707 26.1262 40.0807L10.6863 40.1007C4.40495 40.1086 0.412199 36.1546 0.404301 29.8598L0.382566 13.2061C0.374681 7.41102 3.88562 3.66689 9.39491 3.16115L9.39293 1.6619C9.39096 0.782339 10.0426 0.120671 10.9114 0.120671C11.7803 0.118672 12.4319 0.778341 12.4339 1.6579L12.4359 3.0572L24.1653 3.04121L24.1634 1.64191C24.1614 0.762349 24.813 0.10268 25.6819 0.100676ZM26.4875 28.4845H26.4678C25.5594 28.5065 24.8308 29.2681 24.8505 30.1876C24.8525 31.1072 25.5851 31.8648 26.4935 31.8848C27.4196 31.8828 28.1699 31.1211 28.168 30.1816C28.168 29.2421 27.4156 28.4845 26.4875 28.4845ZM10.2164 28.4865C9.30802 28.5264 8.59715 29.2881 8.59912 30.2076C8.64059 31.1271 9.39096 31.8468 10.2993 31.8048C11.1899 31.7648 11.8988 31.0032 11.8573 30.0837C11.8376 29.1841 11.105 28.4845 10.2164 28.4865ZM18.3519 28.4765C17.4436 28.5184 16.7347 29.2781 16.7347 30.1976C16.7762 31.1171 17.5265 31.8348 18.4349 31.7948C19.3235 31.7528 20.0344 30.9932 19.9929 30.0717C19.9731 29.1741 19.2405 28.4745 18.3519 28.4765ZM10.2065 21.2901C9.29815 21.33 8.58925 22.0917 8.59122 23.0112C8.63072 23.9307 9.38306 24.6504 10.2914 24.6084C11.18 24.5684 11.8889 23.8068 11.8474 22.8873C11.8277 21.9877 11.0971 21.2881 10.2065 21.2901ZM18.344 21.2201C17.4357 21.2601 16.7248 22.0217 16.7268 22.9412C16.7663 23.8608 17.5186 24.5784 18.427 24.5384C19.3156 24.4965 20.0245 23.7368 19.985 22.8173C19.9633 21.9178 19.2326 21.2181 18.344 21.2201ZM26.4796 21.2301C25.5713 21.2501 24.8604 21.9897 24.8624 22.9093V22.9312C24.8821 23.8508 25.6325 24.5484 26.5428 24.5284C27.4314 24.5065 28.1403 23.7448 28.1206 22.8253C28.0791 21.9457 27.3663 21.2281 26.4796 21.2301ZM24.1693 6.11967L12.4398 6.13566L12.4418 7.75285C12.4418 8.61442 11.7921 9.29408 10.9233 9.29408C10.0544 9.29608 9.40083 8.61841 9.40083 7.75685L9.39886 6.21762C5.54828 6.60342 3.41763 8.86629 3.42354 13.2021L3.42552 13.8238L33.3218 13.7838V13.0842C33.2369 8.78633 31.0806 6.53146 27.2103 6.19563L27.2122 7.73486C27.2122 8.59443 26.5428 9.27609 25.6937 9.27609C24.8249 9.27808 24.1713 8.59842 24.1713 7.73886L24.1693 6.11967Z' fill={color} />
//             </Svg>
//           ),
//         }}
//       />



//       <Tab.Screen

//         name='Profile'
//         component={Profile}
//         options={{
//           tabBarLabel: 'پروفایل',
//           tabBarIcon: ({ color }) => (
//             <Svg width='19.4' height='23.75' viewBox='0 0 33 41'>
//               <Path d='M16.3624 27.2807C25.0397 27.2807 32.3624 28.6908 32.3624 34.1308C32.3624 39.5729 24.9917 40.9329 16.3624 40.9329C7.68717 40.9329 0.362427 39.5229 0.362427 34.0828C0.362427 28.6408 7.73319 27.2807 16.3624 27.2807ZM16.3624 0.932884C22.2406 0.932884 26.9504 5.64093 26.9504 11.515C26.9504 17.389 22.2406 22.0991 16.3624 22.0991C10.4862 22.0991 5.77446 17.389 5.77446 11.515C5.77446 5.64093 10.4862 0.932884 16.3624 0.932884Z' fill={color} />
//             </Svg>
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// }




export default function App({ navigation }) {
  const [fontLoade] = useFonts({
    'Casablanca_Heavy_MRT' : require('./assets/fonts/Casablanca_Heavy_MRT.ttf'),
    'Casablanca_Light_MRT' : require('./assets/fonts/Casablanca_Light_MRT.ttf'),
    'Casablanca_MRT' : require('./assets/fonts/Casablanca_MRT.ttf'),
    'BHoma' : require('./assets/fonts/BHoma.ttf')

  })
  if(!fontLoade){
    return(null)
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Register' component={Register} options={{ headerShown: false }} />
        <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
        <Stack.Screen name='Verify' component={Verify} options={{ headerShown: false }} />
        <Stack.Screen name='ChangePassword' component={ChangePassword} options={{ headerShown: false }} />
        <Stack.Screen name='CompleteInformation' component={CompleteInformation} options={{ headerShown: false }} />
        <Stack.Screen name='ForgotPassword' component={ForgotPassword} options={{ headerShown: false }} />
        <Stack.Screen name='ProductDetail' component={ProductDetail} options={{ headerShown: false }} />
        <Stack.Screen name='Main' component={Main} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}