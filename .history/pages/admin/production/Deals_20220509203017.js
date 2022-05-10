import React from "react";
import { getSession } from "next-auth/react";
import useSWR from 'swr';
import axios from 'axios';
import ClosedDealTable from "../../../components/Cards/Tables/ClosedDealsTable.js";
import OpenDealsTable from "../../../components/Cards/Tables/OpenDealsTable.js";
import Admin from "../../../layouts/Admin.js";

const fetcher = url => axios.get(url).then(res => res.data)

export default function Tables({ session }) {
  const { data: BlogsData, error: BlogsLoadError } = useSWR('/api/blog', fetcher)
  const { data: PortProjectsData, error: PortProjectsLoadError } = useSWR('/api/portfolio', fetcher)
  const { data: LeadsData, error: LeadsLoadError } = useSWR('/api/auth/users', fetcher)
  const { data: DealsData, error: DealsLoadError } = useSWR('/api/deals', fetcher)
  
  const PortProjects = PortProjectsData?.allPortProjects
  const Blogs = BlogsData?.allBlogs
  const Leads = LeadsData?.unregistered
  const Deals = DealsData?.allDeals
 

  if (BlogsLoadError || PortProjectsLoadError || LeadsLoadError || DealsLoadError) return <div>failed to load</div>
  if (!BlogsData || !PortProjectsData || !LeadsData || !DealsData) return <div>loading...</div>

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