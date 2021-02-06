import React from 'react';
import {View, Image, TextInput, TouchableOpacity, Text} from 'react-native';
import {ProfileStyle} from './Style';
import {widthPercentageToDP} from 'react-native-responsive-screen';

export default function Profile(props) {
  return (
    <View style={{backgroundColor: 'black', flex: 1}}>
      <View>
        <Image
          style={ProfileStyle.Orang}
          source={require('../../Assets/Images/orang.png')}
        />
        <Image
          style={ProfileStyle.Pulpen}
          source={require('../../Assets/Images/pulpen.png')}
        />
        <TextInput
          placeholderTextColor="white"
          style={ProfileStyle.TextInput}
          placeholder="Name"
        />
        <TextInput
          placeholderTextColor="white"
          style={ProfileStyle.TextInput}
          placeholder="Username"
        />
        <TextInput
          placeholderTextColor="white"
          style={ProfileStyle.TextInput}
          placeholder="Email"
        />
        <TextInput
          placeholderTextColor="white"
          style={ProfileStyle.TextInput}
          placeholder="Password"
          secureTextEntry={true}
        />
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Login')}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'center',
          }}>
          <Text
            style={{
              fontSize: 15,
              color: 'black',
              backgroundColor: 'white',
              padding: 15,
              width: widthPercentageToDP(30),
              alignSelf: 'center',
            }}>
            {' '}
            Log out
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
