import React from "react";
import { getSession } from "next-auth/react";
import useSWR from 'swr';
import axios from 'axios';
import Admin from "../../../layouts/Admin.js";
import CardLineChart from "../../../components/Cards/Charts/LineChartCard";
import CardBarChart from "../../../components/Cards/Charts/BarChartCard";
import CardPageVisits from "../../../components/Cards/Stat/PageVisitsCard";
import CardSocialTraffic from "../../../components/Cards/Stat/SocialTrafficCard";
import Blog from "../../../Models/Blog.js";
import PortfolioProject from "../../../Models/PortfolioProject.js";
import UnregUser from "../../../Models/UnregUser.js";

const fetcher = url => axios.get(url).then(res => res.data)

export default function Dashboard({ allBlogs, portProjects, leads }) {
  const { data: BlogsData, error:BlogsLoadError } = useSWR('http://localhost:3000/api/blog', fetcher)
  const { data: PortProjectsData, error:PortProjectsLoadError } = useSWR('http://localhost:3000/api/portfolio', fetcher)
  const { data: LeadsData, error:LeadsLoadError } = useSWR('http://localhost:3000/api/auth/users', fetcher)

  const PortProjects = PortProjectsData?.allPortProjects
  const Blogs = BlogsData?.allBlogs
  const Leads = LeadsData?.unregistered

  if (BlogsLoadError || PortProjectsLoadError || LeadsLoadError) return <div>failed to load</div>
  if (!BlogsData || !PortProjectsData || !LeadsData) return <div>loading...</div>

  return (
    <Admin blogs={ Blogs } portfolios={PortProjects} leads={Leads} >
      <h1>Sales</h1>
      <div className="flex flex-wrap">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardLineChart />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardBarChart />
        </div>
      </div>
      <div className="flex flex-wrap mt-4">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardPageVisits />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardSocialTraffic />
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

