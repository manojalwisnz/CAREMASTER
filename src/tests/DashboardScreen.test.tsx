import React from 'react';
import {render, waitFor} from '@testing-library/react-native';
import DashboardScreen from '../screens/DashboardScreen';

// Mock the fetch function to simulate API response
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve([{id: 1, name: 'User 1', email: 'user1@example.com'}]),
  }),
);

describe('DashboardScreen', () => {
  it('displays loading message initially', () => {
    const {queryByText} = render(<DashboardScreen />);
    expect(queryByText('Loading...')).toBeTruthy();
  });

  it('displays user data after loading', async () => {
    const {queryByText} = render(<DashboardScreen />);

    // Wait for the loading state to change
    await waitFor(() => {
      expect(queryByText('Loading...')).toBeNull();
    });

    // Check if user data is displayed
    expect(queryByText('User List')).toBeTruthy();
    expect(queryByText('User 1 (user1@example.com)')).toBeTruthy();
  });

  it('handles API fetch error', async () => {
    // Mock the fetch function to return an error
    global.fetch = jest.fn(() => Promise.reject('API error'));

    const {queryByText} = render(<DashboardScreen />);

    // Wait for the loading state to change
    await waitFor(() => {
      expect(queryByText('Loading...')).toBeNull();
    });

    // Check if an error message is displayed
    expect(queryByText('Error fetching data: API error')).toBeTruthy();
  });
});
