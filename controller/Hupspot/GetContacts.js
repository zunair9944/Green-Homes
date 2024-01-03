const axios = require("axios");

const url = process.env.GET_CONTACTS;
const accessToken = process.env.HUBSPOT_ACCESS_TOKEN;
const headers = {
  Authorization: `Bearer ${accessToken}`,
};

const getContacts = async (limit, offset) => {
  try {
      const response = await axios.get(url, {
        headers,
        params: {
          count: limit,
          vidOffset: offset,
        },
      });
    return response;
  } catch (error) {
    console.error("Request failed with error:", error.message);
  }
};

module.exports = { getContacts };
