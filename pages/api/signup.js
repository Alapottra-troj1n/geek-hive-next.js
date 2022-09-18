import connectDb from "../../lib/connectDb";

export default async function handler(req, res) {
  if (req.method == "POST") {
    const db = await connectDb();

    const { email, username, password } = req.body;

    const alreadyExists = await db
      .collection("users")
      .find({ email: email })
      .toArray();

    if (alreadyExists.length > 0) {
      res.send({ success: false, message: "User already exists" });
    } else {
      const addedUser = await db
        .collection("users")
        .insertOne({ email: email, username: username, password: password });

      res.send({ success: true, message: "user added successfully" });
    }
  } else {
    res.status(500).send({ success: false, message: "Must be a POST request" });
  }
}
