const axios = require("axios");
const updateContact = ({
    vid,
    updatedName,
    updatedValue
}) => {
    return new Promise((resolve, reject) => {
        const data = {
            properties: [
                { property: `${updatedName}`, value: `${updatedValue}` },
            ],
        };
        const url = `https://api.hubapi.com/contacts/v1/contact/vid/${vid}/profile`;
        const access_token = process.env.HUBSPOT_ACCESS_TOKEN;

        const headers = {
            "Content-Type": "application/json",
            Authorization: `Bearer ${access_token}`,
        };

        const sendRequest = () => {
            axios
                .post(url, data, { headers })
                .then((response) => {
                    console.log(`Contact Updated ${updatedName} to ${updatedValue} Successfully...`);
                    resolve(response.data);
                })
                .catch((error) => {
                    reject(error);
                });
        };
        sendRequest();
    });
};

module.exports = { updateContact };
