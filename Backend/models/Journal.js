import mongoose from "mongoose";

const schema = mongoose.Schema;

const journalSchema = new schema({
    title:{
        type: String,
        default: 'anonym'
    },
    body:{
        type: String,
        default: 'nothing'
    },
    user:{
        type: String,
        default: 'anonym'
    }
})

export default mongoose.model("Journal", journalSchema);