import React, { useState } from "react";
import { getSession, signIn } from "next-auth/react";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import useSWR from 'swr';
import axios from 'axios';
import * as yup from 'yup';
import IndexNavbar from '../../components/Navbars/IndexNavbar';

const fetcher = url => axios.get(url).then(res => res.data)

export default function Login({ session }) {
  const { data: PortProjects, error:PortProjectsLoadError } = useSWR('/api/portfolio', fetcher)

  const { register, handleSubmit, formState: { errors } } = useForm();
  console.log(errors)

  const [emailInput, setEmailInput] = useState("");
  const [emailInputError, setEmailInputError] = useState();
  const [passwordInput, setPasswordInput] = useState("");
  const [passwordInputError, setPasswordInputError] = useState("");

  const validateData = (d) => {
    console.log(d)

    //   signIn("credentials", { email: emailInput, password: passwordInput, callbackUrl: '/admin/dashboards/homeDashboard' });
  }

  if (PortProjectsLoadError) return <div>failed to load</div>
  if (!PortProjects) return <div>loading...</div>

  return (
    <div className='bg-[#040C18] box-border m-0 p-0 scroll-smooth'>
      <IndexNavbar portProjects={PortProjects.allPortProjects} />
      <div className="container mx-auto px-4 min-h-[100vh]">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-4/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full my-40 shadow-lg rounded-lg bg-gray-400 border-0">
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <div className="text-center mb-3 font-bold">
                  <h1 className="text-3xl font-bold text-white mb-2 py-2">Sign In</h1>
                </div>
                <form onSubmit={handleSubmit(validateData)}>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="Email"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Email"
                      {...register('Email', { 
                        required: {
                          value: true,
                          message: "Valid email is required"
                        },
                        pattern: {
                          // value: [a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$
                          // message: ""
                        }
                      })}
                      title="Explains patter requirement"
                      value={emailInput}
                      onChange={(e) => setEmailInput(e.target.value.trim())}
                    />
                    {errors.Email &&
                      <div className="text-red-600 font-semibold">
                        <span>{errors.Email.message}</span>
                      </div>
                    }
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="Password"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Password"
                      {...register('Password', { 
                        required: {
                          value: true,
                          message: "Password is required"
                        },
                        minLength: {
                          value: 8,
                          message: "Password is invalid",
                        },
                        pattern: {
                          // value: (?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}
                          // message: ""
                        }
                      })}
                      title="Explains patter requirement"
                      value={passwordInput}
                      onChange={(e) => setPasswordInput(e.target.value.trim())}
                    />
                    {errors.Password &&
                      <div className="text-red-600 font-semibold">
                        <span>{errors.Password.message}</span>
                      </div>
                    }
                  </div>
                  {/* <p onClick={() => router.push('/auth/register')} className="hover:text-blue-800 cursor-pointer">Register new account</p> */}
                  <div className="text-center mt-6">
                    <button
                      className="text-[#040C18] px-2 py-4 w-[50%] mx-auto mt-4 rounded-full text-lg font-bold bg-gradient-to-r from-[#AE67FA] to-[#F49867] hover:bg-gradient-to-l hover:from-[#AE67FA] hover:to-[#F49867]"
                      type="submit"
                    >
                      Submit
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