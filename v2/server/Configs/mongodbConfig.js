import mongoose from "mongoose";
import envObj from "./envConfig.js";


mongoose.connect(envObj.mdburl);

const mdb = mongoose.connection;

mdb.on('connected',()=>{
    console.log('mongodb Connected Successfully');
});

mdb.on('disconnected', ()=>{
    console.log('MongoDB is Disconnected');
});

mdb.on('error',(error)=>{
    console.error('MongoDB Error : '+error);
});


export default mdb