import React from 'react';
import {Button, SafeAreaView, Text} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RouteKeys} from '../../navigation/routes.ts';
import {StackNavigatorProps} from '../../navigation/types.ts';
import Translations from '../../localization';

export const SignInScreen = (
  props: NativeStackScreenProps<StackNavigatorProps, RouteKeys.SIGN_IN>,
) => {
  const {navigation} = props;
  return (
    <SafeAreaView>
      <Text>{Translations.dummy.signInScreenText}</Text>
      <Button
        title={Translations.dummy.signInScreenButton}
        onPress={() => navigation.navigate(RouteKeys.HOME)}
      />
    </SafeAreaView>
  );
};
