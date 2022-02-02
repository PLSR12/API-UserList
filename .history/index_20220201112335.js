const express = require("express")

const server = express()

server.get("/users", (request ,response) => {
    return response.send("Hello Doidao")
})

server.listen(3001, () => {
    console.log("Server started 🚀"  )
} )