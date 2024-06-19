const express=require("express");
const app=express();
const db=require("./db");
const Person=require("./models/Person");
const MenuItem=require("./models/MenuItem");

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get("/",(req,res)=>{
    res.send("node js tutorial")
});
app.post('/person',async (req,res)=>{
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

app.get("/person",async (req,res)=>{
    try {
        const data= await Person.find();
        console.log("data saved");
       res.status(200).json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"Internal server error"})
    }
});
app.post('/menuItem',async (req,res)=>{
    try {
     const data=req.body;
     const newPerson=new MenuItem(data);
     const response= await newPerson.save()
        console.log("data saved");
        res.status(200).json(response);
 
    } catch (error) {
     console.log(error);
     res.status(500).json({error:"Internal server error"})
    }
 });
 app.get("/menuItem",async (req,res)=>{
    try {
        const data= await MenuItem.find();
        console.log("data saved");
       res.status(200).json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"Internal server error"})
    }
});

app.get("/person/:workType",async(req,res)=>{
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

const personRouter=require("./routes/personRouts");

app.use("/person",personRouter);
app.listen(5000,()=>{
    console.log("listing on port 5000");
})