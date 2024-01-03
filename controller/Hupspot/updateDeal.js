const axios = require("axios");
const updateDeal = ({
    dealId,
    propertyName,
    propertyValue,
}) => {
    return new Promise((resolve, reject) => {
        const data = {
            properties: [
                { name: propertyName, value: propertyValue },
            ],
        };
        const url = `https://api.hubapi.com/deals/v1/deal/${dealId}`;
        const access_token = process.env.HUBSPOT_ACCESS_TOKEN;

        const headers = {
            "Content-Type": "application/json",
            Authorization: `Bearer ${access_token}`,
        };
        const sendRequest = () => {
            axios
                .put(url, data, { headers })
                .then((response) => {
                    console.log(`Updated ${propertyName} to ${propertyValue}`)
                    resolve(response.data);
                })
                .catch((error) => {
                    reject(error);
                });
        };

        sendRequest();
    });
};

module.exports = { updateDeal };
