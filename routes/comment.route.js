const { Router } = require('express');
const { commentController } = require('../controllers/comment.controller');





const router = Router();

router.post('/comments', commentController.postComment)
router.get('/comments', commentController.getComment)
router.get('/comments/:id', commentController.getCommentById)
router.patch('/comments/:id', commentController.patchCommentById)
router.delete('/comments/:id', commentController.deleteCommentById)


module.exports = router