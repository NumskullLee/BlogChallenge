import { Router } from "express";
import {getPosts,createPost, getPost} from '../controllers/post.controllers.js'

const router = Router();
//alta de post
router.post('/post',createPost);

//get all posts
router.get('/posts',getPosts);

//detail post
router.get('/post/:id',getPost);

export default router;