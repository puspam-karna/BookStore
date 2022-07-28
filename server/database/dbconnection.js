import mongoose from "mongoose";

const Connection = async (username, password) => {
  const URL = `mongodb+srv://${username}:${password}@store.1j8yn.mongodb.net/?retryWrites=true&w=majority`;
  try {
    await mongoose.connect(URL, { useNewUrlParser: true });
    console.log("database connected");
  } catch (error) {
    console.log("Error while connecting to database", error);
  }
};
export default Connection;
