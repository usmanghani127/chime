import React from 'react';
import {Button, SafeAreaView, Text} from 'react-native';
import {RouteKeys} from '../../navigation/routes';
import {StackScreenProps} from '../../navigation/types';
import Translations from '../../localization';
import {VectorIcon} from '../../components';

export const SignInScreen = (props: StackScreenProps<RouteKeys.SIGN_IN>) => {
  const {navigation} = props;
  return (
    <SafeAreaView>
      <Text>{Translations.dummy.signInScreenText}</Text>
      <VectorIcon
        name={'face-man-profile'}
        type={'MaterialCommunityIcons'}
        size={40}
      />
      <Button
        title={Translations.dummy.signInScreenButton}
        onPress={() => navigation.navigate(RouteKeys.HOME)}
      />
    </SafeAreaView>
  );
};
