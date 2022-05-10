import dbConnect from "../../../utils/mongodb";
import Blog from "../../../Models/Blog";

export default async function handler(req, res) {
    await dbConnect();
    console.log("Blog request received", )

    if (req.method === "GET") {
        try {
            const allBlogs = await Blog.find({});

            return res.status(200).json({ allBlogs });
        } catch(err) {
            res.status(500).json(err);
        }
    }

    if (req.method === "POST") {
        const data = req.body;
        const { title, author, tags, sect1_head, sect1_body, sect2_head, sect2_body, sect3_head, sect3_body, sect4_head, sect4_body, sect5_head, sect5_body, sect6_head, sect6_body, sect7_head, sect7_body, sect8_head, sect8_body, sect9_head, sect9_body, sect10_head, sect10_body } = JSON.parse(data);

        try {
            const newBlog = await Blog.create({ title, author, tags, sect1_head, sect1_body, sect2_head, sect2_body, sect3_head, sect3_body, sect4_head, sect4_body, sect5_head, sect5_body, sect6_head, sect6_body, sect7_head, sect7_body, sect8_head, sect8_body, sect9_head, sect9_body, sect10_head, sect10_body, visits: 0 })

            console.log("New blog created", newBlog)
        
            return res.status(201).json({ message: "Successful" });
        } catch(err) {
            console.log(err);
        }
    }
}