import React from 'react';
import {ErrorStateType} from './types.ts';
import {Button, Modal, Text} from 'react-native-paper';
import {Colors} from '../../common/theme/colors.ts';
import {View} from 'react-native';
import styles from './styles.ts';

export const ErrorState = (props: ErrorStateType) => {
  const {
    testID,
    visible = false,
    title,
    message,
    actionButtonText,
    actionButtonOnPress = () => {},
  } = props;

  return (
    <Modal
      testID={testID}
      visible={visible}
      dismissable={false}
      style={styles.modal}>
      <View style={styles.background}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.message}>{message}</Text>
        <Button
          onPress={actionButtonOnPress}
          mode={'contained'}
          buttonColor={Colors.red}
          style={styles.actionButton}
          textColor={Colors.white}>
          {actionButtonText}
        </Button>
      </View>
    </Modal>
  );
};
