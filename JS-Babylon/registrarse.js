import { validarDatos } from "./validacionUser.js";
import { windowsNotificacion } from "./notificaciones.js";


const formularioDeRegristro = document.getElementById('login-formulario-regis');

//validamos datos

formularioDeRegristro.addEventListener('input', (f) => {

    const nombreUsuarioComple = document.getElementById('nombre-registro').value;
    const nombreUsuario = document.getElementById('usuario-registro').value.trim();
    const emailUsuario = document.getElementById('email-registro').value.trim();
    const contraseña = document.getElementById('password-registro').value.trim();
    const contraseñaConfirmada = document.getElementById('confirm-password-registro').value.trim();

    let contenedorNomUserCom = document.getElementById('campo-Nombre-usuario-com');
    let contenedorNomUser = document.getElementById('campo-Nombre-usuario');
    let contenedorEmail = document.getElementById('campo-email');
    let contenedorContraseña = document.getElementById('contraseña-etique');
    let contenedorContraseña2 = document.getElementById('contraseña-etique-2');

    validarDatos(emailUsuario, contenedorEmail, contraseña, contenedorContraseña, nombreUsuario, contenedorNomUser,
        nombreUsuarioComple, contenedorNomUserCom, contraseñaConfirmada, contenedorContraseña2);


});