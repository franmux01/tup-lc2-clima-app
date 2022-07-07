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
            
            printMensaje('success','messajeBox')

            break;

        case "warning":
            printMensaje('warning','messajeBox')
            break;

        case "error":
            printMensaje('error','messajeBox')
            break;
    };
};

let buttonAddCity = document.getElementById("buttonAdd");
buttonAddCity.addEventListener("click", addCityToLocalStorage);
