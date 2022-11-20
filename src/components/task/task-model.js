import mongoose from 'mongoose'

const { Schema } = mongoose

const tasksSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    done: {
        type: Boolean,
    }
})

const Task = mongoose.model('Task', tasksSchema)

export default Task