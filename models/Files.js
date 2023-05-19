import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
    
          UserId:{
            type:String,
          },
          FileUrl:{
            type:String,
          },
                  
 
},
{timestamps:true}
);

export default mongoose.model("Files", UserSchema)