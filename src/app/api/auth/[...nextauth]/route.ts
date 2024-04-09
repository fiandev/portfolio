
import User from "@/database/models/User";
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

const authOptions = {
    providers: [
        CredentialsProvider({
            // The name to display on the sign in form (e.g. "Sign in with...")
            name: "credentials",
            // `credentials` is used to generate a form on the sign in page.
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                let { username, password } = await req.body;
                let hashedPassword = await bcrypt.hash(password, 10)
                let userExists = User.findOne({ username: username, password: hashedPassword }).exec();
                console.log({ username, userExists })
                
                if (userExists) {
                    // Any object returned will be saved in `user` property of the JWT
                    return userExists
                } else {
                    // If you return null then an error will be displayed advising the user to check their details.
                    return null

                    // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
                }
            }
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/dashboard",
    },
}

const handler = NextAuth(authOptions);

export {
    handler as POST,
    handler as GET,
};