const mongoose= require('mongoose')
const {Schema} = mongoose
const findOrCreate = require("mongoose-findorcreate");
const userSchema = Schema({
    name:{
        type:String,
        required :true
    },
    outlookId:{
        type:String,
        required:true
    },
    iitgEmail:{
        type:String,
        required :true,
        unique:true
    },
    date:{
        type: Date,
        default:Date.now()
    }

})
userSchema.plugin(findOrCreate);
module.exports=mongoose.model('user',userSchema)

//loginfmt