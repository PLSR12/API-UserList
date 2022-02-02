const express = require("express")
const req = require("express/lib/request")

const server = express()

server.get("/users", (request ,response) => {
    return response.send("Hello Node")
})

server.listen(3000)