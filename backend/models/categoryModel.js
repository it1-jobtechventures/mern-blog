import mongoose from 'mongoose'

// user Schema
const categorySchema = new mongoose.Schema({
    name:{type:String ,unique: true},
},{minimize:false})

// create model in database
const categoryModel = mongoose.model.category || mongoose.model("category" ,categorySchema)
export default categoryModel;