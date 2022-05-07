import React from "react";
import Admin from "../../../layouts/Admin.js";
import CardLineChart from "../../../components/Cards/Charts/LineChartCard";
import CardBarChart from "../../../components/Cards/Charts/BarChartCard";
import CardPageVisits from "../../../components/Cards/Stat/PageVisitsCard";
import CardSocialTraffic from "../../../components/Cards/Stat/SocialTrafficCard";
import { getSession, useSession } from "next-auth/react";


export default function Dashboard({ allBlogs, portProjects, leads }) {
  const Blogs = JSON.parse(allBlogs)
  const PortProjects = JSON.parse(portProjects)
  const Leads = JSON.parse(leads)

  return (
    <Admin blogs={ Blogs } portfolios={PortProjects} leads={leads} >
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
    const userData = await userRes.json();


  
    return {
      props: {
        allBlogs: blogData,
        portProjects: portData,
        leads: userData
      }
    }
  }
}
