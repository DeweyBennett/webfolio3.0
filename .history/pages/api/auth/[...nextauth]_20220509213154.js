import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";

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

                const res = await fetch(`${BASE_}/api/auth/login`, {
                    method: 'POST',
                    body: JSON.stringify(credentials),
                    headers: { "Content-Type": "application/json" }
                })
                const userData = await res.json()

                console.log("User data from login API", userData.user)
            
                if (res.ok && userData) {
                    const user = {
                        userId: userData.user._id,
                        firstName: userData.user.firstName,
                        lastName: userData.user.lastName,
                        email: userData.user.email,
                        role: userData.user.role
                    };

                    const access_token= process.env.ACCESS_TOKEN

                    const account = { access_token, user }

                    console.log("Credentials authorization complete", account)
                    return account;
                }

                return null
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

                console.log("JWT account", user)

                token.access_token = user.access_token
                token.user = user.user
            }
            
            console.log("JWT token created", token)

            return token
        },
        async session({session, token}) {
            session.user = token.user;
            session.access_token = token.access_token;

            console.log("Session created", session)
            return session;
        },
    },
    pages: {
        // signIn: ,
        // signOut: ,
        // error: , // Error code passed in query string as ?error=
        // verifyRequest: , // (used for check email message)
        // newUser: // New users will be directed here on first sign in (leave the property out if not of interest)
    }
})