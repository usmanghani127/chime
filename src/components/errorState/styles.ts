import {StyleSheet} from 'react-native';
import {Colors} from '../../common/theme/colors.ts';

export default StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
  },
  background: {
    backgroundColor: Colors.white,
    marginBottom: -50,
    paddingVertical: 50,
    paddingHorizontal: 20,
  },
  actionButton: {
    margin: 20,
  },
  title: {
    color: Colors.black,
    fontWeight: 'bold',
    fontSize: 20,
  },
  message: {
    color: Colors.grey,
    marginTop: 20,
  },
});
