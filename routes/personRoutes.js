const express=require('express');
const router =express.Router();
const person=require('./../models/person');
//post for person
router.post('/',async(req,res)=>{
  try{
  const data = req.body//req.body contains data
  const newperson =new person(data);
  const response =  await newperson.save();

    console.log('data saved sucessfully');
    res.status(200).json(response);
  }

catch(err){
console.log(err);
res.status(500).json({error: 'internal server error '});
}
})
//get person
router.get('/',async(req,res)=>{
  try{
    const data = await person.find();
        console.log('data fetched');
    res.status(200).json(data);
  }
  catch(err){
    console.log(err);
res.status(500).json({error: 'internal server error '});
  }
})
///get work
router.get('/:workType',async(req,res)=>{
  try{
  const workType=req.params.workType;
  if(workType=='chef'||workType=='manager'||workType=='waiter'){

    const response = await person.find({work:workType});
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
//put or patch
router.put('/:id',async(req,res)=>{
  try{
    const personId=req.params.id;
    const updatedPersonData=req.body; 
  
  const response =await person.findByIdAndUpdate(personId,updatedPersonData,{
    new:true,
    runValidators:true,

    })
    if(!response){
      return res.status(404),res.json({error:'Person not found!!'});
    }
    console.log('data updated');
    res.status(200).json(response);
}catch(err){
 console.log(err);
res.status(500).json({error: 'internal server error '});
  }
})
//delete
router.delete('/:id',async(req,res)=>{
  try{
    const personId=req.params.id;
    
  
  const response =await person.findByIdAndDelete(personId);
    if(!response){
      return res.status(404),res.json({error:'Person not found!!'});
    }
    console.log('data deleted');
    res.status(200).json({message:'person deleted successfully!!'});
}catch(err){
 console.log(err);
res.status(500).json({error: 'internal server error '});
  }
})


module.exports =router;