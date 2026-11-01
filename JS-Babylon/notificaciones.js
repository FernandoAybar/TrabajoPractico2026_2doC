import { DATOS_DE_NOTIFICACION } from "./datosNotificaciones.js";

export function windowsNotificacion(valorCuenta) {

    const NOTI_ENCONTRADA = DATOS_DE_NOTIFICACION.find(item => item.id === valorCuenta);

    if (!NOTI_ENCONTRADA) {
        console.error("Notificacion no encontrada");
        return;
    }


    const CONTENEDOR = document.createElement("article");
    CONTENEDOR.className = "modificado-recuperar";

    CONTENEDOR.innerHTML = `<section class="mensaje">
            <img src="../imagenes/Review.gif" class="imagen-ok" alt="gif correcto mensaje">
            <h2 id="notificacion-h2"> ${NOTI_ENCONTRADA.titulo} </h2>
            <p id="notificacion-p">${NOTI_ENCONTRADA.parrafo}</p>
            <a href="${NOTI_ENCONTRADA.accionBoton}" class="btn-crear-cuenta"> ${NOTI_ENCONTRADA.textoBoton}</a>

        </section>`;

    document.body.append(CONTENEDOR);


}