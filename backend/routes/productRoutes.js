import express from "express";
import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";
import mongodb from "mongodb";
import dotenv from 'dotenv'

dotenv.config()

const router = express.Router()

const MongoClient = mongodb.MongoClient

const oid = mongodb.ObjectID

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
router.get('/', (req, res, next) => {
    MongoClient.connect(process.env.MONGO_URI, (err, client) => {
        const collection = client.db(process.env.MONGO_DB).collection(process.env.MONGO_COLLECTION)
        collection.find().toArray(function(err, result){
            res.json(result)
        })
        client.close()
    })
})


// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  Public
router.get('/:id',  (req, res) => {
    MongoClient.connect(process.env.MONGO_URI, (err, client) => {
        const collection = client.db(process.env.MONGO_DB).collection(process.env.MONGO_COLLECTION)
        collection.findOne({_id: oid(req.params.id)}, (err, result) => {
            res.json(result)
        })
        client.close()
    })
})



export default router