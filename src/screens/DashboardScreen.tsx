import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import styles from '../styles/DashboardScreenStyles';

// Define the DashboardScreen component
const DashboardScreen = () => {
  // State variables to hold the user data and loading status
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Use the useEffect hook to fetch data when the component mounts
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        // Update the state with the fetched user data
        setUsers(data);
        // Set loading to false to indicate data has been loaded
        setLoading(false);
      })
      .catch(error => {
        // Log an error message if data fetching fails
        console.error('Error fetching data:', error);
        // Set loading to false to indicate an error occurred
        setLoading(false);
      });
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <View>
          <Text style={styles.header}>User List</Text>
          <View>
            {users.map(user => (
              <Text key={user.id}>
                {user.name} ({user.email})
              </Text>
            ))}
          </View>
        </View>
      )}
    </View>
  );
};

export default DashboardScreen;
