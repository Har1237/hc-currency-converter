import Freecurrencyapi from '@everapi/freecurrencyapi-js';
const freecurrencyapi = new Freecurrencyapi('fca_live_HKoBa4S9fyXYYPBcfIsURkC3YX8m47BFy3UYw70Q');

convertCurrency("INR", "USD", 3);
export async function convertCurrency(fromCurrency, toCurrency, units){
    const convert=await freecurrencyapi.latest({
        base_currency: fromCurrency,
        currencies: toCurrency
    });
    const multiplier=convert.data[toCurrency];
    return multiplier*units;
}
