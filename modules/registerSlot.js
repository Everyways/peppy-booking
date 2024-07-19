import * as registerQ from './../queries/booking.js';

/**
 * Submits a booking for a given enrollment and node.
 * @param {string} enrollmentId - The ID of the enrollment.
 * @param {string} nodeId - The ID of the node.
 * @param {string} token - The JWT token for authorization.
 * @returns {Promise<Object|null>} - A promise that resolves to the response data if successful, or null if there was an error.
 */
export async function sumbitBooking(enrollmentId, nodeId, token) {
  try {
    const response = await fetch('https://api.peppy.cool/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'authorization': `JWT ${token}`,
      },
      body: JSON.stringify({
        query: registerQ.booking,
        variables: {
            enrollmentId: userId,
            where: nodeId
        },
      }),
    });

    const responseData = await response.json();
    if (responseData.errors) {
      console.error('registration failed:', responseData.errors);
      return null;
    }

    return responseData;
  } catch (error) {
    console.error('Error logging in:', error);
    return null;
  }
}