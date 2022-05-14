import React, { useState } from "react";
import { getSession } from "next-auth/react";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import useSWR from 'swr';
import axios from 'axios';
import * as yup from 'yup';
import CardProfile from "../../../components/Cards/ProfileCard";
import Admin from "../../../layouts/Admin.js";

const fetcher = url => axios.get(url).then(res => res.data)

export default function NewBlog({ session }) {
  const { data: BlogsData, error:BlogsLoadError } = useSWR('/api/blog', fetcher)
  const { data: PortProjectsData, error:PortProjectsLoadError } = useSWR('/api/portfolio', fetcher)
  const { data: LeadsData, error:LeadsLoadError } = useSWR('/api/auth/users', fetcher)

  const PortProjects = PortProjectsData?.allPortProjects
  const Blogs = BlogsData?.allBlogs
  const Leads = LeadsData?.unregistered

  // Update 
  const [titleInput, settitleInput] = useState("");
  const [authorInput, setauthorInput] = useState("");
  const [sect1_headInput, setsect1_headInput] = useState("");
  const [sect1_bodyInput, setsect1_bodyInput] = useState("");
  const [sect2_headInput, setsect2_headInput] = useState("");
  const [sect2_bodyInput, setsect2_bodyInput] = useState("");
  const [sect3_headInput, setsect3_headInput] = useState("");
  const [sect3_bodyInput, setsect3_bodyInput] = useState("");
  const [sect4_headInput, setsect4_headInput] = useState("");
  const [sect4_bodyInput, setsect4_bodyInput] = useState("");
  const [sect5_headInput, setsect5_headInput] = useState("");
  const [sect5_body, setSect5_body] = useState("");
  const [sect6_head, setSect6_head] = useState("");
  const [sect6_body, setSect6_body] = useState("");
  const [sect7_head, setSect7_head] = useState("");
  const [sect7_body, setSect7_body] = useState("");
  const [sect8_head, setSect8_head] = useState("");
  const [sect8_body, setSect8_body] = useState("");
  const [sect9_head, setSect9_head] = useState("");
  const [sect9_body, setSect9_body] = useState("");
  const [sect10_head, setSect10_head] = useState("");
  const [sect10_body, setSect10_body] = useState("");
  const [tags, setTags] = useState("");

  const [openSect2, setOpenSect2] = useState(false);
  const [openSect3, setOpenSect3] = useState(false);
  const [openSect4, setOpenSect4] = useState(false);
  const [openSect5, setOpenSect5] = useState(false);
  const [openSect6, setOpenSect6] = useState(false);
  const [openSect7, setOpenSect7] = useState(false);
  const [openSect8, setOpenSect8] = useState(false);
  const [openSect9, setOpenSect9] = useState(false);
  const [openSect10, setOpenSect10] = useState(false);

  const validationSchema = yup.object().shape({
    Email: yup.string().required().email().matches(/[\w][^script | img | onError | src][^<>="'?&$]/),
    Password: yup.string().required().min(8).matches(/[\w][^script | img | onError | src][^<>="'?&$]/)
  })

  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(validationSchema) });
  console.log(errors)

  const config = {
    headers: {
        'Content-Type': 'multipart/form-data'
    }
  }

  const submitValidData = async (d) => {

    const data = await axios.post(`/api/blog`, { title: titleInput, author: authorInput, tags, sect1_head: sect1_headInput, sect1_body: sect1_bodyInput, sect2_head: sect2_headInput, sect2_body: sect2_bodyInput, sect3_head: sect3_headInput, sect3_body: sect3_bodyInput, sect4_head: sect4_headInput, sect4_body: sect4_bodyInput, sect5_head: sect5_headInput, sect5_body, sect6_head, sect6_body, sect7_head, sect7_body, sect8_head, sect8_body, sect9_head, sect9_body, sect10_head, sect10_body, }, config).then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });;

    settitleInput('');
    setauthorInput('');
    setTags('');
    setsect1_headInput('');
    setsect1_bodyInput('');
    setsect2_headInput('');
    setsect2_bodyInput('');
    setsect3_headInput('');
    setsect3_bodyInput('');
    setsect4_headInput('');
    setsect4_bodyInput('');
    setSect5_head('');
    setSect5_body('');
    setSect6_head('');
    setSect6_body('');
    setSect7_head('');
    setSect7_body('');
    setSect8_head('');
    setSect8_body('');
    setSect9_head('');
    setSect9_body('');
    setSect10_head('');
    setSect10_body('');
  }

  const handleNewSection = () => {
    console.log("Request for new section")
    if (sect1_bodyInput !== "") {
      setOpenSect2(true);
    }
    if (openSect2 === true && sect2_bodyInput !== "") {
      setOpenSect3(true);
    }
    if (openSect3 === true && sect3_bodyInput !== "") {
      setOpenSect4(true);
    }
    if (openSect4 === true && sect4_bodyInput !== "") {
      setOpenSect5(true);
    }
    if (openSect5 === true && sect5_body !== "") {
      setOpenSect6(true);
    }
    if (openSect6 === true && sect6_body !== "") {
      setOpenSect7(true);
    }
    if (openSect7 === true && sect7_body !== "") {
      setOpenSect8(true);
    }
    if (openSect8 === true && sect8_body !== "") {
      setOpenSect9(true);
    }
    if (openSect9 === true && sect9_body !== "") {
      setOpenSect10(true);
    }
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
              <form onSubmit={handleSubmit(submitValidData)} className="relative">
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
                        Blog Title
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        value={titleInput}
                        onChange={(e) => settitleInput(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Blog Author
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        value={authorInput}
                        onChange={(e) => setauthorInput(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Blog Tags
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        value={tags}
                        onChange={(e) => setTags(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="border-t-4 border-white my-4" />
                <div className="flex flex-wrap mb-10">
                  <div className="w-full px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Section Heading
                        </label>
                        <input
                          type="text"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          value={sect1_headInput}
                          onChange={(e) => setsect1_headInput(e.target.value)}
                        />
                      </div>
                    </div>
                  <div className="w-full px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Section Body
                      </label>
                      <textarea
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        rows="4"
                        value={sect1_bodyInput}
                        onChange={(e) => setsect1_bodyInput(e.target.value)}
                      ></textarea>
                    </div>
                  </div>
                </div>
                {openSect2 === true &&
                <div className="flex flex-wrap mb-10">
                  <div className="w-full px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Section2 Heading
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        value={sect2_headInput}
                        onChange={(e) => setsect2_headInput(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Section2 Body
                      </label>
                      <textarea
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        rows="4"
                        value={sect2_bodyInput}
                        onChange={(e) => setsect2_bodyInput(e.target.value)}
                      ></textarea>
                    </div>
                  </div>
                </div>
                }
                {openSect3 === true &&
                <div className="flex flex-wrap mb-10">
                  <div className="w-full px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Section3 Heading
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        value={sect3_headInput}
                        onChange={(e) => setsect3_headInput(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Section3 Body
                      </label>
                      <textarea
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        rows="4"
                        value={sect3_bodyInput}
                        onChange={(e) => setsect3_bodyInput(e.target.value)}
                      ></textarea>
                    </div>
                  </div>
                </div>
                }
                {openSect4 === true &&
                <div className="flex flex-wrap mb-10">
                  <div className="w-full px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Section4 Heading
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        value={sect4_headInput}
                        onChange={(e) => setsect4_headInput(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Section4 Body
                      </label>
                      <textarea
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        rows="4"
                        value={sect4_bodyInput}
                        onChange={(e) => setsect4_bodyInput(e.target.value)}
                      ></textarea>
                    </div>
                  </div>
                </div>
                }
                {openSect5 === true &&
                <div className="flex flex-wrap mb-10">
                  <div className="w-full px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Section5 Heading
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        value={sect5_head}
                        onChange={(e) => setSect5_head(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Section5 Body
                      </label>
                      <textarea
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        rows="4"
                        value={sect5_body}
                        onChange={(e) => setSect5_body(e.target.value)}
                      ></textarea>
                    </div>
                  </div>
                </div>
                }
                {openSect6 === true &&
                <div className="flex flex-wrap mb-10">
                  <div className="w-full px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Section6 Heading
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        value={sect6_head}
                        onChange={(e) => setSect6_head(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Section6 Body
                      </label>
                      <textarea
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        rows="4"
                        value={sect6_body}
                        onChange={(e) => setSect6_body(e.target.value)}
                      ></textarea>
                    </div>
                  </div>
                </div>
                }{openSect7 === true &&
                <div className="flex flex-wrap mb-10">
                  <div className="w-full px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Section7 Heading
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        value={sect7_head}
                        onChange={(e) => setSect7_head(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Section7 Body
                      </label>
                      <textarea
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        rows="4"
                        value={sect7_body}
                        onChange={(e) => setSect7_body(e.target.value)}
                      ></textarea>
                    </div>
                  </div>
                </div>
                }
                {openSect8 === true &&
                <div className="flex flex-wrap mb-10">
                  <div className="w-full px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Section8 Heading
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        value={sect8_head}
                        onChange={(e) => setSect8_head(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Section8 Body
                      </label>
                      <textarea
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        rows="4"
                        value={sect8_body}
                        onChange={(e) => setSect8_body(e.target.value)}
                      ></textarea>
                    </div>
                  </div>
                </div>
                }
                {openSect9 === true &&
                <div className="flex flex-wrap mb-10">
                  <div className="w-full px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Section9 Heading
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        value={sect9_head}
                        onChange={(e) => setSect9_head(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Section9 Body
                      </label>
                      <textarea
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        rows="4"
                        value={sect9_body}
                        onChange={(e) => setSect9_body(e.target.value)}
                      ></textarea>
                    </div>
                  </div>
                </div>
                }
                {openSect10 === true &&
                <div className="flex flex-wrap mb-10">
                  <div className="w-full px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Section10 Heading
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        value={sect10_head}
                        onChange={(e) => setSect10_head(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Section10 Body
                      </label>
                      <textarea
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        rows="4"
                        value={sect10_body}
                        onChange={(e) => setSect10_body(e.target.value)}
                      ></textarea>
                    </div>
                  </div>
                </div>
                }
                <div>
                  <button onClick={handleNewSection} className="absolute -bottom-14 right-0 bg-gray-700 active:bg-blueGray-600 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150" type="button">Add Section</button>
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
