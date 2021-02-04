import 'react-native-gesture-handler';
import React from 'react';
import Navigation from './src/Shared/Navigation';
import {NavigationContainer} from '@react-navigation/native';

const App = (props) => {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
};

export default App;
