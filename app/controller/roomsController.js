const Room = require('../model/room')

module.exports.list = (req, res) => {
    Room.find()
        .then(room => {
            res.json(room)
        })
        .catch(err => {
            res.json(err)
        })
}

module.exports.create = (req, res) => {
    const body = req.body
    const room = new Room(body)
    room.save()
        .then(r => {
            res.json(r)
        })
        .catch(err => {
            res.json(err)
        })
}

module.exports.show = (req, res) => {
    const id = req.params.id
    Room.findById(id)
        .then(room => {
            res.json(room)
        })
        .catch(err => {
            res.json(err)
        })
}

module.exports.update = (req, res) => {
    const body = req.body
    const id = req.params.id
    Room.findByIdAndUpdate(id, body, {new: true, runValidators: true})
        .then(room => {
            if(room){
                res.json(room)
            } else {
                res.json({})
            }
        })
        .catch(err => {
            res.json(err)
        })
}

module.exports.destroy = (req, res) => {
    const id = req.params.id
    Room.findByIdAndDelete(id)
        .then(room => {
            if(room) {
                res.json(room)
            } else {
                res.json({})
            }
        })
        .catch(err => {
            res.json(err)
        })
}