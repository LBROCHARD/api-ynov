import Router from '@koa/router'
import * as ExempleControllers from '#components/exemple/exemple-controller.js'

const exemples = new Router()

exemples.get('/', ExempleControllers.index)
exemples.post('/', (ctx)=>{
    ExempleControllers.create(ctx)
})

const todos = [
    { 
        id: 1,
        title: 'Acheter des patates'
    },
    { 
        id: 2,
        title: 'Acheter des pommes'
    },
    { 
        id: 3,
        title: 'Deterrer ses minimorts'
    }
]

exemples.get('/todos', (ctx, next) => {
    ctx.body = todos
})

exemples.get('/todos/:id', (ctx) => {
    const task = todos.find(t => parseInt(ctx.params.id) === t.id)
    ctx.body = task
})

exemples.post('/todos', (ctx) => {
    const newTask = {
        id: todos.length + 1,
        title: ctx.request.body.title
    }
    todos.push(newTask)
    ctx.status = 204
})

exemples.put('/todos/:id', (ctx) => {
    const task = todos.find(t => parseInt(ctx.params.id) === t.id)
    task.title = ctx.request.body.title
    ctx.body = todos
})

exemples.delete('/todos/:id', (ctx) => {
    const updatedTodos = todos.filter(t => parseInt(ctx.params.id))
    ctx.body = updatedTodos
})

export default exemples