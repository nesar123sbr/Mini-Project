import React from 'react';

import Home from '../Features/Homepage/Home';
import Reviews from '../Features/Allreview/Reviews';
import UserReview from '../Features/UserReview/UserReview';
import Login from '../Features/Login/Login';
// import Register from '../Features/Register/Register';
import Profile from '../Features/Profile/Profile';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createStackNavigator} from '@react-navigation/stack';
import Register from '../Features/Register/Register';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export function AuthNav(props) {
  return (
    <Stack.Navigator initialRouteName="Login" headerMode="none">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
}

export function myReviewStack() {
  return (
    <Stack.Navigator initialRouteName="User Review">
      <Stack.Screen name="User Review" component={UserReview} />
      <Stack.Screen name="Reviews" component={Reviews} />
    </Stack.Navigator>
  );
}

function bottomTab(props) {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="UserReview"
        component={myReviewStack}
        options={{
          tabBarLabel: 'Your Review',
          tabBarIcon: ({color, size}) => (
            <FontAwesome name="comment-o" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name="person-circle-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <Stack.Navigator initialRouteName="Auth" headerMode="none">
      <Stack.Screen name="Main" component={bottomTab} />
      <Stack.Screen name="Auth" component={AuthNav} />
    </Stack.Navigator>
  );
}
