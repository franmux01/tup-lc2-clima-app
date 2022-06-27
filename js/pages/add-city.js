async function validateCity(nuevaCiudad) {
    let cities = getCitiesFromLocalStorage();
  
    for (let i = 0; i < cities.length; i++) { 
        if (nuevaCiudad == cities[i]) { 
            return "warning";
        };
    };

    if (await consultAPI(nuevaCiudad) == "error") {
        return "error";
    }
    else {
        return "success"; 
    };
}

function removeMessage() { 
    setTimeout(function() {
        document.getElementsByClassName("alert")[0].remove();
    }, 3000);
}

async function addCityToLocalStorage() { 
    let cities = getCitiesFromLocalStorage();
    let nuevaCiudad = document.getElementById("ingresarCiudad").value;
    nuevaCiudad = nuevaCiudad.toUpperCase() 

    switch(await validateCity(nuevaCiudad)) {
        case "success": 
            cities.push(nuevaCiudad); 
            localStorage.setItem("CITIES", JSON.stringify(cities)); 
            document.getElementById("messajeBox").innerHTML += mensajeExito;
            removeMessage();
            break;
        case "warning":
            document.getElementById("messajeBox").innerHTML += mensajeAdv; 
            removeMessage();
            break;
        case "error":
            document.getElementById("messajeBox").innerHTML += mensajeError; 
            removeMessage();
            break;
    };
};

let mensajeExito = '<p class="alert success">Ciudad agregada con éxito</p>';
let mensajeError = '<p class="alert error">Error: La ciudad ingresada no se encuentra en la API o se produjo un error al consultar</p>';
let mensajeAdv = '<p class="alert warning">La ciudad ingresada ya se encuentra almacenada</p>';

let buttonAddCity = document.getElementById("buttonAdd");
buttonAddCity.addEventListener("click", addCityToLocalStorage);
