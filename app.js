// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


let amigos = []; //  Declarar una variable de tipo array para almacenar los nombres de los amigos


function agregarAmigo() { // Función para agregar amigos
    // Capturar el valor del campo de entrada
    const input = document.getElementById('amigo');
    const nombre = input.value.trim(); // Limpiar espacios en blanco al principio y al final del nombre ingresado

       if (nombre === "") {
        alert("Por favor, inserte un nombre."); // Si el campo está vacío, mostrar alerta
        return; // Salir de la función sin agregar el nombre
    }

        amigos.push(nombre); // Agregar el nombre al arreglo de amigos

        input.value = ""; // Limpiar el campo de texto después de agregar el nombre

    // Actualizar la lista visualmente
    actualizarLista();
}

// Función para recorrer el array amigos y agregar cada nombre como un elemento <li> dentro de la lista HTML
function actualizarLista() {
    // Obtener el elemento de la lista donde se mostrarán los amigos
    const listaAmigos = document.getElementById('listaAmigos');
    
    // Limpiar la lista existente antes de agregar nuevos elementos
    listaAmigos.innerHTML = "";

    // Iterar sobre el arreglo amigos y agregar cada nombre como un <li>
    amigos.forEach(amigo => {
        const li = document.createElement('li'); // Crear un nuevo elemento de lista
        li.textContent = amigo; // Asignar el nombre del amigo al contenido del <li>
        listaAmigos.appendChild(li); // Agregar el <li> a la lista
    });
}

// Función para realizar el sorteo aleatorio de un amigo secreto
function sortearAmigo() {
    // Validar que haya amigos disponibles para el sorteo
    if (amigos.length === 0) {
        alert("¡No hay amigos para sortear! Por favor, añade algunos nombres."); // Si no hay amigos, mostrar alerta
        return; // Salir de la función sin hacer el sorteo
    }

    //  Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length); // Obtener un índice aleatorio entre 0 y el tamaño del arreglo

    // Obtener el nombre sorteado utilizando el índice aleatorio
    const amigoSorteado = amigos[indiceAleatorio]; // Obtener el amigo correspondiente al índice aleatorio

    // Mostrar el resultado del sorteo
    const resultado = document.getElementById('resultado'); // Obtener el área de resultado
    resultado.innerHTML = `El amigo secreto es: <strong>${amigoSorteado}</strong>`; // Mostrar el amigo sorteado en el área de resultado
}
