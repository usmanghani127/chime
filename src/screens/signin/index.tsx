import React, {useEffect, useState} from 'react';
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
import {useSignInMutation} from '../../services/api';
import {StackScreenProps} from '../../navigation/types.ts';
import {RouteKeys} from '../../navigation/routes.ts';

export const SignInScreen = (props: StackScreenProps<RouteKeys.SIGN_IN>) => {
  const {navigation} = props;
  const {
    handleSubmit,
    control,
    formState: {errors, isValid},
    setFocus,
  } = useForm<InputFieldFormKeys>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    defaultValues: {email: 'atuny0@sohu.com', password: '9uQFF1Lh'},
  });
  const [secureTextInput, setSecureTextInput] = useState(true);
  const [signInApiCall, {data, error, status}] = useSignInMutation();

  const onSubmit = (data: InputFieldFormKeys) => {
    Keyboard.dismiss();
    signInApiCall(data)
      .then(() => {})
      .catch(apiError => console.log({apiError}));
  };

  const submit = handleSubmit(onSubmit);

  useEffect(() => {
    switch (status) {
      case 'pending':
        console.log('API call in progress');
        break;
      case 'fulfilled':
        console.log('API call succeeded', data);
        navigation.navigate(RouteKeys.HOME);
        break;
      case 'rejected':
        console.log('API call failed');
        // @ts-ignore
        const errorStatus = error?.status;
        // @ts-ignore
        const errorMessage = error?.error;
        if (errorStatus === 400) {
          console.log('Invalid Credentials');
        } else {
          console.log('Some thing went wrong ', errorMessage);
          Alert.alert('Error', errorMessage);
        }
        break;
    }
  }, [data, error, status]);

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
