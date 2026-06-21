const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const {body} = require("express-validator");
const validate = require("../middleware/validationMiddleware");

const {
    getPosts,
    getPost,
    createPost,
    updatePost,
    deletePost
} = require("../controllers/postController");

router.get("/", getPosts);

router.post(
    "/",
    authMiddleware,
    [
        body("title").notEmpty(),
        body("content").notEmpty()
    ], 
    validate,
    createPost
);

router.put("/:id", authMiddleware, updatePost);
router.delete("/:id", authMiddleware, deletePost);

module.exports = router;

