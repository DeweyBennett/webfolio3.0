import React, { useState } from "react";
import { getSession } from "next-auth/react";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import useSWR from 'swr';
import axios from 'axios';
import * as yup from 'yup';
import IndexNavbar from '../../components/Navbars/IndexNavbar';

const fetcher = url => axios.get(url).then(res => res.data)

export default function Register({ session }) {
  const { data: PortProjects, error:PortProjectsLoadError } = useSWR('/api/portfolio', fetcher)

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
  const [passwordInput, setpasswordInput] = useState('')
  const [role, setRole] = useState("Registered User");

  const validationSchema = yup.object().shape({
    First_Name: yup.string().required().matches(/[\w][^script | img | onError | src][^<>="'?&$]/),
    Last_Name: yup.string().required().matches(/[\w][^script | img | onError | src][^<>="'?&$]/),
    Organization: yup.string(),
    Job_Title: yup.string(),
    Email: yup.string().required().email(),
    Phone_Number: yup.string().required(),
    Street_Address: yup.string(),
    City: yup.string(),
    State: yup.string().max(2),
    Zip_Code: yup.number().min(5).max(5),
    Password: yup.string().required().min(8).max(12),
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
  //   const data = await axios.post(`/api/auth/register`, { firstName: firstNameInput, lastName: lastNameInput, organization: organizationInput, jobTitle: jobTitleInput, email: emailInput, phoneNumber: phoneNumberInput, streetAddress: streetAddressInput, city: cityInput, state: stateInput, zipCode: zipCodeInput, password: passwordInput, role }, config).then(function (response) {
  //     console.log(response);
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });;

  //   setfirstNameInput('');
  //   setlastNameInput('');
  //   setorganizationInput('');
  //   setjobTitleInput('');
  //   setemailInput('');
  //   setphoneNumberInput('');
  //   setstreetAddressInput('')
  //   setcityInput('');
  //   setstateInput('');
  //   setzipCodeInput('');
  //   setpasswordInput('');
  }

  if (PortProjectsLoadError) return <div>failed to load</div>
  if (!PortProjects) return <div>loading...</div>

  return (
    <div className='bg-[#040C18] box-border m-0 p-0 scroll-smooth'>
      <IndexNavbar portProjects={PortProjects.allPortProjects} />
      <div className="container mx-auto px-4 min-h-[100vh]">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-6/12 my-24 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full my-20 shadow-lg rounded-lg bg-gray-400 border-0">
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <div className="text-blueGray-400 text-center mb-3 font-bold">
                  <h1 className="text-3xl font-bold text-white mb-2 py-2">Register</h1>
                </div>
                <form onSubmit={handleSubmit(submitValidData)} className="">
                  <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                    User Information
                  </h6>
                  <div className="flex space-x-2">
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
                        title="Explains patter requirement"
                        value={firstNameInput}
                        onChange={(e) => setfirstNameInput(e.target.value)}
                      />
                      {errors.First_Name &&
                      <div className="text-red-600 font-semibold">
                        <span>{errors.First_Name.message}</span>
                      </div>
                    }
                    </div>
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
                        title="Explains patter requirement"
                        value={lastNameInput}
                        onChange={(e) => setlastNameInput(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="flex space-x-2">
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
                        title="Explains patter requirement"
                        value={organizationInput}
                        onChange={(e) => setorganizationInput(e.target.value)}
                        placeholder="Optional"
                      />
                    </div>
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
                        title="Explains patter requirement"
                        value={jobTitleInput}
                        onChange={(e) => setjobTitleInput(e.target.value)}
                        placeholder="Optional"
                      />
                    </div>
                  </div>
                  <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                  Contact Information
                </h6>
                  <div className="flex space-x-2">
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
                        title="Explains patter requirement"
                        value={emailInput}
                        onChange={(e) => setemailInput(e.target.value)}
                      />
                    </div>
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
                        title="Explains patter requirement"
                        value={phoneNumberInput}
                        onChange={(e) => setphoneNumberInput(e.target.value)}
                      />
                    </div>
                  </div>

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
                      title="Explains patter requirement"
                      value={streetAddressInput}
                      onChange={(e) => setstreetAddressInput(e.target.value)}
                      placeholder="Optional"
                    />
                  </div>
                  <div className="flex space-x-2">
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
                        title="Explains patter requirement"
                        value={cityInput}
                        onChange={(e) => setcityInput(e.target.value)}
                        placeholder="Optional"
                      />
                    </div>
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
                        title="Explains patter requirement"
                        value={stateInput}
                        onChange={(e) => setstateInput(e.target.value)}
                        placeholder="Optional"
                      />
                    </div>
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
                        title="Explains patter requirement"
                        value={zipCodeInput}
                        onChange={(e) => setzipCodeInput(e.target.value)}
                        placeholder="Optional"
                      />
                    </div>
                  </div>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      {...register( 'Password' )}
                      title="Explains patter requirement"
                      value={passwordInput}
                      onChange={(e) => setpasswordInput(e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        id="customCheckLogin"
                        type="checkbox"
                        className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                      />
                      <span className="ml-2 text-sm font-semibold text-blueGray-600">
                        I agree with the{" "}
                        <a
                          href="#pablo"
                          className="text-lightBlue-500"
                          onClick={(e) => e.preventDefault()}
                        >
                          Privacy Policy
                        </a>
                      </span>
                    </label>
                  </div>

                  <div className="text-center mt-6">
                    <button
                      className="text-[#040C18] px-2 py-4 w-[50%] mx-auto mt-4 rounded-full text-lg font-bold bg-gradient-to-r from-[#AE67FA] to-[#F49867] hover:bg-gradient-to-l hover:from-[#AE67FA] hover:to-[#F49867]"
                      type="submit"
                    >
                      Create Account
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export async function getServerSideProps(context) {

  return {
    props: {
      session: await getSession(context),
    }
  }
}