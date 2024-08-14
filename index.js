/*
 * Copyright (c) 2024 Your Company Name
 * All rights reserved.
 */
document.addEventListener('DOMContentLoaded', () => {
    const textarea = document.getElementById('miTextarea');
    const resultText = document.getElementById('result_text');
    const resultTitle = document.querySelector('.result_title');
    const copiarBtn = document.getElementById('copiarBtn');
    const carga = document.getElementById('carga');
    
    const encriptarBtn = document.getElementById('encriptarBtn');
    const desencriptarBtn = document.getElementById('desencriptarBtn');
    
    // Función para validar el texto
    function validarTexto(texto) {
        return /^[a-z\s]+$/.test(texto);
    }
    
    // Función para encriptar el texto
    function encriptarTexto(texto) {
        // Ejemplo de encriptación: reemplazar cada letra por una combinación específica
        return texto
            .replace(/e/, 'enter')
            .replace(/i/, 'imes')
            .replace(/a/, 'ai')
            .replace(/o/, 'ober')
            .replace(/u/, 'ufat');
    }

    // Función para desencriptar el texto
    function desencriptarTexto(texto) {
        // Ejemplo de desencriptación, revertir el proceso de encriptación
        return texto
            .replace(/enter/, 'e')
            .replace(/imes/, 'i')
            .replace(/ai/, 'a')
            .replace(/ober/, 'o')
            .replace(/ufat/, 'u');
    }

    // Función para mostrar el resultado
    function mostrarResultado(texto) {
        resultTitle.textContent = 'Texto encriptado:';
        resultText.textContent = texto;
        copiarBtn.classList.remove('hidden');
        resultTitle.classList.remove('hidden');
        resultText.classList.remove('hidden');
    }

    // Función para copiar el texto al portapapeles
    copiarBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(resultText.textContent)
            .then(() => alert('Texto copiado al portapapeles'))
            .catch(err => console.error('Error al copiar el texto: ', err));
    });

    // Manejo de eventos para los botones
    encriptarBtn.addEventListener('click', (event) => {
        event.preventDefault();
        const texto = textarea.value;
        if (validarTexto(texto)) {
            mostrarResultado(encriptarTexto(texto));
        } else {
            alert('El texto solo puede contener letras minúsculas y espacios.');
        }
    });

    desencriptarBtn.addEventListener('click', (event) => {
        event.preventDefault();
        const texto = textarea.value;
        if (validarTexto(texto)) {
            mostrarResultado(desencriptarTexto(texto));
        } else {
            alert('El texto solo puede contener letras minúsculas y espacios.');
        }
    });
});
