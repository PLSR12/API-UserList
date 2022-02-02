const express = require("express")

const port = 3001

const server = express()

/*
    - Query Params => meusite.com/users?nome=pedro&age=18  // Funciona como um filtro

    - Route Params => /users/2   // Busca, deleta ou atualiza algo mais específico

    - Request Body => {"name" : "Pedro" , "age" : "18"}
*/

server.get("/users/:id", (request, response) => {


    /* Query Params
    const {name, age} = request.query // Desconstruindo objeto

    return response.json({name, age}) // mesma coisa de name:name, age:age
    */

    const {id} = request.params

    return response.send({id})
})


server.listen(port, () => {
    console.log("Server started 🚀")
})