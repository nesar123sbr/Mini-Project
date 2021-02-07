import 'react-native-gesture-handler';
import React from 'react';
import Navigation from './src/Shared/Navigation';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {Store, Persistor} from './src/Store/Store';
import {PersistGate} from 'redux-persist/integration/react';
import {navigationRef} from './src/Utils/Nav';

const App = () => {
  return (
    <Provider store={Store}>
      <PersistGate persistor={Persistor}>
        <NavigationContainer ref={navigationRef}>
          <Navigation />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
