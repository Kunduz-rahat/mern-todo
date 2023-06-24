import Todo from "../models/todo.js";
export const createTodo = async (req, res) => {
  try {
    const newTodo = new Todo({
      todo: req.body.todo,
    });
    const saveTodo = await newTodo.save();
    res.status(200).json("Todo added successfully");
  } catch (e) {
    console.log(e);
  }
};


export const getTodos = async(req, res)=>{
    try{
const allTodos = await Todo.find({})
res.status(200).json(allTodos)
    }catch(e){
        console.log(e)
    }
}


export const deleteTodo = async(req, res)=>{
  try{
const deletedTodo = await Todo.findByIdAndDelete(req.params.id)
res.status(200).json('Todo deleted')
  }catch(e){
    console.log(e)
  }
}

export const updateTodo = async(req, res)=>{
  try{
const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, {
  $set:req.body
})
res.status(200).json('Todo updated')
  }catch(e){
    console.log(e)
  }
}
