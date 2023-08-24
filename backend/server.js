import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'

const app = express()

dotenv.config()
app.use(cors())
app.use(express.json())

// Database connection

app.get('/api', (req, res) => {
    res.status(200).send('Hello')
})
const PORT = process.env.PORT || 5001
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})

