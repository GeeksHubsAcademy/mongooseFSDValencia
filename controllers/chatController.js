const User = require('../models/user');
const Room = require('../models/room');

class Sala {

    async findAllRooms(){
        return Room.find();
    }

    async createRoom(room){
        return Room.create(room);
    }

    async joinRoom(data){
        const id = data.id;
        const miembro = data.miembro;
        return Room.findByIdAndUpdate(
            {_id: id},
            {$push: {miembros: miembro}});
    }

    async leaveRoom(data){
        const id = data.id;
        const miembro = data.miembro;
        console.log(id,miembro);
        return Room.findByIdAndUpdate(
            {_id: id},
            {$pull: {miembros: miembro}});
    }

}



let chatController = new Sala();
module.exports = chatController;