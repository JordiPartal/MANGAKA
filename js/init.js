let registros;

/**
 * Obtiene los datos de los ficheros JSON
 * @returns {Promise<void>}
 */
async function init() {
    try {
        await data();
        item(registros);
    } catch (error) {
        console.log("No se ha hecho 'fetch' del fichero json");
    }
}

function data() {
    return fetch("./js/data/data.json")
        .then(respuesta => respuesta.json())
        .then(datos => { registros = datos })
        .catch(error => console.log(error));
}
