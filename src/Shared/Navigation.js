import React from 'react';

import Home from '../Features/Homepage/Home';
import Reviews from '../Features/Allreview/Reviews';
import UserReview from '../Features/UserReview/UserReview';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createStackNavigator} from '@react-navigation/stack';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export function myReviewStack() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="User Review" component={UserReview} />
      <Stack.Screen name="Reviews" component={Reviews} />
    </Stack.Navigator>
  );
}

export default function Navigation(props) {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="YourReviews"
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
        component={Reviews}
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name="person-circle-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
