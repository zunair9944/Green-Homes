const axios = require("axios");
const createContact = ({
  firstName,
  lastName,
  email,
  phone,
  address,
  state,
  Zip,
  ElectricityProvider,
  leadStatus,
  leadId,
  leadSource,
  monthly_electricBill
}) => {
  return new Promise((resolve, reject) => {
    var data = {
      properties: [
        { property: "firstName", value: firstName },
        { property: "lastName", value: lastName },
        { property: `${email ? 'email' : 'work_email'}`, value: email ? email : "test@gmail.com" },
        { property: "phone", value: phone },
        { property: "address", value: address },
        { property: "state", value: state },
        { property: "zip", value: Zip },
        // { property: "electricity_provider", value: ElectricityProvider },
        { property: "velocify_id", value: leadId },
        { property: "hs_lead_status", value: leadStatus },
        { property: "lead_source", value: leadSource },
        // { property: "electricity_bill", value: monthly_electricBill }
      ],
    }
    const url = process.env.CREATE_CONTACTS;
    const access_token = process.env.HUBSPOT_ACCESS_TOKEN;

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${access_token}`,
    };
    const sendRequest = () => {
      axios
        .post(url, data, { headers })
        .then((response) => {
          console.log("Contact created Successfully... with name = " + firstName + " " + lastName);
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    };
    sendRequest();
  });
};

module.exports = { createContact };
