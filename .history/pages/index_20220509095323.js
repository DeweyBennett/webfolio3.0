import { getSession, useSession } from 'next-auth/react';
import useSWR from 'swr'
import axios from 'axios'
import Cta from '../components/Cards/CtaLongCard';
import IndexHeader from '../components/Headers/IndexHeader';
import IndexNavbar from '../components/Navbars/IndexNavbar';
import BlogSection from '../components/Sections/BlogSection';
import PortfolioProject from '../Models/PortfolioProject';

const fetcher = (...args) => axios.get(...args).then(res => res.data)

export default function Home({ session, allBlogs, portProjects }) {
  // const Blogs = JSON.parse(allBlogs)
  const PortProjects = JSON.parse(portProjects)
  
  const { data, error } = useSWR('http://localhost:3000/api/blog', fetcher('http://localhost:3000/api/blog'))
  // const { data: PortProjects, error: PortProjectsLoadError } = useSWR('portfolioData', fetcher('http://localhost:3000/api/portfolio'))
  console.log(data)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>


  return (
    <div className='bg-[#040C18] box-border m-0 p-0 scroll-smooth'>
      <div className='bg-gradient-to-tl from-[#002853] to-[#040c18]'>
        <IndexNavbar portProjects={PortProjects} />
        <IndexHeader />
      </div>
      <div className="container mx-auto overflow-hidden pb-20">
          <div className="flex flex-wrap items-center pt-32">
            <div className="w-full md:w-6/12 px-4 mr-auto ml-auto mt-32">
              <div className="justify-center flex flex-wrap relative">
                <div className="my-4 w-full lg:w-6/12 px-4">
                  <a
                    href="https://www.creative-tim.com/learning-lab/tailwind/svelte/alerts/notus?ref=vtw-index"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="bg-red-600 shadow-lg rounded-lg text-center p-8">
                      <img
                        alt="..."
                        className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                        src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/svelte.jpg"
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                        Svelte
                      </p>
                    </div>
                  </a>
                  <a
                    href="https://www.creative-tim.com/learning-lab/tailwind/react/alerts/notus?ref=vtw-index"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="bg-blue-300 shadow-lg rounded-lg text-center p-8 mt-8">
                      <img
                        alt="..."
                        className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                        src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/react.jpg"
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                        ReactJS
                      </p>
                    </div>
                  </a>
                  <a
                    href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/alerts/notus?ref=vtw-index"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="bg-gray-700 shadow-lg rounded-lg text-center p-8 mt-8">
                      <img
                        alt="..."
                        className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                        src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/nextjs.jpg"
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                        NextJS
                      </p>
                    </div>
                  </a>
                </div>
                <div className="my-4 w-full lg:w-6/12 px-4 lg:mt-16">
                  <a
                    href="https://www.creative-tim.com/learning-lab/tailwind/js/alerts/notus?ref=vtw-index"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="bg-yellow-500 shadow-lg rounded-lg text-center p-8">
                      <img
                        alt="..."
                        className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                        src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/js.png"
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                        JavaScript
                      </p>
                    </div>
                  </a>
                  <a
                    href="https://www.creative-tim.com/learning-lab/tailwind/angular/alerts/notus?ref=vtw-index"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="bg-red-700 shadow-lg rounded-lg text-center p-8 mt-8">
                      <img
                        alt="..."
                        className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                        src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/angular.jpg"
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                        Angular
                      </p>
                    </div>
                  </a>
                  <a
                    href="https://www.creative-tim.com/learning-lab/tailwind/vue/alerts/notus?ref=vtw-index"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="bg-emerald-500 shadow-lg rounded-lg text-center p-8 mt-8">
                      <img
                        alt="..."
                        className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                        src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/vue.jpg"
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                        Vue.js
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
              <div className="text-[#002853] p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <i className="fas fa-drafting-compass text-xl"></i>
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal text-white">
                Modern Design
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-400">
                In order to create a great User Experience, I use the latest technologies to create the front-end design. 
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 pb-32 pt-48">
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
              <div className="md:pr-12">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i className="fas fa-file-alt text-xl"></i>
                </div>
                <h3 className="text-3xl font-semibold text-white">
                  Full-Stack Web Development
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-gray-400">
                  With the rise of ecommerce, it is not enough to have just a static website that just displays information. It&apos;s important to have the capabilities to complete transactions and track your performance. 
                </p>
              </div>
            </div>

            <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
              <img
                alt="..."
                className="max-w-full rounded-lg shadow-xl"
                style={{
                  transform:
                    "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)",
                }}
                src="/images/documentation.jpg"
              />
            </div>
          </div>
        </div>
      <div>
        <BlogSection blogs={Blogs} />
      </div>
      <Cta />
    </div>
  )
}


export async function getServerSideProps(context) {

  // const blogRes = await Blog.find({});
  // const blogData = JSON.stringify(blogRes)

  const portRes = await PortfolioProject.find({});
  const portData =  JSON.stringify(portRes)

  return {
    props: {
      session: await getSession(context),
      // allBlogs: blogData,
      portProjects: portData,
    }
  }
}