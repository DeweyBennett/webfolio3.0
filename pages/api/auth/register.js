import dbConnect from "../../../utils/mongodb";
import RegUser from "../../../Models/RegUser";
import UnregUser from "../../../Models/UnregUser"

import bcrypt from "bcryptjs";

export default async function handler(req, res) {
    await dbConnect();

    if (req.method === "POST") {
        const data = req.body;
        console.log(data)
        const { firstName, lastName, organization, jobTitle, email, phoneNumber, streetAddress, city, state, zipCode, password, role, notes } = JSON.parse(data);
        console.log(email)
        const regUser = await RegUser.findOne({ email: email });
        const unregUser = await UnregUser.findOne({ email: email });

        if (!regUser || !unregUser) {
            try {
                if (role === "Registered User" || "Admin") {
                    try {
                        const hashedPassword = await bcrypt.hash(password, 12);
                        const newUser = await RegUser.create({ firstName, lastName, organization, jobTitle, email, phoneNumber, streetAddress, city, state, zipCode, password: hashedPassword, role, notes });

                        console.log("New registered user", newUser)
        
                        return res.status(201).json({ message: "Successful" });
                    } catch (err) {
                        console.log(err);
                    }
                }

                // Unregistered users are created once a user sends a message from landing page contact form.
                if (role === "Unregistered User") {
                    try {
                        const newUser = await UnregUser.create({ firstName, lastName, organization, jobTitle, email, phoneNumber, streetAddress, city, state, zipCode, role, notes });

                        console.log("New unregistered user", newUser)
        
                        return res.status(201).json({ message: "Successful" });
                    } catch (err) {
                        console.log(err);
                    }
                }
            } catch (err) {
                console.log(err);
            }
        }
    }
}