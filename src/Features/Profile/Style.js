import {StyleSheet}  from 'react-native';
import { withTheme } from 'react-native-elements';
import {widthPercentageToDP} from 'react-native-responsive-screen';

export const ProfileStyle= StyleSheet.create ({
    Orang : {
        height : 100,
        width : 100,
        alignItems  : 'center',
        alignSelf : 'center',
    },
    TextInput : {
        color : 'white',
        width : widthPercentageToDP(90),
        borderBottomWidth : 1,
        borderBottomColor : 'white',
        marginBottom : 28,
    },
    Pulpen: {
        alignContent: 'center',
        alignSelf   :'center',
    }
       
    
})