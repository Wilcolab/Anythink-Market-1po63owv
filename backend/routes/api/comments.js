/**
 * Express router for handling comment-related API endpoints.
 * 
 * @module routes/api/comments
 */

 /**
    * GET /
    * Retrieves all comments from the database.
    *
    * @async
    * @function
    * @param {express.Request} req - Express request object.
    * @param {express.Response} res - Express response object.
    * @returns {Object[]} 200 - Array of comment objects in JSON format.
    * @returns {Object} 500 - Internal server error message.
    */
const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

module.exports = router;
router.get("/", async (req, res) => {
    try {
        const comments = await Comment.find();
        res.json(comments);
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
});