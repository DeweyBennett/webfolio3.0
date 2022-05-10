import { getSession, useSession } from 'next-auth/react';
import useSWR from 'swr';
import BlogNavbar from "../../components/Navbars/BlogNav";
import BlogThumbRow from "../../components/Cards/Tables/Rows/BlogThumbRow";
import useSWR from 'swr';

const fetcher = url => axios.get(url).then(res => res.data)

export default function BlogHome({ allBlogs }){
    const { data: Blogs, error:BlogsLoadError } = useSWR('http://localhost:3000/api/blog', fetcher)

    return (
        <div className="bg-slate-800 min-h-screen pb-40">
            <BlogNavbar />
            <div className="pt-32 w-[75%] mx-auto mb-10 border-b border-gray-400">
                <h1 className="text-6xl font-bold text-white">Latest</h1>
                <p className="text-lg text-gray-400 mb-6">Check out the latest from my blog. Stay tuned, new content posted every week!</p>
            </div>
            <div className="w-[75%] mx-auto">
                {Blogs.allBlogs.map((blog) => (
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