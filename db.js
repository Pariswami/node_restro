const mongoose = require('mongoose');
require ('dotenv').config();
// mongo db connection url
//const  mongoURL='mongodb://127.0.0.1:27017/hotel' also use env here(in gitignore file not tracked to hide env info)
const mongoURL=process.env.DB_URL ;//CONNECT NOT TO LOCAL DB use hotel instead cluster0as db name
//setup mongodb connection
mongoose.connect(mongoURL)
.then(()=>console.log("mongodb connected"))
.catch(err=> console.log("err"));
    //get default connection
const db=mongoose.connection;
//define event listeners for database connection
db.on('connected',()=>{
    console.log('connection is established to mongodb_server');
});
db.on('error',()=>{
    console.log('mongodbserver connection error');
});
db.on('disconnected',()=>{
    console.log('connection is  not established to mongodbserver');
});
//export db connection
module.exports=db;