import mongoose from 'mongoose';
import UserModel from './models/user.model.js';
import dotenv from 'dotenv';
dotenv.config();

const userId = "69c27e065888506273a28c9a";

async function checkUser() {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Connected to DB");
    const user = await UserModel.findById(userId);
    if (user) {
      console.log("User Found:", {
        id: user._id,
        name: user.name,
        email: user.email,
        credits: user.credits
      });
    } else {
      console.log("User Not Found");
    }
    await mongoose.disconnect();
  } catch (error) {
    console.error("Error:", error);
  }
}

checkUser();
