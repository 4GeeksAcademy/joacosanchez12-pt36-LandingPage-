todo = { label: "Completar tarea asingnada: resolver bug", isCompleted: false };

const todoCorregidoLuegodeRevisarError = { "label": "Arreglar el bug vista lista de productos 4", "is_done": false }


//GET, POST DELETE

// http => Determina como debe realizar el intercambio de información
// GET => Para simplemente obtener un recurso del servidor
// POST => Para crear un recurso en el servidor
// Delete para borrar un recurso del servidor



function obtenerListaProducto() {
    fetch("https://666fa4340900b5f87247c917.mockapi.io/api/v1/product");
}

function crearTodoUser(username, todoSerializado) {
    fetch(`https://playground.4geeks.com/todo/todos/${username}`, {
        method: "POST",
        body: todoSerializado,
        headers: {
            "Content-Type": "application/json"
        }
    }).then(response => {
        return response.json()
    })
        .then((resultado) => console.log("Luego de completado el resultado es ", resultado))
}
console.log(JSON.stringify(todoCorregidoLuegodeRevisarError));
crearTodoUser("LauraPa", JSON.stringify(todoCorregidoLuegodeRevisarError));