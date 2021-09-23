const fahrenheitSyote = document.getElementById('f_input')
const celciusSyote = document.getElementById('c_input')
const fahrenheitTuloste = document.querySelector('#fahrenheit')
const celciusTuloste = document.querySelector('#celsius')


function fahrenheitCelciukseksi(fahrenheit){
    let celcius = ((fahrenheit-32) / 1.8);
    console.log(celcius);
    return celcius;
}

function celciusFahrenheitiksi(celcius){
    let fahrenheit = (celcius * 1.8) + 32;
    console.log(fahrenheit);
    return fahrenheit;
}

function muunnaFahrenheit_Celcius() {
    let syote  = fahrenheitSyote.value;
    console.log(syote)
    if(!!syote) {
        celciusTuloste.textContent = Math.round(fahrenheitCelciukseksi(syote));
    }
    else {
        celciusTuloste.textContent = '?';
    }
}

function muunnaCelcius_Fahrenheit() {
    let syote  = celciusSyote.value;
    console.log(syote)
    if(!!syote) {
        fahrenheitTuloste.textContent = Math.round(celciusFahrenheitiksi(syote));
    }
    else {
        fahrenheitTuloste.textContent = '?';
    }
}

fahrenheitSyote.addEventListener('keyup', muunnaFahrenheit_Celcius);
celciusSyote.addEventListener('keyup', muunnaCelcius_Fahrenheit);



