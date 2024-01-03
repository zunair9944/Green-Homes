const { updateDeal } = require('../Hupspot/updateDeal')

const checkDeals = async (dealE, fetchedLead, dealId, lead) => {
    try {
        if ((!dealE.properties.dealname && fetchedLead[0].systemSize !== 0) || (dealE.properties.dealname && fetchedLead[0].systemSize !== 0 && dealE.properties.dealname !== lead.firstName + " " + lead.lastName + " - " + fetchedLead[0].systemSize + " kW")) {
            updateDeal({
                dealId: dealId,
                propertyName: "dealname",
                propertyValue: `${lead.firstName} ${lead.lastName} - ${fetchedLead[0].systemSize} kW`
            })
        }
        if (!dealE.properties.dealstage || (dealE.properties.dealstage && dealE.properties.dealstage !== "qualifiedtobuy")) {
            updateDeal({
                dealId: dealId,
                propertyName: "dealstage",
                propertyValue: "qualifiedtobuy"
            })
        }
        if ((!dealE.properties.lead_source_text && fetchedLead[0].leadSource) || (dealE.properties.lead_source_text && fetchedLead[0].leadSource && dealE.properties.lead_source_text !== fetchedLead[0].leadSource)) {
            updateDeal({
                dealId: dealId,
                propertyName: "lead_source_text",
                propertyValue: fetchedLead[0].leadSource
            })
        }
        if ((!dealE.properties.phone && fetchedLead[0].phone) || (dealE.properties.lead_source_text && fetchedLead[0].phone && dealE.properties.phone !== fetchedLead[0].phone)) {
            updateDeal({
                dealId: dealId,
                propertyName: "phone",
                propertyValue: fetchedLead[0].phone
            })
        }
        if ((!dealE.properties.email && fetchedLead[0].email) || (dealE.properties.email && fetchedLead[0].email && dealE.properties.email !== fetchedLead[0].email)) {
            updateDeal({
                dealId: dealId,
                propertyName: "email",
                propertyValue: fetchedLead[0].email
            })
        }
        if ((!dealE.properties.street_address_1 && fetchedLead[0].address) || (dealE.properties.street_address_1 && fetchedLead[0].address && dealE.properties.street_address_1 !== fetchedLead[0].address)) {
            updateDeal({
                dealId: dealId,
                propertyName: "street_address_1",
                propertyValue: fetchedLead[0].address
            })
        }
        if ((!dealE.properties.city && fetchedLead[0].city) || (dealE.properties.city && fetchedLead[0].city && dealE.properties.city !== fetchedLead[0].city)) {
            updateDeal({
                dealId: dealId,
                propertyName: "city",
                propertyValue: fetchedLead[0].city
            })
        }
        if ((!dealE.properties.state_region && fetchedLead[0].state) || (dealE.properties.state_region && fetchedLead[0].state && dealE.properties.state_region !== fetchedLead[0].state)) {
            updateDeal({
                dealId: dealId,
                propertyName: "state_region",
                propertyValue: fetchedLead[0].state
            })
        }
        if ((!dealE.properties.postal_code && fetchedLead[0].Zip) || (dealE.properties.postal_code && fetchedLead[0].Zip && dealE.properties.postal_code !== fetchedLead[0].Zip)) {
            updateDeal({
                dealId: dealId,
                propertyName: "postal_code",
                propertyValue: fetchedLead[0].Zip
            })
        }
        if ((!dealE.properties.electricity_provider_deal && fetchedLead[0].ElectricityProvider) || (dealE.properties.electricity_provider_deal && fetchedLead[0].ElectricityProvider && dealE.properties.electricity_provider_deal !== fetchedLead[0].ElectricityProvider)) {
            updateDeal({
                dealId: dealId,
                propertyName: "electricity_provider_deal",
                propertyValue: fetchedLead[0].ElectricityProvider
            })
        }
        if ((!dealE.properties.module_brand__old_ && fetchedLead[0].modulesBrand) || (dealE.properties.module_brand__old_ && fetchedLead[0].modulesBrand && dealE.properties.module_brand__old_ !== fetchedLead[0].modulesBrand)) {
            updateDeal({
                dealId: dealId,
                propertyName: "module_brand__old_",
                propertyValue: fetchedLead[0].modulesBrand
            })
        }
        if ((!dealE.properties.inverter_brand && fetchedLead[0].inverterBrand) || (dealE.properties.inverter_brand && fetchedLead[0].inverterBrand && dealE.properties.inverter_brand !== fetchedLead[0].inverterBrand)) {
            updateDeal({
                dealId: dealId,
                propertyName: "inverter_brand",
                propertyValue: fetchedLead[0].inverterBrand
            })
        }
        if ((!dealE.properties.amount && fetchedLead[0].contractPrice) || (dealE.properties.amount && fetchedLead[0].contractPrice && dealE.properties.amount !== fetchedLead[0].contractPrice)) {
            updateDeal({
                dealId: dealId,
                propertyName: "amount",
                propertyValue: fetchedLead[0].contractPrice
            })
        }
        if ((!dealE.properties.down_payment && fetchedLead[0].downPayment) || (dealE.properties.down_payment && fetchedLead[0].downPayment && dealE.properties.down_payment !== fetchedLead[0].downPayment)) {
            updateDeal({
                dealId: dealId,
                propertyName: "down_payment",
                propertyValue: fetchedLead[0].downPayment
            })
        }
        if ((!dealE.properties.n1st_payment && fetchedLead[0].f1stPayment) || (dealE.properties.n1st_payment && fetchedLead[0].f1stPayment && dealE.properties.n1st_payment !== fetchedLead[0].f1stPayment)) {
            updateDeal({
                dealId: dealId,
                propertyName: "n1st_payment",
                propertyValue: fetchedLead[0].f1stPayment
            })
        }
        if ((!dealE.properties.n2nd_payment && fetchedLead[0].s2ndPayment) || (dealE.properties.n2nd_payment && fetchedLead[0].s2ndPayment && dealE.properties.n2nd_payment !== fetchedLead[0].s2ndPayment)) {
            updateDeal({
                dealId: dealId,
                propertyName: "n2nd_payment",
                propertyValue: fetchedLead[0].s2ndPayment
            })
        }
        if ((!dealE.properties.n3rd_payment && fetchedLead[0].t3rdPayment) || (dealE.properties.n3rd_payment && fetchedLead[0].t3rdPayment && dealE.properties.n3rd_payment !== fetchedLead[0].t3rdPayment)) {
            updateDeal({
                dealId: dealId,
                propertyName: "n3rd_payment",
                propertyValue: fetchedLead[0].t3rdPayment
            })
        }
        if ((!dealE.properties.n4th_payment && fetchedLead[0].f4thPayment) || (dealE.properties.n4th_payment && fetchedLead[0].f4thPayment && dealE.properties.n4th_payment !== fetchedLead[0].f4thPayment)) {
            updateDeal({
                dealId: dealId,
                propertyName: "n4th_payment",
                propertyValue: fetchedLead[0].f4thPayment
            })
        }
        if ((!dealE.properties.final_payment_amount && fetchedLead[0].finalPayment) || (dealE.properties.final_payment_amount && fetchedLead[0].finalPayment && dealE.properties.final_payment_amount !== fetchedLead[0].finalPayment)) {
            updateDeal({
                dealId: dealId,
                propertyName: "final_payment_amount",
                propertyValue: fetchedLead[0].finalPayment
            })
        }
        if ((!dealE.properties.n1st_payment_stage && fetchedLead[0].f1stPaymentDate) || (dealE.properties.n1st_payment_stage && fetchedLead[0].f1stPaymentDate && dealE.properties.n1st_payment_stage !== fetchedLead[0].f1stPaymentDate)) {
            updateDeal({
                dealId: dealId,
                propertyName: "n1st_payment_stage",
                propertyValue: fetchedLead[0].f1stPaymentDate
            })
        }

        if ((!dealE.properties.n2nd_payment_stage && fetchedLead[0].s2ndPaymentDate) || (dealE.properties.n2nd_payment_stage && fetchedLead[0].s2ndPaymentDate && dealE.properties.n2nd_payment_stage !== fetchedLead[0].s2ndPaymentDate)) {
            updateDeal({
                dealId: dealId,
                propertyName: "n2nd_payment_stage",
                propertyValue: fetchedLead[0].s2ndPaymentDate
            })
        }
        if ((!dealE.properties.n3rd_payment_stage && fetchedLead[0].t3rdPaymentDate) || (dealE.properties.n3rd_payment_stage && fetchedLead[0].t3rdPaymentDate && dealE.properties.n3rd_payment_stage !== fetchedLead[0].t3rdPaymentDate)) {
            updateDeal({
                dealId: dealId,
                propertyName: "n3rd_payment_stage",
                propertyValue: fetchedLead[0].t3rdPaymentDate
            })
        }
        if ((!dealE.properties.n4th_payment_date && fetchedLead[0].f4thPaymentDate) || (dealE.properties.n4th_payment_date && fetchedLead[0].f4thPaymentDate && dealE.properties.n4th_payment_date !== fetchedLead[0].f4thPaymentDate)) {
            updateDeal({
                dealId: dealId,
                propertyName: "n4th_payment_date",
                propertyValue: fetchedLead[0].f4thPaymentDate
            })
        }
        if ((!dealE.properties.final_payment_stage && fetchedLead[0].finalPaymentDate) || (dealE.properties.final_payment_stage && fetchedLead[0].finalPaymentDate && dealE.properties.final_payment_stage !== fetchedLead[0].finalPaymentDate)) {
            updateDeal({
                dealId: dealId,
                propertyName: "final_payment_stage",
                propertyValue: fetchedLead[0].finalPaymentDate
            })
        }
        if ((!dealE.properties.lender_1 && fetchedLead[0].lender1) || (dealE.properties.lender_1 && fetchedLead[0].lender1 && dealE.properties.lender_1 !== fetchedLead[0].lender1)) {
            updateDeal({
                dealId: dealId,
                propertyName: "lender_1",
                propertyValue: fetchedLead[0].lender1
            })
        }
        if ((!dealE.properties.finance_amount_l1 && fetchedLead[0].financeAmount1) || (dealE.properties.finance_amount_l1 && fetchedLead[0].financeAmount1 && dealE.properties.finance_amount_l1 !== fetchedLead[0].financeAmount1)) {
            updateDeal({
                dealId: dealId,
                propertyName: "finance_amount_l1",
                propertyValue: fetchedLead[0].financeAmount1
            })
        }
        // if ((!dealE.properties.l1_exp_date && fetchedLead[0].l1ExpDate) || (dealE.properties.l1_exp_date && fetchedLead[0].l1ExpDate && dealE.properties.l1_exp_date !== fetchedLead[0].l1ExpDate)) {
        //     updateDeal({
        //         dealId: dealId,
        //         propertyName: "l1_exp_date",
        //         propertyValue: fetchedLead[0].l1ExpDate
        //     })
        // }
        if ((!dealE.properties.lender_2 && fetchedLead[0].lender2) || (dealE.properties.lender_2 && fetchedLead[0].lender2 && dealE.properties.lender_2 !== fetchedLead[0].lender2)) {
            updateDeal({
                dealId: dealId,
                propertyName: "lender_2",
                propertyValue: fetchedLead[0].lender2
            })
        }
        if ((!dealE.properties.finance_amount_l2 && fetchedLead[0].financeAmount2) || (dealE.properties.finance_amount_l2 && fetchedLead[0].financeAmount2 && dealE.properties.finance_amount_l2 !== fetchedLead[0].financeAmount2)) {
            updateDeal({
                dealId: dealId,
                propertyName: "finance_amount_l2",
                propertyValue: fetchedLead[0].financeAmount2
            })
        }
        // if ((!dealE.properties.l2_exp_date && fetchedLead[0].l2ExpDate) || (dealE.properties.l2_exp_date && fetchedLead[0].l2ExpDate && dealE.properties.l2_exp_date !== fetchedLead[0].l2ExpDate)) {
        //     updateDeal({
        //         dealId: dealId,
        //         propertyName: "l2_exp_date",
        //         propertyValue: fetchedLead[0].l2ExpDate
        //     })
        // }
        if ((!dealE.properties.lender_3 && fetchedLead[0].lender3) || (dealE.properties.lender_3 && fetchedLead[0].lender3 && dealE.properties.lender_3 !== fetchedLead[0].lender3)) {
            updateDeal({
                dealId: dealId,
                propertyName: "lender_3",
                propertyValue: fetchedLead[0].lender3
            })
        }
        if ((!dealE.properties.finance_amount_l3 && fetchedLead[0].financeAmount3) || (dealE.properties.finance_amount_l3 && fetchedLead[0].financeAmount3 && dealE.properties.finance_amount_l3 !== fetchedLead[0].financeAmount3)) {
            updateDeal({
                dealId: dealId,
                propertyName: "finance_amount_l3",
                propertyValue: fetchedLead[0].financeAmount3
            })
        }
        // if ((!dealE.properties.l3_exp_date && fetchedLead[0].l3ExpDate) || (dealE.properties.l3_exp_date && fetchedLead[0].l3ExpDate && dealE.properties.l3_exp_date !== fetchedLead[0].l3ExpDate)) {
        //     updateDeal({
        //         dealId: dealId,
        //         propertyName: "l3_exp_date",
        //         propertyValue: fetchedLead[0].l3ExpDate
        //     })
        // }
        if ((!dealE.properties.dealer_fees && fetchedLead[0].dealerFees) || (dealE.properties.dealer_fees && fetchedLead[0].dealerFees && dealE.properties.dealer_fees !== fetchedLead[0].dealerFees)) {
            updateDeal({
                dealId: dealId,
                propertyName: "dealer_fees",
                propertyValue: fetchedLead[0].dealerFees
            })
        }
        if ((!dealE.properties.price_after_df___discounts && fetchedLead[0].totalPriceAfterDealerFees) || (dealE.properties.price_after_df___discounts && fetchedLead[0].totalPriceAfterDealerFees && dealE.properties.price_after_df___discounts !== fetchedLead[0].totalPriceAfterDealerFees)) {
            updateDeal({
                dealId: dealId,
                propertyName: "price_after_df___discounts",
                propertyValue: fetchedLead[0].totalPriceAfterDealerFees
            })
        }
        if ((!dealE.properties.ppw && fetchedLead[0].ppw) || (dealE.properties.ppw && fetchedLead[0].ppw && dealE.properties.ppw !== fetchedLead[0].ppw)) {
            updateDeal({
                dealId: dealId,
                propertyName: "ppw",
                propertyValue: fetchedLead[0].ppw
            })
        }
        if ((!dealE.properties.longitude_and_latitude && fetchedLead[0].latAndLongOfHome) || (dealE.properties.longitude_and_latitude && fetchedLead[0].latAndLongOfHome && dealE.properties.longitude_and_latitude !== fetchedLead[0].latAndLongOfHome)) {
            updateDeal({
                dealId: dealId,
                propertyName: "longitude_and_latitude",
                propertyValue: fetchedLead[0].latAndLongOfHome
            })
        }
        if ((!dealE.properties.closer_notes_to_pm && fetchedLead[0].repNotesToPM) || (dealE.properties.closer_notes_to_pm && fetchedLead[0].repNotesToPM && dealE.properties.closer_notes_to_pm !== fetchedLead[0].repNotesToPM)) {
            updateDeal({
                dealId: dealId,
                propertyName: "closer_notes_to_pm",
                propertyValue: fetchedLead[0].repNotesToPM
            })
        }
        if ((!dealE.properties.module_qty && fetchedLead[0].moduleQty) || (dealE.properties.module_qty && fetchedLead[0].moduleQty && dealE.properties.module_qty !== fetchedLead[0].moduleQty)) {
            updateDeal({
                dealId: dealId,
                propertyName: "module_qty",
                propertyValue: fetchedLead[0].moduleQty
            })
        }
        if ((!dealE.properties.system_size__kw_ && fetchedLead[0].systemSize) || (dealE.properties.system_size__kw_ && fetchedLead[0].systemSize && dealE.properties.system_size__kw_ !== fetchedLead[0].systemSize)) {
            updateDeal({
                dealId: dealId,
                propertyName: "system_size__kw_",
                propertyValue: fetchedLead[0].systemSize
            })
        }
        if ((!dealE.properties.est_sys_prod__kwh_ && fetchedLead[0].estimatedSystemProd) || (dealE.properties.est_sys_prod__kwh_ && fetchedLead[0].estimatedSystemProd && dealE.properties.est_sys_prod__kwh_ !== fetchedLead[0].estimatedSystemProd)) {
            updateDeal({
                dealId: dealId,
                propertyName: "est_sys_prod__kwh_",
                propertyValue: fetchedLead[0].estimatedSystemProd
            })
        }
        if ((!dealE.properties.special_notes && fetchedLead[0].specialNotes) || (dealE.properties.special_notes && fetchedLead[0].specialNotes && dealE.properties.special_notes !== fetchedLead[0].specialNotes)) {
            updateDeal({
                dealId: dealId,
                propertyName: "special_notes",
                propertyValue: fetchedLead[0].specialNotes
            })
        }
        if ((!dealE.properties.finance_notes && fetchedLead[0].specialNotes1) || (dealE.properties.finance_notes && fetchedLead[0].specialNotes1 && dealE.properties.finance_notes !== fetchedLead[0].specialNotes1)) {
            updateDeal({
                dealId: dealId,
                propertyName: "finance_notes",
                propertyValue: fetchedLead[0].specialNotes1
            })
        }
        if ((!dealE.properties.special_notes_2 && fetchedLead[0].specialNotes2) || (dealE.properties.special_notes_2 && fetchedLead[0].specialNotes2 && dealE.properties.special_notes_2 !== fetchedLead[0].specialNotes2)) {
            updateDeal({
                dealId: dealId,
                propertyName: "special_notes_2",
                propertyValue: fetchedLead[0].specialNotes2
            })
        }
        if ((!dealE.properties.lender_1_dealer_fees && fetchedLead[0].lender1DealerFees) || (dealE.properties.lender_1_dealer_fees && fetchedLead[0].lender1DealerFees && dealE.properties.lender_1_dealer_fees !== fetchedLead[0].lender1DealerFees)) {
            updateDeal({
                dealId: dealId,
                propertyName: "lender_1_dealer_fees",
                propertyValue: fetchedLead[0].lender1DealerFees
            })
        }
        if ((!dealE.properties.lender_2_dealer_fees && fetchedLead[0].lender2DealerFees) || (dealE.properties.lender_2_dealer_fees && fetchedLead[0].lender2DealerFees && dealE.properties.lender_2_dealer_fees !== fetchedLead[0].lender2DealerFees)) {
            updateDeal({
                dealId: dealId,
                propertyName: "lender_2_dealer_fees",
                propertyValue: fetchedLead[0].lender2DealerFees
            })
        }
        if ((!dealE.properties.lender_3_dealer_fees && fetchedLead[0].lender3DealerFees) || (dealE.properties.lender_3_dealer_fees && fetchedLead[0].lender3DealerFees && dealE.properties.lender_3_dealer_fees !== fetchedLead[0].lender3DealerFees)) {
            updateDeal({
                dealId: dealId,
                propertyName: "lender_3_dealer_fees",
                propertyValue: fetchedLead[0].lender3DealerFees
            })
        }
        if ((!dealE.properties.loan_docs_link && fetchedLead[0].loanDocsLink) || (dealE.properties.loan_docs_link && fetchedLead[0].loanDocsLink && dealE.properties.loan_docs_link !== fetchedLead[0].loanDocsLink)) {
            updateDeal({
                dealId: dealId,
                propertyName: "loan_docs_link",
                propertyValue: fetchedLead[0].loanDocsLink
            })
        }
        if ((!dealE.properties.loan_id && fetchedLead[0].applicationId) || (dealE.properties.loan_id && fetchedLead[0].applicationId && dealE.properties.loan_id !== fetchedLead[0].applicationId)) {
            updateDeal({
                dealId: dealId,
                propertyName: "loan_id",
                propertyValue: fetchedLead[0].applicationId
            })
        }
        if ((!dealE.properties.velocify_id && fetchedLead[0].leadId) || (dealE.properties.velocify_id && fetchedLead[0].leadId && dealE.properties.velocify_id !== fetchedLead[0].leadId)) {
            updateDeal({
                dealId: dealId,
                propertyName: "velocify_id",
                propertyValue: fetchedLead[0].leadId
            })
        }
        if ((!dealE.properties.solar && fetchedLead[0].solarSold) || (dealE.properties.solar && fetchedLead[0].solarSold && dealE.properties.solar !== fetchedLead[0].solarSold)) {
            updateDeal({
                dealId: dealId,
                propertyName: "solar",
                propertyValue: fetchedLead[0].solarSold
            })
        }
        if ((!dealE.properties.roof && fetchedLead[0].generatorSold) || (dealE.properties.roof && fetchedLead[0].roofSold && dealE.properties.roof !== fetchedLead[0].roofSold)) {
            updateDeal({
                dealId: dealId,
                propertyName: "roof",
                propertyValue: fetchedLead[0].roofSold
            })
        }
        if ((!dealE.properties.generator && fetchedLead[0].generatorSold) || (dealE.properties.generator && fetchedLead[0].generatorSold && dealE.properties.generator !== fetchedLead[0].generatorSold)) {
            updateDeal({
                dealId: dealId,
                propertyName: "generator",
                propertyValue: fetchedLead[0].generatorSold
            })
        }
        if ((!dealE.properties.battery && fetchedLead[0].batterySold) || (dealE.properties.battery && fetchedLead[0].batterySold && dealE.properties.battery !== fetchedLead[0].batterySold)) {
            updateDeal({
                dealId: dealId,
                propertyName: "battery",
                propertyValue: fetchedLead[0].batterySold
            })
        }
        if ((!dealE.properties.ev_charger && fetchedLead[0].evChargerSold) || (dealE.properties.ev_charger && fetchedLead[0].evChargerSold && dealE.properties.ev_charger !== fetchedLead[0].evChargerSold)) {
            updateDeal({
                dealId: dealId,
                propertyName: "ev_charger",
                propertyValue: fetchedLead[0].evChargerSold
            })
        }
        if ((!dealE.properties.span && fetchedLead[0].spanSold) || (dealE.properties.span && fetchedLead[0].spanSold && dealE.properties.span !== fetchedLead[0].spanSold)) {
            updateDeal({
                dealId: dealId,
                propertyName: "span",
                propertyValue: fetchedLead[0].spanSold
            })
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports = { checkDeals }