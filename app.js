// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombres = [];

// Función para asignar texto a un elemento HTML
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

// Función para agregar un amigo a la lista
function agregarAmigo() {
    // Capturar el valor ingresado en el campo de entrada
    let nombreUsuario = document.getElementById('amigo').value.trim();
    
    // Validar que el campo no esté vacío
    if (!nombreUsuario) {
        alert('Por favor, inserte un nombre.');
        return;
    }
    
    // Agregar el nombre al array
    nombres.push(nombreUsuario);
    
    // Obtener el elemento de la lista de amigos
    let listaAmigos = document.getElementById('listaAmigos');
    
    // Limpiar la lista existente para evitar duplicados
    listaAmigos.innerHTML = "";
    
    // Iterar sobre el arreglo y agregar cada amigo a la lista
    for (let amigo of nombres) {
        let nuevoElemento = document.createElement('li');
        nuevoElemento.textContent = amigo;
        listaAmigos.appendChild(nuevoElemento);
    }
    
    // Limpiar el campo de entrada
    limpiarCaja();
    return;
}

// Función para sortear un amigo
function sortearAmigo() {
    // Validar que haya amigos en la lista
    if (nombres.length === 0) {
        asignarTextoElemento('#resultado', 'No hay nombres en la lista para sortear.');
        return;
    }
    
    // Generar un índice aleatorio
    let indiceSorteado = Math.floor(Math.random() * nombres.length);
    
    // Obtener el nombre sorteado
    let nombreSorteado = nombres[indiceSorteado];
    
    // Mostrar el resultado en la interfaz
    asignarTextoElemento('#resultado', `El nombre sorteado es: ${nombreSorteado}`);
    return;
}

// Función para limpiar el campo de entrada
function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

// Configuración inicial del juego
document.addEventListener('DOMContentLoaded', () => {
    asignarTextoElemento('#resultado', 'Ingrese nombres para sortear.');
});


