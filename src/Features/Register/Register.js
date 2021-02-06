import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Button,
} from 'react-native';
import {color} from 'react-native-reanimated';
import {RegisterStyle} from './Style';

export default function Register(props) {
  return (
    <View>
      <View style={[RegisterStyle.Gabungan, {alignItems: 'center'}]}>
        <Image
          style={RegisterStyle.Orang}
          source={require('../../Assets/Images/orang.png')}
        />
        <Image
          style={RegisterStyle.Pulpen}
          source={require('../../Assets/Images/pulpen.png')}
        />
        <TextInput
          placeholderTextColor="white"
          style={RegisterStyle.TextInput}
          placeholder="Name"
        />
        <TextInput
          placeholderTextColor="white"
          style={RegisterStyle.TextInput}
          placeholder="Username"
        />
        <TextInput
          placeholderTextColor="white"
          style={RegisterStyle.TextInput}
          placeholder="Email"
        />
        <TextInput
          placeholderTextColor="white"
          style={RegisterStyle.TextInput}
          placeholder="Password"
          secureTextEntry={true}
        />
        <TouchableOpacity
          style={{
            alignItems: 'center',
            backgroundColor: 'white',
            padding: 10,
            width: 120,
            borderRadius: 30,
            justifyContent: 'center',
          }}>
          <Text style={{alignSelf: 'center', fontSize: 15, color: 'black'}}>
            {' '}
            Sign Up
          </Text>
        </TouchableOpacity>
        <Text style={[{color: 'white'}]}>Already have an account?</Text>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Login')}
          style={{alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{fontSize: 15, color: 'white'}}> Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
