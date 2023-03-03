import bcrypt from "bcrypt";
import Users from "../models/user.js";

export const getAllUsers = async (req, res) => {
  try {
    const users = await Users.find({});

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
    const user = await Users.findOne({ email });
    if (!user) return res.status(400).json({ message: "user not found" });
    console.log(user);
    console.log(req.body.password);
    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isMatch) return res.status(400).json({ message: "false password" });
    const { password, ...rest } = user._doc;
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
    const isFound = await Users.findOne({ email: newUser.email });
    console.log(isFound);
    if (isFound)
      return res.status(400).json({ message: "user alreday exists" });
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const hasedUser = { ...newUser, password: hashedPassword };
    const user = await Users.create(hasedUser);

    const { password, ...rest } = user._doc;
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
    const user = req.body;
    const updatedUser = await Users.findByIdAndUpdate(id, user);
    /*if (!id) return res.status(400).json("id not found");
    const index = users.findIndex((e) => e.id == id);
    if (index !== -1) {
      const { name, email, password } = req.body;
      users[id - 1].name = name;
      users[id - 1].email = email;
      users[id - 1].password = password;
    }*/
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({
      location: "error in the updateUser",
      message: error.message,
    });
  }
};
export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await Users.findByIdAndDelete(id);
    /*const index = users.findIndex((user) => user.id == id);
    if (index == -1) return res.status(400).json({ message: "id not found" });
    users.splice(index, 1);*/
    res.status(200).json(deletedUser);
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
