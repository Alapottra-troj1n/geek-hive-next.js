import connectDb from "../../../lib/connectDb";
const { ObjectId } = require("mongodb");


export default async function handler(req, res) {
  const db = await connectDb();
    const { pid } = req.query;

    try {

      const post = await db.collection('blogposts').find({_id: ObjectId(pid)}).toArray(); 
      res.send({success: true, data : post});

    } catch (error) {
      console.log(error);
    }
  
   


  }