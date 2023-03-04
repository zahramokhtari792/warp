import { StyleSheet, Platform } from 'react-native';
import { darkPurple } from '../Components/Colors';

export const CELL_SIZE = 45;
export const CELL_BORDER_RADIUS = 8;
export const DEFAULT_CELL_BG_COLOR = '#fff';
export const NOT_EMPTY_CELL_BG_COLOR = '#E1B4D4';
export const ACTIVE_CELL_BG_COLOR = '#fff';

const Styles = StyleSheet.create({
    codeFieldRoot: {
        height: 45,
        paddingHorizontal: 20,
        justifyContent: 'center',
    },

    cell: {
        marginHorizontal: 8,
        height: 45,
        width: 45,
        lineHeight: 45 - 5,
        ...Platform.select({ web: { lineHeight: 65 } }),
        fontSize: 24,
        textAlign: 'center',
        borderRadius: 8,
        color: '#E1B4D4',
        backgroundColor: '#fff',

        // IOS
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        // Android
        elevation: 3,
    },

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
    container:{
        backgroundColor:'#fff',
        flex:1,
    }
});

export default Styles