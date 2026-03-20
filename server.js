
const express =require('express');
const app = express();
require ('dotenv').config();
const db = require('./db');
const bodyParse=require('body-parser');
app.use(bodyParse.json());//store json data when convert into obje stored in req.body
const PORT =process.env.PORT||3000;
app.get('/', (req, res) => {
  res.send("Hello I am ur waiter ....how can i help u?")
})

//import the router files
const personRoutes=require('./routes/personRoutes');
const MenuItem=require('./routes/menuitemRoutes');
//use routers
  app.use('/person',personRoutes);
app.use('/menu',MenuItem);

app.listen(PORT,()=>{
    console.log("server is listening on port server jinda h")
})