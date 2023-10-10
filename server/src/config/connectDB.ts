import mongoose from 'mongoose';

export const connectDB = () =>{
    mongoose
    .connect(process.env.DATABASE_URL!)
    .then(()=>{
        console.log('Database connected.')
    })
}