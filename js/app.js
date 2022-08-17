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
    desahabilitarBotonEnviar();
}


//Validar el formulario
function validarFormulario(e){
     
   
    //e.target hace referencia al campo en el que estmaos 
    
    if(e.target.value.length > 0){
        //Elimina los errores
        const mensajeError = document.querySelector('p.error');
        if(mensajeError){
            mensajeError.remove();
        }
        e.target.style.borderBottomColor = 'green';
    }else{
        e.target.style.borderBottomColor = 'red';
        mostrarError('Todos los campos son obligatorios');
    }

    let mailValido = false;
    if( e.target.type ==='email'){
        const er =  /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        
        if (er.test(e.target.value)) {
              console.log("Mail valido");
              mailValido =true;
              
        } else {
            mostrarError("Email no respeta formato correcto.");
        }
    }

    if ((mailValido) && asunto.value !=='' && mensaje.value !== '') 
    {
     
        btnEnviar.disabled = false;
        btnEnviar.classList.remove('cursor-not-allowd','opacity-50');
    }else{
        desahabilitarBotonEnviar();
    }
    
}


function desahabilitarBotonEnviar(){
    btnEnviar.disabled = true;
    btnEnviar.classList.add('cursor-not-allowd','opacity-50');
}
 
function mostrarError(mensaje){
    
  
    const mensajeError = document.createElement('p');
    mensajeError.textContent = mensaje;
    mensajeError.classList.add('error');
    
    const errores = document.querySelector('.error');

    if(errores)
    {
        console.log("tiene error")
    } else{
        formulario.appendChild(mensajeError);
    }
    
}
 
 

function resetearFormulario(){
    formulario.reset();
    iniciarApp();
}

function enviarEmail(e){
     e.preventDefault()
       
        //mostrar Spinner 
        const spinner = document.querySelector('#spinner');
        spinner.style.display='flex';
   
        //Despues de 3 segundos ocultar spinner
        setTimeout(() => {
            spinner.style.display='none';
            alert("Se envio el mail correctamente."); 
            resetearFormulario();
        }, 3000);

}