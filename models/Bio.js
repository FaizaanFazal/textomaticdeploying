import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
        UserId:{
            type:String,
          },
        phonenumber: {
            type: String,
          },
          address: {
            type: String,
          },
          cnic: {
            type: String,
          },
          age: {
            type: Number,
          },
         
          gender: {
            type: String,
          },
          country: {
            type: String,
          },
          city: {
            type: String,
          },
          zipcode: {
            type: Number,
          }
 
 
},
{timestamps:true}
);

export default mongoose.model("Bio", UserSchema)