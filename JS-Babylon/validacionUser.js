
///validaciones que solo presentan en false  (IniciarSesion.js)
export function validarDatos(emailUsuario, contenedorEmail, contraseña, contenedorContraseña, nombreUsuario, contenedorNomUser,
    nombreUsuarioComple, contenedorNomUserCom, contraseñaConfirmada, contenedorContraseña2) {
    //regex


    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    const nombreRegex = /^[A-Za-z\s]+$/;
    const nombreUserRegex = /[A-Za-z\d]+$/;

    ///valida emal///
    if ((emailUsuario.trim() !== "") && !emailRegex.test(emailUsuario)) {
        /*const nuevaEtiqueta = document.createElement('p');*/

        contenedorEmail.textContent = " El mail no tiene el formato valido";
        /*console.log("el email no tiene el formato valido");*/
        contenedorEmail.style.fontSize = "0.8rem";
        contenedorEmail.style.color = "red";
        contenedorEmail.style.display = "block";
        /*contenedorUser.appendChild(nuevaEtiqueta);
        return false;*/
    }
    else {
        contenedorEmail.style.display = "none";
    }
    // valida contraseña//
    if ((contraseña.trim() !== "") && !passwordRegex.test(contraseña)) {
        /* const nuevaetiquetaPass = document.createElement('p');*/
        contenedorContraseña.textContent = "la contraseña no cumple los requisitos (8 caracteres, min 1 mayus, 1 minus,algun numero)";
        contenedorContraseña.style.color = "red";
        contenedorContraseña.style.fontSize = "0.8rem";
        contenedorContraseña.style.display = "block";
        /*contendorPass.appendChild(nuevaetiquetaPass);*/
        /*console.log("la contraseña no cumple los requisitos");
        return false;*/
    }
    else {
        contenedorContraseña.style.display = "none";
    }
    ///valida nombre de usuario completo///
    if (nombreUsuarioComple.length > 25) {
        contenedorNomUserCom.textContent = "El nombre de usuario excede de 25 caracteres";
        contenedorNomUserCom.style.color = "red";
        contenedorNomUserCom.style.fontSize = "0.8rem";
        contenedorNomUserCom.style.display = "block";
    }
    else if ((nombreUsuarioComple !== "") && !nombreRegex.test(nombreUsuarioComple)) {
        contenedorNomUserCom.textContent = "Los caracteres no son apropiados(letras Mayusculas y Minusculas son validas)";
        contenedorNomUserCom.style.color = "red";
        contenedorNomUserCom.style.fontSize = "0.8rem";
        contenedorNomUserCom.style.display = "block";
    }
    else {
        contenedorNomUserCom.style.display = "none";
    }

    ///valida nombre de usuario corto
    if (nombreUsuario.length > 10) {
        contenedorNomUser.textContent = "El nombre de usuario excede de 10 caracteres";
        contenedorNomUser.style.color = "red";
        contenedorNomUser.style.fontSize = "0.8rem";
        contenedorNomUser.style.display = "block";
    }
    else if (nombreUsuario !== "" && !nombreUserRegex.test(nombreUsuario)) {
        contenedorNomUser.textContent = "Solo se admiten letras y numeros";
        contenedorNomUser.style.color = "red";
        contenedorNomUser.style.fontSize = "0.8rem";
        contenedorNomUser.style.display = "block";
    }
    else{
        contenedorNomUser.style.display = "none";
    }

    // validar igualdad de contraseña 
    if(contraseñaConfirmada!=="" && contraseñaConfirmada!==contraseña){
        contenedorContraseña2.textContent = "Las contraseñas propociondas no son iguales";
        contenedorContraseña2.style.color = "red";
        contenedorContraseña2.style.fontSize = "0.8rem";
        contenedorContraseña2.style.display = "block";
    }
    else{
        contenedorContraseña2.style.display="none";
    }


}

/////////////////////////////////////////////////////////////




