import { validarDatos } from "./validacionUser.js";
import { windowsNotificacion } from "./notificaciones.js";
import { Usuario } from "./usuario.js";


const formularioDeRegristro = document.getElementById('login-formulario-regis');

let valorCuenta=0;
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


/// Busque  y registro de nuevo usuario

formularioDeRegristro.addEventListener('submit', (e) =>{
e.preventDefault();


    const nombreUsuarioComple = document.getElementById('nombre-registro').value;
    const nombreUsuario = document.getElementById('usuario-registro').value.trim();
    const emailUsuario = document.getElementById('email-registro').value.trim();
    const contraseña = document.getElementById('password-registro').value.trim();
    const contraseñaConfirmada = document.getElementById('confirm-password-registro').value.trim();

    if(contraseña!==contraseñaConfirmada){
        return
    }


    let usuarios = JSON.parse(localStorage.getItem("usuariosRegistrados")) || [];

    const USUARIO_ENCONTRADO=  usuarios.find(f=> f.email===emailUsuario );

    if(USUARIO_ENCONTRADO){
        valorCuenta=6;
        windowsNotificacion(valorCuenta);
        return;
    }
    else{

        const usuarioRegistrado=new Usuario(nombreUsuarioComple,nombreUsuario,emailUsuario,contraseña);
        console.log("valores del formulario:", nombreUsuarioComple, nombreUsuario,emailUsuario,contraseña);
        usuarios.push(usuarioRegistrado);

        localStorage.setItem("usuariosRegistrados",JSON.stringify(usuarios));
        sessionStorage.setItem("usuariosRegistrados",JSON.stringify(usuarios));
        valorCuenta=3;
        windowsNotificacion(valorCuenta);
    }




});