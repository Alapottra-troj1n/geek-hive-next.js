import connectDb from "../../lib/connectDb";

export default async function handler(req, res) {
  const db = await connectDb();
  const allPosts = await db.collection("blogposts").find({}).toArray();


  res.json({ status: 200, data: allPosts });
  


}