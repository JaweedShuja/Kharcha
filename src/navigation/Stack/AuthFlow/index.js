import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../../../screens/Login'
import SignUp from '../../../screens/SignUp'

const Stack = createStackNavigator();

function AuthFlow() {
  return (
      <Stack.Navigator
        headerMode={'none'}
        initialRouteName="Login"
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
  );
}

export default AuthFlow;