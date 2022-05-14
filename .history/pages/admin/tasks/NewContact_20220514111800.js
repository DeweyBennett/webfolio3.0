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

export default function NewContact({ session }) {
  const { data: BlogsData, error:BlogsLoadError } = useSWR('/api/blog', fetcher)
  const { data: PortProjectsData, error:PortProjectsLoadError } = useSWR('/api/portfolio', fetcher)
  const { data: LeadsData, error:LeadsLoadError } = useSWR('/api/auth/users', fetcher)

  const PortProjects = PortProjectsData?.allPortProjects
  const Blogs = BlogsData?.allBlogs
  const Leads = LeadsData?.unregistered

  const [firstNameInput, setfirstNameInput] = useState("");
  const [lastNameInput, setlastNameInput] = useState("");
  const [organizationInput, setorganizationInput] = useState("");
  const [jobTitleInput, setjobTitleInput] = useState("");
  const [emailInput, setemailInput] = useState("");
  const [phoneNumberInput, setphoneNumberInput] = useState("");
  const [streetAddressInput, setstreetAddressInput] = useState("");
  const [cityInput, setcityInput] = useState("");
  const [stateInput, setstateInput] = useState("");
  const [zipCodeInput, setzipCodeInput] = useState("");
  const [role, setRole] = useState("Unregistered User");
  const [notesInput, setnotesInput] = useState("");

  const validationSchema = yup.object().shape({
    First_Name: yup.string().required().matches(/[\w][^script | img | onError | src][^<>="'?&$]}/),
    Last_Name: yup.string().required().matches(/[\w][^script | img | onError | src][^<>="'?&$]/),
    Organization: yup.string().matches(/[\w][^script | img | onError | src][^<>="'?&$]/, { excludeEmptyString: true }),
    Job_Title: yup.string().matches(/[\w][^script | img | onError | src][^<>="'?&$]/, { excludeEmptyString: true }),
    Email: yup.string().email().matches(/[\w][^script | img | onError | src][^<>="'?&$]/),
    Phone_Number: yup.string().matches(/[\w][^script | img | onError | src][^<>="'?&$]/,),
    Street_Address: yup.string().matches(/[\w][^script | img | onError | src][^<>="'?&$]/, { excludeEmptyString: true }),
    City: yup.string().matches(/[\w][^script | img | onError | src][^<>="'?&$]/, { excludeEmptyString: true }),
    State: yup.string().max(2).matches(/[\w][^script | img | onError | src][^<>="'?&$]/, { excludeEmptyString: true }),
    Zip_Code: yup.string().max(5).matches(/[\0-9][^script | img | onError | src][^<>="'?&$]/, { excludeEmptyString: true }),
    Notes: yup.string().matches(/[\w][^script | img | onError | src][^<>="'?&$]/, { excludeEmptyString: true })
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
    // const data = await axios.post(`/api/auth/register`, { firstName: firstNameInput, lastName: lastNameInput, organization: organizationInput, jobTitle: jobTitleInput, email: emailInput, phoneNumber: phoneNumberInput, streetAddress: streetAddressInput, city: cityInput, state: stateInput, zipCode: zipCodeInput, role, notes: notesInput }, config).then(function (response) {
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });;

    // setfirstNameInput('');
    // setlastNameInput('');
    // setorganizationInput('');
    // setjobTitleInput('');
    // setemailInput('');
    // setphoneNumberInput('');
    // setstreetAddressInput('')
    // setcityInput('');
    // setstateInput('');
    // setzipCodeInput('');
    // setnotesInput('')
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
              </div>
            </div>
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <form onSubmit={handleSubmit(submitValidData)}>
                <button
                    className="bg-gray-700 active:bg-blueGray-600 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    type="submit"
                  >
                  Submit
                </button>
                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                  User Information
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
                        placeholder="Optional"
                      />
                      {errors.Organization &&
                      <div className="text-red-600 font-semibold">
                        <span>Organization in invalid</span>
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
                        Job Title
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        {...register( 'Job_Title' )}
                        value={jobTitleInput}
                        onChange={(e) => setjobTitleInput(e.target.value)}
                        placeholder="Optional"
                      />
                      {errors.Job_Title &&
                      <div className="text-red-600 font-semibold">
                        <span>Job title is invalid</span>
                      </div>
                      }
                    </div>
                  </div>
                </div>

                <hr className="mt-6 border-b-1 border-blueGray-300" />

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
                        Email
                      </label>
                      <input
                        type="emailInput"
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
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Phone Number
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        {...register( 'Phone_Number' )}
                        value={phoneNumberInput}
                        onChange={(e) => setphoneNumberInput(e.target.value)}
                      />
                      {errors.Phone_Number &&
                      <div className="text-red-600 font-semibold">
                        <span>Phone number is invalid</span>
                      </div>
                      }
                    </div>
                  </div>
                  <div className="w-full lg:w-12/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Street Address
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        {...register( 'Street_Address' )}
                        value={streetAddressInput}
                        onChange={(e) => setstreetAddressInput(e.target.value)}
                        placeholder="Optional"
                      />
                      {errors.Street_Address &&
                        <div className="text-red-600 font-semibold">
                          <span>Street address is invalid</span>
                        </div>
                      }
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        City
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        {...register( 'City' )}
                        value={cityInput}
                        onChange={(e) => setcityInput(e.target.value)}
                        placeholder="Optional"
                      />
                      {errors.City &&
                      <div className="text-red-600 font-semibold">
                        <span>City is invalid</span>
                      </div>
                      }
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        State
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        {...register( 'State' )}
                        title="Please use 2 digit state code"
                        value={stateInput}
                        onChange={(e) => setstateInput(e.target.value)}
                        placeholder="Optional"
                      />
                      {errors.State &&
                      <div className="text-red-600 font-semibold">
                        <span>Please use 2 digit state code</span>
                      </div>
                      }
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Zip Code
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        {...register( 'Zip_Code' )}
                        title="Please use 5 digit zip code"
                        value={zipCodeInput}
                        onChange={(e) => setzipCodeInput(e.target.value)}
                        placeholder="Optional"
                      />
                      {errors.Zip_Code &&
                      <div className="text-red-600 font-semibold">
                        <span>Please use 5 digit zip code</span>
                      </div>
                      }
                    </div>
                  </div>
                </div>

                <hr className="mt-6 border-b-1 border-blueGray-300" />

                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                  Additional Details
                </h6>
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-12/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Notes:
                      </label>
                      <textarea
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        rows="4"
                        {...register( 'Notes' )}
                        value={notesInput}
                        onChange={(e) => setnotesInput(e.target.value)}
                      ></textarea>
                      {errors.Notes &&
                        <div className="text-red-600 font-semibold">
                          <span>Notes are invalid</span>
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
