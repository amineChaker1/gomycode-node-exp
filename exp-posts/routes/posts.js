import express from "express";
import { addPost, getAllPosts } from "../controllers/posts.js";

const router = express.Router();

router.get("/", getAllPosts);
router.post("/add", addPost);

export default router;
