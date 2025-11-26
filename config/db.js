const mongoose= require("mongoose");


mongoose.connect(process.env.MONGO_URL);


const db= mongoose.connection;
db.on('connected',()=>{
console.log("Database Connected")
});

db.on('disonnected',()=>{
console.log("Database Can not be  Connected")
});
module.exports= db;
