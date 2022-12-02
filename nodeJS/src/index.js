const express = require('express') //express por padrão não lê formato JSON
const {v4: uuidv4} = require('uuid')
const app = express()
app.use(express.json())

// GET http://localhost:5000/projects?title=Node&owner=Gabriel&page=1
//
// {name, owner} <- assim que desestrutura um objeto

const projects = []

function logRoutes(request, response, next){
    const {method, url} = request
    const route = `[${method.toUpperCase()} ${url}]`
    console.log(route)
    return next()
}

//app.use(logRoutes)

app.get('/projects', function(request, response) {
    return response.json(projects)
})

app.post('/projects', logRoutes, function(request, response) {
    const {name, owner} = request.body //body <- serve para receber um JSON com informações que estão sendo enviadas para criação de um novo projeto
                                      //serve para receber as informações do front-end para a API
    const project = {
        id: uuidv4(),
        name,
        owner
    }
    projects.push(project)

    return response.status(201).json(project)
})

app.put('/projects/:id', function(request, response) { //put = identificacao do projeto que quero atualizar
    const {id} = request.params
    const {name, owner} = request.body
   
    const projectIndex = projects.findIndex(p => p.id === id)

    if(projectIndex < 0 ) {
        return response.status(404).json({error: 'Project not found'})
    }

    if(!name || !owner) {
        return response.status(400).json({error: 'Name annd owner are required'})
    }

    const project = {
        id, 
        name, 
        owner
    }

    projects[projectIndex] = project

    return response.json(project)
})

app.delete('/projects/:id', function(request, response) {
    const {id} = request.params

    const projectIndex = projects.findIndex(p => p.id === id)

    if(projectIndex < 0 ) {
        return response.status(404).json({error: 'Project not found'})
    }

    projects.splice(projectIndex, 1)

    return response.status(204).send()
})

app.listen(5000, () => {
    console.log('server started on port 5000')
}) 

//GET http://localhost:5000/projects
 //request traz todas as informações enviadas pela aplicação cliente
 //response serve para formatar tudo que vai ser devolvido à aplicação cliente
 //() => {} arrow function é uma anotacao abreviada de function
 //middwere é usado quando queremos executar trechos de codigo automaticamente quando uma rota é acessada (ex: validar token, registrar log no sistema) 