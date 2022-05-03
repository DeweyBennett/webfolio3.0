import dbConnect from "../../../../utils/mongodb";
import RegUser from "../../../../Models/RegUser";
import UnregUser from "../../../../Models/UnregUser"

export default async function handler(req, res) {
    await dbConnect();
    
    console.log("User Request received")

    if (req.method === "GET") {
        try {
            const registered = await RegUser.find({});
            const unregistered = await UnregUser.find({});

            return res.status(200).json({ registered, unregistered });
        } catch(err) {
            res.status(500).json(err);
        }
    } 
}