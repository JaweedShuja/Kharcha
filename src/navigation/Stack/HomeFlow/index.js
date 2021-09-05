import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TabNavigation from '../../Tab'

const Stack = createStackNavigator();

function App() {
  return (
      <Stack.Navigator
        headerMode={'none'}
        initialRouteName="Home"
      > 
        <Stack.Screen name="Home" component={TabNavigation} />
      </Stack.Navigator>
  );
}

export default App;