import {StyleSheet} from 'react-native';
import {colors} from './theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: colors.text,
    fontFamily: 'Arial-Bold',
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: colors.primary, // Apply primary color for the input border
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    padding: 10,
    color: colors.text,
    fontFamily: 'Arial',
  },
  error: {
    color: colors.error, // Use the red color from the theme
    marginBottom: 10,
  },
  loginButton: {
    backgroundColor: 'blue', // Customize the button background color
    width: '80%',
  },
  loginButtonText: {
    color: 'white', // Customize the button text color
  },
});
