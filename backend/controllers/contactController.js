import contactModel from "../models/contactModel.js";

const sentEmail = async(req, res) => {
    try {
        const contact = new contactModel({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            phoneNo : req.body.phoneNo,
            email: req.body.email,
            subject: req.body.subject,
            message: req.body.message,
        })

        await contact.save()
        res.json({ success: true, message: 'Form data saved successfully' });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
}

const listContact = async (req, res) => {
    try {
        const contacts = await contactModel.find({});
        res.json({success:true ,data:contacts})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})
    }
}

export {sentEmail , listContact}