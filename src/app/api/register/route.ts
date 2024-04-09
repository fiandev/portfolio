import { NextResponse } from "next/server";
import User from "@/database/models/User";
import connect from "@/database/connect";
import bcrypt from "bcryptjs";

export async function POST (req) {
    try {
        const { username, email, password } = await req.json();
        await connect();
        
        let userExists = await User.findOne({ username: username }).select("_id");
            
        if (userExists) throw new Error("user has been added!");
        
        let hashedPassword = await bcrypt.hash(password, 10)
        let user = new User({
            username,
            email,
            password: hashedPassword
        });
        user.save()

        return NextResponse.json({
            message: "user has been added"
        }, { status: 200 })
    } catch (error) {
        return NextResponse.json({
            message: error?.message
        }, { status: 500 })
    }
}