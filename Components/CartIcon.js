import React from 'react'
import { Svg, Path } from 'react-native-svg';

const CartIcon = ({ color }) => {
    return (
        <Svg width="24" height="24" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M6.24026 19.444C7.19402 19.444 7.97541 20.2421 7.97541 21.2279C7.97541 22.202 7.19402 23 6.24026 23C5.27501 23 4.49362 22.202 4.49362 21.2279C4.49362 20.2421 5.27501 19.444 6.24026 19.444ZM19.1677 19.444C20.1214 19.444 20.9028 20.2421 20.9028 21.2279C20.9028 22.202 20.1214 23 19.1677 23C18.2024 23 17.421 22.202 17.421 21.2279C17.421 20.2421 18.2024 19.444 19.1677 19.444ZM1.01206 0.010049L3.75268 0.431366C4.14337 0.502955 4.43065 0.830385 4.46512 1.2294L4.68345 3.85824C4.71793 4.23496 5.01669 4.51662 5.38441 4.51662H20.9031C21.604 4.51662 22.0637 4.76307 22.5233 5.30292C22.9829 5.84277 23.0634 6.61733 22.96 7.32031L21.8683 15.019C21.6615 16.4989 20.4204 17.5892 18.9611 17.5892H6.42435C4.89604 17.5892 3.63202 16.3933 3.50562 14.8442L2.44845 2.05091L0.713298 1.74578C0.253656 1.66363 -0.0680935 1.20593 0.0123438 0.736498C0.0927811 0.256502 0.540932 -0.0615397 1.01206 0.010049ZM17.1225 8.85771H13.9395C13.4569 8.85771 13.0777 9.24499 13.0777 9.7379C13.0777 10.2191 13.4569 10.6181 13.9395 10.6181H17.1225C17.6051 10.6181 17.9843 10.2191 17.9843 9.7379C17.9843 9.24499 17.6051 8.85771 17.1225 8.85771Z" fill={color} />
        </Svg>
    );
}

export default CartIcon;