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

export default function NewDeal({ session }) {
  const { data: BlogsData, error:BlogsLoadError } = useSWR('/api/blog', fetcher)
  const { data: PortProjectsData, error:PortProjectsLoadError } = useSWR('/api/portfolio', fetcher)
  const { data: LeadsData, error:LeadsLoadError } = useSWR('/api/auth/users', fetcher)

  const PortProjects = PortProjectsData?.allPortProjects
  const Blogs = BlogsData?.allBlogs
  const Leads = LeadsData?.unregistered

  const [firstNameInput, setfirstNameInput] = useState("");
  const [lastNameInput, setlastNameInput] = useState("");
  const [organizationInput, setorganizationInput] = useState("");
  const [emailInput, setemailInput] = useState("");
  const [devCostsInput, setdevCostsInput] = useState("");
  const [monthlyCostsInput, setmonthlyCostsInput] = useState("");
  const [projectManagerInput, setprojectManagerInput] = useState("");
  const [projectNameInput, setprojectNameInput] = useState("");
  const [projectDetailsInput, setprojectDetailsInput] = useState("");
  const [devStatus, setDevStatus] = useState("Pending");
  const [productionStage, setProductionStage] = useState("Layout Development");

  const validationSchema = yup.object().shape({
    Email: yup.string().required().email().matches(/[\w][^<>="'?&$]/),
    Password: yup.string().required().min(8).matches(/[\w][^<>="'?&$]/)
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
    // const data = await axios.post(`/api/deals`, { firstName: firstNameInput, lastName: lastNameInput, organization: organizationInput, email: emailInput, devCosts: devCostsInput, monthlyCosts: monthlyCostsInput, projectManager: projectManagerInput, projectName: projectNameInput, projectDetails: projectDetailsInput, devStatus, productionStage }, config).then(function (response) {
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });;

    // setfirstNameInput("");
    // setlastNameInput("");
    // setorganizationInput("");
    // setemailInput("");
    // setdevCostsInput("");
    // setmonthlyCostsInput("");
    // setprojectManagerInput("");
    // setprojectNameInput("");
    // setprojectDetailsInput("");
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
                <h6 className="text-blueGray-700 text-xl font-bold">My account</h6>
              </div>
            </div>
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <form onSubmit={handleSubmit(submitValidData)}>
                <button
                  onClick={handleSubmit}
                  className="bg-gray-700 active:bg-blueGray-600 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                  type="button"
                >
                  Submit
                </button>
                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                  Contact Information
                </h6>
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        {...register( 'First_Name' )}
                        value={firstNameInput}
                        onChange={(e) => setfirstNameInput(e.target.value)}
                      />
                      {errors.First_Name &&
                      <div className="text-red-600 font-semibold">
                        <span>First name is invalid</span>
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
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        {...register( 'Last_Name' )}
                        value={lastNameInput}
                        onChange={(e) => setlastNameInput(e.target.value)}
                      />
                      {errors.Last_Name &&
                      <div className="text-red-600 font-semibold">
                        <span>Last name is invalid</span>
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
                        Organization
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        {...register( 'Organization' )}
                        value={organizationInput}
                        onChange={(e) => setorganizationInput(e.target.value)}
                      />
                      {errors.Organization &&
                      <div className="text-red-600 font-semibold">
                        <span>Organization is invalid</span>
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
                        Email
                      </label>
                      <input
                        type="email"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        {...register( 'Email' )}
                        value={emailInput}
                        onChange={(e) => setemailInput(e.target.value)}
                      />
                      {errors.Email &&
                      <div className="text-red-600 font-semibold">
                        <span>Email is invalid</span>
                      </div>
                      }
                    </div>
                  </div>
                </div>

                <hr className="mt-6 border-b-1 border-blueGray-300" />

                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                  Project Information
                </h6>
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Development Cost
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        {...register( 'Dev_Costs' )}
                        value={devCostsInput}
                        onChange={(e) => setdevCostsInput(e.target.value)}
                      />
                      {errors.Dev_Costs &&
                      <div className="text-red-600 font-semibold">
                        <span>Development cost is invalid</span>
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
                        Monthly Costs
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        {...register( 'Monthly_Cost' )}
                        value={monthlyCostsInput}
                        onChange={(e) => setmonthlyCostsInput(e.target.value)}
                      />
                      {errors.Monthly_Cost &&
                      <div className="text-red-600 font-semibold">
                        <span>Monthly cost is invalid</span>
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
                        Project Manager
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        {...register( 'Project_Manager' )}
                        value={projectManagerInput}
                        onChange={(e) => setprojectManagerInput(e.target.value)}
                      />
                      {errors.Project_Manager &&
                      <div className="text-red-600 font-semibold">
                        <span>Project manager is invalid</span>
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
                        Project Name
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        {...register( 'Project_Name' )}
                        value={projectNameInput}
                        onChange={(e) => setprojectNameInput(e.target.value)}
                      />
                      {errors.Project_Name &&
                      <div className="text-red-600 font-semibold">
                        <span>Project is invalid</span>
                      </div>
                      }
                    </div>
                  </div>
                </div>

                <hr className="mt-6 border-b-1 border-blueGray-300" />

                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                  Project Details
                </h6>
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-12/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Project Details
                      </label>
                      <textarea
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        rows="4"
                        {...register( 'First_Name' )}
                        value={firstNameInput}
                        onChange={(e) => setfirstNameInput(e.target.value)}
                      ></textarea>
                      {errors.First_Name &&
                      <div className="text-red-600 font-semibold">
                        <span>First name is invalid</span>
                      </div>
                      }
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
