const express=require("express");
const router=express.Router();
const Person=require("./../models/Person")

router.post('/',async (req,res)=>{
    try {
     const data=req.body;
     const newPerson=new Person(data);
     const response= await newPerson.save()
        console.log("data saved");
        res.status(200).json(response);
 
    } catch (error) {
     console.log(error);
     res.status(500).json({error:"Internal server error"})
    }
 });

 router.get("/",async (req,res)=>{
    try {
        const data= await Person.find();
        console.log("data saved");
       res.status(200).json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"Internal server error"})
    }
});

router.get("/:workType",async(req,res)=>{
    try {
        const workType=req.params.workType;
        if(workType=="chef"|| workType=="waiter" || workType=="manager"){
             const response=await Person.find({work:workType});
             console.log("response fetch");
             res.status(200).json(response)
        }else{
            res.status(404).json({error:"Invalid error"})
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"Internal server error"})
    }
});

module.exports=router;