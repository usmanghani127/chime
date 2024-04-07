import React, {useState} from 'react';
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Pressable,
  SafeAreaView,
} from 'react-native';
import Translations from '../../localization';
import {InputField} from '../../components';
import {Button, Text, TextInput} from 'react-native-paper';
import ChimeLogo from '../../assets/images/chime_logo.svg';
import styles from './styles.ts';
import {useForm} from 'react-hook-form';
import {InputFieldFormKeys} from './types.ts';
import {regex} from '../../common/regex.ts';
import {Colors} from '../../common/theme/colors.ts';

export const SignInScreen = () => {
  const {
    handleSubmit,
    control,
    formState: {errors, isValid},
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
      <KeyboardAvoidingView
        contentContainerStyle={styles.keyboardAvoidingView}
        behavior={'position'}>
        <ChimeLogo width={150} height={150} style={styles.chimeLogo} />
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
        <Pressable
          style={styles.needHelp}
          onPress={() => Alert.alert('Hang On', 'Help is coming!')}>
          <Text style={styles.needHelpText}>
            {Translations.signIn.helpButton}
          </Text>
        </Pressable>
        <Text style={styles.smsAgreement}>
          {Translations.signIn.smsAgreement}
        </Text>
        <Button
          onPress={submit}
          mode={'contained'}
          buttonColor={Colors.primary}
          textColor={Colors.black}
          disabled={!isValid}
          style={styles.signInButton}>
          {Translations.signIn.signInButton}
        </Button>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
