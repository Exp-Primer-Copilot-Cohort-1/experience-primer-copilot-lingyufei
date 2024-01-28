// Create web server

// Import modules
const express = require('express');
const router = express.Router();
const commentController = require('../controllers/comments');
const auth = require('../middleware/auth');

// Create routes
router.post('/comments', auth, commentController.createComment);
router.get('/comments', auth, commentController.getAllComments);
router.get('/comments/:id', auth, commentController.getOneComment);
router.put('/comments/:id', auth, commentController.modifyComment);
router.delete('/comments/:id', auth, commentController.deleteComment);

// Export routes
module.exports = router;