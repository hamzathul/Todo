import Todo from "../models/todo.model.js";

export const getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    console.log("Error getting todos:", error.message);
    res.status(500).json({ message: error.message });
  }
};

export const addTodo = async (req, res) => {
  try {
    const { text } = req.body;
    const newTodo = new Todo({ text });
    await newTodo.save();
    res.status(201).json(newTodo);
  } catch (error) {
    console.log("Error creating todo:", error.message);
    res.status(500).json({ message: error.message });
  }
};

export const UpdateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { text } = req.body;
    const updatedTodo = await Todo.findByIdAndUpdate(
      id,
      { text },
      { new: true }
    );
    res.json(updatedTodo);
  } catch (error) {
    console.log("Error updating todo:", error.message);
    res.status(500).json({ message: error.message });
  }
};

export const TodoStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findById(id);
    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }
    todo.isCompleted = !todo.isCompleted;
    await todo.save();
    res.json(todo);
  } catch (error) {
    console.log("Error updating todo status:", error.message);
    res.status(500).json({ message: error.message });
  }
};

export const deleteTodo = async (req, res) => {
  try {
    const { ids } = req.body;
    await Todo.deleteMany({ _id: { $in: ids } });
    res.json({ message: "Todos deleted successfully" });
  } catch (error) {
    console.log("Error deleting todos:", error.message);
    res.status(500).json({ message: error.message });
  }
};
