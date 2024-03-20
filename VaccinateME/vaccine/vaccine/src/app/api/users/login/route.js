import { connect } from "@/dbConfig/dbConfig.js";
import User from "@/models/user.model.js";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt"
// import jwt from "jsonwebtoken";

connect();

export const POST = async (request) => {

    try {
        const reqBody = await request.json();
        const { email, password } = reqBody;

        if (!(email || password)) {
            return NextResponse.json({ error: "All fields are required" }, { status: 400 });
        }
        
        const user = await User.findOne({email});

        if (!user) {
            return NextResponse.json({ error: "No user found" });
        }

        const validPassword  = await bcrypt.compare(password, user?.password)

        if (!validPassword) {
            return NextResponse.json({error: "Invalid Password"}, {error: 400})
        }

        // const tokenData = {
        //     id: user?._id,
        //     email: user?.email
        // }

        // const token =  jwt.sign(tokenData, process.env.TOKEN_SECRECT, {expiresIn: "1d"})

        const response = NextResponse.json({
            message: "Login successful",
            success: true,
            user
        })

        // response.cookies.set("token", token, {
        //     httpOnly: true
        // })

        return response


    } catch (error) {
        return NextResponse.json({ error: error.message });
    }
};