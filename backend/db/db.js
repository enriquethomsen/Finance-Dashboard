const mongoose = require('mongoose');
const MONGO_URL = process.env.MONGO_URL || MONGO_URL
const db = async () => {
    try {
        mongoose.set('strictQuery', false)
        await mongoose.connect(MONGO_URLL)
        console.log('Db Connected')
    } catch (error) {
        console.log('DB Connection Error');
    }
}

module.exports = {db}
