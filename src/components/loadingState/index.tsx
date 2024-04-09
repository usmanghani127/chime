import React from 'react';
import {LoadingStateType} from './types.ts';
import {ActivityIndicator, Modal} from 'react-native-paper';
import {Colors} from '../../common/theme/colors.ts';

export const LoadingState = (props: LoadingStateType) => {
  const {visible = false, testID} = props;

  return (
    <Modal testID={testID} visible={visible} dismissable={false}>
      <ActivityIndicator color={Colors.primary} size={'large'} />
    </Modal>
  );
};
