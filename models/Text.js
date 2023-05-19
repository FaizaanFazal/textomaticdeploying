import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
    
          OrginalText:{
            type:String,
          },
          TextResults:[
            {
              ProcessName:{
                type:String,
              },
              Result:{
                type:String,
              }
          }
        ]
        
 
},
{timestamps:true}
);

export default mongoose.model("Text", UserSchema)