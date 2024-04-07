import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {RouteKeys} from '../../navigation/routes';
import {StackScreenProps} from '../../navigation/types';
import Translations from '../../localization';
import {VectorIcon} from '../../components';
import {Button, TextInput} from 'react-native-paper';

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
      <TextInput
        mode="outlined"
        label="Outlined input"
        placeholder="Type something"
        right={<TextInput.Icon icon="eye" />}
      />
      <Button
        onPress={() => navigation.navigate(RouteKeys.HOME)}
        icon={'home'}
        mode={'contained'}>
        {Translations.dummy.signInScreenButton}
      </Button>
    </SafeAreaView>
  );
};
