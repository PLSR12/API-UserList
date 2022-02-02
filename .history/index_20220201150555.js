const express = require("express")

const port = 3001

const server = express()
server.use(express.json())


/*
    - QUERY PARAMS => meusite.com/users?nome=pedro&age=18  // Funciona como um filtro

     server.get("/users", (request, response) => {

    const {name, age} = request.query // Desconstruindo objeto
    })

    return response.json({name, age}) // mesma coisa de name:name, age:age


    - ROUTE PARAMS => /users/2   // Busca, deleta ou atualiza algo mais específico

    server.get("/users/:id", (request, response) => {


    const {id} = request.params

    return response.send({id})
    })

    - REQUEST BODY => {"name" : "Pedro" , "age" : "18"}
*/

server.get("/users", (request, response) => { 

    const {name,age,nation} = request.body

    console.log(request.body)

    return response.json({name,age,nation})

})

server.listen(port, () => {
    console.log("Server started 🚀")
})