import mongoose from "mongoose";

async function connectToMongoDB() {
  const dbLink = process.env.DB_LINK as string;
  try {
    await mongoose.connect(dbLink);
    console.log(`connected to ${dbLink} database`);
  } catch (e) {
    console.log(`failed to connect to database ${dbLink} with error: ${e}`);
  }
}

connectToMongoDB();
