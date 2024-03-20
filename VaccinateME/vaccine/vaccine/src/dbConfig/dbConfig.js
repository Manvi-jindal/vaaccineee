import mongoose from "mongoose";

export const connect = async () => {
    try {
        
        await mongoose.connect(`${process.env.MONGO_URI}/${process.env.DB_NAME}`)

        const connetion = mongoose.connection

        connetion.on("connected", () => {
            console.log("mongoDB connected successfully")
        })

        connetion.on("error", (err) => {
            console.log("MongoDB connection error. Please check mongoDB is on" + err)
            process.exit(1)
        })

    } catch (error) {
        console.log(error.messsage || "Something went wrong")
    }
}