import {Props} from 'react-native-paper/src/components/TextInput/TextInput.tsx';
// @ts-ignore
import {Control, FieldErrors} from 'react-hook-form/dist/types';

export type InputFieldType = Props & {
  name: string;
  control: Control;
  errors: FieldErrors;
  required: boolean;
  requiredMessage?: string;
  pattern?: string;
  errorMessage?: string;
};
