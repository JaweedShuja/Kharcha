import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from '../../../screens/Dashboard'

const Stack = createStackNavigator();

function App() {
  return (
      <Stack.Navigator
        headerMode={'none'}
      >
        <Stack.Screen name="Dashboard" component={Dashboard} />
      </Stack.Navigator>
  );
}

export default App;