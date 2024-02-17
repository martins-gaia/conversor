const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")


function convertValues(){
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")  // valor rm Real //
    const currencyValueConverted = document.querySelector(".currency-value") // outras moedas

    console.log(currencySelect.value)
    const dolarToday = 4.97
    const euroToday = 5.33
    const LibraToday = 0.16
    const bitcoin = 1.55

if(currencySelect.value == "dolar"){
    // Se o  select  estiver  selecionado o valor  de dolar, entre aqui//
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US",{
        style:"currency",
        currency: "USD"
    }).format(inputCurrencyValue / dolarToday)
}
if(currencySelect.value == "euro"){
     // Se o  select  estiver  selecionado o valor  de euro, entre aqui//
currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE",{
    style:"currency",
    currency:"EUR"
}).format (inputCurrencyValue / euroToday)
}


currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-br",{
    style:"currency",
    currency:"BRL"
}).format(inputCurrencyValue)

if(currencySelect.value == "libra"){
    // Se o  select  estiver  selecionado o valor  de euro, entre aqui//
currencyValueConverted.innerHTML = new Intl.NumberFormat("GBP",{
   style:"currency",
   currency:"GBP"
}).format (inputCurrencyValue / euroToday)
}

if(currencySelect.value == "bitcoin"){
    // Se o  select  estiver  selecionado o valor  de euro, entre aqui//
currencyValueConverted.innerHTML = new Intl.NumberFormat("BTC",{
   style:"currency",
   currency:"BTC"
}).format (inputCurrencyValue / euroToday)
}

if(currencySelect.value == "real"){
    // Se o  select  estiver  selecionado o valor  de euro, entre aqui//
currencyValueConverted.innerHTML = new Intl.NumberFormat("BRL",{
   style:"currency",
   currency:"BRL"
}).format (inputCurrencyValue / euroToday)
}




}
function changeCurrency (){
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")

    if(currencySelect.value == "dolar"){
        currencyName. innerHTML = "Dólar americano"  
        currencyImage.src = "./assets/dolar.png"
    }  

    if(currencySelect.value == "euro"){
        currencyName. innerHTML = "Euro"  
        currencyImage.src = "./assets/euro.png"
    } 

    if(currencySelect.value == "libra"){
        currencyName. innerHTML = "Libra"  
        currencyImage.src = "./assets/libra 1.png"
}


if(currencySelect.value == "bitcoin"){
    currencyName. innerHTML = "Bitcoin"  
    currencyImage.src = "./assets/bitcoin.png"
}

if(currencySelect.value == "real"){
    currencyName. innerHTML = "Real"  
    currencyImage.src = "./assets/real.png"
}



    convertValues()

}
currencySelect.addEventListener("change", changeCurrency )
convertButton.addEventListener("click",convertValues )

