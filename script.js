    const convertButton = document.querySelector(".convert-button")
 
function convertValues(){
    const inputCurrencyValue = document.querySelector(".input-currency").value 
    const currencyValueToConvert = document.querySelector(".to-convert-currency-value") //valor em Real
    const currencyValueToConverted = document.querySelector(".currency-value") // outros moedas

    const dolarToday = 5.2

    const convertedValue = inputCurrencyValue / dolarToday

    currencyValueToConverted.innerHTML = convertedValue
    currencyValueToConvert.innerHTML = inputCurrencyValue
  
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR",{
        style:"currency",
        currency:"BRL"
    }).format(inputCurrencyValue)


    currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-US",{
        style:"currency",
        currency:"USD"
    }).format(convertedValue)





}


convertButton.addEventListener("click", convertValues)