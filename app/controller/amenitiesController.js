const Amenity = require('../model/amenity')

module.exports.list = (req, res) => {
    Amenity.find()
        .then(am => {
            res.json(am)
        })
        .catch(err => {
            res.json(err)
        })
}

module.exports.create = (req, res) => {
    const body = req.body
    const id = req.params.id
    const amenity = new Amenity(body)
    amenity.save()
        .then(am => {
            if(am) {
                res.json(am)
            } else {
                res.json({})
            }
        })
        .catch(err => {
            res.json(err)
        })
}

module.exports.show = (req, res) => {
    const id = req.params.id
    Amenity.findById(id)
        .then(am => {
            if(am) {
                res.json(am)
            } else {
                res.json({})
            }
        })
        .catch(err => {
            res.json(err)
        })
}

module.exports.update = (req, res) => {
    const body = req.body
    const id = req.params.id
    Amenity.findByIdAndUpdate(id, body, {new: true, runValidators: true})
        .then(am => {
            if(am){
                res.json(am)
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
    Amenity.findByIdAndDelete(id)
        .then(am => {
            if(am) {
                res.json(am)
            } else {
                res.json({})
            }
        })
        .catch(err => {
            res.json(err)
        })
}