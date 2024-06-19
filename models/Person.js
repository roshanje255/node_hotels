const mongoose=require("mongoose");

const mongoosedb=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    work:{
      type:String,
      enum:["chef","waiter","manager"],
      require:true
    },
    mobile:{
      type:String,
      require:true
    },
    age:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    address:{
        type:String
    },
    salary:{
        type:Number,
        require:true
    }

});

const Person=mongoose.model("Person",mongoosedb);
module.exports=Person;