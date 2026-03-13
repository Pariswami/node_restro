const express=require('express');
const router =express.Router();
const MenuItem=require('./../models/menu');

//post for menu
router.post('/',async(req,res)=>{
  try{
  const data = req.body//req.body contains data
  const newMenu =new MenuItem(data);
  const response =  await newMenu.save();
    console.log('data saved sucessfully');
    res.status(200).json(response);
  }

catch(err){
console.log(err);
res.status(500).json({error: 'internal server error '});
}
})
//get menu
router.get('/',async(req,res)=>{
  try{
    const data = await MenuItem.find();
        console.log('data fetched');
    res.status(200).json(data);
  }
  catch(err){
    console.log(err);
res.status(500).json({error: 'internal server error '});
  }
})
///get taste
router.get('/:tastetype',async(req,res)=>{
  try{
  const tastetype=req.params.tastetype;
  if(tastetype=='Spicy'||tastetype=='Sweet'||tastetype=='Salty'){

    const response = await MenuItem.find({taste:tastetype});
    console.log('response fetched');
      res.status(200).json(response);
    
  }else{
    res.status(404).json({error:'invalid worktype'}) ;
   }
  }catch(err){
 console.log(err);
res.status(500).json({error: 'internal server error '});
  }
})
module.exports =router;