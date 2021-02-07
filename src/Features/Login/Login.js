import React, {useState} from 'react';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import {LoginStyle} from './Style';
import {connect} from 'react-redux';
import {actionLogin} from './Redux/Action';

function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={{backgroundColor: 'black', flex: 1}}>
      <View style={LoginStyle.Gabungan}>
        <Image
          style={LoginStyle.Logo}
          source={require('../../Assets/Images/image1.png')}
        />
        <Text style={{color: 'white'}}>Movie Review</Text>
        <TextInput
          value={email}
          placeholderTextColor="white"
          style={LoginStyle.TextInput}
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          value={password}
          secureTextEntry={true}
          placeholderTextColor="white"
          style={LoginStyle.TextInput}
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity>
          <Text style={LoginStyle.TextForgot}>Forgot your password?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.actionLogin(email, password)}>
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

const mapStateToProps = (state) => ({});

//untuk dispatch reduxm kumpulan action
const mapDispatchToProps = {
  actionLogin,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
