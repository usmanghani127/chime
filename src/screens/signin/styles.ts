import {StyleSheet} from 'react-native';
import {Colors} from '../../common/theme/colors.ts';

export default StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  wrapper: {
    alignItems: 'center',
  },
  chimeLogo: {},
  needHelp: {
    margin: 30,
  },
  needHelpText: {
    color: Colors.primary,
    fontWeight: 'bold',
    fontSize: 18,
  },
  smsAgreement: {
    textAlign: 'center',
    margin: 20,
    color: Colors.grey,
  },
  signInButton: {
    alignSelf: 'stretch',
    borderRadius: 0,
    marginVertical: 20,
  },
});
