const res = require('express/lib/response');
const Staff = require('../models/bookModel');

exports.book = async (req,res)=>{

    try {
        
        let book = new Book({
            book_id: req.body.staff_id,
            name: req.body.name,
            author: req.body.address,
            publisher: res.body.phoneNumber,
            price: res.body.price
        });

        staff.password = await staff.hashPassword(req.body.password);   //await คือการสั่งให้ทำบรรทัดนั้นให้เสร็จก่อน

        let createStaff = await staff.save();
        res.status(200).json({
            msg: "Add Staff OK",
            data: createStaff
        });

    } catch (error) {
        
        console.log(error);
        res.status(500).json({
            error: error
        });
    }
}
