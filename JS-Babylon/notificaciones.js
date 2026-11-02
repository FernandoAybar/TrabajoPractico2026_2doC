import { DATOS_DE_NOTIFICACION } from "./datosNotificaciones.js";

export function windowsNotificacion(valorCuenta) {

    const NOTI_ENCONTRADA = DATOS_DE_NOTIFICACION.find(item => item.id === valorCuenta);

    if (!NOTI_ENCONTRADA) {
        console.error("Notificacion no encontrada");
        return;
    }
   //// capa de fondo para bluriarlo/// 
    const capa = document.createElement('section');
    capa.className='capa-de-modifiacion';
    /////

    const CONTENEDOR = document.createElement("article");
    CONTENEDOR.className = "modificado-recuperar";

    if(NOTI_ENCONTRADA.id==1){
        CONTENEDOR.style.border="0.2rem solid rgb(18, 145, 204)";
        CONTENEDOR.style.boxShadow= "0 0.5rem 0 rgb(18, 145, 204)";
    }


    CONTENEDOR.innerHTML = `
            <section class="mensaje">
            <img src=${NOTI_ENCONTRADA.gifDireccion} class="imagen-ok" alt="gif correcto mensaje">
            <h2 id="notificacion-h2"> ${NOTI_ENCONTRADA.titulo} </h2>
            <p id="notificacion-p">${NOTI_ENCONTRADA.parrafo}</p>
            <a href="${NOTI_ENCONTRADA.accionBoton}" class="btn-crear-cuenta"> ${NOTI_ENCONTRADA.textoBoton}</a>

        </section>`;

        // agregando la capa/
        capa.appendChild(CONTENEDOR);

        ////
    document.body.append(capa);




}