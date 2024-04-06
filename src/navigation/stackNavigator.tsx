import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RouteKeys} from './routes.ts';
import {HomeScreen, SignInScreen} from '../screens';
import {StackNavigatorProps} from './types.ts';

const Stack = createNativeStackNavigator<StackNavigatorProps>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={RouteKeys.SIGN_IN}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={RouteKeys.HOME} component={HomeScreen} />
      <Stack.Screen name={RouteKeys.SIGN_IN} component={SignInScreen} />
    </Stack.Navigator>
  );
};
