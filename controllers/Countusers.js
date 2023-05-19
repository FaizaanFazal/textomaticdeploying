import Users from "../models/User.js"

export const CountUsers=async(req,res)=>{
    // const db = client.db('mydatabase');
    // const collection = db.collection('users');
  
    try {
        const usercount = await Users.find({});
        const c = usercount.length;
        const count = c.toString();
        res.status(200).send(count);
    } catch (error) {
        res.status(500).send({ status: "failed", message: error });
    }
   
 
};