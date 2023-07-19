const validator = require('validator');


const validString = (value) =>{
    if(typeof value == 'undefined' || value === null) return false;
    if(typeof value === 'string' && value.trim().length === 0) return false;
    return true;
}

const validPhone = (value) =>{
    let stringValue = value.toString();
    if(stringValue.trim().length < 10) return false
    if(!validator.isMobilePhone(stringValue)) return false
    return true
    
}

const validEmail = (value) =>{
    if(!validator.isEmail(value)) return false
    return true;
}

const validPassword = (value) =>{
    if(typeof value === 'string' && value.trim().length < 8 || value.trim().length > 15 ) return false;
    return true
}


const validObjectId = (id) => {
    return mongoose.Types.ObjectId.isValid(id);
}



module.exports = {validString, validPhone, validEmail, validPassword, validObjectId}