const mongoose = require('mongoose')
require('dotenv').config({ path: '../../.env' })

mongoose.connect(`${process.env.MONGO_db}`, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})
const db = mongoose.connection
module.exports = db