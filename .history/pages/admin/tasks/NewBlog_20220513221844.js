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
  const [sect5_bodyInput, setsect5_bodyInput] = useState("");
  const [sect6_headInput, setsect6_headInput] = useState("");
  const [sect6_bodyInput, setsect6_bodyInput] = useState("");
  const [sect7_headInput, setsect7_headInput] = useState("");
  const [sect7_bodyInput, setsect7_bodyInput] = useState("");
  const [sect8_headInput, setsect8_headInput] = useState("");
  const [sect8_bodyInput, setsect8_bodyInput] = useState("");
  const [sect9_headInput, setsect9_headInput] = useState("");
  const [sect9_bodyInput, setsect9_bodyInput] = useState("");
  const [sect10_headInput, setsect10_headInput] = useState("");
  const [sect10_bodyInput, setsect10_bodyInput] = useState("");
  const [tagsInput, settagsInput] = useState("");

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
    console.log(d)
    // const data = await axios.post(`/api/blog`, { title: titleInput, author: authorInput, tags: tagsInput, sect1_head: sect1_headInput, sect1_body: sect1_bodyInput, sect2_head: sect2_headInput, sect2_body: sect2_bodyInput, sect3_head: sect3_headInput, sect3_body: sect3_bodyInput, sect4_head: sect4_headInput, sect4_body: sect4_bodyInput, sect5_head: sect5_headInput, sect5_body: sect5_bodyInput, sect6_head: sect6_headInput, sect6_body: sect6_bodyInput, sect7_head: sect7_headInput, sect7_body: sect7_bodyInput, sect8_head: sect8_headInput, sect8_body: sect8_bodyInput, sect9_head: sect9_headInput, sect9_body: sect9_bodyInput, sect10_head: sect10_headInput, sect10_body: sect10_bodyInput, }, config).then(function (response) {
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });;

    // settitleInput('');
    // setauthorInput('');
    // settagsInput('');
    // setsect1_headInput('');
    // setsect1_bodyInput('');
    // setsect2_headInput('');
    // setsect2_bodyInput('');
    // setsect3_headInput('');
    // setsect3_bodyInput('');
    // setsect4_headInput('');
    // setsect4_bodyInput('');
    // setsect5_headInput('');
    // setsect5_bodyInput('');
    // setsect6_headInput('');
    // setsect6_bodyInput('');
    // setsect7_headInput('');
    // setsect7_bodyInput('');
    // setsect8_headInput('');
    // setsect8_bodyInput('');
    // setsect9_headInput('');
    // setsect9_bodyInput('');
    // setsect10_headInput('');
    // setsect10_bodyInput('');
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
    if (openSect5 === true && sect5_bodyInput !== "") {
      setOpenSect6(true);
    }
    if (openSect6 === true && sect6_bodyInput !== "") {
      setOpenSect7(true);
    }
    if (openSect7 === true && sect7_bodyInput !== "") {
      setOpenSect8(true);
    }
    if (openSect8 === true && sect8_bodyInput !== "") {
      setOpenSect9(true);
    }
    if (openSect9 === true && sect9_bodyInput !== "") {
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
                      {/* Left off formatting inputs */}
                      <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        {...register( 'Blog_Title' )}
                        value={titleInput}
                        onChange={(e) => settitleInput(e.target.value)}
                      />
                      {errors.Blog_Title &&
                      <div className="text-red-600 font-semibold">
                        <span>Title is invalid</span>
                      </div>
                      }
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
                        {...register( 'Blog_Author' )}
                        value={authorInput}
                        onChange={(e) => setauthorInput(e.target.value)}
                      />
                      {errors.Blog_Author &&
                      <div className="text-red-600 font-semibold">
                        <span>Author is invalid</span>
                      </div>
                      }
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
                        {...register( 'Blog_tags' )}
                        value={tagsInput}
                        onChange={(e) => settagsInput(e.target.value)}
                      />
                      {errors.Blog_tags &&
                      <div className="text-red-600 font-semibold">
                        <span>Tags are invalid</span>
                      </div>
                      }
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
                          {...register( 'Sect1_Heading' )}
                          value={sect1_headInput}
                          onChange={(e) => setsect1_headInput(e.target.value)}
                        />
                        {errors.Sect1_Heading &&
                      <div className="text-red-600 font-semibold">
                        <span>Heading is invalid</span>
                      </div>
                      }
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
                        {...register( 'First_Name' )}
                        rows="4"
                        value={sect1_bodyInput}
                        onChange={(e) => setsect1_bodyInput(e.target.value)}
                      ></textarea>
                      {errors.First_Name &&
                      <div className="text-red-600 font-semibold">
                        <span>First name is invalid</span>
                      </div>
                      }
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
                        {...register( 'First_Name' )}
                        value={sect2_headInput}
                        onChange={(e) => setsect2_headInput(e.target.value)}
                      />
                      {errors.First_Name &&
                      <div className="text-red-600 font-semibold">
                        <span>First name is invalid</span>
                      </div>
                      }
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
                        {...register( 'First_Name' )}
                        rows="4"
                        value={sect2_bodyInput}
                        onChange={(e) => setsect2_bodyInput(e.target.value)}
                      ></textarea>
                      {errors.First_Name &&
                      <div className="text-red-600 font-semibold">
                        <span>First name is invalid</span>
                      </div>
                      }
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
                        {...register( 'First_Name' )}
                        value={sect3_headInput}
                        onChange={(e) => setsect3_headInput(e.target.value)}
                      />
                      {errors.First_Name &&
                      <div className="text-red-600 font-semibold">
                        <span>First name is invalid</span>
                      </div>
                      }
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
                        {...register( 'First_Name' )}
                        rows="4"
                        value={sect3_bodyInput}
                        onChange={(e) => setsect3_bodyInput(e.target.value)}
                      ></textarea>
                      {errors.First_Name &&
                      <div className="text-red-600 font-semibold">
                        <span>First name is invalid</span>
                      </div>
                      }
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
                        {...register( 'First_Name' )}
                        value={sect4_headInput}
                        onChange={(e) => setsect4_headInput(e.target.value)}
                      />
                      {errors.First_Name &&
                      <div className="text-red-600 font-semibold">
                        <span>First name is invalid</span>
                      </div>
                      }
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
                        {...register( 'First_Name' )}
                        rows="4"
                        value={sect4_bodyInput}
                        onChange={(e) => setsect4_bodyInput(e.target.value)}
                      ></textarea>
                      {errors.First_Name &&
                      <div className="text-red-600 font-semibold">
                        <span>First name is invalid</span>
                      </div>
                      }
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
                        {...register( 'First_Name' )}
                        value={sect5_headInput}
                        onChange={(e) => setsect5_headInput(e.target.value)}
                      />
                      {errors.First_Name &&
                      <div className="text-red-600 font-semibold">
                        <span>First name is invalid</span>
                      </div>
                      }
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
                        {...register( 'First_Name' )}
                        rows="4"
                        value={sect5_bodyInput}
                        onChange={(e) => setsect5_bodyInput(e.target.value)}
                      ></textarea>
                      {errors.First_Name &&
                      <div className="text-red-600 font-semibold">
                        <span>First name is invalid</span>
                      </div>
                      }
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
                        {...register( 'First_Name' )}
                        value={sect6_headInput}
                        onChange={(e) => setsect6_headInput(e.target.value)}
                      />
                      {errors.First_Name &&
                      <div className="text-red-600 font-semibold">
                        <span>First name is invalid</span>
                      </div>
                      }
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
                        {...register( 'First_Name' )}
                        rows="4"
                        value={sect6_bodyInput}
                        onChange={(e) => setsect6_bodyInput(e.target.value)}
                      ></textarea>
                      {errors.First_Name &&
                      <div className="text-red-600 font-semibold">
                        <span>First name is invalid</span>
                      </div>
                      }
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
                        {...register( 'First_Name' )}
                        value={sect7_headInput}
                        onChange={(e) => setsect7_headInput(e.target.value)}
                      />
                      {errors.First_Name &&
                      <div className="text-red-600 font-semibold">
                        <span>First name is invalid</span>
                      </div>
                      }
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
                        {...register( 'First_Name' )}
                        rows="4"
                        value={sect7_bodyInput}
                        onChange={(e) => setsect7_bodyInput(e.target.value)}
                      ></textarea>
                      {errors.First_Name &&
                      <div className="text-red-600 font-semibold">
                        <span>First name is invalid</span>
                      </div>
                      }
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
                        {...register( 'First_Name' )}
                        value={sect8_headInput}
                        onChange={(e) => setsect8_headInput(e.target.value)}
                      />
                      {errors.First_Name &&
                      <div className="text-red-600 font-semibold">
                        <span>First name is invalid</span>
                      </div>
                      }
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
                        {...register( 'First_Name' )}
                        rows="4"
                        value={sect8_bodyInput}
                        onChange={(e) => setsect8_bodyInput(e.target.value)}
                      ></textarea>
                      {errors.First_Name &&
                      <div className="text-red-600 font-semibold">
                        <span>First name is invalid</span>
                      </div>
                      }
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
                        {...register( 'First_Name' )}
                        value={sect9_headInput}
                        onChange={(e) => setsect9_headInput(e.target.value)}
                      />
                      {errors.First_Name &&
                      <div className="text-red-600 font-semibold">
                        <span>First name is invalid</span>
                      </div>
                      }
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
                        {...register( 'First_Name' )}
                        rows="4"
                        value={sect9_bodyInput}
                        onChange={(e) => setsect9_bodyInput(e.target.value)}
                      ></textarea>
                      {errors.First_Name &&
                      <div className="text-red-600 font-semibold">
                        <span>First name is invalid</span>
                      </div>
                      }
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
                        {...register( 'First_Name' )}
                        value={sect10_headInput}
                        onChange={(e) => setsect10_headInput(e.target.value)}
                      />
                      {errors.First_Name &&
                      <div className="text-red-600 font-semibold">
                        <span>First name is invalid</span>
                      </div>
                      }
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
                        {...register( 'First_Name' )}
                        rows="4"
                        value={sect10_bodyInput}
                        onChange={(e) => setsect10_bodyInput(e.target.value)}
                      ></textarea>
                      {errors.First_Name &&
                      <div className="text-red-600 font-semibold">
                        <span>First name is invalid</span>
                      </div>
                      }
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
