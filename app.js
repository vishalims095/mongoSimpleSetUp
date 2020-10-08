var express = require('express')
var app = express()
const path = require('path');
var cors = require ("cors");
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(cors());
const allowedExt = [
    '.js',
    '.ico',
    '.css',
    '.png',
    '.jpg',
    '.woff2',
    '.woff',
    '.ttf',
    '.svg',
];
let initRoutes = ()=>{
    console.log("comming")

    app.use('/userWeb',express.static(path.join(__dirname, '' ,'dist' ,'addAddress')));
        app.get('/userWeb/*', (req, res) => {
        res.sendFile(path.join(__dirname,'','dist','addAddress' ,'index.html'));
    })
        
  }

const mongoose = require('mongoose');
const conn = mongoose.createConnection("mongodb://127.0.0.1:27017/assignmentNew");;
exports.mongoose = mongoose;
exports.conn = conn;
let userSchema = mongoose.Schema({
    addressData : [],
    },
    {
        strict: true,
        collection: 'user',
        versionKey: false
    }
)
var UserModel = conn.model('User', userSchema);

// save Address
app.post('/saveAddress',async (req, res) => {
    console.log("saveAddress calling", req.body)
    let {addressData} = req.body;
    let newUser = new UserModel({addressData})
    let saveUser = await newUser.save()
    if(!newUser) {
        return res.status(403).json({message : "Unable to save address."})
    } res.status(200).json({response : saveUser, message : "address saved successful."})
})


initRoutes(app);
app.listen(3000, ()=> {
    console.log("running")
})
