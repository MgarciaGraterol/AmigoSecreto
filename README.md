<h1>Amigo Secreto - Sorteo de Nombres</h1>


Descripción

Este proyecto es una aplicación web sencilla para sortear un nombre al azar entre una lista de nombres ingresados por el usuario. Es ideal para realizar sorteos de "Amigo Secreto" o cualquier otra actividad donde se requiera seleccionar un nombre de manera aleatoria.

Tecnologías Utilizadas

HTML5

CSS3

JavaScript (Vanilla)

Funcionamiento del Código

Captura de Datos

Captura del Nombre:

Se obtiene el nombre ingresado por el usuario desde el campo de entrada usando document.getElementById().

Se realiza una validación para asegurarse de que el campo no esté vacío.

Si el campo está vacío, se muestra una alerta con el mensaje: "Por favor, inserte un nombre."

Actualización de la Lista de Amigos:

Si el nombre es válido, se agrega a un arreglo llamado nombres usando el método .push().

La lista de amigos en el DOM se limpia antes de mostrar la lista actualizada para evitar duplicados.

Se recorre el arreglo con un for y se crean elementos <li> para mostrar cada nombre agregado.

Sorteo de un Nombre:

Antes de sortear, se valida que haya al menos un nombre en la lista.

Se genera un índice aleatorio con Math.floor(Math.random() * nombres.length).

Se selecciona el nombre en la posición generada y se muestra en la interfaz.

Limpieza del Campo de Entrada:

Después de agregar un nombre, el campo de entrada se limpia automáticamente para facilitar la siguiente inserción.

Visualización del Resultado:

El nombre sorteado se muestra dinámicamente en la interfaz mediante innerHTML.

Uso

Ingrese los nombres en el campo de entrada y presione "Añadir".

Se mostrarán los nombres ingresados en una lista.

Presione el botón "Sortear amigo" para seleccionar un nombre al azar.

El nombre seleccionado aparecerá en la pantalla.

Instalación y Ejecución

Clonar el repositorio:

git clone https://github.com

Abrir el archivo index.html en un navegador.

Mejoras Futuras

Agregar opción para eliminar nombres de la lista.

Permitir la personalización del sorteo (por ejemplo, evitar que una persona se asigne a sí misma en el sorteo de amigo secreto).

Guardar la lista de nombres en el almacenamiento local del navegador.

Autor

Desarrollado por Mario Garcia.
