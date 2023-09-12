import mongoose from "mongoose";
import _models from "./models";

const db = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to mongodb");
  } catch (error) {
    console.log("Error conntecting to mongodb, ", error);
  }
};

export default db;
