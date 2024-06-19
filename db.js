const mongoose=require("mongoose");
const mongoseURL="mongodb://127.0.0.1:27017/hotals";

mongoose.connect(mongoseURL,{
  useNewUrlParser:true,
  useUnifiedTopology:true
})

const db=mongoose.connection;

db.on("connected",()=>{
    console.log("connected to Mongodb server");
});
db.on("error",(error)=>{
  console.log("Mongodb connection error",error);
});
db.on("disconnected",()=>{
    console.log("Mongodb disconnected");
});

module.exports=db;
