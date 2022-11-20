import Task from '#components/task/task-model.js'
import Joi from 'joi'

export async function index (ctx) {
    try {
        ctx.body = await Task.find({})
    }catch (e) {
        console.log(e)
        ctx.badrequest({message: e.message})
    }
}

export async function findById (ctx) {
    try {
        ctx.body = await Task.findById(ctx.params.id)
    }catch (e) {
        console.log(e)
        ctx.badrequest({message: e.message})
    }
}

export async function create (ctx) {
    try {
        const taskValidationSchema = Joi.object({
            name: Joi.string().required(),
            done: Joi.boolean(),
        })

        const { error } = taskValidationSchema.validate(ctx.request.body)
        if(error){
            throw new Error(error)
        } 
        Task.create(ctx.request.body)
        ctx.body = ctx.request.body
        ctx.status = 201

    } catch (e) {
        ctx.badRequest({ message: e.message })
    }
}

export async function deleteById (ctx) {
    try {
        ctx.body = await Task.findByIdAndDelete(ctx.params.id)
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