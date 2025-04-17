import todoModel from "../Models/todoModel.js";

export const createTodo = async (req, res) => {
  try {
    const todo = await todoModel.create(req.body);
    res.status(201).json(todo);
  } catch (error) {
    throw new Error(error);
  }
};

export const getAllTodos = async (req, res) => {
  try {
    const allTodos = await todoModel.find();
    res.status(200).json(allTodos);
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteTodo = async (req, res) => {
  const { id } = req.params;
  try {
    const todo = await todoModel.findByIdAndDelete(id);
    res.status(200).json(todo);
  } catch (error) {
    throw new Error(error);
  }
};

export const updateTodo = async (req, res) => {
  const { id } = req.params;
  try {
    const todo = await todoModel.findByIdAndUpdate(id, req.body);
    res.status(201).json(todo);
  } catch (error) {
    throw new Error(error);
  }
};
