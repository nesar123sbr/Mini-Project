import {StyleSheet} from 'react-native';
import {withTheme} from 'react-native-elements';
import {widthPercentageToDP} from 'react-native-responsive-screen';

export const LoginStyle = StyleSheet.create({
  Logo: {
    width: 100,
    height: 100,
    marginTop: 80,
  },
  Gabungan: {
    alignItems: 'center',
    color: 'white',
  },
  TextInput: {
    color: 'white',
    width: widthPercentageToDP(90),
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    marginBottom: 28,
    fontWeight: 'bold',
  },
  TextForgot: {
    color: 'white',
    width: widthPercentageToDP(90),
    textAlign: 'right',
  },
  appButtonContainer: {
    backgroundColor: 'white',
  },
  appButtonText: {
    color: 'green',
  },
  TextSubmit: {
    backgroundColor: 'white',
    justifyContent: 'center',
    marginTop: 22,
    marginBottom: 20,
    fontSize: 20,
    padding: 15,
    borderRadius: 30,
    fontWeight: 'bold',
    width: 120,
    alignSelf: 'center',
    alignItems: 'center',
  },
  TextRegister: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
  },
});
