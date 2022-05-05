import React from "react";
import ClosedTicketsTable from "../../../components/Cards/Tables/ClosedTicketsTable";
import OpenTicketsTable from "../../../components/Cards/Tables/OpenTicketsTable";
import Admin from "../../../layouts/Admin.js";

export default function ServiceTickets({ dealData, allBlogs, portfolios, leads }) {
  return (
    <Admin blogs={ allBlogs } portfolios={portfolios} leads={leads} >
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <OpenTicketsTable color="light" />
        </div>
        <div className="w-full mb-12 px-4">
          <ClosedTicketsTable color="light" />
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