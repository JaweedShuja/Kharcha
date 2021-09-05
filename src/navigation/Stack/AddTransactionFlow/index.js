import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AddTransaction from '../../../screens/AddTransaction'

const Stack = createStackNavigator();

function App() {
  return (
      <Stack.Navigator
        headerMode={'none'}
      >
        <Stack.Screen name="AddTransaction" component={AddTransaction} />
      </Stack.Navigator>
  );
}

export default App;