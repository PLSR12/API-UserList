const express = require("express")
const uuid = require("uuid") // gerador de id

const port = 3001

const server = express()
server.use(express.json())


const users = [] // Nunca fazer isso, porque quando parar a aplicação ,se perdem os dados

server.get("/users", (request, response) => { // base de dados com id,nome e idade 

    return response.json(users)
})


server.post("/users", (request, response) => { // Cria novos usuários
    const {
        name,
        age
    } = request.body

    const user = {
        id: uuid.v4(), // gera um id aleátorio e único
        name,
        age
    }

    users.push(user) // Adiciona o usuário novo no final do array "users"

    return response.status(201).json(user) // retorna erro 201 e o novo usuário 
})


server.put("/users/:id", (request, response) => {
    const {
        id
    } = request.params
    const {
        name,
        age
    } = request.body

    const updatedUser = {
        id,
        name,
        age
    }

    const index = users.findIndex(user => user.id === id) // findIndex = procura no array

    if (index < 0) {
        return response.status(404).json({
            message: "User not Found"
        })
    }

    users[index] = updatedUser

    return response.json(updatedUser)
})

server.listen(port, () => {
    console.log("Server started 🚀")
})