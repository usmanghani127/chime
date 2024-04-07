export type SignInTranslationKeys = Record<
  | 'emailPlaceholder'
  | 'emailRequired'
  | 'emailInvalid'
  | 'passwordPlaceholder'
  | 'passwordRequired'
  | 'helpButton'
  | 'smsAgreement'
  | 'signInButton'
  | 'errorTitle'
  | 'errorMessage'
  | 'errorButton',
  string
>;

export type InputFieldFormKeys = {
  email: string;
  password: string;
};
