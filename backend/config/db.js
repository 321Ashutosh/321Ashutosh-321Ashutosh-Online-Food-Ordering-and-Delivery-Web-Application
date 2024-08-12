import mongoose from "mongoose";

export const  connectDB = async () =>{
    await mongoose.connect('mongodb+srv://mth98016:12345@cluster0.72ny2ny.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}


// add your mongoDB connection string above.
// Do not use '@' symbol in your database user's password else it will show an error.

// mongodb+srv://mth98016:<password>@cluster0.72ny2ny.mongodb.net/?