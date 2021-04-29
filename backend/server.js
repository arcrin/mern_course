import express from "express"
import dotenv from 'dotenv'
import productRoute from "./routes/productRoutes.js";
import colors from 'colors'

dotenv.config()

const app = express();

app.get('/', (req, res) => {
    res.send('API is running...')
})

app.use('/api/products', productRoute)

app.use((req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`)
    res.status(404)
    next(error)
})

app.use((err, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode
    res.status(statusCode)
    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === "production" ? null: err.stack
    })
})

const PORT = process.env.PORT || 5000
const NODE_ENV = process.env.NODE_ENV

app.listen(PORT, console.log(`Server running in ${NODE_ENV} on port ${PORT}`.yellow.bold));