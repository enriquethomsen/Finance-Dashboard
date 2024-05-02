const mongoose = require('mongoose');
const MONGO_URL = process.env.MONGO_URL || MONGO_URL
const PORT = process.env.PORT || PORT
const db = async () => {
      try {
    mongoose.connect(MONGO_URL)
    .then(() => {
        console.log('App connected to database');
        app.listen(PORT, () => {
            console.log(`App is listening to port: `, PORT)
        })
    })
  } catch (error) {
    console.log(error)
  }
}

module.exports = {db}
