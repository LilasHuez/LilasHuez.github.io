function convert() {
  const fromCurrency = document.getElementById("fromCurrency").value;
  const toCurrency = document.getElementById("toCurrency").value;
  const amount = document.getElementById("amount").value;

  // Perform the conversion
  const convertedAmount = amount * getExchangeRate(fromCurrency, toCurrency);

  // Display the result
  const resultElement = document.getElementById("result");
  resultElement.textContent = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
}

// Function to get the exchange rate
function getExchangeRate(fromCurrency, toCurrency) {
  // Replace with your own API call or exchange rate logic
  // In this example, we use a simple lookup table for demonstration purposes
  const exchangeRates = {
      USD: {
          EUR: 0.85,
          GBP: 0.72
      },
      EUR: {
          USD: 1.18,
          GBP: 0.85
      },
      GBP: {
          USD: 1.38,
          EUR: 1.18
      }
  };

  return exchangeRates[fromCurrency][toCurrency];
}