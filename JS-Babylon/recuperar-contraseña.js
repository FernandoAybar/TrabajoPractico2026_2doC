
import { windowsNotificacion } from "./notificaciones.js";
import { validarReset, generarNumero } from "./validacionUser.js";

const FORMULARIO_CONTRASEÑA = document.getElementById('formularioContraseña');
let valorCuenta=0;
let ramdomV = generarNumero();


FORMULARIO_CONTRASEÑA.addEventListener('input', (f) => {

    const codigo = document.getElementById('codigo-recuperar').value;
    const contraseña = document.getElementById('contraseña-anadida').value;
    const contraseñaValidada = document.getElementById('contraseña-anadida2').value;

    let contenedorCodigo = document.getElementById('codigo-random')
    let contenedorContraseña = document.getElementById('contenedorContraseña');
    let contenedorContraseña2 = document.getElementById('ContenerdorContraseña2');

    validarReset(codigo, contenedorCodigo, contraseña, contenedorContraseña,
        contraseñaValidada, contenedorContraseña2,ramdomV);

});


FORMULARIO_CONTRASEÑA.addEventListener('submit', (d) => {
    d.preventDefault();
     const codigo = document.getElementById('codigo-recuperar').value;
    const contraseña = document.getElementById('contraseña-anadida').value;
    const contraseñaValidada = document.getElementById('contraseña-anadida2').value;

    //validar existencia de mail 
    const usauarioEmail=document.getElementById('usuario-recuperar').value.trim();

    let usuarios=JSON.parse(localStorage.getItem("usuariosRegistrados"))|| [];

    const usuarioEncontrado=usuarios.find(f=> f.email===usauarioEmail);

    if (!usuarioEncontrado){
        valorCuenta=6;
        windowsNotificacion(valorCuenta);
        return
    }
    else{
        if(contraseñaValidada===contraseña){
            usuarioEncontrado.contraseña=contraseñaValidada;
           


            // console.log("valor de contraseña", usuarioEncontrado)
            localStorage.setItem("usuariosRegistrados", JSON.stringify(usuarios));
            valorCuenta=2;
            windowsNotificacion(valorCuenta);
        }
    }

});