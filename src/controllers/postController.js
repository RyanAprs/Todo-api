import prisma from "../config/db.js";

export const getPosts = async (req, res) => {
  try {
    const posts = await prisma.post.findMany();
    res.status(200).send({
      status: true,
      status_code: 200,
      message: "Get posts successfully",
      data: posts,
    });
  } catch (error) {
    res.status(500).send({
      status: false,
      status_code: 500,
      message: error.message,
      data: null,
    });
  }
};

export const getPostById = async (req, res) => {
  try {
    const post = await prisma.post.findUnique({
      where: { id: req.params.id },
    });

    if (!post) {
      return res.status(404).send({
        status: false,
        status_code: 404,
        message: "Post not found",
        data: null,
      });
    }

    res.status(200).send({
      status: true,
      status_code: 200,
      message: "Get post successfully",
      data: post,
    });
  } catch (error) {
    res.status(500).send({
      status: false,
      status_code: 500,
      message: error.message,
      data: null,
    });
  }
};

export const createPost = async (req, res) => {
  const { title, brand, platform, dueDate, payment, status } = req.body;

  if (!title || !brand || !platform || !dueDate || !payment || !status) {
    return res.status(400).send({
      status: false,
      status_code: 400,
      message: "All fields are required.",
      data: null,
    });
  }

  try {
    const newPost = await prisma.post.create({
      data: {
        title,
        brand,
        platform,
        dueDate: new Date(dueDate),
        payment,
        status,
      },
    });

    res.status(201).send({
      status: true,
      status_code: 201,
      message: "Post created successfully.",
      data: newPost,
    });
  } catch (error) {
    res.status(500).send({
      status: false,
      status_code: 500,
      message: error.message,
      data: null,
    });
  }
};

export const updatePost = async (req, res) => {
  const { title, brand, platform, dueDate, payment, status } = req.body;

  try {
    const updatedPost = await prisma.post.update({
      where: { id: req.params.id },
      data: {
        title,
        brand,
        platform,
        dueDate: new Date(dueDate),
        payment,
        status,
      },
    });

    res.status(200).send({
      status: true,
      status_code: 200,
      message: "Post updated successfully.",
      data: updatedPost,
    });
  } catch (error) {
    if (error.code === "P2025") {
      return res.status(404).send({
        status: false,
        status_code: 404,
        message: "Post not found.",
        data: null,
      });
    }
    res.status(500).send({
      status: false,
      status_code: 500,
      message: error.message,
      data: null,
    });
  }
};

export const deletePost = async (req, res) => {
  try {
    await prisma.post.delete({ where: { id: req.params.id } });
    res.status(201).send({
      status: true,
      status_code: 200,
      message: "Post deleted successfully.",
    });
  } catch (error) {
    if (error.code === "P2025") {
      return res.status(404).send({
        status: false,
        status_code: 404,
        message: "Post not found.",
        data: null,
      });
    }
    res.status(500).send({
      status: false,
      status_code: 500,
      message: error.message,
      data: null,
    });
  }
};
