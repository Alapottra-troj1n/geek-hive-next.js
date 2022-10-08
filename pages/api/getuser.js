import connectDb from "../../lib/connectDb";

export default async function handler(req, res) {
    const { email } = req.query
    const db = await connectDb();
    const userData = await db.collection('users').find({ email: email }).project({ password: 0 }).toArray();
    res.json({ status: 200, user: userData });



}