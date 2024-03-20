import mongoose  from "mongoose";

const userSchema = new mongoose.Schema({

    email: {
        type: String,
        require: [true, "Please provide email"],
        lowercase: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        require: [true, "Please provide password"]
    },
    verifyToken: String,
    verifyTokenExpiry: Date,

}, {timestamps: true})

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User