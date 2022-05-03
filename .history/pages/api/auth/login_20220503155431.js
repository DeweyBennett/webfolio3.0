import dbConnect from "../../../utils/mongodb";
import RegUser from "../../../Models/RegUser";
import bcrypt from "bcryptjs";

export default async function handler(req, res) {
    await dbConnect();

    console.log("Sign in request received by login API", req.body)

    if (req.method === "POST") {
        const data = req.body;
        const { email, password } = data;
        console.log("data", data)
        const user = await RegUser.findOne({ email: email });

        console.log("User found", user)

        if (!user) {
            return res.status(422).send({ message: "User does not exist" })
        }

        const doMatch = await bcrypt.compare(password, user.password);

        if (doMatch) {
            console.log("Password match")
            try {
                const { firstName, lastName, organization, jobTitle, email, role, _id } = user

                return res.status(201).json({ user: { firstName, lastName, organization, jobTitle, email, role, _id }, message: "Successful Login"})
            } catch (err) {
                return res.status(404).send({ message: "Incorrect Credentials" })
            }
        } else {
            console.log("Password does not match")
        }
    }
}