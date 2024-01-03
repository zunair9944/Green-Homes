const axios = require("axios");

const url = process.env.GET_ALL_DEALS;
const accessToken = process.env.HUBSPOT_ACCESS_TOKEN;
const headers = {
    Authorization: `Bearer ${accessToken}`,
};
const getAllDeals = async (limit, offset) => {
    try {
        const apiResponse = await axios.get(url, {
            headers,
            params: {
                limit: limit,
                offset: offset,
            }
        });
        return apiResponse;
    } catch (e) {
        e.message === 'HTTP request failed'
            ? console.error(JSON.stringify(e.response, null, 2))
            : console.error(e)
    }
}

module.exports = { getAllDeals };
