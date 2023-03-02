import express from "express";

import {
  deleteUser,
  getAllUsers,
  getUser,
  logUser,
  sendUser,
  updtaeUser,
} from "../controllers/user.js";

const router = express.Router();

router.get("/", getAllUsers);
router.get("/login", logUser);
router.post("/signup", sendUser);
router.put("/update/:id", updtaeUser);
router.delete("/delete/:id", deleteUser);
router.get("/login/:id", getUser);

export default router;
