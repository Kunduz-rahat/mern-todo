import mongoose, {model} from "mongoose";

const TodoSchema = new mongoose.Schema({
    todo: { type: String, required: true }
})


export default mongoose.model('Todo', TodoSchema)