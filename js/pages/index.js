let selector = document.getElementById("seleccionarCiudad");

function generateOption(value,text){

    let option = document.createElement('OPTION')
    option.setAttribute('value',value)

    let textNode = document.createTextNode(text)
    option.appendChild(textNode)

    if(value == 'no Cities' || value == ''){

        option.setAttribute('disabled','disabled')
        option.setAttribute('selected','selected')
    }

    return option
}

function addCitiesToSelector() { 

    let cities = getCitiesFromLocalStorage();

    if (cities.length == 0) {
        selector.appendChild(generateOption('no Cities','No hay ciudades agregadas'))
    }else{
        selector.appendChild(generateOption('','Seleccionar Ciudad'))
        
        for (let i = 0; i < cities.length; i++) { 
            selector.appendChild(generateOption(cities[i],cities[i]))
        }
    }
}

function createCard() {
    consultAPI(selector.value);
}


let consultButton = document.getElementById("consultarClima");
consultButton.addEventListener("click", createCard)

addCitiesToSelector();

