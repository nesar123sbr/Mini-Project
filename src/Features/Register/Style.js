import {StyleSheet}  from 'react-native';
import { withTheme } from 'react-native-elements';
import {widthPercentageToDP} from 'react-native-responsive-screen';

export const RegisterStyle= StyleSheet.create ({
    TextInput : {
        color : 'white',
        width : widthPercentageToDP(90),
        borderBottomWidth : 1,
        borderBottomColor : 'white',
        marginBottom : 28,
    },
    Orang : {
        height : 100,
        width : 100,
        alignItems  : 'center',
        alignSelf : 'center',
    },
    TextSubmit : {
        color: 'white',
    }


})