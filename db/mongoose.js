import mongoose from 'mongoose';

const url = process.env.MONGO_ZARIA;
 

try {
  const client = await mongoose.connect(url);
  console.log(`Connected to MongoDB @ ${client.connection.host}`);
} catch (error) {
  console.log(error);
}
