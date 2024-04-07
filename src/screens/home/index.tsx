import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import Translations from '../../localization';
import styles from './styles.ts';

export const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.background}>
      <Text style={styles.successText}>{Translations.home.success}</Text>
    </SafeAreaView>
  );
};
