
const express =require('express');
const app = express();
const db = require('./db');

const bodyParse=require('body-parser');
app.use(bodyParse.json());//store json data when convert into obje stored in req.body

app.get('/', (req, res) => {
  res.send("Hello I am ur waiter ....how can i help u?")
})

//import the router files
const personRoutes=require('./routes/personRoutes');
const MenuItem=require('./routes/menuitemRoutes');
//use routers
  app.use('/person',personRoutes);
app.use('/menu',MenuItem);

app.listen(3000,()=>{
    console.log("server is listening on port server jinda h")
})