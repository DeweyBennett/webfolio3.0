import { getSession, useSession } from 'next-auth/react';
import useSWR from 'swr';
import axios from 'axios';
import BlogNavbar from "../../components/Navbars/BlogNav";
import BlogThumbRow from "../../components/Cards/Tables/Rows/BlogThumbRow";

const fetcher = url => axios.get(url).then(res => res.data)

export default function BlogHome({ session }){
    const { data: BlogsData, error:BlogsLoadError } = useSWR('http://localhost:3000/api/blog', fetcher)
    const Blogs = BlogsData?.allBlogs
    console.log(BlogsData?.allBlogs)

    return (
        <div className="bg-slate-800 min-h-screen pb-40">
            <BlogNavbar />
            <div className="pt-32 w-[75%] mx-auto mb-10 border-b border-gray-400">
                <h1 className="text-6xl font-bold text-white">Latest</h1>
                <p className="text-lg text-gray-400 mb-6">Check out the latest from my blog. Stay tuned, new content posted every week!</p>
            </div>
            <div className="w-[75%] mx-auto">
                {Blogs.map((blog) => (
                    <BlogThumbRow key={blog.id} blog={blog} />
                ))}
            </div>
        </div>
    )
}


export async function getServerSideProps(context) {

    return {
      props: {
        session: await getSession(context),
      }
    }
  }