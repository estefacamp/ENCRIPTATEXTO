/*
 * Copyright (c) 2024 Your Company Name
 * All rights reserved.
 */
/* En todos los lugares donde están dos diagonales no he logrado que se componga
como por ejemplo no he logrado que se quite la imagen de donde debería ir el texto,
tampoco he logrado que aparezca el logo de Batman cuando se esté escribiendo y no he
logrado que los mensajes del resultado se coloquen así como entre otras cosas más
*/

const d = document;
const textarea = d.getElementById("miTextarea");
const muñeco = d.querySelector(".result_img");
const carga = d.querySelector(".loader");
const result_text = d.querySelector("#result_text");
const result_title = d.querySelector(".result_title");
const buttonencrip = d.getElementById("encriptarBtn");
const buttondesencrip = d.getElementById("desencriptarBtn");
const buttoncopiar = d.getElementById("copiarBtn");

const llaves = [
    ["e", "enter"],
    ["i", "imes"],
    ["o", "ober"],
    ["u", "ufat"],
    ["a", "ai"],
];

function encriptarMensaje(mensaje) {
    let mensajeEncriptado = "";
        for (let i = 0; i < mensaje.length; i++) {
                let letra = mensaje[i];
                let encriptada = letra;
                for (let j = 0; j < llaves.length; j++) {
                        if (letra === llaves[j][0]) {
                            encriptada = llaves[j][1];
                            break;
                        }
                    }
                mensajeEncriptado += encriptada;
            }
                return mensajeEncriptado;
}
    
function desencriptarMensaje(mensaje) {
let mensajeDesencriptado = mensaje;

for (let i = 0; i < llaves.length; i++) {
    let regex = new RegExp(llaves[i][1], "g");
    mensajeDesencriptado = mensajeDesencriptado.replace(regex, llaves[i][0]);
}

return mensajeDesencriptado;
}

// Tendría que ocultar los elementos pero no lo hace
textarea.addEventListener("input", (e) => {
    muñeco.style.display = "block";
    carga.classList.remove("hidden");
    result_title.textContent = "capturando mensaje";
    result_text.textContent = "";
});

// Si funciona el botón encriptar pero no aparece el mensaje "el resultado es:" y no se oculta la imagen ni el texto del recuadro
buttonencrip.addEventListener("click", (e) => {
    e.preventDefault();
    let mensaje = textarea.value.toLowerCase();
    let mensajeEncriptado = encriptarMensaje(mensaje);
    result_text.textContent = mensajeEncriptado;
    buttoncopiar.classList.remove("hidden");
    result_title.textContent = "el resultado es:";
    /* -- */
    muñeco.style.display = "block";
    carga.classList.add("hidden");
});

buttondesencrip.addEventListener("click", (e) => {
    e.preventDefault();
    let mensaje = textarea.value.toLowerCase();
    let mensajeDesencriptado = desencriptarMensaje(mensaje);
    result_text.textContent = mensajeDesencriptado;
    buttoncopiar.classList.remove("hidden");
});

buttoncopiar.addEventListener("click", () => {
    let textoCopiado = result_text.textContent;
    navigator.clipboard.writeText(textoCopiado).then(() => {
        muñeco.style.display = "block";
        carga.classList.add("hidden");
        result_title.textContent = "el texto se copió";
    });
});