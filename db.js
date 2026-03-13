const mongoose = require('mongoose');
// mongo db connection url
const mongoURL='mongodb://localhost:27017/hotel'
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