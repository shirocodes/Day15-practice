
const body = document.querySelector("body")
function submitData(name, email) {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }, 
        body: JSON.stringify({name, email
        })
    })
    .then(res => res.json())
    .then(data => {
        const newID = document.createElement("p")
        newID.textContent = `user ID: ${data.id}`
        body.appendChild(newID)

    }) .catch(error => {
        console.error("error fetching:", error)
        const errMsg = document.createElement("p")
        errMsg.textContent = `error: ${error.message}`
        body.appendChild(errMsg)
    })
}