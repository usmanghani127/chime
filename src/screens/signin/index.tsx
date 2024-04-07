import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {RouteKeys} from '../../navigation/routes';
import {StackScreenProps} from '../../navigation/types';
import Translations from '../../localization';
import {VectorIcon} from '../../components';
import {Button, TextInput} from 'react-native-paper';
import ChimeLogo from '../../assets/images/chime_logo.svg';

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
      <ChimeLogo width={200} height={200} />
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
