import React, { useState } from "react";
import { getSession } from "next-auth/react";
import useSWR from 'swr';
import axios from 'axios';
import CardProfile from "../../../components/Cards/ProfileCard";
import Admin from "../../../layouts/Admin.js";

const fetcher = url => axios.get(url).then(res => res.data)

export default function NewPortfolioProject({ session }) {
  const { data: BlogsData, error:BlogsLoadError } = useSWR('/api/blog', fetcher)
  const { data: PortProjectsData, error:PortProjectsLoadError } = useSWR('/api/portfolio', fetcher)
  const { data: LeadsData, error:LeadsLoadError } = useSWR('/auth/users', fetcher)

  const PortProjects = PortProjectsData?.allPortProjects
  const Blogs = BlogsData?.allBlogs
  const Leads = LeadsData?.unregistered

  const [titleInput, settitleInput] = useState("");
  const [linkInput, setlinkInput] = useState("");
  const [desc, setDesc] = useState("");

  const config = {
    headers: {
        'Content-Type': 'multipart/form-data'
    }
  }

  const handleSubmit = async () => {
    if(titleInput === "") {
      alert("Please make sure you have a valid first name.");
    }

    if(linkInput === "") {
      alert("Please make sure you have a valid last name.");
    }

    if(desc === "") {
      alert("Please make sure you have a valid email.");
    }

    const data = await axios.post(`/api/portfolio`, { title: titleInput, link, desc }, config).then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });;

    settitleInput('');
    setLink('');
    setDesc('');
  }

  if (BlogsLoadError || PortProjectsLoadError || LeadsLoadError) return <div>failed to load</div>
  if (!BlogsData || !PortProjectsData || !LeadsData) return <div>loading...</div>

  return (
    <Admin blogs={ Blogs } portfolios={PortProjects} leads={Leads}>
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
                        value={titleInput}
                        onChange={(e) => settitleInput(e.target.value)}
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

  if ( !session ) {
    return {
      redirect: {
        destination: `${process.env.BASE_URL}`,
        permanent: false,
      },
    }
  } else {

    return {
      props: {
        session
      }
    }
  }
}
