const axios = require("axios");
const { parseString } = require("xml2js");

const getLead = (leadId) => {
    const url = process.env.GET_LEAD;
    return axios
        .get(url, {
            params: {
                username: process.env.VUSER,
                password: process.env.VPASS,
                leadId: leadId
            },
            headers: {
                "Content-Type": "charset=utf-8",
                "Content-Length": 10,
            },
        })
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.log(error);
            throw new Error("Error modify data from Velocify API");
        });
};

const fetchLead = async (leadId) => {
    const data = await getLead(leadId);
    const fieldArr = [];
    parseString(data, (err, result) => {
        if (err) {
            console.log("err");
            return;
        }
        if (result.Leads.Lead) {
            const contactPromises = result.Leads.Lead.map(async (field) => {
              const leadId = field.$.Id;
              let firstName, lastName, email, phone, address, state, Zip, ElectricityProvider, statusId, leadStatus, leadSource, monthly_electricBill, city, opener ,closer, rehash, modulesBrand,inverterBrand,contractPrice,downPayment,f1stPayment,s2ndPayment,t3rdPayment,f4thPayment,finalPayment,f1stPaymentDate,s2ndPaymentDate,t3rdPaymentDate,f4thPaymentDate,finalPaymentDate,lender1,financeAmount1,l1ExpDate,lender2,financeAmount2,l2ExpDate,lender3,financeAmount3,l3ExpDate,dealerFees,totalPriceAfterDealerFees,ppw,discounts,latAndLongOfHome,repNotesToPM,moduleQty,systemSize,estimatedSystemProd,specialNotes,specialNotes1,specialNotes2,lender1DealerFees,lender2DealerFees,lender3DealerFees,loanDocsLink,applicationId,creditScore,solarSold,roofSold,generatorSold,batterySold,evChargerSold,spanSold;
      
              if (field.Status) {
                field.Status.forEach((status) => {
                  if (status.$.StatusTitle) {
                    leadStatus = status.$.StatusTitle;
                    statusId = status.$.StatusId;
                  }
                });
              }
      
              if (field.Campaign) {
                field.Campaign.forEach((campaign) => {
                  if (campaign.$.CampaignTitle) {
                    leadSource = campaign.$.CampaignTitle;
                  }
                });
              }
      
              field.Fields.forEach((f) => {
                if (f.Field) {
                  f.Field.forEach((field) => {
                    if (field.$.FieldTitle === "Email" && field.$.Value.match(/^(([^<>()\[\]\\.,;:\s@\"]+(\.[^<>()\[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) email = field.$.Value;
                    if (field.$.FieldTitle === "First Name") firstName = field.$.Value;
                    if (field.$.FieldTitle === "Last Name") lastName = field.$.Value;
                    if (field.$.FieldTitle === "Mobile Phone") phone = field.$.Value;
                    if (field.$.FieldTitle === "Home Address") address = field.$.Value;
                    if (field.$.FieldTitle === "State") state = field.$.Value;
                    if (field.$.FieldTitle === "Zip") Zip = field.$.Value;
                    if (field.$.FieldTitle === "Electricity Provider") ElectricityProvider = field.$.Value;
                    if (field.$.FieldTitle === "Monthly Electric Bill") monthly_electricBill = field.$.Value;
                    if(field.$.FieldTitle === "City") city = field.$.Value;
                    if(field.$.FieldTitle === "Opener") opener = field.$.Value;
                    if(field.$.FieldTitle === "Closer") closer = field.$.Value;
                    if(field.$.FieldTitle === "Rehash") rehash = field.$.Value;
                    if(field.$.FieldTitle === "Modules Brand") modulesBrand = field.$.Value;
                    if(field.$.FieldTitle === "Inverter(s) Brand") inverterBrand = field.$.Value;
                    if(field.$.FieldTitle === "Contract Price") contractPrice = field.$.Value;
                    if(field.$.FieldTitle === "Down Payment") downPayment = field.$.Value;
                    if(field.$.FieldTitle === "1st Payment") f1stPayment = field.$.Value;
                    if(field.$.FieldTitle === "2nd Payment") s2ndPayment = field.$.Value;  
                    if(field.$.FieldTitle === "3rd Payment") t3rdPayment = field.$.Value;
                    if(field.$.FieldTitle === "4th Payment") f4thPayment = field.$.Value;
                    if(field.$.FieldTitle === "Final Payment") finalPayment = field.$.Value;
                    if(field.$.FieldTitle === "1st Payment Date") f1stPaymentDate = field.$.Value;
                    if(field.$.FieldTitle === "2nd Payment Date") s2ndPaymentDate = field.$.Value;
                    if(field.$.FieldTitle === "3rd Payment Date") t3rdPaymentDate = field.$.Value;
                    if(field.$.FieldTitle === "4th Payment Date") f4thPaymentDate = field.$.Value;
                    if(field.$.FieldTitle === "Final Payment Date") finalPaymentDate = field.$.Value;
                    if(field.$.FieldTitle === "Lender 1") lender1 = field.$.Value;
                    if(field.$.FieldTitle === "Finance Amount 1") financeAmount1 = field.$.Value;
                    if(field.$.FieldTitle === "L1 Exp Date") l1ExpDate = field.$.Value;
                    if(field.$.FieldTitle === "Lender 2") lender2 = field.$.Value;
                    if(field.$.FieldTitle === "Finance Amount 2") financeAmount2 = field.$.Value;
                    if(field.$.FieldTitle === "OpeL2 Exp Datener") l2ExpDate = field.$.Value;
                    if(field.$.FieldTitle === "Lender 3") lender3 = field.$.Value;
                    if(field.$.FieldTitle === "Finance Amount 3") financeAmount3 = field.$.Value;
                    if(field.$.FieldTitle === "L3 Exp Date") l3ExpDate = field.$.Value;
                    if(field.$.FieldTitle === "Dealer Fees") dealerFees = field.$.Value;
                    if(field.$.FieldTitle === "Total Price After Dealer Fees") totalPriceAfterDealerFees = field.$.Value; 
                    if(field.$.FieldTitle === "PPW") ppw = field.$.Value;
                    if(field.$.FieldTitle === "Discounts") discounts = field.$.Value;
                    if(field.$.FieldTitle === "Latitude and Longitude of Home")  latAndLongOfHome = field.$.Value;
                    if(field.$.FieldTitle === "Rep Notes to PM") repNotesToPM = field.$.Value;
                    if(field.$.FieldTitle === "Module Qty") moduleQty = field.$.Value;
                    if(field.$.FieldTitle === "System Size (kW)") systemSize = field.$.Value; else systemSize = 0;
                    if(field.$.FieldTitle === "Estimated System Production") estimatedSystemProd = field.$.Value;
                    if(field.$.FieldTitle === "SPECIAL NOTES") specialNotes = field.$.Value;
                    if(field.$.FieldTitle === "SPECIAL NOTES1") specialNotes1 = field.$.Value;
                    if(field.$.FieldTitle === "SPECIAL NOTES2") specialNotes2 = field.$.Value;
                    if(field.$.FieldTitle === "Lender 1 Dealer Fees") lender1DealerFees = field.$.Value; 
                    if(field.$.FieldTitle === "Lender 2 Dealer Fees") lender2DealerFees = field.$.Value;
                    if(field.$.FieldTitle === "Lender 3 Dealer Fees") lender3DealerFees = field.$.Value;
                    if(field.$.FieldTitle === "Loan Docs Link") loanDocsLink = field.$.Value;
                    if(field.$.FieldTitle === "Application ID") applicationId = field.$.Value;
                    if(field.$.FieldTitle === "Credit Score") creditScore = field.$.Value;
                    if(field.$.FieldTitle === "Solar Sold") solarSold = field.$.Value;
                    if(field.$.FieldTitle === "Roof Sold") roofSold = field.$.Value;
                    if(field.$.FieldTitle === "Generator Sold") generatorSold = field.$.Value;
                    if(field.$.FieldTitle === "Battery Sold")  batterySold = field.$.Value;
                    if(field.$.FieldTitle === "EV Charger Sold") evChargerSold = field.$.Value;
                    if(field.$.FieldTitle === "SPAN Sold") spanSold = field.$.Value;
                  });
                }
              });
      
              fieldArr.push({
                leadId: leadId,
                statusId: statusId,
                leadStatus: leadStatus,
                firstName: firstName,
                lastName: lastName,
                email: email,
                address: address,
                phone: phone,
                state: state,
                Zip: Zip,
                ElectricityProvider: ElectricityProvider,
                leadSource: leadSource,
                monthly_electricBill: monthly_electricBill,
                city: city,
                opener: opener,
                closer: closer,
                rehash: rehash,
                modulesBrand: modulesBrand,
                inverterBrand: inverterBrand,
                contractPrice: contractPrice,
                downPayment: downPayment,
                f1stPayment: f1stPayment,
                s2ndPayment: s2ndPayment,
                t3rdPayment: t3rdPayment,
                f4thPayment: f4thPayment,
                finalPayment: finalPayment,
                f1stPaymentDate: f1stPaymentDate,
                s2ndPaymentDate: s2ndPaymentDate,
                t3rdPaymentDate: t3rdPaymentDate,
                f4thPaymentDate: f4thPaymentDate,
                finalPaymentDate: finalPaymentDate,
                lender1: lender1,
                financeAmount1: financeAmount1,
                l1ExpDate: l1ExpDate,
                lender2: lender2,
                financeAmount2: financeAmount2,
                l2ExpDate: l2ExpDate,
                lender3: lender3,
                financeAmount3: financeAmount3,
                l3ExpDate: l3ExpDate,
                dealerFees: dealerFees,
                totalPriceAfterDealerFees: totalPriceAfterDealerFees,
                ppw: ppw,
                // discounts: discounts,
                latAndLongOfHome: latAndLongOfHome,
                repNotesToPM: repNotesToPM,
                moduleQty: moduleQty,
                systemSize: systemSize,
                estimatedSystemProd: estimatedSystemProd,
                specialNotes: specialNotes,
                specialNotes1: specialNotes1,
                specialNotes2: specialNotes2,
                lender1DealerFees: lender1DealerFees,
                lender2DealerFees: lender2DealerFees,
                lender3DealerFees: lender3DealerFees,
                loanDocsLink: loanDocsLink,
                applicationId: applicationId,
                creditScore: creditScore,
                solarSold: solarSold,
                roofSold: roofSold,
                generatorSold: generatorSold,
                batterySold: batterySold,
                evChargerSold: evChargerSold,
                spanSold: spanSold
              });
            });
          }
    });
    return fieldArr;
};

module.exports = { fetchLead };
