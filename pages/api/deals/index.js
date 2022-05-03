import dbConnect from "../../../utils/mongodb";
import RegUser from "../../../Models/Deal";
import Deal from "../../../Models/Deal";

export default async function handler(req, res) {
    await dbConnect();

    if (req.method === "GET") {
        try {
            const allDeals = await Deal.find({});

            return res.status(200).json({ allDeals });
        } catch(err) {
            res.status(500).json(err);
        }
    }

    if (req.method === "POST") {
        const data = req.body;
        const { firstName, lastName, organization, email, devCosts, monthlyCosts, projectManager, projectName, projectDetails, devStatus, productionStage } = JSON.parse(data);

        try {
            const newDeal = await Deal.create({ firstName, lastName, organization, email, devCosts, monthlyCosts, projectManager, projectName, projectDetails, devStatus, productionStage })

            console.log("New deal created", newDeal)
        
            return res.status(201).json({ message: "Successful" });
        } catch(err) {
            console.log(err);
        }
    }
}