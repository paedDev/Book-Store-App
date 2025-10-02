import mongoose from "mongoose";

const connectDb = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Connected to MongoDB: ${connect.connection.name}`);
  } catch (error) {
    console.log("Failed to connect in MongoDb", error);
    process.exit(1);
  }
};

export default connectDb;
