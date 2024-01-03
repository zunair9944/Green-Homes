const axios = require("axios");
const createDeal = ({
  vid,
  dealName,
  leadSource,
  phone,
  email,
  stAddress,
  city,
  stateRegion,
  postalCode,
  electricityProviderDeal,
  moduleBrandOld,
  inverterBrand,
  amount,
  downPayment,
  n1stPayment,
  n2ndPayment,
  n3rdPayment,
  n4thPayment,
  finalPaymentAmount,
  n1stPaymentStage,
  n2ndPaymentStage,
  n3rdPaymentStage,
  n4thPaymentDate,
  finalPaymentStage,
  lender1,
  financeAmountL1,
  l1ExpDate,
  lender2,
  financeAmountL2,
  l2ExpDate,
  lender3,
  financeAmountL3,
  l3ExpDate,
  dealerFees,
  priceAfterDfDiscounts,
  ppw,
  // discounts,
  longi_and_lat,
  closerNotesToPm,
  module_qty,
  system_size,
  estSys,
  specialNotes,
  financeNotes,
  specialNotes2,
  lender1DealerFees,
  lender2DealerFees,
  lender3DealerFees,
  loanDocsLink,
  loanId,
  velocifyId,
  solar,
  roof,
  generator,
  battery,
  evCharger,
  span,
}) => {
  return new Promise((resolve, reject) => {
    const data = {
      associations: { associatedVids: [vid] },
      properties: [
        // { name: propertyName, value: propertyValue },

        { name: "dealname", value: dealName ? dealName : '' },
        { name: "dealstage", value: 'qualifiedtobuy' },
        // { name: "dealstage", value: 'default' },
        { name: "lead_source_text", value: leadSource ? leadSource : undefined },
        { name: "phone", value: phone ? phone : undefined },
        // { name: "cb_work_phone", value: 'default' }, // not in sandbox but in actual one
        { name: "email", value: email ? email : undefined },
        { name: "street_address_1", value: stAddress ? stAddress : undefined },
        { name: "city", value: city ? city : undefined },
        { name: "state_region", value: stateRegion ? stateRegion : undefined },
        { name: "postal_code", value: postalCode ? postalCode : undefined },
        { name: "electricity_provider_deal", value: electricityProviderDeal ? electricityProviderDeal : undefined },
        // { name: "opener", value: 'default' },  //dropdown needed to be set
        // { name: "hubspot_owner_id", value: 'default' }, //dropdown needed to be set
        // { name: "deal_rehash", value: 'default' }, //dropdown needed to be set
        { name: "module_brand__old_", value: moduleBrandOld ? moduleBrandOld : undefined },
        { name: "inverter_brand", value: inverterBrand ? inverterBrand : undefined },
        { name: "amount", value: amount ? amount : undefined },
        { name: "down_payment", value: downPayment ? downPayment : undefined },
        { name: "n1st_payment", value: n1stPayment ? n1stPayment : undefined },
        { name: "n2nd_payment", value: n2ndPayment ? n2ndPayment : undefined },
        { name: "n3rd_payment", value: n3rdPayment ? n3rdPayment : undefined },
        { name: "n4th_payment", value: n4thPayment ? n4thPayment : undefined },
        { name: "final_payment_amount", value: finalPaymentAmount ? finalPaymentAmount : undefined },
        { name: "n1st_payment_stage", value: n1stPaymentStage ? n1stPaymentStage : undefined },
        { name: "n2nd_payment_stage", value: n2ndPaymentStage ? n2ndPaymentStage : undefined },
        { name: "n3rd_payment_stage", value: n3rdPaymentStage ? n3rdPaymentStage : undefined },
        { name: "n4th_payment_date", value: n4thPaymentDate ? n4thPaymentDate : undefined },
        { name: "final_payment_stage", value: finalPaymentStage ? finalPaymentStage : undefined },
        { name: "lender_1", value: lender1 ? lender1 : undefined },
        { name: "finance_amount_l1", value: financeAmountL1 ? financeAmountL1 : undefined },
        { name: "l1_exp_date", value: l1ExpDate ? l1ExpDate : undefined },
        { name: "lender_2", value: lender2 ? lender2 : undefined },
        { name: "finance_amount_l2", value: financeAmountL2 ? financeAmountL2 : undefined },
        { name: "l2_exp_date", value: l2ExpDate ? l2ExpDate : undefined },
        { name: "lender_3", value: lender3 ? lender3 : undefined },
        { name: "finance_amount_l3", value: financeAmountL3 ? financeAmountL3 : undefined },
        { name: "l3_exp_date", value: l3ExpDate ? l3ExpDate : undefined },
        { name: "dealer_fees", value: dealerFees ? dealerFees : undefined },
        { name: "price_after_df___discounts", value: priceAfterDfDiscounts ? priceAfterDfDiscounts : undefined },
        { name: "ppw", value: ppw ? ppw : undefined },
        // { name: "discounts", value: discounts ? discounts : undefined },
        { name: "longitude_and_latitude", value: longi_and_lat ? longi_and_lat : undefined },
        { name: "closer_notes_to_pm", value: closerNotesToPm ? closerNotesToPm : undefined },
        { name: "module_qty", value: module_qty ? module_qty : undefined },
        { name: "system_size__kw_", value: system_size ? system_size : undefined },
        { name: "est_sys_prod__kwh_", value: estSys ? estSys : undefined },
        { name: "special_notes", value: specialNotes ? specialNotes : undefined },
        { name: "finance_notes", value: financeNotes ? financeNotes : undefined },
        { name: "special_notes_2", value: specialNotes2 ? specialNotes2 : undefined },
        { name: "lender_1_dealer_fees", value: lender1DealerFees ? lender1DealerFees : undefined },
        { name: "lender_2_dealer_fees", value: lender2DealerFees ? lender2DealerFees : undefined },
        { name: "lender_3_dealer_fees", value: lender3DealerFees ? lender3DealerFees : undefined },
        { name: "loan_docs_link", value: loanDocsLink ? loanDocsLink : undefined },
        { name: "loan_id", value: loanId ? loanId : undefined },
        { name: "velocify_id", value: velocifyId ? velocifyId : undefined },
        { name: "solar", value: solar ? solar : undefined },
        { name: "roof", value: roof ? roof : undefined },
        { name: "generator", value: generator ? generator : undefined },
        { name: "battery", value: battery ? battery : undefined },
        { name: "ev_charger", value: evCharger ? evCharger : undefined },
        { name: "span", value: span ? span : undefined },
        // { name: "amount", value: amount ? amount : undefined },
        // { name: "hubspot_owner_id", value: closer ? closer : undefined}
      ],
    };

    const url = process.env.CREATE_DEAL;
    const access_token = process.env.HUBSPOT_ACCESS_TOKEN;

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${access_token}`,
    };
    const sendRequest = () => {
      axios
        .post(url, data, { headers })
        .then((response) => {
          console.log("Deal created");
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    };

    sendRequest();
  });
};

module.exports = { createDeal };
