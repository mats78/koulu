console.log("tiedosto2")

const fahrenheitSyote = document.querySelector('input')
const fahrenheitTuloste = document.querySelector('#fahrenheit')
const celciusTuloste = document.querySelector('#celsius')
const button = document.querySelector('button')

function fahrenheitCelciukseksi(fahrenheit){
    let celcius = ((fahrenheit-32) / 1.8);
    console.log(celcius);
    return celcius;
}

function muunnaFahrenheit_Celcius() {
    let syote  = fahrenheitSyote.value;
    fahrenheitTuloste.textContent = syote;

    celciusTuloste.textContent = fahrenheitCelciukseksi(syote);
}

button.addEventListener('click', muunnaFahrenheit_Celcius)


