const User = require('../models/user');
const bcrypt = require('bcrypt');

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