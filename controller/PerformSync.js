const { fetchLeads } = require("./Velocify/Velocify");
const { getContacts } = require("./Hupspot/GetContacts");
const { createContact } = require("./Hupspot/CreateContacts")
const { checkContacts } = require('./Velocify/checkingLeads');
const chalk = require('chalk');

const performSync = async () => {
    console.log("starting....")
    let velocifyLeads;
    return new Promise(async (resolve, reject) => {
        try {
            velocifyLeads = await fetchLeads();
            if (velocifyLeads) {
                console.log("leads are here: ", velocifyLeads.length);
            }
            if (velocifyLeads) {
                console.log("starting sync from velocify to hubspot");
                for (const lead of velocifyLeads) {
                    const leadId = parseInt(lead.leadId);
                    try {
                        let hubspotContacts = [];
                        let hasMore = true;
                        offset = 0;
                        limit = 500;
                        let contactExists = false;
                        // print loop iteration number index 
                        console.log(`\n============Checking Lead no: ${velocifyLeads.indexOf(lead) + 1} out of ${velocifyLeads.length} ============\n`)
                        while (hasMore) {
                            let response;
                            const apiResponse = await getContacts(limit, offset);
                            if (apiResponse) {
                                if (apiResponse.data.contacts)
                                    hubspotContacts = [...apiResponse.data.contacts];
                                if (!apiResponse.data['has-more']) {
                                    hasMore = false;
                                }
                                offset = apiResponse.data['vid-offset'];
                                const existingContact = hubspotContacts.find((contact) => {
                                    let velocifyId, email;
                                    if (contact.properties.velocify_id) {
                                        velocifyId = parseInt(contact.properties.velocify_id.value);
                                    }
                                    if (contact.properties.email && lead.email) {
                                        email = contact.properties.email.value;
                                        if (email === lead.email) {
                                            checkContacts(contact, lead);
                                            response = 'email Exists';
                                            return;
                                        }
                                    }
                                    const vid = parseInt(contact.vid);
                                    if (velocifyId === leadId) {
                                        return { velocifyId: velocifyId, vid: vid };
                                    }
                                    else {
                                        return undefined;
                                    }
                                });
                                if (response === 'email Exists') {
                                    console.log("Contact with this email already Exists");
                                    break;
                                }

                                if (existingContact === undefined) {
                                    contactExists === false;
                                }
                                else if (existingContact) {
                                    contactExists = true;
                                    console.log("Contact Exists , Checking for updates");
                                    checkContacts(existingContact, lead);
                                    break;
                                }
                            }
                        }
                        if (!contactExists) {
                            try {
                                await createContact({
                                    firstName: lead.firstName,
                                    lastName: lead.lastName,
                                    phone: lead.phone,
                                    email: lead.email,
                                    address: lead.address,
                                    state: lead.state,
                                    Zip: lead.Zip,
                                    ElectricityProvider: lead.ElectricityProvider,
                                    leadStatus: lead.leadStatus,
                                    leadId: lead.leadId,
                                    leadSource: lead.leadSource,
                                    monthly_electricBill: lead.monthly_electricBill
                                });
                            } catch (error) {

                            }
                        }
                    } catch (e) {
                        console.log(e);
                    }
                }
            }
            resolve("==============================Sync completed successfully==============================");
        }
        catch (error) {
            // console.log(error);
            reject(error);
        }
    });
}
module.exports = { performSync };

