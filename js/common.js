function printMensaje(tipo,divId){

    let mensaje = document.createElement('P')
    mensaje.setAttribute('class',`alert ${tipo}`)

    let text = ''

    switch (tipo) {
        case 'success':
            text = document.createTextNode('Ciudad agregada con éxito')
            break;

        case 'warning':
            text = document.createTextNode('La ciudad ingresada ya se encuentra almacenada')
            break;

        case 'error':
            text = document.createTextNode('Error: La ciudad ingresada no se encuentra en la API o se produjo un error al consultar')
            break;
    
        default:
            break;
    }

    mensaje.appendChild(text) 

    document.getElementById(divId).appendChild(mensaje);

    removeMessage();
    
}

function getCitiesFromLocalStorage() {
    let cities = localStorage.getItem("CITIES");
    if(cities) {
        cities = JSON.parse(cities);
    } else {
        cities = [];
    }
    return cities;
}

function addNewCityToLocalStorage(newCity) {
    let cities = getCitiesFromLocalStorage();
    cities.push(newCity);
    localStorage.setItem("CITIES", JSON.stringify(cities));
}   


function consultAPI(cityName) {
    let apiKey = "8eeea2f91939d120d31f5c10806c07cd"
    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric&lang=es`)
        .then(response => {
            if (response.ok) return response.json();
            throw new Error("error")
        })
        .then(data => {
            verClima(data);
        })
        .catch(error => {
            return "error"
        });
}

function verClima(data) {
    let ciudad = data.name;
    let icono = data.weather[0].icon;
    let temperatura = data.main.temp;
    let sensacionTermica = data.main.feels_like;
    let humedad = data.main.humidity;
    let viento = data.wind.speed;
    let presionAtm = data.main.pressure;

    
    let card = `<div class="card"> 
                    <h3>${ciudad}</h3>
                    <img src="http://openweathermap.org/img/wn/${icono}.png" alt="Imagen">
                    <p>Temperatura: ${temperatura}°</p>
                    <p>Sensación Térmica: ${sensacionTermica}°</p>
                    <p>Humedad: ${humedad}%</p>
                    <p>Velocidad del Viento: ${viento}km/h</p>
                    <p>Presión: ${presionAtm} P</p>
                </div>`

    let section = document.getElementById("section-weather-result");
    if (section) {
        section.innerHTML = "";
        section.innerHTML += card;
    }
}