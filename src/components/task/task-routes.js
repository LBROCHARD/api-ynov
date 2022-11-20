import Router from '@koa/router'
import * as TaskControllers from '#components/task/task-controller.js'

const taskRouter = new Router()

taskRouter.get('/task', TaskControllers.index)
taskRouter.post('/task', (ctx)=>{
    TaskControllers.create(ctx)
})
taskRouter.get('/task/:id', TaskControllers.findById)
taskRouter.delete('/task/:id', TaskControllers.deleteById)
taskRouter.put('/task/:id', TaskControllers.put)

export default taskRouter