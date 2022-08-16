//Variables
const btnEnviar = document.querySelector('#enviar');
const formulario = document.querySelector('#enviar-mail');

const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');

eventListeners();

function eventListeners(){
    document.addEventListener('DomContentLoaded',iniciarApp);

    //Campos del Formulario
    email.addEventListener('blur',validarFormulario); //Se ejecuta al salir del campo  email
    asunto.addEventListener('blur',validarFormulario); //Se ejecuta al salir del campo  email
    mensaje.addEventListener('blur',validarFormulario); //Se ejecuta al salir del campo  email
}

//Funciones
function iniciarApp(){
    //Bloqueo oton enviar
    btnEnviar.disabled = true;
    btnEnviar.classList.add('cursor-not-allowd','opacity-50');
}


//Validar el formulario
function validarFormulario(e){
     
   
    //e.target hace referencia al campo en el que estmaos 
    
    if(e.target.value.length > 0){
        e.target.style.borderBottomColor = 'green';
    }else{
       
        e.target.style.borderBottomColor = 'red';
        mostrarError();
    }


}

function mostrarError(){
   
    const mensajeError = document.createElement('p');
    mensajeError.textContent = 'Todos los campos son obligatorios';
    mensajeError.classList.add('error');
    const errores = document.querySelector('.error');

if(errores)
{
    console.log("tiene error")
} else{
    formulario.appendChild(mensajeError);
}
 
}


