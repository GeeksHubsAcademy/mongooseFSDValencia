const router = require('express').Router();
const userController = require('../controllers/userController');
const jwt = require('jsonwebtoken');



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

router.post('/login',async (req, res) => {
    try{
        const {email,password} = req.body;
        const jwt = await userController.logMe(email,password);
        const token = jwt.token;
        const user = jwt.user;
        res.json({token,user});
    } catch (err) {
        return res.status(401).json({
            message: err.message
        });
    }
});


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