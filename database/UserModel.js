const mongoose = require("mongoose"),
      Schema = mongoose.Schema;

   const UserSchema = new Schema({
        email:{type:String, required:true, unique:true},
        password:{type:String, required:true},
        verified:{type:Boolean, default:false},
        createdOn:{ type: Date, 'default': Date.now }   
      });


   module.exports = mongoose.model("useracc", UserSchema);
