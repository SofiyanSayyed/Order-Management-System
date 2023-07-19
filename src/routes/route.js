const express = require('express');
const router = express.Router()
const {createCustomer} = require('../controllers/customerController')

router.post('/register', createCustomer)




router.all('/*', (req, res)=>{
    return res.status(400).json({status: false, message: 'Invalid Request'})
})


module.exports = router