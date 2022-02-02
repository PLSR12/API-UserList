const express = require("express")

const port = 3001

const server = express()
server.use(express.json())


server.get("/users", (request, response) => { 

    const {name,age,nation} = request.body

    console.log(request.body)

    return response.json({name,age,nation})
})

server.listen(port, () => {
    console.log("Server started 🚀")
})