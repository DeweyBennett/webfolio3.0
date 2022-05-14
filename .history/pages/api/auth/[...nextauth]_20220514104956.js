import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import RegUser from "../../../Models/RegUser";

export default NextAuth({
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
            email: { label: "Email", type: "email" },
            password: {  label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                console.log("Sign in request received by next auth")

                const {email, password} = credentials

                const userData = await RegUser.findOne({ email: email });
                console.log("User data found")

                if (!userData) {
                    return res.status(422).send({ message: "User does not exist" })
                }
                console.log("Comparing password...")
                const doMatch = await bcrypt.compare(password, userData.password);

                if (doMatch) {
                    console.log("Password match")
                    try {
                        const user = {
                            userId: userData._id,
                            firstName: userData.firstName,
                            lastName: userData.lastName,
                            email: userData.email,
                            role: userData.role
                        };
    
                        const access_token= process.env.ACCESS_TOKEN
    
                        const account = { access_token, user }
    
                        console.log("Credentials authorization complete")
                        return account;
                    } catch (err) {
                        return null
                    }
                } else {
                    console.log("Password does not match")
                    return null
                }
            }
        })
    ],
    jwt: {
        encryption: true,
        secret: process.env.JWT_SECRET,
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {

                console.log("JWT account")

                token.access_token = user.access_token
                token.user = user.user
            }
            
            console.log("JWT token created")

            return token
        },
        async session({session, token}) {
            session.user = token.user;
            session.access_token = token.access_token;

            console.log("Session created")
            return session;
        },
    },
    pages: {
        signIn: "/auth/credentials_login.js",
        // signOut: ,
        // error: , // Error code passed in query string as ?error=
        // verifyRequest: , // (used for check email message)
        // newUser: // New users will be directed here on first sign in (leave the property out if not of interest)
    }
})