import { Express } from 'express'
import mongoose, { Mongoose } from 'mongoose'



export const bootstrap = async (odm: Mongoose, app: Express) => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log(`MongoDb has been connected!`);
    } catch (error) {
        console.error(`MongoDb connection failed: `, error);
    }
    try {
        app.listen(process.env.PORT || 3000, () => {
            console.log(`Server is running on ${process.env.PORT}`)
        });
    } catch (error) {
        console.error(`Failed to start the server: `, error)
    }
}