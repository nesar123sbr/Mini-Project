import React, {useState} from 'react';
import {View, Image, TextInput, TouchableOpacity, Text} from 'react-native';
import {ProfileStyle} from './Style';
import {connect} from 'react-redux';
import {editProfile, showProfile} from './Redux/Action';

function Profile(props) {
  const [name, setName] = useState(props.name);
  const [username, setUsername] = useState(props.username);
  const [email, setEmail] = useState(props.email);
  const [password, setPassword] = useState('');
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
          value={name}
          placeholderTextColor="white"
          style={ProfileStyle.TextInput}
          placeholder="Name"
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          value={username}
          placeholderTextColor="white"
          style={ProfileStyle.TextInput}
          placeholder="Username"
          onChangeText={(text) => setUsername(text)}
        />
        <TextInput
          value={email}
          placeholderTextColor="white"
          style={ProfileStyle.TextInput}
          placeholder="Email"
          editable={false}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          value={password}
          placeholderTextColor="white"
          style={ProfileStyle.TextInput}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity
          onPress={() => props.editProfile(name, username, email, password)}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'center',
          }}>
          <Text
            style={{
              fontSize: 15,
              color: 'black',
              backgroundColor: '#9fdb81',
              padding: 15,
              borderRadius: 10,
              alignSelf: 'center',
              marginBottom: 80,
            }}>
            Save Changes
          </Text>
        </TouchableOpacity>
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
              backgroundColor: 'red',
              padding: 15,
              borderRadius: 10,
              alignSelf: 'center',
            }}>
            Log out
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const mapStateToProps = (state) => ({
  name: state.loginReducer.name,
  username: state.loginReducer.username,
  email: state.loginReducer.email,
});

const mapDispatchToProps = {editProfile, showProfile};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
