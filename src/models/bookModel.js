const mongoose = require('mongoose');
// const uniqueValidator = require('mongoose-unique-Validator');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    book_id:{
        type:String,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    publisher:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    }
},{
    timeseries:true   
});

bookSchema.methods.hashPassword = async (password) => {
    return await bcrypt.hashSync(password, 10);
}
bookSchema.methods.compareUserPassword = async (inputtedPassword, hashedPassword) => {
    return await bcrypt.compare(inputtedPassword, hashedPassword)
}
bookSchema.methods.generateJwtToken = async (payload, secret, expires) => {
    return jwt.sign(payload, secret, expires)
}
module.exports = mongoose.model("Book", bookSchema);
bookSchema.plugin(uniqueValidator, {
    message: '{PATH} Already in use'
});
