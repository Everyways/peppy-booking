import * as slotsQ from './../queries/slots.js';

/**
 * Retrieves slots based on the provided parameters.
 * @param {string} idBox - The ID of the box.
 * @param {string} start - The start date of the slots.
 * @param {string} end - The end date of the slots.
 * @param {string} token - The authentication token.
 * @returns {Promise<Object|null>} The response data containing the slots, or null if there was an error.
 */
export async function getSlots(idBox, start, end, token) {
  try {
    const response = await fetch('https://api.peppy.cool/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'authorization': `JWT ${token}`,
        },
        body: JSON.stringify({
            query: slotsQ.slots,
            variables: {
                page: 1,
                pageSize: 100,
                where: {
                    boxId:[idBox],
                    end: end,
                    start: start,
                },
                typesId: ['wod-all'],
            },
        }),
    });

    const responseData = await response.json();
    if (responseData.errors) {
      console.error('slots failed:', responseData.errors);
      return null;
    }
    return responseData.data;
  } catch (error) {
    console.error('Error logging in:', error);
    return null;
  }
}