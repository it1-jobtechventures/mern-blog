import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
  // firstName: { type: String, required: true },
  // lastName: { type: String, required: true },
  name:{type:String , require :true},
  countryCode: { type: String, required: true },
  phoneNo : {type:String , required:true},
  location : {type:String , required:true},
  email: { type: String, required: true },
  subject: { type: String },
  message: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

const contactModel = mongoose.models.contact || mongoose.model("contact", contactSchema)
export default contactModel;