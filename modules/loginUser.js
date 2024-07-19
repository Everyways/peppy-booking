
import * as loginQ from './../queries/login.js';

/**
 * Logs in a user with the provided username and password.
 * @param {string} username - The username of the user.
 * @param {string} password - The password of the user.
 * @returns {Promise<Object|null>} - A promise that resolves to the response data if the login is successful, or null if there is an error.
 */
export async function login(username, password) {
    try {
      const response = await fetch('https://api.peppy.cool/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          query: loginQ.loginMutation,
          variables: {
            email: username,
            password: password,
          },
        }),
      });
  
      const responseData = await response.json();
      if (responseData.errors) {
        console.error('Login failed:', responseData.errors);
        console.log('Login failed:', responseData.errors);
        return null;
      }
  
      // Store the token for future requests
      // localStorage.setItem('authToken', token); // For web applications
  
      return responseData.data;
    } catch (error) {
      console.error('Error logging in:', error);
      return null;
    }
  }