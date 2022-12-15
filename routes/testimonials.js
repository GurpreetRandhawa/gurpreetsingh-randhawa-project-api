const express = require("express");
const router = express.Router();

const path = require("node:path");
const commentsJSONFile = path.join(__dirname, "../data/testimonials.json");
const comments = require(commentsJSONFile);
const PORT = process.env.PORT;

/**
 * Get all the comments
 */
router.get("/", (_req, res) => {
  try {
    const commentList = comments.map((comment) => {
      return {
        id: comment.id,
        name: comment.name,
        comment: comment.comment,
        image: `http://localhost:${PORT}/images/` + comment.image,
      };
    });
    res.json(commentList);
  } catch (error) {
    console.log("Error retrieving the comments, error");
  }
});

module.exports = router;
