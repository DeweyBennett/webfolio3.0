import React, { useState } from "react";
import axios from "axios";
import { HiCheckCircle } from "react-icons/hi";
import IndexNavbar from "../components/Navbars/IndexNavbar";

export default function Landing({ portProjects }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [role, setRole] = useState("Unregistered User");

  const config = {
    headers: {
        'Content-Type': 'multipart/form-data'
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if ( firstName === "" ){
      alert("Please enter first name")
    }
    if ( lastName === "" ){
      alert("Please enter first name")
    }
    if ( email === "" ){
      alert("Please enter first name")
    }
    if ( message === "" ){
      alert("Please enter first name")
    }

    const data = await axios.post(`/api/messaging/contactForm`, { firstName, lastName, email, message, role }, config).then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });;

    setFirstName("");
    setLastName("");
    setEmail("");
    setMessage("");
  }

  return (
    <>
      <IndexNavbar portProjects={portProjects} />
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="text-white font-semibold text-5xl">
                    Dewey Bennett Development
                  </h1>
                  <p className="mt-4 text-lg text-gray-400">
                    Ready to get started? Fill out the contact below and I will get back to you. I am excited to work with you and I look forward to hearing from you soon.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-16"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>

        <section className="pb-20 bg-blueGray-200 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg min-h-[370px]">
                  <div className="px-4 pt-5">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                      <i className="fas fa-award"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Package One</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                        Best for event pages, blogs, or freelancers that just want to collect contact information.
                    </p>
                  </div>
                  <ul className="w-[70%] h-full justify-self-start self-end">
                    <li>
                      <div className="flex items-center">
                        <HiCheckCircle className="text-green-500 mr-1 text-lg" />
                        <p>1-3 Pages</p>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center">
                        <HiCheckCircle className="text-green-500 mr-1 text-lg" />
                        <p>Contact Form With Email</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg min-h-[370px]">
                  <div className="px-4 pt-5">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                      <i className="fas fa-retweet"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Package Two</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Best for small businesses that would like to take a hands on approach to maintaining their application.
                    </p>
                  </div>
                  <ul className="w-[70%] h-full justify-self-start self-end">
                    <li>
                      <div className="flex items-center">
                        <HiCheckCircle className="text-green-500 mr-1 text-lg" />
                        <p>Unlimited Page Count</p>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center">
                        <HiCheckCircle className="text-green-500 mr-1 text-lg" />
                        <p>Customizable Functionality</p>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center">
                        <HiCheckCircle className="text-green-500 mr-1 text-lg" />
                        <p>Admin Dashboard</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full shadow-lg rounded-lg min-h-[370px]">
                  <div className="px-4 pt-5">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                      <i className="fas fa-fingerprint"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Package Three</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                        It&apos;s like having a dedicated development department for less than the cost of a part-time employee.
                    </p>
                  </div>
                  <ul className="w-[70%] h-full justify-self-start self-end">
                    <li>
                      <div className="flex items-center">
                        <HiCheckCircle className="text-green-500 mr-1 text-lg" />
                        <p>Package Two</p>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center">
                        <HiCheckCircle className="text-green-500 mr-1 text-lg" />
                        <p>Google Analytics</p>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center">
                        <HiCheckCircle className="text-green-500 mr-1 text-lg" />
                        <p>Emergency Maintenance</p>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center">
                        <HiCheckCircle className="text-green-500 mr-1 text-lg" />
                        <p>Monthly Updates</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-20">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-white fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>

        <section className="pb-20 relative block bg-blueGray-800">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-800 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

        </section>
        <section className="relative block py-24 mt-64 lg:pt-0 bg-blueGray-800">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200">
                  <div className="flex-auto p-5 lg:p-10">
                    <h4 className="text-2xl font-semibold">
                      Want to work with us?
                    </h4>
                    <p className="leading-relaxed mt-1 mb-4 text-blueGray-500">
                      Complete this form and we will get back to you in 24
                      hours.
                    </p>
                    <div className="relative flex space-x-4 w-full mb-3 mt-8">
                      <div className="w-full">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="full-name"
                        >
                          First Name
                        </label>
                        <input
                          type="text"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          placeholder="Full Name"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                        />
                      </div>
                      <div className="w-full">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="full-name"
                        >
                          Last Name
                        </label>
                        <input
                          type="text"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          placeholder="Full Name"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="message"
                      >
                        Message
                      </label>
                      <textarea
                        rows="4"
                        cols="80"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Type a message..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      />
                    </div>
                    <div className="text-center mt-6">
                      <button
                        className="bg-gray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={handleSubmit}
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}


export async function getServerSideProps(context) {

  const portRes = await axios.get(`${process.env.DEV_BASE_URL}/api/portfolio`);
  console.log()
  const portData = await portRes.json();

  return {
    props: {
      portProjects: portData.allPortProjects,
    }
  }
}