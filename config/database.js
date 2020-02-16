const mongoose = require('mongoose')

const setUpDB = () => {
    mongoose.connect('mongodb://localhost:27017/oct-pg-app',{
    useNewUrlParser: true, 
    useUnifiedTopology: true
    })
        .then(res => {
            console.log('connected to db')
        })
        .catch(err => {
            console.log(err)
        })
}

module.exports = setUpDB