import React, {useEffect, useState} from 'react';
import {Alert, Keyboard, Pressable, SafeAreaView} from 'react-native';
import Translations from '../../localization';
import {ErrorState, InputField, LoadingState} from '../../components';
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
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

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
  const [errorMessage, setErrorMessage] = useState('');
  const [signInApiCall, {data, error, isLoading, status}] = useSignInMutation();

  const onSubmit = (inputData: InputFieldFormKeys) => {
    Keyboard.dismiss();
    signInApiCall(inputData)
      .then(() => {})
      .catch(apiError => console.log({apiError}));
  };

  const submit = handleSubmit(onSubmit);

  // A better approach would be to handle this api response in services/api file,
  // and store the required data in redux, so that it is available to every screen.
  // But due to time constraint, I am handling the data here.

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
        let _errorMessage = error?.error;
        if (errorStatus === 400) {
          console.log('Invalid Credentials');
          // @ts-ignore
          _errorMessage = Translations.signIn.errorMessage;
        } else {
          console.log('Some thing went wrong ', errorMessage);
        }
        setErrorMessage(_errorMessage);
        break;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, error, status]);

  return (
    <SafeAreaView style={styles.background}>
      <KeyboardAwareScrollView
        contentContainerStyle={styles.wrapper}
        showsVerticalScrollIndicator={false}>
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
      </KeyboardAwareScrollView>
      <LoadingState visible={isLoading} />
      <ErrorState
        visible={errorMessage.length > 0}
        title={Translations.signIn.errorTitle}
        message={errorMessage}
        actionButtonText={Translations.signIn.errorButton}
        actionButtonOnPress={() => setErrorMessage('')}
      />
    </SafeAreaView>
  );
};
