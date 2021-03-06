import React from "react";
import { getSession } from "next-auth/react";
import useSWR from 'swr';
import axios from 'axios';
import ClosedProjectsTable from "../../../components/Cards/Tables/ClosedProjectsTable";
import OpenProjectsTable from "../../../components/Cards/Tables/OpenProjectsTable";
import Admin from "../../../layouts/Admin.js";
import { getSession, useSession } from "next-auth/react";
import Blog from "../../../Models/Blog.js";
import PortfolioProject from "../../../Models/PortfolioProject.js";
import UnregUser from "../../../Models/UnregUser.js";
import Deal from "../../../Models/Deal";

export default function Tables({ dealData, allBlogs, portProjects, leads }) {
  const Blogs = JSON.parse(allBlogs)
  const PortProjects = JSON.parse(portProjects)
  const Leads = JSON.parse(leads)
  const Deals = JSON.parse(dealData)

  return (
    <Admin blogs={ Blogs } portfolios={PortProjects} leads={Leads} >
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <OpenProjectsTable color="light"  deals={Deals} />
        </div>
        <div className="w-full mb-12 px-4">
          <ClosedProjectsTable color="light"  deals={Deals} />
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