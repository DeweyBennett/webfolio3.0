import dbConnect from "../../../utils/mongodb";
import RegUser from "../../../Models/RegUser";
import bcrypt from "bcryptjs";

export default async function handler(req, res) {
    await dbConnect();

    console.log("Sign in request received by login API", req.body)

    if (req.method === "POST") {
        const data = req.body;
        const { email, password, } = data;
        const user = await RegUser.findOne({ email: email });

        console.log("User found", user)

        if (!user) {
            return res.status(422).send({ message: "User does not exist" })
        }

        const doMatch = await bcrypt.compare(password, user.password);

        console.log("Password match")

        if (doMatch === true) {
            
            try {
                console.log("Configuring user for session")
                const { firstName, lastName, organization, jobTitle, email, role, _id } = user

                return res.status(201).json({ user: { firstName, lastName, organization, jobTitle, email, role, _id }, message: "Successful Login"})
            } catch (err) {
                return res.status(404).send({ message: "Incorrect Credentials" })
            }
        }
    }
}