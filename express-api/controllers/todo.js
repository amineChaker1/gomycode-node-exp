const todos = [
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
];

export const getAllToDos = async (req, res) => {
  try {
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
    todos.push(todo);
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
    if (!id) return res.status(400).json("id not found");
    console.log(id);
    const index = todos.findIndex((e) => e.id == id);
    if (index !== -1) {
      const { title } = req.body;
      todos[id - 1].title = title;
    }
    res.status(200).json(todos);
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
    if (!id) return res.status(400).json("id not found");
    console.log(id);
    const index = todos.findIndex((e) => e.id == id);
    if (index !== -1) {
      todos.filter((e) => e.id !== id);
    }
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({
      location: "error in the deleteTodo",
      message: error.message,
    });
  }
};
