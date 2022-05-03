import axios from "axios";
import { useRouter } from "next/router"
import { useState } from "react";


export default function BlogThumbRow({ blog }){
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

    return(
        <div className="grid grid-cols-4 w-full border-b mb-10">
            <div className="col-span-1 text-center pt-4 bg-white">
                <p className="text-lg text-gray-600 font-semibold">{blog.createdAt}</p>
            </div>
            <div className="col-span-3 pl-4 pt-4">
                <div>
                    <h2 className="text-2xl text-white font-bold">{blog.title}</h2>
                    <p className="text-orange-300">{blog.tags}</p>
                </div>
                <div>
                    <p className="text-lg text-gray-400 py-4">{blog.body}</p>
                </div>
                <div>
                    <p onClick={handleClick} className="text-lg text-purple-700 hover:text-purple-300 py-4 cursor-pointer">See full post</p>
                </div>
            </div>
        </div>
    )
}