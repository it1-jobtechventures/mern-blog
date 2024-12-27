import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'
import userModel from '../models/userModel.js';
import CryptoJS from "crypto-js";

const encryptionKey = process.env.ENCRYPTION_KEY || "defaultSecretKey"; // Use a secure, environment-based key

// const addUser = async (req, res) => {
//   try {
//     const { name, email, password } = req.body;

//     if (!name || !email || !password) {
//       return res.status(400).json({ success: false, message: 'All fields are required' });
//     }

//     const existingUser = await userModel.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ success: false, message: 'User already exists' });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);

//     const user = await userModel.create({
//       name,
//       email,
//       password: hashedPassword,
//     });

//     res.status(201).json({ success: true, message: 'User added successfully', user });
//   } catch (error) {
//     console.error('Error adding user:', error);
//     res.status(500).json({ success: false, message: 'Internal Server Error' });
//   }
// };

const addUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ success: false, message: "User already exists" });
    }

    // Encrypt the password
    const encryptedPassword = CryptoJS.AES.encrypt(password, encryptionKey).toString();

    const user = await userModel.create({
      name,
      email,
      password: encryptedPassword,
    });

    res.status(201).json({ success: true, message: "User added successfully", user });
  } catch (error) {
    console.error("Error adding user:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

const removeUser = async(req, res) => {
  try {
    const user = await userModel.findById(req.body.id);
    await userModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: 'user removed' });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
}

// const allUser = async (req, res) => {
//   try {
//     const user = await userModel.find({});
//     res.json({success:true ,data:user})
//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: error.message });
//   }
// }

const allUser = async (req, res) => {
  try {
    const encryptionKey = process.env.ENCRYPTION_KEY || "defaultSecretKey";

    const users = await userModel.find({});
    const decryptedUsers = users.map((user) => {
      // Decrypt the password
      const bytes = CryptoJS.AES.decrypt(user.password, encryptionKey);
      const originalPassword = bytes.toString(CryptoJS.enc.Utf8);

      return {
        ...user._doc,
        password: originalPassword, // Replace the hashed password with the decrypted one
      };
    });

    res.json({ success: true, data: decryptedUsers });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

// user Login Function
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the email exists in userModel
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ success: false, message: 'You are not a user' });
    }

    // Verify the password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }

    // Generate a token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });

    // Respond with success message and token
    res.status(200).json({
      success: true,
      message: 'Login successful',
      token,
      user: { id: user._id, name: user.name, email: user.email },
    });
  } catch (error) {
    console.error('Error during user login:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

export { addUser , removeUser, allUser , loginUser};
