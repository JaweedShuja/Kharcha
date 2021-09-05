import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Transactions from '../../../screens/Transactions'

const Stack = createStackNavigator();

function App() {
  return (
      <Stack.Navigator
        headerMode={'none'}
      >
        <Stack.Screen name="Transactions" component={Transactions} />
      </Stack.Navigator>
  );
}

export default App;