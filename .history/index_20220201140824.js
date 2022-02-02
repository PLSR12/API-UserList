const express = require("express")

const port = 3001

const server = express()

/*
    - Query Params => meusite.com/users?nome=pedro&age=18  // Funciona como um filtro

    - Route Params => /users/2   // Busca, deleta ou atualiza algo mais específico
*/

server.get("/users", (request ,response) => {
    const name = request.query.name
    const age = request.query.age

    return response.json({name, age})
})

server.listen(port, () => {
    console.log("Server started 🚀"  )
} )