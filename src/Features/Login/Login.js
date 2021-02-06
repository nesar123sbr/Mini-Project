import React from 'react';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';

import {LoginStyle} from './Style';

export default function Login(props) {
  return (
    <View style={{backgroundColor: 'black', flex: 1}}>
      <View style={LoginStyle.Gabungan}>
        <Image
          style={LoginStyle.Logo}
          source={require('../../Assets/Images/image1.png')}
        />
        <Text style={{color: 'white'}}>Movie Review</Text>
        <TextInput
          placeholderTextColor="white"
          style={LoginStyle.TextInput}
          placeholder="Email"
        />
        <TextInput
          secureTextEntry={true}
          placeholderTextColor="white"
          style={LoginStyle.TextInput}
          placeholder="Password"
        />
        <TouchableOpacity>
          <Text style={LoginStyle.TextForgot}>Forgot your password?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
          <Text style={LoginStyle.TextSubmit}>Sign In</Text>
        </TouchableOpacity>
        <Text style={LoginStyle.TextRegister} color="white">
          Don't have an account?
        </Text>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Register')}
          style={{alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{fontSize: 15, color: 'white'}}> Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
