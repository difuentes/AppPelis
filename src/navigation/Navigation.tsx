import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { Detalle } from '../screens/Detalle';
import { Home } from '../screens/Home';

const Stack = createStackNavigator();

export const Navigation = ()=> {
  return (
    <Stack.Navigator
        screenOptions={{
            headerShown:false,
            cardStyle:{
                backgroundColor:'white'
            }
        }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Detalle" component={Detalle} />

    </Stack.Navigator>
  );
}