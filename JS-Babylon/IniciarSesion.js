import { validarDatos } from "./validacionUser.js";
const formularioInicioSesion = document.getElementById('FormularioInicioSesion');





// validacion de ingreso en los input de ingreso
 formularioInicioSesion.addEventListener('input', (f) => {
    const nombreUsuario = document.getElementById('usuario-login').value;
    const contraseña = document.getElementById('pass').value;
    let contenedorUser = document.getElementById('campo-usuario');
    let contendorPass = document.getElementById('campo-contraseña');
    validarDatos(nombreUsuario, contraseña, contenedorUser, contendorPass);

    //consul por el eventdefault

});











formularioInicioSesion.addEventListener('submit', (e) => {
    e.preventDefault();
   
   
 
});



/*
const inicioSesion = ( parametro) => {

     return  `hola, ${parametro}` ; 
}

let datosValidos = true;

    if (nombreUsuario.length < 6){
        datosValidos=false;
    //mostrar un valor
    }

    if(!datosValidos){
        e.preventDefault();
    }
    



     */
