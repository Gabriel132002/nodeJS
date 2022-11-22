const express = require('express')
const app = express()

app.get('/projects', function(request, response) {
    return response.json([
        'projeto 1',
        'projeto 2'
    ])
})

app.post('/projects', function(request, response) {
    return response.json([
        'projeto 1',
        'projeto 2',
        'projeto 3'
    ])
})

app.put('/projects/:id', function(request, response) { //put = identificacao do projeto que quero atualizar
    return response.json([
        'projeto 4',
        'projeto 2',
        'projeto 3'
    ])
})

app.delete('/projects/:id', function(request, response) { //put = identificacao do projeto que quero atualizar
    return response.json([
        'projeto 2',
        'projeto 3'
    ])
})

app.listen(5000, () => {
    console.log('server started on port 5000')
}) 

//GET http://localhost:5000/projects
 //request traz todas as informações enviadas pela aplicação cliente
 //response serve para formatar tudo que vai ser devolvido à aplicação cliente
 //() => {} arrow function é uma anotacao abreviada de function