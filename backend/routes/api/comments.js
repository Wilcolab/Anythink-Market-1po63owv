/**
 * @module routes/api/comments
 * @description Express router for handling comment-related API endpoints.
 */

 /**
    * GET /
    * @summary Retrieves all comments.
    * @route GET /
    * @returns {Array<Object>} 200 - An array of comment objects
    * @returns {Object} 500 - Error message if fetching comments fails
    */

 /**
    * DELETE /:id
    * @summary Deletes a comment by its ID.
    * @route DELETE /:id
    * @param {string} id.path.required - The ID of the comment to delete
    * @returns {Object} 200 - Success message if comment is deleted
    * @returns {Object} 404 - Error message if comment not found
    * @returns {Object} 500 - Error message if deletion fails
    */
const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");
// Hey GitHub Copilot,
module.exports = router;
router.get("/", async (req, res) => {
    try {
        const comments = await Comment.find();
        res.status(200).json(comments);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch comments" });
    }
});
//add another end point for deleting a comment
router.delete("/:id", async (req, res) => {
    try {
        const deleted = await Comment.deleteOne({ _id: req.params.id });
        if (deleted.deletedCount === 0) {
            return res.status(404).json({ error: "Comment not found" });
        }
        res.status(200).json({ message: "Comment deleted" });
    } catch (err) {
        res.status(500).json({ error: "Error deleting comment" });
    }
});
