import * as boxQ from './../queries/box.js';

/**
 * Finds a box by its ID.
 * @param {string} id - The ID of the box to find.
 * @returns {Promise<Object|null>} - A promise that resolves to the response data if successful, or null if there was an error.
 */
export async function findBox(id) {
  try {
    const response = await fetch('https://api.peppy.cool/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        query: boxQ.findBoxQuery,
        variables: {
          where: id,
        },
      }),
    });

    const responseData = await response.json();
    if (responseData.errors) {
      console.error('search failed:', responseData.errors);
      return null;
    }

    return responseData;
  } catch (error) {
    console.error('Error logging in:', error);
    return null;
  }
}