import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Statistics from '../../../screens/Statistics'

const Stack = createStackNavigator();

function App() {
  return (
      <Stack.Navigator
        headerMode={'none'}
      >
        <Stack.Screen name="Statistics" component={Statistics} />
      </Stack.Navigator>
  );
}

export default App;