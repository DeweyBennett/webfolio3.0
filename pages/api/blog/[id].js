import dbConnect from "../../../utils/mongodb";
import Blog from "../../../Models/Blog";

export default async function handler(req, res) {
    await dbConnect();

    const {
        method,
        query: { id },
      } = req;
    
      console.log("Incoming blog request", id)
    
      await dbConnect();
    
      if (method === "GET") {
        try {
          const blogPost = await Blog.findById(id);
    
          res.status(200).json(blogPost);
        } catch (err) {
    
          res.status(500).json(err);
        }
      }

    if (req.method === "POST") {
        const data = req.body;
        const { title, author, tags, sect1_head, sect1_body, sect2_head, sect2_body, sect3_head, sect3_body, sect4_head, sect4_body, sect5_head, sect5_body, sect6_head, sect6_body, sect7_head, sect7_body, sect8_head, sect8_body, sect9_head, sect9_body, sect10_head, sect10_body, visits } = JSON.parse(data);
// So far visits are coming in correct, but are not updating the db entry
        console.log("Num Visits", visits)

        try {
            const updatedBlog = await Blog.findByIdAndUpdate({ _id: id }, { visits: visits },{ new: true });

            console.log("Blog updated", updatedBlog)
        
            return res.status(201).json({ message: "Successful" });
        } catch(err) {
            console.log(err);
        }
    }
}