const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-Validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Schema = mongoose.Schema;

const memberTypeSchema = new Schema({
    memberTypeSchema:{
        type:String,
        required:true,
        unique:true
    },
    typeName:{
        type:String,
        required:true
    },
    Borrow_date:{
        type:String,
        required:true
    }
}, 
{ timestamps: true 
});
memberTypeSchema.methods.hashPassword = async (password) => {
    return await bcrypt.hashSync(password, 10);
}
memberTypeSchema.methods.compareUserPassword = async (inputtedPassword, hashedPassword) => {
    return await bcrypt.compare(inputtedPassword, hashedPassword)
}
memberTypeSchema.methods.generateJwtToken = async (payload, secret, expires) => {
    return jwt.sign(payload, secret, expires)
}
module.exports = mongoose.model("memberType", memberTypeSchema);
memberTypeSchema.plugin(uniqueValidator, {
    message: '{PATH} Already in use'
});