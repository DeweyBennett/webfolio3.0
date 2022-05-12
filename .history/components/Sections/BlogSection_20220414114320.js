import { useRouter } from "next/router";
import BlogThumbCard from "../Cards/Thumbnails/BlogThumbCard";

export default function BlogSection({ blogs }){
    const router = useRouter();

    return (
        <div className=" mx-3 my-24 p-8 bg-[#031B34] lg:mx-16">
            <div className="flex flex-col justify-center items-center">
                <h2 className="text-3xl font-bold max-w-[510px] bg-gradient-to-l from-[#AE67FA] to-[#F49867] bg-clip-text text-transparent">The Latest From My Blog</h2>
                <p className="text-gray-300 text-lg">New content is posted every Tuesday!</p>
                <p onClick={() => router.push('/blog')} className="text-orange-300 text-lg hover:text-purple-500 cursor-pointer">View All</p>
            </div>
            <div className="flex items-center justify-between py-16">
                {blogs.map((blog) => (
                    <BlogThumbCard key={blog._id} blog={blog} />
                ))}
            </div>
        </div>
    )
}