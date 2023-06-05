function convert() {
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;
    const amount = document.getElementById("amount").value;
  
    const convertedAmount = amount * getExchangeRate(fromCurrency, toCurrency);
  
    const resultElement = document.getElementById("result");
    resultElement.textContent = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
  }
  
  

  function getExchangeRate(fromCurrency, toCurrency) {

    const exchangeRates = {
        EUR: {
          SML: 0.30
        },
        SML: {
          EUR: 3.26
        }
      };
  
    return exchangeRates[fromCurrency][toCurrency];
  }