const router = require('express').Router();
const userRouter = require('./routes/userRouter');
const chatRouter = require('./routes/chatRouter');

router.use('/user', userRouter);
router.use('/chat', chatRouter);

module.exports = router;