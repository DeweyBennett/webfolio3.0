import React from "react";
import { getSession } from "next-auth/react";
import useSWR from 'swr';
import axios from 'axios';
import ClosedProjectsTable from "../../../components/Cards/Tables/ClosedProjectsTable";
import OpenProjectsTable from "../../../components/Cards/Tables/OpenProjectsTable";
import Admin from "../../../layouts/Admin.js";

const fetcher = url => axios.get(url).then(res => res.data)

export default function Tables({ session }) {
  const { data: BlogsData, error: BlogsLoadError } = useSWR('http://localhost:3000/api/blog', fetcher)
  const { data: PortProjectsData, error: PortProjectsLoadError } = useSWR('http://localhost:3000/api/portfolio', fetcher)
  const { data: LeadsData, error: LeadsLoadError } = useSWR('http://localhost:3000/api/auth/users', fetcher)
  const { data: DealsData, error: DealsLoadError } = useSWR('http://localhost:3000/api/deals', fetcher)
  
  const PortProjects = PortProjectsData?.allPortProjects
  const Blogs = BlogsData?.allBlogs
  const Leads = LeadsData?.unregistered
  const Deals = DealsData
  console.log("Deald", DealsData)
 

  if (BlogsLoadError || PortProjectsLoadError || LeadsLoadError || DealsData) return <div>failed to load</div>
  if (!BlogsData || !PortProjectsData || !LeadsData || DealsLoadError) return <div>loading...</div>

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