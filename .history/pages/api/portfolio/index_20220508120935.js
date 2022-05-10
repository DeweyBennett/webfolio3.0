import PortfolioProject from "../../../Models/PortfolioProject";
import dbConnect from "../../../utils/mongodb";

export default async function handler(req, res) {
    await dbConnect();

    console.log("Portfolio request received", req)

    if (req.method === "GET") {
        try {
            const allPortProjects = await PortfolioProject.find({});

            return res.status(200).json({ allPortProjects });
        } catch(err) {
            res.status(500).json(err);
        }
    }

    if (req.method === "POST") {
        const data = req.body;
        const { title, link, desc, } = JSON.parse(data);

        try {
            const newPortProject = await PortfolioProject.create({ title, link, desc, visits: 0 })

            console.log("New portfolio project created", newPortProject)
        
            return res.status(201).json({ message: "Successful" });
        } catch(err) {
            console.log(err);
        }
    }
}