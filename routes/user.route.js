const { Router } = require('express');
const { userController } = require('../controllers/user.controller');



const router = Router();

router.post('/users', userController.postUser)
router.get('/users', userController.getUser)
router.get('/users/:id', userController.getUserById)
router.patch('/users/:id', userController.patchUserById)
router.delete('/users/:id', userController.deleteUserById)


module.exports = router