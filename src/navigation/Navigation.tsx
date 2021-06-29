import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//vistas
import { Detalle } from '../screens/Detalle';
import { Home } from '../screens/Home';
import { Movie } from '../interfaces/movieInterface';

export type RootStackParams = {
  Home:undefined,
  Detalle:Movie
}

const Stack = createStackNavigator<RootStackParams>();

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