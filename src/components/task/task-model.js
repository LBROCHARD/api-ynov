import mongoose from 'mongoose'

const { Schema } = mongoose

const tasksSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    done: {
        type: Boolean,
    },
    list: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'List'
    }
})

tasksSchema.static({
    findByListId (listId) {
      return this.find({ list: listId })
    }
})

const TaskModel = mongoose.model('Task', tasksSchema)

export default TaskModel