const convertButton = document.querySelector(".convert-button");
const selectValue = document.querySelector(".select-to-value");
const convertedValue = document.querySelector(".select-from-value");


function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".to-convert-currency-value") //valor em Real
    const currencyValueToConverted = document.querySelector(".currency-value") // outros moedas

    console.log(selectValue.value)
    console.log(convertedValue.value)

    const vToday = {
        dolar: 5,
        euro: 6,
        libra: 7,
        bitcoin: 257.632,
        real: 1
    };


    //currencyValueToConverted.innerHTML = convertedValue
    //currencyValueToConvert.innerHTML = inputCurrencyValue
   

    if (selectValue.value == "dolar") {
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / vToday.dolar)

    }

    if (selectValue.value == "euro") {
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / vToday.euro)
    }

    if (selectValue.value == "libra") {
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / vToday.libra)
    }

    if (selectValue.value == "bitcoin") {
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / vToday.bitcoin)
    }
    
    if (selectValue.value == "real") {
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue / vToday.real)
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)
}

function changeCurrency() {
    const currencyName = document.querySelector(".currency-name")
    const currencyImg = document.querySelector(".log")

    if (selectValue.value == "dolar"){
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
    if (selectValue.value == "real") {
        currencyName.innerHTML = "Real"
        currencyImg.src = "./assets/real.png"
    }
    convertValues()
}

selectValue.addEventListener("change", changeCurrency);
document.querySelector(".input-currency").addEventListener("input", convertValues);