import {SignInTranslationKeys} from '../screens/signin/types.ts';
import {HomeTranslationKeys} from '../screens/home/types.ts';

type DummyTranslationKeys = Record<
  'homeScreenText' | 'signInScreenText' | 'signInScreenButton' | 'submitButton',
  string
>;

export type TranslationKeys = {
  signIn: SignInTranslationKeys;
  home: HomeTranslationKeys;
  dummy: DummyTranslationKeys;
};
