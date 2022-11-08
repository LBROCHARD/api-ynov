import Koa from 'koa'
import Router from '@koa/router'
import bodyParser from 'koa-bodyparser'

const app = new Koa()
const router = new Router

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
        title: 'Détterer tes minimorts'
    }
]

router.get('/todos', (ctx, next) => {
    ctx.body = todos
})

router.get('/todos/:id' , (ctx, next) => {
    const id = ctx.params.id
    ctx.body= todos.find((item)=> item.id===Number(id))
})

router.post('/todos', (ctx)=>{
    const newItem = ctx.request.body
    todos.push(newItem)
    console.log(todos)
    ctx.status=204
    console.log(ctx)
})

app
.use(bodyParser())
.use(router.routes())
.use(router.allowedMethods())

app.listen(process.env.PORT, () => console.log('server listening to port: ' + Pprocess.env.PORT))