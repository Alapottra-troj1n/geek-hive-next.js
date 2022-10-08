import connectDb from "../../lib/connectDb";

export default async function handler(req, res) {
    if (req.method == "POST") {


     try{
        const db = await connectDb();

        const {title, img, category, tags, desc, author, pending} = req.body;
        const tagsArray = tags.split(" " || ',');
        const results = await db.collection('blogposts').insertOne({title, img, category, tags: tagsArray, desc, author, pending});
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