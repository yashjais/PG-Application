const Tenant = require('../model/tenant')

module.exports.list = (req, res) => {
    Tenant.find()
        .then(tenant => {
            res.json(tenant)
        })
        .catch(err => {
            res.json(err)
        })
}


module.exports.create = (req, res) => {
    const body = req.body
    const tenant = new Tenant(body)
    tenant.save()
        .then(ten => {
            res.json(ten)
        })
        .catch(err => {
            res.json(err)
        })
}

module.exports.show = (req, res) => {
    const id = req.params.id
    Tenant.findById(id)
        .then(tenant => {
            res.json(tenant)
        })
        .catch(err => {
            res.json(err)
        })
}

module.exports.update = (req, res) => {
    const body = req.body
    const id = req.params.id
    Tenant.findByIdAndUpdate(id, body, {new: true, runValidators: true})
        .then(tenant => {
            if(tenant){
                res.json(tenant)
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
    Tenant.findByIdAndDelete(id)
        .then(tenant => {
            if(tenant) {
                res.json(tenant)
            } else {
                res.json({})
            }
        })
        .catch(err => {
            res.json(err)
        })
}