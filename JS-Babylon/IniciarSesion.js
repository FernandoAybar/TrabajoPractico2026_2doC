import { validarDatos } from "./validacionUser.js";
import { windowsNotificacion } from "./notificaciones.js";

const formularioInicioSesion = document.getElementById('FormularioInicioSesion');





// validacion de ingreso en los input de ingreso
formularioInicioSesion.addEventListener('input', (f) => {
    const nombreUsuario = document.getElementById('usuario-login').value.trim();
    const contraseña = document.getElementById('pass').value.trim();
    let contenedorUser = document.getElementById('campo-usuario');
    let contendorPass = document.getElementById('campo-contraseña');
    validarDatos(nombreUsuario, contenedorUser,  contraseña, contendorPass);

    //consul por el eventdefault

});

///busqueda de login 
formularioInicioSesion.addEventListener('submit', (e) => {
    e.preventDefault();
    let valorCuenta=0;
    const nombreUsuario = document.getElementById('usuario-login').value;
    const contraseña = document.getElementById('pass').value;

    let usuarios = JSON.parse(localStorage.getItem('usuariosRegistrados')) || [];

    const usuarioEncontrado = usuarios.find(f => f.email === nombreUsuario && f.password === contraseña);

    if (!usuarioEncontrado) {
        valorCuenta = 1;
        windowsNotificacion(valorCuenta);

        return
    }
    else{

    sessionStorage.setItem('sesionActiva', JSON.stringify(usuarioEncontrado));
    valorCuenta=5;
    windowsNotificacion(valorCuenta);
    }

    

    //ver esto
    cargarDashboard(usuarioEncontrado);

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
