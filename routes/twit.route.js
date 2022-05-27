const { Router } = require('express');
const { twitController } = require('../controllers/twit.controller');




const router = Router();

router.post('/twits', twitController.postTwit)
router.get('/twits', twitController.getTwit)
router.get('/twits/:id', twitController.getTwitById)
router.patch('/twits/:id', twitController.patchTwitById)
router.delete('/twits/:id', twitController.deleteTwitById)


module.exports = router