import React from 'react';
import {InputFieldType} from './types.ts';
import {Controller} from 'react-hook-form';
import {HelperText, TextInput} from 'react-native-paper';
import styles from './styles.ts';
import {Colors} from '../../common/theme/colors.ts';
import {View} from 'react-native';

export const InputField = (props: InputFieldType) => {
  const {
    name,
    control,
    required,
    requiredMessage = '',
    pattern = '^.+$', // accepts any input
    errorMessage = '',
    errors,
    ...rest
  } = props;

  return (
    <Controller
      control={control}
      name={name}
      render={({field: {onChange, value, onBlur, ref}}) => (
        <View style={styles.fieldWrapper}>
          <TextInput
            ref={ref}
            style={styles.field}
            cursorColor={Colors.primary}
            activeUnderlineColor={Colors.primary}
            onChangeText={onChange}
            value={value}
            autoCapitalize={'none'}
            onBlur={onBlur}
            blurOnSubmit={false}
            textColor={Colors.black}
            error={!!errors[name]}
            {...rest}
          />
          <HelperText type="error" visible={!!errors[name]}>
            {errors[name]?.message}
          </HelperText>
        </View>
      )}
      rules={{
        required: {
          value: required,
          message: requiredMessage,
        },
        pattern: {
          value: new RegExp(pattern),
          message: errorMessage,
        },
      }}
    />
  );
};
