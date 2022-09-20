import connectDb from "../../lib/connectDb";

export default async function handler(req, res) {
    if (req.method == "POST") {


        const db = await connectDb();

        const {title, imgUrl, category, tags, content} = req.body;
       
      

        res.send({title, imgUrl, category, tags, content});
      
      
     


    }else{

  
        res.status(500).send({ success: false, message: "Must be a POST request" });


    }
  


}