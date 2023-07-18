const express = require('express');
const router = express.Router()

// router.post('/api/customers', createCustomer)




router.all('/*', (req, res)=>{
    return res.status(400).json({status: false, message: 'Invalid Request'})
})


module.exports = router