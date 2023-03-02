import bcrypt from "bcrypt";
var users = [
  {
    id: 1,
    name: "7ocin",
    email: "7ocin@gmail.com",
    password: "7ocin",
  },
  {
    id: 2,
    name: "jamal",
    email: "jamal@gmail.com",
    password: "jamal",
  },
  {
    id: 3,
    name: "7sina",
    email: "7sina@gmail.com",
    password: "7sina",
  },
];

export const getAllUsers = async (req, res) => {
  try {
    const user = req.body;
    const hashedPassword = await bcrypt.hash(user.password, 10);
    const newUser = { ...user, password: hashedPassword };
    users.push(newUser);
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({
      location: "error in the getAllUsers controller",
      message: error.message,
    });
  }
};
export const logUser = async (req, res) => {
  const { email } = req.body;
  try {
    const user = users.find((user) => user.email == email);
    if (!user) return res.status(400).json({ message: "user not found" });
    console.log(user.password);
    console.log(req.body.password);
    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isMatch) return res.status(400).json({ message: "false password" });
    const { password, ...rest } = user;
    res.status(200).json(rest);
  } catch (error) {
    res.status(500).json({
      location: "error in the logUser controller",
      message: error.message,
    });
  }
};

export const sendUser = async (req, res) => {
  try {
    const newUser = req.body;
    const isFound = users.find((user) => user.email == req.body.email);
    if (isFound)
      return res.status(400).json({ message: "user alreday exists" });
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const hasedUser = { ...newUser, password: hashedPassword };
    users.push(hasedUser);
    const { password, ...rest } = hasedUser;
    res.status(200).json(rest);
  } catch (error) {
    res.status(500).json({
      location: "error in the sendUser controller",
      message: error.message,
    });
  }
};

export const updtaeUser = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(400).json("id not found");
    const index = users.findIndex((e) => e.id == id);
    if (index !== -1) {
      const { name, email, password } = req.body;
      users[id - 1].name = name;
      users[id - 1].email = email;
      users[id - 1].password = password;
    }
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({
      location: "error in the updateUser",
      message: error.message,
    });
  }
};
export const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const index = users.findIndex((user) => user.id == id);
    if (index == -1) return res.status(400).json({ message: "id not found" });
    users.splice(index, 1);
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({
      location: "error in the deleteUser",
      message: error.message,
    });
  }
};
export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(400).json("id not found");
    const user = users.filter((e) => e.id == id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({
      location: "error in the getUser controller",
      message: error.message,
    });
  }
};
