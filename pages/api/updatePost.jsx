import connectDb from "../../lib/connectDb";
var ObjectId = require('mongodb').ObjectID;
    
export default async function handler(req, res) {
    
    if (req.method == "PATCH") {


     try{
        const db = await connectDb();
        const id = req.query.id;

        const {title, img, category, tags, desc, author} = req.body;
    

        const tagsArray = tags.split(" " || ',');

        const results = await db.collection('blogposts').updateOne({_id: ObjectId(id)},{$set:{title, img, category, tags : tagsArray, desc, author}}, {upsert: true});

        console.log(results);
        res.send({success: true, message: results});


     }catch(err){
        console.log(err);
        res.send({success: false, message: err.message});
     }
      
      
     


    }else{

  
        res.status(500).send({ success: false, message: "Must be a POST request" });


    }
  


}