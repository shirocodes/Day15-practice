# Practice Lab 
1. overview 
submitData() is a JavaScript function that sends a user's name and email to a mock server using a POST request via the fetch() API. The function is designed to return the fetch() promise, allowing other functions or test scripts to chain .then() and .catch() handlers.

2. functionality
- Sends a POST request to http://localhost:3000/users.

- Includes appropriate request headers for JSON data.

- Sends user-provided name and email as a request body.

- Parses the server response and appends the new user ID to the DOM.

- Handles errors gracefully and appends error messages to the DOM.

- Returns the fetch() promise, allowing external chaining for testing or further processing.

3. Functionality 
- Code preview 
<!-- add this in index.js -->
const body = document.querySelector("body");

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

- How to run the code:
Ensure JSON Server is running:

                    json-server --watch db.json

Open index.html in a browser to access the function via the console.

Call submitData("Joy", "joy@gmail.com") in the browser console.

4. Contributors

Developed as part of Moringa's Day 15's lab JavaScript practice on working with fetch() and API requests.