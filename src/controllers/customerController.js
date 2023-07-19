const customerModel = require('../models/customerModel')
const { validString, validPhone, validEmail, validPassword, validObjectId } = require('../validations/validation')
const bcrypt = require('bcrypt')


const createCustomer = async (req, res) => {
    try {
        const { firstName, lastName, phone, email, password } = req.body;
        if (!firstName || !lastName || !phone || !email || !password) {
            return res.status(400).json({ status: false, message: "Provide required data !" })
        }
        if (!validString(firstName)) {
            return res.status(400).json({ status: false, message: "Enter Valid firstName" });
        }
        if (!validString(lastName)) {
            return res.status(400).json({ status: false, message: "Enter Valid lastName" });
        }
        if (!validEmail(email)) {
            return res.status(400).json({ status: false, message: "Enter Valid Email" });
        }
        if (!validPhone(phone)) {
            return res.status(400).json({ status: false, message: "Enter Valid Number" });
        }
        if (!validPassword(password)) {
            return res.status(400).json({ status: false, message: "Password length must be more than 8 & less than 16" });
        }

        let hashedPassword = await bcrypt.hash(password, 10)
        req.body.password = hashedPassword

        const customer = await customerModel.create(req.body)
       
        return res.status(201).json({status: true, data: customer});

    } catch (error) {
        res.status(500).json({status: false, message: 'Error creating customer' });
    }
};


module.exports = {createCustomer}