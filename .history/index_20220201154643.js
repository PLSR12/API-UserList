const express = require("express");
const uuid = require("uuid")

const port = 3001

const server = express()
server.use(express.json())

const users = []

server.get("/users", (request, response) => { 

    return response.json(users)
})

server.post("/users", (request, response) => { 
    const {name,age} = request.body

    const user= {name,age} 

    return response.json(user)
})




server.listen(port, () => {
    console.log("Server started 🚀")
})