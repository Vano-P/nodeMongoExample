const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_CONNTECT)
        console.log('Connect to MongoDb Successfully')
    } catch (e) {
        console.log('Connect failed:' + e.message)
    }
}

module.exports = connectDB