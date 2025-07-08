let test;

function item(registros) {
    for (let item = 0; item < registros.length; item++) {
        cuerpo().appendChild(titulo(registros[item].anime));
        cuerpo().appendChild(portada(registros[item].id, registros[item].portada))
    }
}

function cuerpo() {
    let body = document.querySelector("body");
    let div = document.createElement("div");
    return body.appendChild(div);
}

function titulo(anime) {
    let titulo = document.createElement("h1");
    titulo.innerText = anime;
    return titulo;
}

function portada(id, portada) {
    let img = document.createElement("img");
    img.src = "../".concat("ficheros").concat("/").concat(id).concat("/").concat(portada);
    return img;
}