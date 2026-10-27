
///validaciones que solo presentan en false 
export function validarDatos(nombreUsuario, contraseña, contenedorUser, contendorPass) {
    //regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/

    if ((nombreUsuario.trim()!=="")  && !emailRegex.test(nombreUsuario)) {
        /*const nuevaEtiqueta = document.createElement('p');*/

        contenedorUser.textContent = " El mail no tiene el formato valido";
        /*console.log("el email no tiene el formato valido");*/
        contenedorUser.style.fontSize = "0.8rem";
        contenedorUser.style.color = "red";
        contenedorUser.style.display= "block";
        /*contenedorUser.appendChild(nuevaEtiqueta);
        return false;*/
    }
    else{
        contenedorUser.style.display= "none";
    }

    if ((contraseña.trim()!=="")  && !passwordRegex.test(contraseña)) {
       /* const nuevaetiquetaPass = document.createElement('p');*/
        contendorPass.textContent = "la contraseña no cumple los requisitos (8 caracteres, min 1 mayus, 1 minus,algun numero)";
        contendorPass.style.color = "red";
        contendorPass.style.fontSize = "0.8rem";
        contendorPass.style.display="block";
        /*contendorPass.appendChild(nuevaetiquetaPass);*/
        /*console.log("la contraseña no cumple los requisitos");
        return false;*/
    }
    else{
        contendorPass.style.display="none";
    }
}

/////////////////////////////////////////////////////////////


/*En Proceso ALta usuarios */