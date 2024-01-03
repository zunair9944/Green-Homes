const axios = require("axios");

const accessToken = process.env.HUBSPOT_ACCESS_TOKEN;
const headers = {
    Authorization: `Bearer ${accessToken}`,
};
const getDeal = async (dealId) => {
    try {
        const apiResponse = await axios.get(`https://api.hubapi.com/deals/v1/deal/${dealId}`, {
            headers,
        });
        return apiResponse.data;
    } catch (e) {
        e.message === 'HTTP request failed'
            ? console.error(JSON.stringify(e.response, null, 2))
            : console.error(e)
    }
}

module.exports = { getDeal };
