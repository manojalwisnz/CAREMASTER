import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import styles from '../styles/LoginScreenStyles';

// Define the LoginScreen component as a functional component
const LoginScreen: React.FC<{navigation: any}> = ({navigation}) => {
  // State variables to hold the username, password, and error message
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>(''); // State for error message

  // Function to handle the login button press
  const handleLogin = () => {
    // Authentication logic here
    if (username === 'Manoj' && password === '123') {
      navigation.navigate('Dashboard');
    } else {
      // Display an error message for invalid credentials
      setError('Invalid username or password. Please try again.');
    }
  };

  // Use the focus effect to reset the error state when the component receives focus
  useFocusEffect(
    React.useCallback(() => {
      setError(''); // Reset the error when the component receives focus
    }, []),
  );

  // Render the user interface of the LoginScreen
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={text => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry={true}
      />
      {/* Display error message */}
      {error !== '' && <Text style={styles.error}>{error}</Text>}
      <Button
        title="Login"
        onPress={handleLogin}
        style={styles.loginButton}
        titleStyle={styles.loginButtonText}
      />
    </View>
  );
};

// Export the LoginScreen component as the default export
export default LoginScreen;
