const express = require('express') //express por padrão não le formato JSON
const app = express()
app.use(express.json())

// GET http://localhost:5000/projects?title=Node&owner=Gabriel&page=1
//

app.get('/projects', function(request, response) {
    const {title, owner, page} = request.query
    console.log(title, owner, page)
    return response.json([
        'projeto 1',
        'projeto 2'
    ])
})

app.post('/projects', function(request, response) {
    const {name, owner} = request.body //body <- serve para receber um JSON com informações que estão sendo enviadas para criação de um novo projeto
    console.log(name, owner)
    return response.json([
        'projeto 1',
        'projeto 2',
        'projeto 3'
    ])
})

app.put('/projects/:id', function(request, response) { //put = identificacao do projeto que quero atualizar
    const {id} = request.params
    const {name, owner} = request.body
    console.log(id, name, owner)
    return response.json([
        'projeto 4',
        'projeto 2',
        'projeto 3'
    ])
})

app.delete('/projects/:id', function(request, response) {
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