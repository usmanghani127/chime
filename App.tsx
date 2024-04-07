/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StackNavigator} from './src/navigation/stackNavigator.tsx';
import SplashScreen from 'react-native-splash-screen';
import {PaperProvider} from 'react-native-paper';

function App(): React.JSX.Element {
  useEffect(() => {
    setTimeout(() => SplashScreen.hide(), 3000);
  }, []);

  return (
    <NavigationContainer>
      <PaperProvider>
        <StackNavigator />
      </PaperProvider>
    </NavigationContainer>
  );
}

export default App;
