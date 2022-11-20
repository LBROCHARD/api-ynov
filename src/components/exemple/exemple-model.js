import mongoose from 'mongoose'

const { Schema } = mongoose

const exempleSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    colors: {
        type: [String],
        required: true
    },
    price: {
        type: Number,
        required: true
    }
})

const Exemple = mongoose.model('Exemple', exempleSchema)

const findAll = async () => {
    const exemples = await Exemple.find({})
    console.log('FIND BY ID ============', exemples);
}

// const findById = async () => {
//     const exemple = await Exemple.findById('')
//     console.log('FIND BY ID ============', exemple._id);
// }

// const updateById = async () => {
//     const exemple = await Exemple.findById('')
//     console.log('FIND BY ID ============', exemple._id);
// }

// findAll()
// findById()
export default Exemple