const express = require("express")

const port = 3001

const server = express()
server.use(express.json())


const users = []

server.get("/users", (request, response) => { 


    return response.json({users})
})






server.listen(port, () => {
    console.log("Server started 🚀")
})