import express from "express";
import {
  getPosts,
  createPost,
  updatePost,
  deletePost,
} from "../controllers/postController.js";

const router = express.Router();

/**
 * @swagger
 * /api/posts:
 *   get:
 *     description: Get all posts
 *     responses:
 *       200:
 *         description: Successfully fetched posts
 */
router.get("/", getPosts);

/**
 * @swagger
 * /api/posts:
 *   post:
 *     description: Create a new post
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               brand:
 *                 type: string
 *               platform:
 *                 type: string
 *               dueDate:
 *                 type: string
 *                 format: date
 *               payment:
 *                 type: number
 *                 format: float
 *               status:
 *                 type: string
 *     responses:
 *       201:
 *         description: Successfully created post
 */
router.post("/", createPost);

/**
 * @swagger
 * /api/posts/{id}:
 *   put:
 *     description: Update an existing post
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the post to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               brand:
 *                 type: string
 *               platform:
 *                 type: string
 *               dueDate:
 *                 type: string
 *                 format: date
 *               payment:
 *                 type: number
 *                 format: float
 *               status:
 *                 type: string
 *     responses:
 *       200:
 *         description: Successfully updated post
 */
router.put("/:id", updatePost);

/**
 * @swagger
 * /api/posts/{id}:
 *   delete:
 *     description: Delete an existing post
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the post to delete
 *     responses:
 *       200:
 *         description: Successfully deleted post
 */
router.delete("/:id", deletePost);

export default router;
