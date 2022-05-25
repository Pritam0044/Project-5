// const userModel = require('../models/userModel');
// const jwt = require('jsonwebtoken')
// const mongoose = require('mongoose')

// const isValid = function (value) {
//     if (typeof value === 'undefined' || value === null) return false
//     if (typeof value === 'string' && value.trim().length === 0) return false
//     return true;
// }
// const isValidRequestBody = function (requestBody) {
//     return Object.keys(requestBody).length > 0

// }

// //second api for login

// const userLogin = async function(req, res) {
//     try {
//         const requestBody = req.body;
//         if (!isValidRequestBody(requestBody)) {
//             res.status(400).send({ status: false, message: 'Invalid request parameters' })
//             return
//         }
//         if (requestBody.email && requestBody.password) {
//             const check = await userModel.findOne({ email: requestBody.email, password: requestBody.password });
//             if (!check) {
//                 return res.status(400).send({ status:false, msg: "Invalid login" })
//             }

//             let payload = { _id: check._id }
//             let token = jwt.sign(payload, 'project5')
//             res.header('x-token', token);
//             res.status(200).send({ status: true, data: "login successfull", token: { token } })
//         } else {
//             res.status(400).send({ status: false, msg: "email & password is Required" })
//         }
//     } catch (error) {
//         res.status(500).send({ status: false, error: error.message })
//     }
// }

// ////////////////////// [  get details of user ] ///////////////

// let getDetails = async function(req,res){
//     let user_id = req.params.userId

//     var isValid = mongoose.Types.ObjectId.isValid(user_id)
//     if(isValid == false){
//         return res.status(400).send({status:false, message:"please provide valid userId"})
//     } 
//     let userDetails = await userModel.findById(user_id)
//     if(userDetails == null){
//         return res.status(404).send({status:false, message:"User not found!"})
//     }
    
//     res.status(200).send({status:"true",message:"User profile details", data:userDetails})A

// }

// module.exports = {userLogin, getDetails}