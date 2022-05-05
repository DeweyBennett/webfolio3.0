import axios from "axios";
import React, { useState } from "react";
import CardProfile from "../../../components/Cards/ProfileCard";
import Admin from "../../../layouts/Admin.js";

export default function NewPortfolioProject({ allBlogs, portfolios, leads }) {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [desc, setDesc] = useState("");

  const config = {
    headers: {
        'Content-Type': 'multipart/form-data'
    }
  }

  const handleSubmit = async () => {
    if(title === "") {
      alert("Please make sure you have a valid first name.");
    }

    if(link === "") {
      alert("Please make sure you have a valid last name.");
    }

    if(desc === "") {
      alert("Please make sure you have a valid email.");
    }

    const data = await axios.post(`/api/portfolio`, { title, link, desc }, config).then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });;

    setTitle('');
    setLink('');
    setDesc('');
  }

  return (
    <Admin blogs={ allBlogs } portfolios={portfolios} leads={leads}>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-8/12 px-4">
          <div className="relative flex flex-col min-w-0 break-words mt-16 w-full mb-6 shadow-lg rounded-xl bg-gray-200 border-0">
            <div className="rounded-t bg-white mb-0 px-6 py-6">
              <div className="text-center flex justify-between">
                <h6 className="text-blueGray-700 text-xl font-bold">New Contact</h6>
                <button
                  className="bg-gray-700 active:bg-blueGray-600 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
            </div>
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <form>
                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                  User Information
                </h6>
                <div className="flex flex-wrap">
                  <div className="w-full px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Project Title
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Project Link
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        value={link}
                        onChange={(e) => setLink(e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap">
                  <div className="w-full lg:w-12/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Description:
                      </label>
                      <textarea
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        rows="4"
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                      ></textarea>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-4/12 px-4">
          <CardProfile />
        </div>
      </div>
    </Admin>
  );
}


export async function getServerSideProps(context) {
  const session = await getSession(context);

  console.log("Dash session", session)

  if ( !session ) {
    return {
      redirect: {
        destination: "http://localhost:3000/",
        permanent: false,
      },
    }
  } else {
    const blogRes = await fetch(`http://localhost:3000/api/blog`);
    const blogData = await blogRes.json();
  
    const portRes = await fetch(`http://localhost:3000/api/portfolio`);
    const portData = await portRes.json();
  
    const userRes = await fetch(`http://localhost:3000/api/auth/users`);
    const userData = await userRes.json();


  
    return {
      props: {
        allBlogs: blogData.allBlogs,
        portfolios: portData.allPortProjects,
        leads: userData.unregistered
      }
    }
  }
  // const blogRes = await fetch(`http://localhost:3000/api/blog`);
  // const blogData = await blogRes.json();
  
  // const portRes = await fetch(`http://localhost:3000/api/portfolio`);
  // const portData = await portRes.json();
  
  // const userRes = await fetch(`http://localhost:3000/api/auth/users`);
  // const userData = await userRes.json();
  
  // return {
  //   props: {
  //     allBlogs: blogData.allBlogs,
  //     portfolios: portData.allPortProjects,
  //     leads: userData.unregistered
  //   }
  // }
}