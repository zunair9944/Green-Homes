const { updateContact } = require("../Hupspot/updateContact")
const { createDeal } = require('../Hupspot/createDeal');
const { getAllDeals } = require('../Hupspot/gettAllDeals')
const { fetchLead } = require('../Velocify/getLead')
const { updateDeal } = require('../Hupspot/updateDeal')
const { getDeal } = require('../Hupspot/getDeal')
const { checkDeals } = require('./checkDeals')
const { createDealOnGreen } = require('./createDealOnGreen')

const checkContacts = async (contact, lead) => {
    if (contact.properties.velocify_id && contact.properties.velocify_id.value !== lead.leadId) {
        await updateContact({
            vid: contact.vid,
            updatedName: "velocify_id",
            updatedValue: lead.leadId,
        });
    }

    if (contact.properties.firstname && contact.properties.firstname.value !== lead.firstName) {
        await updateContact({
            vid: contact.vid,
            updatedName: "firstname",
            updatedValue: lead.firstName,
        });
    }
    if (contact.properties.lastname && contact.properties.lastname.value !== lead.lastName) {
        await updateContact({
            vid: contact.vid,
            updatedName: "lastname",
            updatedValue: lead.lastName,
        });
    }
    if (contact.properties.phone && contact.properties.phone.value !== lead.phone) {
        await updateContact({
            vid: contact.vid,
            updatedName: "phone",
            updatedValue: lead.phone,
        });
    }
    if (contact.properties.address && contact.properties.address.value !== lead.address) {
        await updateContact({
            vid: contact.vid,
            updatedName: "address",
            updatedValue: lead.address,
        });
    }
    if (contact.properties.state && contact.properties.state.value !== lead.state) {
        await updateContact({
            vid: contact.vid,
            updatedName: "state",
            updatedValue: lead.state,
        });
    }
    if (contact.properties.zip && contact.properties.zip.value !== lead.Zip) {
        await updateContact({
            vid: contact.vid,
            updatedName: "zip",
            updatedValue: lead.Zip,
        });
    }
    if (contact.properties.electricity_provider && contact.properties.electricity_provider.value !== lead.ElectricityProvider) {
        await updateContact({
            vid: contact.vid,
            updatedName: "electricity_provider",
            updatedValue: lead.ElectricityProvider,
        });
    }
    if (contact.properties.hs_lead_status && contact.properties.hs_lead_status.value !== lead.leadStatus) {
        await updateContact({
            vid: contact.vid,
            updatedName: "hs_lead_status",
            updatedValue: lead.leadStatus,
        });
    }
    if (contact.properties.lead_source && contact.properties.lead_source.value !== lead.leadSource) {
        await updateContact({
            vid: contact.vid,
            updatedName: "lead_source",
            updatedValue: lead.leadSource,
        });
    }
    if (contact.properties.electricity_bill && contact.properties.electricity_bill.value !== lead.monthly_electricBill) {
        await updateContact({
            vid: contact.vid,
            updatedName: "electricity_bill",
            updatedValue: lead.monthly_electricBill,
        });
    }
    if (contact.properties.hs_lead_status && contact.properties.hs_lead_status.value === "Set Appointment for Closer" && lead.leadStatus === "Set Appointment for Closer") {
        try {
            let allDeals = [];
            let offset = 0;
            let limit = 250;
            let hasMore = true;
            let dealExists = false;
            while (hasMore) {
                const apiResponse = await getAllDeals(limit, offset);
                if (apiResponse) {
                    allDeals = [...apiResponse.data.deals];
                    offset = apiResponse.data.offset;
                    if (!apiResponse.data['hasMore']) {
                        hasMore = false;
                    }
                    const dealExisting = allDeals.find((deal) => {
                        if (deal.associations.associatedVids.includes(contact.vid) || (deal.properties.velocify_id && deal.properties.velocify_id.value == contact.properties.velocify_id.value)){
                            dealExists = true;
                        }
                    })
                }
            }
            if (!dealExists) {
                await createDeal({
                    vid: contact.vid,
                    dealName: `${lead.firstName? lead.firstName:''} ${lead.lastName? lead.lastName:''}`,
                    leadSource: lead.leadSource ? lead.leadSource : undefined,
                    phone: lead.phone ? lead.phone : undefined,
                    email: lead.email ? lead.email : undefined,
                    stAddress: lead.address ? lead.address : undefined,
                    city: lead.city ? lead.city : undefined,
                    stateRegion: lead.state ? lead.state : undefined,
                    postalCode: lead.Zip ? lead.Zip : undefined,
                    electricityProviderDeal: lead.ElectricityProvider ? lead.ElectricityProvider : undefined,
                    moduleBrandOld: lead.modulesBrand ? lead.modulesBrand : undefined,
                    inverterBrand: lead.inverterBrand ? lead.inverterBrand : undefined,
                    amount: lead.contractPrice ? lead.contractPrice : undefined,
                    downPayment: lead.downPayment ? lead.downPayment : undefined,
                    n1stPayment: lead.f1stPayment ? lead.f1stPayment : undefined,
                    n2ndPayment: lead.s2ndPayment ? lead.s2ndPayment : undefined,
                    n3rdPayment: lead.t3rdPayment ? lead.t3rdPayment : undefined,
                    n4thPayment: lead.f4thPayment ? lead.f4thPayment : undefined,
                    finalPaymentAmount: lead.finalPayment ? lead.finalPayment : undefined,
                    n1stPaymentStage: lead.f1stPaymentDate ? lead.f1stPaymentDate : undefined,
                    n2ndPaymentStage: lead.s2ndPaymentDate ? lead.s2ndPaymentDate : undefined,
                    n3rdPaymentStage: lead.t3rdPaymentDate ? lead.t3rdPaymentDate : undefined,
                    n4thPaymentDate: lead.f4thPaymentDate ? lead.f4thPaymentDate : undefined,
                    finalPaymentStage: lead.finalPaymentDate ? lead.finalPaymentDate : undefined,
                    lender1: lead.lender1 ? lead.lender1 : undefined,
                    financeAmountL1: lead.financeAmount1 ? lead.financeAmount1 : undefined,
                    l1ExpDate: lead.l1ExpDate ? lead.l1ExpDate : undefined,
                    lender2: lead.lender2 ? lead.lender2 : undefined,
                    financeAmountL2: lead.financeAmount2 ? lead.financeAmount2 : undefined,
                    l2ExpDate: lead.l2ExpDate ? lead.l2ExpDate : undefined,
                    lender3: lead.lender3 ? lead.lender3 : undefined,
                    financeAmountL3: lead.financeAmount3 ? lead.financeAmount3 : undefined,
                    l3ExpDate: lead.l3ExpDate ? lead.l3ExpDate : undefined,
                    dealerFees: lead.dealerFees ? lead.dealerFees : undefined,
                    priceAfterDfDiscounts: lead.totalPriceAfterDealerFees ? lead.totalPriceAfterDealerFees : undefined,
                    ppw: lead.ppw ? lead.ppw : undefined,
                    // discounts: lead.discounts ? lead.discounts : undefined,
                    longi_and_lat: lead.latAndLongOfHome ? lead.latAndLongOfHome : undefined,
                    closerNotesToPm: lead.repNotesToPM ? lead.repNotesToPM : undefined,
                    module_qty: lead.moduleQty ? lead.moduleQty : undefined,
                    system_size: lead.systemSize ? lead.systemSize : undefined,
                    estSys: lead.estimatedSystemProd ? lead.estimatedSystemProd : undefined,
                    specialNotes: lead.specialNotes ? lead.specialNotes : undefined,
                    financeNotes: lead.specialNotes1 ? lead.specialNotes1 : undefined,
                    specialNotes2: lead.specialNotes2 ? lead.specialNotes2 : undefined,
                    lender1DealerFees: lead.lender1DealerFees ? lead.lender1DealerFees : undefined,
                    lender2DealerFees: lead.lender2DealerFees ? lead.lender2DealerFees : undefined,
                    lender3DealerFees: lead.lender3DealerFees ? lead.lender3DealerFees : undefined,
                    loanDocsLink: lead.loanDocsLink ? lead.loanDocsLink : undefined,
                    loanId: lead.applicationId ? lead.applicationId : undefined,
                    velocifyId: lead.leadId ? lead.leadId : undefined,
                    solar: lead.solarSold ? lead.solarSold : undefined,
                    roof: lead.roofSold ? lead.roofSold : undefined,
                    generator: lead.generatorSold ? lead.generatorSold : undefined,
                    battery: lead.batterySold ? lead.batterySold : undefined,
                    evCharger: lead.evChargerSold ? lead.evChargerSold : undefined,
                    span: lead.spanSold ? lead.spanSold : undefined,
                })
            }
        } catch (e) {
            console.log(e);
        }
    }
    if (contact.properties.hs_lead_status && contact.properties.hs_lead_status.value === "Closed - Green" && lead.leadStatus === "Closed - Green") {
        let dealId;
        if (contact.properties.velocify_id) {
            const fetchedLead = await fetchLead(contact.properties.velocify_id.value)
            if (fetchedLead) {
                try {
                    let allDeals = [];
                    let offset = 0;
                    let limit = 250;
                    let hasMore = true;
                    let dealExists = false;
                    while (hasMore) {
                        const apiResponse = await getAllDeals(limit, offset);
                        if (apiResponse) {
                            allDeals = [...apiResponse.data.deals];
                            offset = apiResponse.data.offset;
                            if (!apiResponse.data['hasMore']) {
                                hasMore = false;
                            }
                            allDeals.forEach(async deal => {
                                if (deal.associations.associatedVids.includes(contact.vid) ||(deal.properties.velocify_id && deal.properties.velocify_id.value == contact.properties.velocify_id.value)) {
                                    dealId = deal.dealId;
                                    const dealE = await getDeal(dealId);
                                    if (dealE) {
                                        await checkDeals(dealE, fetchedLead,dealId, lead);
                                        return;
                                    }
                                }
                            })
                        }
                    }
                    if (!dealId) {
                        const contactVid = contact.vid;
                        await createDealOnGreen(contactVid,fetchedLead, lead);
                    }
                } catch (e) {
                    console.log(e);
                }
            }
        }
    }
}


module.exports = { checkContacts }