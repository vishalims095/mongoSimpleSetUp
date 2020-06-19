var express = require('express')
var app = express()
var bodyParser = require('body-parser');
app.use(bodyParser.json());
const mongoose = require('mongoose');
// const conn = mongoose.createConnection("mongodb://127.0.0.1:27017/dbTry");;
// exports.mongoose = mongoose;
// exports.conn = conn;
// let userSchema = mongoose.Schema({
//     name : {
//         type : String,
//         default : null
//     }
// },
//     {
//         strict: true,
//         collection: 'user',
//         versionKey: false
//     }
// )
// var UserModel = conn.model('User', userSchema);
// register api 

app.get('/test', async(req, res) => {
    res.status(200).json({message : "Working Fine"})
})

// app.post('/register',async (req, res) => {
//     console.log("register calling", req.body)
//     let {name} = req.body;
//     let newUser = new UserModel({name})
//     let saveUser = await newUser.save()
//     if(!newUser) {
//         return res.status(403).json({message : "Unable to Register."})
//     } res.status(200).json({response : saveUser, message : "Register successful."})
// })



app.listen(3000, ()=> {
    console.log("running")
})
