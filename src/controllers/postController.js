const Post = require("../models/post");

const getPosts = async (req, res) => {
    try{
        const posts = await Post.find().populate("author", "name email");
        if(posts.length == 0){
          return res.status(404).json({
            message: "No posts yet"
          });
        };
        res.status(200).json(posts);
    }
    catch(error){
        res.status(500).json({
            message: error.message
        });
    }
};

const createPost = async (req, res) => {
    try{
        const {title, content} = req.body;
        const post = await Post.create({
            title,
            content,
            author: req.user.id
        });
       
        res.status(201).json(post);
    }
    catch(error){
        res.status(500).json({
            message: error.message
        });
    }
};

const updatePost = async (req, res) => {
    try{
        const post = await Post.findById(req.params.id);
        if(!post){
            return res.status(404).json({
                message: "Post not found"
            });
        }

        if(post.author.toString() !== req.user.id){
            return res.status(401).json({
                message: "Not authorized"
            });
        }

        post.title = req.body.title || post.title;
        post.content = req.body.content || post.content;

        await post.save();

        res.status(200).json(post);
    }
    catch(error){
        res.status(500).json({
            message: error.message
        });
    }
};

const deletePost = async (req, res) => {
    try{
        const post = await Post.findById(req.params.id);
        if(!post){
            return res.status(404).json({
                message: "Post not found"
            });
        }

        if(post.author.toString() !== req.user.id){
            return res.status(401).json({
                message: "Not authorized"
            });
        }

        await post.deleteOne();

        res.status(200).json({
            message: "Post deleted"
        });
    }
    catch(error){
        res.status(500).json({
            message: error.message
        });
    }
};

module.exports = {
    getPosts,
    createPost,
    updatePost,
    deletePost
};