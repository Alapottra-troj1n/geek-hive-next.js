import clientPromise from "../lib/mongodb";

const connectDb = async () => {
    const client = await clientPromise;
    const db = client.db("geekhive");
   
    return db;
  
  }

  export default connectDb;

  