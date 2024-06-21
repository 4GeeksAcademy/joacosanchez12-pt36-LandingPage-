

const readUserInfo = (username) => {
    fetch(`https://playground.4geeks.com/todo/users/${username}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(response => response.json())
        .then(data => console.log(data))
}

const createUserTodo = (username, label, is_done) => {
    fetch(`https://playground.4geeks.com/todo/todos/${username}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            label: label,
            is_done: is_done
        })
    })
        .then(data => {
            if (data.status === 201) {
                console.log("El todo ha sido creado");
            }
        })
}




readUserInfo("manuel2000");