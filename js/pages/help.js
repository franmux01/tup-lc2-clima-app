function removeMessage() { 
    setTimeout(function() {
        document.getElementsByClassName("alert-message")[0].remove();
    }, 3000);
}

function validarEmail(email) {
  if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email)){
   alert("La dirección de email " + email + " es correcta!.");
   document.getElementById('formulario').submit()
  } else {
    document.getElementById('emailBad').appendChild(mensajeAlert)
    removeMessage();
  }
}

let btnSubmit = document.getElementById('submitBtn')

let mensajeAlert = document.createElement('P')
mensajeAlert.setAttribute('class','alert-message')

let msj= document.createTextNode('Ingrese un email valido')
mensajeAlert.appendChild(msj)


btnSubmit.addEventListener('click',function(event){
  event.preventDefault();  
  let email = document.getElementById('email').value
  validarEmail(email)    
})