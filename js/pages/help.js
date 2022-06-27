function removeMessage() { 
    setTimeout(function() {
        document.getElementsByClassName("alert-message")[0].remove();
    }, 3000);
}

function validarEmail(email) {
  
    let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
    
    if (regex.test(email)){
        alert("La direccion del email "+email+" es correcta.")
        document.getElementById('formulario').submit()
    } else {
        document.getElementById('emailBad').innerHTML += mensajeAlert; 
        removeMessage();
      /* alert("La dirección de email es incorrecta."); */
    }
  }
      
  let btnSubmit = document.getElementById('submitBtn')
  
  let mensajeAlert = '<p class="alert-message">Ingrese un Email valido</p>';
  
  
  btnSubmit.addEventListener('click',function(event){
  event.preventDefault();
    
    let email = document.getElementById('email').value
  
    validarEmail(email)
      
  })