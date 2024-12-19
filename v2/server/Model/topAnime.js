import mongoose from "mongoose";

const topAnimeSchema = mongoose.Schema({
    srno:{type:Number, required:true, unique:true},
    name:{type:String, required:true},
    link:{type:String, required:true},
    img:{type:String, required:true},
    info:[{type:String, required:true}],
    score:{type:Number, required:true},
});
 
export const TopAnime = mongoose.model("topanimes", topAnimeSchema);
