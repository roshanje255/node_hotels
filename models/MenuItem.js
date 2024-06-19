const mongoose=require("mongoose");

const mongooseItem=new mongoose.Schema({
   name:{
    type:String,
    require:true
   },
   price:{
    type:Number,
    require:true
   },
   taste:{
    type:String,
    enum:["sweet","spicy"],
    require:true
   },
   is_drink:{
    type:Boolean,
    default:false
   }
});
//commite add version
const MenuItem=mongoose.model("MenuItem",mongooseItem);
module.exports=MenuItem;