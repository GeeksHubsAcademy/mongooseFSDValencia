const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secreta = "esto es lo más fácil"

class Cliente {

    constructor(){
    }

    async findAllUsers(){
        return User.find();
    }

    async createUser(user){
        user.password = await bcrypt.hash(user.password, 10);
        return User.create(user);
    }

    async logMe(email,password){

        const user =  await User.findOne({email})
        if(!user){
            throw new Error('Email does not exist')
        }
        if (!await bcrypt.compare(password,user.password)){
            throw new Error('Password incorrect')
        }

        const payload = {
            userId: user._id,
            tokenCreationDate: new Date,
        }
        const token = jwt.sign(payload, secreta)
        return ({token, user});
    }

    async modifyProfile(data){
        return User.findByIdAndUpdate(
            {_id: data.id},
            //Datos que cambiamos
            { email: data.email,
              country: data.country,
              city: data.city,
              isActive: data.isActive },
              {new:true,omitUndefined:true}
        )
    }
}



let userController = new Cliente();
module.exports = userController;