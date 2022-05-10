import BlogNavbar from "../../components/Navbars/BlogNav";

export default function BlogPost({ blog }){
    const { data: Blog, error:BlogLoadError } = useSWR(`http://localhost:3000/api/blog/${params.id}`, fetcher)

    if (BlogLoadError) return <div>failed to load</div>
    if (!Blog) return <div>loading...</div>

    return (
        <div className="bg-slate-800 min-h-screen pb-40">
            <BlogNavbar />
            <div className="pt-32 w-[75%] mx-auto mb-10 border-b border-gray-400">
                <h1 className="text-6xl font-bold text-white mb-2">{blog.title}</h1>
                <p className="text-lg text-gray-400 mb-6">{blog.createdAt}</p>
            </div>
            <div className="flex w-[75%] mx-auto">
                <div className="flex-grow">
                    <div className="mb-6">
                        <h2 className="text-2xl text-gray-400 font-semibold">{blog.sect1_head}</h2>
                        <p className="text-lg text-white">{blog.sect1_body}</p>
                    </div>
                    <div className="mb-6">
                        <h2 className="text-2xl text-gray-400 font-semibold">{blog.sect2_head}</h2>
                        <p className="text-lg text-white">{blog.sect2_body}</p>
                    </div>
                    <div className="mb-6">
                        <h2 className="text-2xl text-gray-400 font-semibold">{blog.sect3_head}</h2>
                        <p className="text-lg text-white">{blog.sect3_body}</p>
                    </div>
                    <div className="mb-6">
                        <h2 className="text-2xl text-gray-400 font-semibold">{blog.sect4_head}</h2>
                        <p className="text-lg text-white">{blog.sect4_body}</p>
                    </div>
                    <div className="mb-6">
                        <h2 className="text-2xl text-gray-400 font-semibold">{blog.sect5_head}</h2>
                        <p className="text-lg text-white">{blog.sect5_body}</p>
                    </div>
                    <div className="mb-6">
                        <h2 className="text-2xl text-gray-400 font-semibold">{blog.sect6_head}</h2>
                        <p className="text-lg text-white">{blog.sect6_body}</p>
                    </div>
                    <div className="mb-6">
                        <h2 className="text-2xl text-gray-400 font-semibold">{blog.sect7_head}</h2>
                        <p className="text-lg text-white">{blog.sect7_body}</p>
                    </div>
                    <div className="mb-6">
                        <h2 className="text-2xl text-gray-400 font-semibold">{blog.sect8_head}</h2>
                        <p className="text-lg text-white">{blog.sect8_body}</p>
                    </div>
                    <div className="mb-6">
                        <h2 className="text-2xl text-gray-400 font-semibold">{blog.sect9_head}</h2>
                        <p className="text-lg text-white">{blog.sect9_body}</p>
                    </div>
                    <div className="mb-6">
                        <h2 className="text-2xl text-gray-400 font-semibold">{blog.sect10_head}</h2>
                        <p className="text-lg text-white">{blog.sect10_body}</p>
                    </div>
                </div>
                <div className="min-w-[20%] ml-6">
                    <div className="min-h-[150px] w-full border-b border-gray-400">
                        <h3 className="text-2xl text-white">Author</h3>
                        <p className="text-lg text-orange-400">{blog.author}</p>
                    </div>
                    <div className="min-h-[150px] w-full border-b border-gray-400 mt-10">
                        <h3 className="text-2xl text-white">Tags</h3>
                        <p className="text-lg text-orange-400">{blog.tags}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export async function getServerSideProps({ params }) {
    console.log("params", params)
    const blogRes = await fetch(`http://localhost:3000/api/blog/${params.id}`)
    const blogData = await blogRes.json();
    
    console.log("Blogdata from getServersideProps", blogData)
  
    return {
        props: {
            session: await getSession(context),
          }
    }
}