import {Button, SafeAreaView, Text} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RouteKeys} from '../../navigation/routes.ts';
import {StackNavigatorProps} from '../../navigation/types.ts';

export const SignInScreen = (
  props: NativeStackScreenProps<StackNavigatorProps, RouteKeys.SIGN_IN>,
) => {
  const {navigation} = props;
  return (
    <SafeAreaView>
      <Text>Hello World. This is Sign In Screen</Text>
      <Button
        title={'Navigate to Home Screen'}
        onPress={() => navigation.navigate(RouteKeys.HOME)}
      />
    </SafeAreaView>
  );
};
