import express from "express";
import {
  createPost,
  deletePost,
  getPostById,
  getPosts,
  updatePost,
} from "../controllers/postController.js";

const router = express.Router();

router.get("/", getPosts);
router.get("/:id", getPostById);
router.post("/", createPost);
router.put("/:id", updatePost);
router.delete("/:id", deletePost);

export default router;

/**
 * @swagger
 * components:
 *   schemas:
 *     Post:
 *       type: object
 *       required:
 *         - title
 *         - brand
 *         - platform
 *         - dueDate
 *         - payment
 *         - status
 *       properties:
 *         id:
 *           type: string
 *           description: Auto-generated unique identifier
 *         title:
 *           type: string
 *           description: Title of the post
 *         brand:
 *           type: string
 *           description: Brand name
 *         platform:
 *           type: string
 *           description: Platform where the post will be published
 *         dueDate:
 *           type: string
 *           format: date-time
 *           description: Due date for the post
 *         payment:
 *           type: number
 *           description: Payment amount
 *         status:
 *           type: string
 *           description: Current status of the post
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp of when the post was created
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp of when the post was last updated
 *
 *     ApiResponse:
 *       type: object
 *       properties:
 *         status:
 *           type: boolean
 *         status_code:
 *           type: integer
 *         message:
 *           type: string
 *         data:
 *           type: object
 *
 * /api/posts:
 *   get:
 *     tags:
 *       - Posts
 *     summary: Get all posts
 *     description: Retrieve a list of all posts
 *     responses:
 *       200:
 *         description: Successfully retrieved posts
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                   example: true
 *                 status_code:
 *                   type: integer
 *                   example: 200
 *                 message:
 *                   type: string
 *                   example: Get posts successfully
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Post'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ApiResponse'
 *
 *   post:
 *     tags:
 *       - Posts
 *     summary: Create a new post
 *     description: Create a new post with the provided information
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - brand
 *               - platform
 *               - dueDate
 *               - payment
 *               - status
 *             properties:
 *               title:
 *                 type: string
 *               brand:
 *                 type: string
 *               platform:
 *                 type: string
 *               dueDate:
 *                 type: string
 *                 format: date-time
 *               payment:
 *                 type: number
 *               status:
 *                 type: string
 *     responses:
 *       201:
 *         description: Post created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ApiResponse'
 *       400:
 *         description: Bad request - missing required fields
 *       500:
 *         description: Internal server error
 *
 * /api/posts/{id}:
 *   get:
 *     tags:
 *       - Posts
 *     summary: Get post by ID
 *     description: Retrieve a specific post by its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Post ID
 *     responses:
 *       200:
 *         description: Successfully retrieved post
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ApiResponse'
 *       404:
 *         description: Post not found
 *       500:
 *         description: Internal server error
 *
 *   put:
 *     tags:
 *       - Posts
 *     summary: Update a post
 *     description: Update an existing post by its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Post ID
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
 *                 format: date-time
 *               payment:
 *                 type: number
 *               status:
 *                 type: string
 *     responses:
 *       200:
 *         description: Post updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ApiResponse'
 *       404:
 *         description: Post not found
 *       500:
 *         description: Internal server error
 *
 *   delete:
 *     tags:
 *       - Posts
 *     summary: Delete a post
 *     description: Delete a post by its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Post ID
 *     responses:
 *       200:
 *         description: Post deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ApiResponse'
 *       404:
 *         description: Post not found
 *       500:
 *         description: Internal server error
 */
