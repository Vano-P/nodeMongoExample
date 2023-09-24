const express = require('express')

const app = express()

require('dotenv').config()

app.use(express.json())

const connectDB = require('./db')
const PORT = process.env.PORT || 5000
connectDB()

app.get('/', async (req, res) => {
    try {
        return res.status(200).json({message: 'All working..!'})
    } catch (e) {
        console.log(e)
    }
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

