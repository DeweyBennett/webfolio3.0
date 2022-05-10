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

export default function Dashboard({ session }) {
  const { data: Blogs, error:BlogsLoadError } = useSWR('http://localhost:3000/api/blog', fetcher)
  const { data: PortProjects, error:PortProjectsLoadError } = useSWR('http://localhost:3000/api/portfolio', fetcher)
  const { data: LeadsData, error:LeadsLoadError } = useSWR('http://localhost:3000/api/auth/users/', fetcher)
  const Leads = LeadsData.unregistered
  console.log("Leads", Leads)

  if (BlogsLoadError || PortProjectsLoadError || LeadsLoadError) return <div>failed to load</div>
  if (!Blogs || !PortProjects || !LeadsData) return <div>loading...</div>

  return (
    <Admin blogs={ Blogs } portfolios={PortProjects} leads={Leads} >
      <h1>Analytics</h1>
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


  
    return {
      props: {
        allBlogs: blogData,
        portProjects: portData,
        leads: userData
      }
    }
  }
}
