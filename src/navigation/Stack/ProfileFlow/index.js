import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Profile from '../../../screens/Profile'

const Stack = createStackNavigator();

function App() {
  return (
      <Stack.Navigator
        headerMode={'none'}
      >
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
  );
}

export default App;