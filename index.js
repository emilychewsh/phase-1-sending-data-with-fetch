// Add your code here
// const formData = {
//     name: "Emily",
//     email: "emily@gmail.com"
// }

function submitData(name, email) {
    return fetch("http://localhost:3000/users", {
        method: "POST",
    headers: {
        "Content-type": "application/json",
        "Accept": "application/json",
    },
    body: JSON.stringify({
        name,
        email,
    })
    })

    .then((response) => response.json())
    .then((object) => {
        let {id} = object
        let div = document.createElement("div")
        let p = document.createElement("p")
        p.innerHTML = id
        div.appendChild(p)

        document.body.appendChild(div)
    })
    .catch((error) => {
        let errorMessage = document.createElement("h4")
        errorMessage.innerHTML = `${error.message}`
        document.body.appendChild(errorMessage)
    })
}

