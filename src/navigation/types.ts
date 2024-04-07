import {RouteKeys} from './routes.ts';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type StackNavigatorProps = {
  [RouteKeys.SIGN_IN]: undefined;
  [RouteKeys.HOME]: undefined;
};

export type StackScreenProps<RouteKey extends keyof StackNavigatorProps> =
  NativeStackScreenProps<StackNavigatorProps, RouteKey>;
