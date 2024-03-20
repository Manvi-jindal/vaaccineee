import bcryptjs from "bcrypt"
import User from "@/models/user.model.js";
import { NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig.js";

connect();

export const GET = async (request) => {
    return NextResponse.json({m: hello})

    // try {
        
    //     const reqBody = await request.json();
    //     const {email, password } = reqBody;

    //     if ([email, , password].some((field) => !field || field.trim() === "")) {
    //         return NextResponse.error({ error: "All fields are required" }, { status: 400 });
    //     }
        
    //     // Check if user already exists
    //     const existingUser = await User.findOne({ email: email });

    //     if (existingUser) {
    //         return NextResponse.json({ error: "User already exists" });
    //     }

    // //     // Hash Password
    //     const salt = await bcryptjs.genSalt(10);
    //     const hashedPassword = await bcryptjs.hash(password, salt);

    //     const newUser = await User.create({
    //         email,
    //         password: hashedPassword
    //     });

    //     if (!newUser) {
    //         return NextResponse.json({ error: "Something went wrong while creating user" }, { status: 500 });
    //     } 


    //     return NextResponse.json({
    //         message: "User created successfully",
    //         success: true,
    //         newUser
    //     })

    // } catch (error) {
    //     return NextResponse.json({ error: error.message });
    // }
};