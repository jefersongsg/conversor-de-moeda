const convertButton = document.querySelector(".convert-button");
const selectValue = document.querySelector(".select-to-value");
const convertedValue = document.querySelector(".select-from-value");

    // Função para obter os dados da API
    async function getCurrencyData() {
        // URL da API
    const url = 'https://economia.awesomeapi.com.br/json/all';
       try {
           const response = await fetch(url);
           const data = await response.json();
           //console.log(data);
           return data; // Retorna os dados da API
       } catch (error) {
           console.error('Erro ao obter dados da API:', error);
       }
   }

    async function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".to-convert-currency-value") //valor em Real
    const currencyValueToConverted = document.querySelector(".currency-value") // outros moedas

    //console.log(selectValue.value)
    //console.log(convertedValue.value)

    const currencyData = await getCurrencyData();

    const rates = {
        USD : parseFloat(currencyData.USD.bid),
        EUR : parseFloat(currencyData.EUR.bid),
        GBP : parseFloat(currencyData.GBP.bid),
        BTC : parseFloat(currencyData.BTC.bid)
    };

    if (!currencyData) {
        console.error('Não foi possível obter os dados de câmbio.');
        return;
    }
    //currencyValueToConverted.innerHTML = convertedValue
    //currencyValueToConvert.innerHTML = inputCurrencyValue
    if (selectValue.value == "dolar") {
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / rates.USD)
    }

    if (selectValue.value == "euro") {
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / rates.EUR)
    }

    if (selectValue.value == "libra") {
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / rates.GBP)
    }

    if (selectValue.value == "bitcoin") {
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / rates.BTC)
        //console.log(rates.BTC)
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
        currencyName.innerHTML = "Dólar"
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
//document.querySelector(".input-currency").addEventListener("input", convertValues);
convertButton.addEventListener("click", convertValues);