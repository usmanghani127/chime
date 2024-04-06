import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import Translations from '../../localization';

export const HomeScreen = () => {
  return (
    <SafeAreaView>
      <Text>{Translations.dummy.homeScreenText}</Text>
    </SafeAreaView>
  );
};
