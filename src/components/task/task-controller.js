import TaskModel from '#components/task/task-model.js'
import { updateTask } from '#components/task/task-use-cases.js'
import Joi from 'joi'

export async function index (ctx) {
    try {
        const tasks = await TaskModel.find({})
        ctx.ok(tasks)
    }catch (e) {
        console.log(e)
        ctx.badrequest({message: e.message})
    }
}

export async function findById (ctx) {
    try {
        if(!ctx.params.id) throw new Error('No id supplied')
        const task = await TaskModel.findById(ctx.params.id)
        if(!task) { return ctx.notFound() }
        ctx.ok(task)
    }catch (e) {
        console.log(e)
        ctx.badrequest({message: e.message})
    }
}

export async function getAllByList (ctx) {
    try {
      if(!ctx.params.listId) throw new Error('No id supplied')
      const tasks = await TaskModel.findByListId(ctx.params.listId)
      ctx.ok(tasks)
    } catch (e) {
      ctx.badRequest({ message: e.message })
    }
  }

export async function create (ctx) {
    try {
        const taskValidationSchema = Joi.object({
            name: Joi.string().required(),
            done: Joi.boolean(),
            list: Joi.string().required()
        })

        const { error } = taskValidationSchema.validate(ctx.request.body)
        if(error){
            throw new Error(error)
        } 
        const newTask = await TaskModel.create(value)
        ctx.ok(newTask)
    } catch (e) {
        ctx.badRequest({ message: e.message })
    }
}

export async function deleteById (ctx) {
    try {
        if(!ctx.params.id) throw new Error('No id supplied')
        ctx.body = await TaskModel.findByIdAndDelete(ctx.params.id)
        ctx.ok('Ressource deleted')
    }catch (e) {
        console.log(e)
        ctx.badrequest({message: e.message})
    }
}

export async function put (ctx) {
    try {
        const taskValidationSchema = Joi.object({
            name: Joi.string().required(),
            done: Joi.boolean(),
            list: Joi.string().required()
        })

        const { error } = taskValidationSchema.validate(ctx.request.body)
        if(error){
            throw new Error(error)
        } 
        await Task.findByIdAndUpdate(ctx.params.id, ctx.request.body, {runValidators: true})
        ctx.body = ctx.request.body
        ctx.status = 201

    } catch (e) {
        ctx.badRequest({ message: e.message })
    }
}