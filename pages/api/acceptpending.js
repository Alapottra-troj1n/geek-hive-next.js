import connectDb from "../../lib/connectDb";
var ObjectId = require('mongodb').ObjectID;

export default async function handler(req, res) {
    if (req.method == "PATCH") {

        const db = await connectDb();

        const postId = req.query.id;
        const { userEmail } = req.body;






        const findUser = await db.collection('users').find({ email: userEmail }).project({ password: 0 }).toArray();

        const isAdmin = findUser[0].isAdmin;

        if (!isAdmin) {

            return res.status(500).send({ success: false, message: "Authorization Error ! Forbidden Access" });

        }

        const updateDoc = {
            $set: {
              pending : false
            },
          };
        
        const result = await db.collection('blogposts').updateOne({_id: ObjectId(postId)}, updateDoc, {upsert: false});


        res.status(200).send({ success: true, result: result });
        
        








    } else {


        res.status(500).send({ success: false, message: "Must be a PATCH request" });


    }



}