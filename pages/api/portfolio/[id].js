import PortfolioProject from "../../../Models/PortfolioProject";
import dbConnect from "../../../utils/mongodb";

export default async function handler(req, res) {
    await dbConnect();

    const {
        method,
        query: { id },
      } = req;
    
      console.log("Incoming portfolio request", req.query)
    
      await dbConnect();
    
      if (method === "GET") {
        try {
          const blogPost = await PortfolioProject.findById(id);
    
          res.status(200).json(blogPost);
        } catch (err) {
    
          res.status(500).json(err);
        }
      }

    if (req.method === "POST") {
        const data = req.body;
        const { title, link, desc, visits } = JSON.parse(data);
// So far visits are coming in correct, but are not updating the db entry
        console.log("Num Visits", visits)

        try {
            const updatedBlog = await PortfolioProject.findByIdAndUpdate({ _id: id }, { visits: visits },{ new: true });

            console.log("Portfolio updated", updatedBlog)
        
            return res.status(201).json({ message: "Successful" });
        } catch(err) {
            console.log(err);
        }
    }
}