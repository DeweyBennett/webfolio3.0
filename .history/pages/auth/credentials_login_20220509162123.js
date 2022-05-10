import React, { useState } from "react";
import { signIn, useSession } from "next-auth/react";
import IndexNavbar from '../../components/Navbars/IndexNavbar'

export default function Login({ portProjects }) {
  const {data: session} = useSession();
  console.log("login session", session)
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const handleSubmit = async () => {
    if (emailInput === ""){
      alert("Email and password required")
    }
    if (passwordInput === ""){
      alert("Email and password required")
    }

    signIn("credentials", { email: emailInput, password: passwordInput, callbackUrl: '/admin/dashboards/homeDashboard' });
  }

  return (
    <div className='bg-[#040C18] box-border m-0 p-0 scroll-smooth'>
      <IndexNavbar portProjects={portProjects} />
      <div className="container mx-auto px-4 min-h-[100vh]">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-4/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full my-40 shadow-lg rounded-lg bg-gray-400 border-0">
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <div className="text-center mb-3 font-bold">
                  <h1 className="text-3xl font-bold text-white mb-2 py-2">Sign In</h1>
                </div>
                <form method="post" action="/api/auth/callback/credentials">
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
                      placeholder="Email"
                      value={emailInput}
                      onChange={(e) => setEmailInput(e.target.value)}
                    />
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
                      placeholder="Password"
                      value={passwordInput}
                      onChange={(e) => setPasswordInput(e.target.value)}
                    />
                  </div>
                  {/* <p onClick={() => router.push('/auth/register')} className="hover:text-blue-800 cursor-pointer">Register new account</p> */}
                  <div className="text-center mt-6">
                    <button
                      onClick={handleSubmit}
                      className="text-[#040C18] px-2 py-4 w-[50%] mx-auto mt-4 rounded-full text-lg font-bold bg-gradient-to-r from-[#AE67FA] to-[#F49867] hover:bg-gradient-to-l hover:from-[#AE67FA] hover:to-[#F49867]"
                      type="button"
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

  const portRes = await fetch(`${process.env.BASE_URL}/api/portfolio`);
  const portData = await portRes.json();

  return {
    props: {
      portProjects: portData.allPortProjects,
    }
  }
}