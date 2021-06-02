const router = require('express').Router();
const userController = require('../controllers/userController');



//GET - Return all Users in the DB

router.get('/', async (req, res) => {
    try {
        res.json(await userController.findAllUsers())
    }catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
});


//POST - Creates a new user

router.post('/', async (req,res) => {
    try {
        const user = req.body;
        res.json(await userController.createUser(user))
    }catch (err) {
        return res.status(500).json({
            message: err.message
        })
    }
})


router.put('/', async (req, res) => {
    try{
        const data = req.body;
        res.json(await userController.modifyProfile(data));
    }catch (err) {
        return res.status(500).json({
            message: err.message
        })
    }
})

module.exports = router;