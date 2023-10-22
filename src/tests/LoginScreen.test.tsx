import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import LoginScreen from '../screens/LoginScreen';

test('it should navigate to Dashboard when credentials are correct', () => {
  const {getByText, getByPlaceholderText} = render(<LoginScreen />);

  const usernameInput = getByPlaceholderText('Username');
  const passwordInput = getByPlaceholderText('Password');
  const loginButton = getByText('Login');

  fireEvent.changeText(usernameInput, 'Manoj');
  fireEvent.changeText(passwordInput, '123');
  fireEvent.press(loginButton);
});

test('it should display an error message for incorrect credentials', () => {
  const {getByText, getByPlaceholderText} = render(<LoginScreen />);

  const usernameInput = getByPlaceholderText('Username');
  const passwordInput = getByPlaceholderText('Password');
  const loginButton = getByText('Login');

  fireEvent.changeText(usernameInput, 'InvalidUser');
  fireEvent.changeText(passwordInput, 'IncorrectPassword');
  fireEvent.press(loginButton);

  // You can assert that the error message is displayed.
  expect(
    getByText('Invalid username or password. Please try again'),
  ).toBeTruthy();
});
