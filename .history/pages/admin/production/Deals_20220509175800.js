import React from "react";
import { getSession } from "next-auth/react";
import useSWR from 'swr';
import axios from 'axios';
import ClosedDealTable from "../../../components/Cards/Tables/ClosedDealsTable.js";
import OpenDealsTable from "../../../components/Cards/Tables/OpenDealsTable.js";
import Admin from "../../../layouts/Admin.js";
import Blog from "../../../Models/Blog.js";
import PortfolioProject from "../../../Models/PortfolioProject.js";
import UnregUser from "../../../Models/UnregUser.js";
import Deal from "../../../Models/Deal.js";

const fetcher = url => axios.get(url).then(res => res.data)

export default function Tables({ session }) {
  const { data: BlogsData, error:BlogsLoadError } = useSWR('http://localhost:3000/api/blog', fetcher)
  const { data: PortProjectsData, error:PortProjectsLoadError } = useSWR('http://localhost:3000/api/portfolio', fetcher)
  const { data: LeadsData, error:LeadsLoadError } = useSWR('http://localhost:3000/api/auth/users', fetcher)
  const { data: MessagesData, error:MessagesLoadError } = useSWR('http://localhost:3000/api/messaging/contactForm', fetcher)
  
  const PortProjects = PortProjectsData?.allPortProjects
  const Blogs = BlogsData?.allBlogs
  const Leads = LeadsData?.unregistered
  const Messages = MessagesData
 

  if (BlogsLoadError || PortProjectsLoadError || LeadsLoadError || MessagesLoadError) return <div>failed to load</div>
  if (!BlogsData || !PortProjectsData || !LeadsData || MessagesData) return <div>loading...</div>

  return (
    <Admin blogs={ Blogs } portfolios={PortProjects} leads={Leads} >
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <OpenDealsTable color="light" deals={Deals} />
        </div>
        <div className="w-full mb-12 px-4">
          <ClosedDealTable color="light" deals={Deals} />
        </div>
      </div>
    </Admin>
  );
}


export async function getServerSideProps(context) {
  const session = await getSession(context);

  console.log("Dash session", session)

  if ( !session ) {
    return {
      redirect: {
        destination: `${process.env.BASE_URL}`,
        permanent: false,
      },
    }
  } else {
    const blogRes = await Blog.find({});
    const blogData = JSON.stringify(blogRes)

    const portRes = await PortfolioProject.find({});
    const portData =  JSON.stringify(portRes)
  
    const userRes = await UnregUser.find({});
    const userData = JSON.stringify(userRes)

    const dealRes = await Deal.find({});
    const dealData = JSON.stringify(dealRes);


  
    return {
      props: {
        allBlogs: blogData,
        portProjects: portData,
        leads: userData,
        dealData: dealData
      }
    }
  }
}