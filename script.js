const convertButton = document.querySelector(".convert-button")
const selectValue = document.querySelector(".select-value")


function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".to-convert-currency-value") //valor em Real
    const currencyValueToConverted = document.querySelector(".currency-value") // outros moedas

    console.log(selectValue.value)

    const dolarToday = 4.97
    const euroToday = 5.34
    const libraToday = 6.25
    const bitcoinToday = 257.632



    //currencyValueToConverted.innerHTML = convertedValue
    currencyValueToConvert.innerHTML = inputCurrencyValue


    if (selectValue.value == "dolar") {
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)

    }

    if (selectValue.value == "euro") {
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    if (selectValue.value == "libra") {
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }

    if (selectValue.value == "bitcoin") {
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinToday)
    }



    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)
}

function changeCurrency() {
    const currencyName = document.querySelector(".currency-name")
    const currencyImg = document.querySelector(".log")

    if (selectValue.value == "dolar") {
        currencyName.innerHTML = "Dólar americano"
        currencyImg.src = "./assets/dolar.png"
    }

    if (selectValue.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/euro.png"
    }

    if (selectValue.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImg.src = "./assets/libra.png"
    }

    if (selectValue.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImg.src = "./assets/bitcoin.png"
    }
    convertValues()
}

selectValue.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)