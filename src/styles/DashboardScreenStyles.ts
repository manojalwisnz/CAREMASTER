import {StyleSheet} from 'react-native';
import {colors} from './theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  header: {
    fontSize: 30,
    marginBottom: 10,
  },
});
