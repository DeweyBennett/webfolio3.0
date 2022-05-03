import axios from "axios";
import { useRouter } from "next/router"
import { useState } from "react";

export default function BlogThumbCard({ blog }) {
    const [visits, setVisits] = useState(blog.visits)
    const router = useRouter();

    const config = {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
      }

    const handleClick = async () => {
        
        try{
            const data = await axios.post(`http://localhost:3000/api/blog/${blog._id}`, { visits: visits + 1 }, config).then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });;

          router.push(`/blog/${blog._id}`)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div onClick={handleClick} className="relative w-[30%] min-h-[475px] bg-white rounded-lg shadow-lg shadow-orange-200 hover:scale-110 hover:shadow-orange-200 hover:shadow-xl transition duration-150 ease-in cursor-pointer">
            <div className="w-full h-[200px] bg-slate-500 rounded-t-lg" />
            <div className="px-4">
                <p className="text-purple-700 font-semibold">{blog.tags}</p>
                <h3 className="text-xl font-bold">{blog.title}</h3>
                <p>{blog.body}</p>
            </div>
            <div className="absolute bottom-2 pl-4">
                <p className="font-bold">{blog.author}</p>
                <p className="text-gray-400">{blog.createdAt}</p>
            </div>
        </div>
    )
}