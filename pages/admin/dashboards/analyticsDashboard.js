import React from "react";
import Admin from "../../../layouts/Admin.js";
import CardLineChart from "../../../components/Cards/LineChartCard";
import CardBarChart from "../../../components/Cards/BarChartCard";
import CardPageVisits from "../../../components/Cards/PageVisitsCard";
import CardSocialTraffic from "../../../components/Cards/SocialTrafficCard";

export default function Dashboard({ allBlogs, portfolios, leads }) {
  return (
    <Admin blogs={ allBlogs } portfolios={portfolios} leads={leads} >
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

  const blogRes = await fetch(`http://localhost:3000/api/blog`);
  const blogData = await blogRes.json();

  const portRes = await fetch(`http://localhost:3000/api/portfolio`);
  const portData = await portRes.json();

  const userRes = await fetch(`http://localhost:3000/api/auth/users`);
  const userData = await userRes.json();
  
  console.log("Blog data from getServersideProps", blogData, portData)

  return {
    props: {
      allBlogs: blogData.allBlogs,
      portfolios: portData.allPortProjects,
      leads: userData.unregistered
    }
  }
}
