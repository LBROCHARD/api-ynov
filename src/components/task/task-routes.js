import Router from '@koa/router'
import * as TaskControllers from '#components/task/task-controller.js'
import { isAuthenticatedWithUser } from '#middlewares/jwt-handler.js'

const tasks = new Router()

tasks.get('/task/', TaskControllers.index)

tasks.get('/task/protected', isAuthenticatedWithUser, (ctx) => {
    ctx.body = ctx.state.user.generateJWT()
    ctx.ok({
        message: 'This route is protected',
        user: ctx.state.user
    })
})

tasks.get('/task/:id', TaskControllers.findById)
tasks.get('/lists/:listId', TaskControllers.getAllByList)
tasks.post('/task', TaskControllers.create)
tasks.delete('/task/:id', TaskControllers.deleteById)
tasks.put('/task/:id', TaskControllers.put)


export default tasks