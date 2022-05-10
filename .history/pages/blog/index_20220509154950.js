import BlogNavbar from "../../components/Navbars/BlogNav";
import BlogThumbRow from "../../components/Cards/Tables/Rows/BlogThumbRow";

const fetcher = url => axios.get(url).then(res => res.data)

export default function BlogHome({ allBlogs }){

    return (
        <div className="bg-slate-800 min-h-screen pb-40">
            <BlogNavbar />
            <div className="pt-32 w-[75%] mx-auto mb-10 border-b border-gray-400">
                <h1 className="text-6xl font-bold text-white">Latest</h1>
                <p className="text-lg text-gray-400 mb-6">Check out the latest from my blog. Stay tuned, new content posted every week!</p>
            </div>
            <div className="w-[75%] mx-auto">
                {allBlogs.map((blog) => (
                    <BlogThumbRow key={blog.id} blog={blog} />
                ))}
            </div>
        </div>
    )
}


export async function getServerSideProps(context) {

    const blogRes = await fetch(`http://localhost:3000/api/blog`);
    const blogData = await blogRes.json();
    
    console.log("Blog data from getServersideProps", blogData)
  
    return {
      props: {
        allBlogs: blogData.allBlogs,
      }
    }
  }