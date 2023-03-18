import mongoose from "mongoose";
const schema = mongoose.Schema;

const User = new schema({
    name :{
        type : String,
        required : true
    },
    email:{
        type: String,
        required:true
    },
    password :{
        type : String,
        required : true
    }
})

export default mongoose.model("Collection1", User)
