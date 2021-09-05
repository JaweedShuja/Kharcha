import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Splash from '../../../screens/Splash'
import AppFlow from '../AppFlow'

const Stack = createStackNavigator();

function RootFlow() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode={'none'}
        initialRouteName="Splash"
      >
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="AppFlow" component={AppFlow} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootFlow;