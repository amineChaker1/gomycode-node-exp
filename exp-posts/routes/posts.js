const getAllPosts = require("../controllers/posts.js");

const express = require("express");

const router = express.Router();

router.get("/all", getAllPosts);
