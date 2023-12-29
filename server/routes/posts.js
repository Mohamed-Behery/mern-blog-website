import express from "express";
import {
  createNewPost,
  updatePost,
  deletePost,
  getPost,
  getAllPosts,
} from "../controllers/PostControllers.js";

const router = express.Router();

//CREATE POST
router.post("/", createNewPost);

//UPDATE POST
router.put("/:id", updatePost);

//DELETE POST
router.delete("/:id", deletePost);

//GET POST
router.get("/:id", getPost);

//GET ALL POSTS
router.get("/", getAllPosts);

export default router;
