import express from "express";
import { addPost, deletePost, getPost, getPosts, updatePost } from "../controller/post.js";

const router=express.Router();
router.get("/", getPosts)            //for all posts
router.get("/:id", getPost )         //for specific post
router.post("/", addPost)            //for all posts
router.delete("/:id", deletePost )      //for deleting single post
router.put("/:id", updatePost )     //for updating single post

export default router