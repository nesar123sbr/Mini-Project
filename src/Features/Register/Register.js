import React, {useState} from 'react';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import {RegisterStyle} from './Style';
import {connect} from 'react-redux';
import {actionRegister} from './Redux/Action';

function Register(props) {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={{backgroundColor: 'black', flex: 1}}>
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
          value={name}
          placeholderTextColor="white"
          style={RegisterStyle.TextInput}
          placeholder="Name"
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          value={username}
          placeholderTextColor="white"
          style={RegisterStyle.TextInput}
          placeholder="Username"
          onChangeText={(text) => setUsername(text)}
        />
        <TextInput
          value={email}
          placeholderTextColor="white"
          style={RegisterStyle.TextInput}
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          value={password}
          placeholderTextColor="white"
          style={RegisterStyle.TextInput}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity
          onPress={() => props.actionRegister(name, username, email, password)}
          style={{
            alignItems: 'center',
            backgroundColor: 'white',
            padding: 10,
            width: 120,
            borderRadius: 30,
            justifyContent: 'center',
          }}>
          <Text style={{alignSelf: 'center', fontSize: 15, color: 'black'}}>
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

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  actionRegister,
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
