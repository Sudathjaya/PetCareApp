import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CarouselScreen from '../screens/carousel/CarouselScreen';

const Stack = createStackNavigator();

export default function IntitialStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Carousel" component={CarouselScreen} />
    </Stack.Navigator>
  );
}
