document.getElementById('email').addEventListener('input', function(event) {
    campo = event.target;
    valido = document.getElementById('emailBad');
        
    emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    
    if (emailRegex.test(campo.value)) {
        document.getElementById("emailBad").innerHTML+= 'valido';
        removeMessage();

    } else {
        document.getElementById("emailBad").innerHTML+= mensajeAlert;
        removeMessage();
    }
});

let mensajeAlert = '<p class="alert-message">Ingrese un Email valido</p>'