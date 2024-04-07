import {StyleSheet} from 'react-native';
import {Colors} from '../../common/theme/colors.ts';

export default StyleSheet.create({
  fieldWrapper: {
    marginHorizontal: 50,
    marginVertical: 15,
    alignSelf: 'stretch',
  },
  field: {
    backgroundColor: Colors.white,
  },
  error: {
    color: Colors.red,
  },
});
