import express from "express";
import {
  addPost,
  deletePost,
  getPost,
  getPosts,
  updatePost,
} from "../controllers/post.js";

const router = express.Router();

// Get all posts or filter by category via query parameter
router.get("/", getPosts);

// Get a single post by id
router.get("/:id", getPost);

// Create a new post (requires authentication)
router.post("/", addPost);

// Delete a post by id (requires authentication and ownership)
router.delete("/:id", deletePost);

// Update a post by id (requires authentication and ownership)
router.put("/:id", updatePost);

export default router;
