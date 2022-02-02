const express = require("express")

const server = express()

server.get("/users", (request ,response) => {
    return response.send("Hello World")
})

server.listen(3001)