import mongoose from 'mongoose';

export const connectDB = () =>{
    mongoose
    .connect('mongodb+srv://DevWithEasy:Error404@cluster0.uwkx2.mongodb.net/ecommerce')
    .then(()=>{
        console.log('Database connected.')
    })
}