/*const todos = [
  {
    id: 1,
    title: "todo1",
  },
  {
    id: 2,
    title: "todo2",
  },
  {
    id: 3,
    title: "todo3",
  },
];*/
import Todo from "../models/todo.js";

export const getAllToDos = async (req, res) => {
  try {
    const todos = await Todo.find({});
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({
      location: "error in the getAllToDos controller",
      message: error.message,
    });
  }
};
export const addTodo = async (req, res) => {
  //get the todo from the body
  //add the todo to the todos array
  //send a res with a 200 status and the new todos array
  try {
    const todo = req.body;
    console.log(todo);
    const todos = await Todo.create(todo);

    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({
      location: "error in the addToDo controller",
      message: error.message,
    });
  }
};

export const updateTodo = async (req, res) => {
  //get the id from params
  //get the todo from the body
  //if the id is not in the todos array
  // send a res with a 400 status and a message "id not found" use findIndex
  //findIndex returns -1 if the id is not found google it
  //update the todo using map
  //send a res with a 200 status of the new todos (with the updated one)
  try {
    const { id } = req.params;
    const todo = req.body;
    if (!id) return res.status(400).json("id not found");
    const updated = await Todo.findByIdAndUpdate(id, todo);
    console.log(id);
    if (!updated) return res.status(400).json({ message: "id not found" });
    /* const index = todos.findIndex((e) => e.id == id);
    if (index !== -1) {
      const { title } = req.body;
      todos[id - 1].title = title;
    }*/
    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({
      location: "error in the updateTodo",
      message: error.message,
    });
  }
};
export const deleteTodo = async (req, res) => {
  //get the id from params
  //if the id is not in the todos array send a res with a 400 status and a message "id not found" use findIndex
  //findIndex returns -1 if the id is not found google it
  //delete the todo using filter or splice
  //send a res with a 200 status of the new todos (without the deleted one)
  try {
    const { id } = req.params;
    const deletedTodo = await Todo.findByIdAndDelete(id);
    if (!id) return res.status(400).json("id not found");

    /*const index = todos.findIndex((e) => e.id == id);
    if (index !== -1) {
      todos.filter((e) => e.id !== id);
    }*/
    res.status(200).json(deletedTodo);
  } catch (error) {
    res.status(500).json({
      location: "error in the deleteTodo",
      message: error.message,
    });
  }
};
