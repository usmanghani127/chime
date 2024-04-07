import React, {useState} from 'react';
import {Keyboard, SafeAreaView, Text} from 'react-native';
import {RouteKeys} from '../../navigation/routes';
import {StackScreenProps} from '../../navigation/types';
import Translations from '../../localization';
import {InputField, VectorIcon} from '../../components';
import {Button, TextInput} from 'react-native-paper';
import ChimeLogo from '../../assets/images/chime_logo.svg';
import styles from './styles.ts';
import {useForm} from 'react-hook-form';
import {InputFieldFormKeys} from './types.ts';
import {regex} from '../../common/regex.ts';

export const SignInScreen = (props: StackScreenProps<RouteKeys.SIGN_IN>) => {
  const {navigation} = props;
  const {
    handleSubmit,
    control,
    formState: {errors},
    setFocus,
  } = useForm<InputFieldFormKeys>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
  });
  const [secureTextInput, setSecureTextInput] = useState(true);

  const onSubmit = (data: InputFieldFormKeys) => {
    console.log({data});
    Keyboard.dismiss();
  };

  const submit = handleSubmit(onSubmit);
  return (
    <SafeAreaView style={styles.background}>
      <Text>{Translations.dummy.signInScreenText}</Text>
      <VectorIcon
        name={'face-man-profile'}
        type={'MaterialCommunityIcons'}
        size={40}
      />
      <ChimeLogo width={200} height={200} />
      <InputField
        name={'email'}
        control={control}
        errors={errors}
        required={true}
        pattern={regex.email}
        requiredMessage={Translations.signIn.emailRequired}
        errorMessage={Translations.signIn.emailInvalid}
        placeholder={Translations.signIn.emailPlaceholder}
        onSubmitEditing={() => setFocus('password')}
        returnKeyType={'next'}
      />
      <InputField
        name={'password'}
        control={control}
        errors={errors}
        required={true}
        requiredMessage={Translations.signIn.passwordRequired}
        placeholder={Translations.signIn.passwordPlaceholder}
        onSubmitEditing={submit}
        returnKeyType={'done'}
        secureTextEntry={secureTextInput}
        right={
          <TextInput.Icon
            icon={'eye'}
            onPress={() => setSecureTextInput(!secureTextInput)}
          />
        }
      />
      <Button
        onPress={() => navigation.navigate(RouteKeys.HOME)}
        icon={'home'}
        mode={'contained'}>
        {Translations.dummy.signInScreenButton}
      </Button>
      <Button onPress={submit} mode={'outlined'}>
        {Translations.dummy.submitButton}
      </Button>
    </SafeAreaView>
  );
};
