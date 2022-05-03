import React from "react";
import ClosedDealTable from "../../../components/Cards/Tables/ClosedDealsTable.js";
import OpenDealsTable from "../../../components/Cards/Tables/OpenDealsTable.js";
import Admin from "../../../layouts/Admin.js";

export default function Tables({ dealData, allBlogs, portfolios, leads }) {
  console.log("From deals tab", dealData)
  return (
    <Admin blogs={ allBlogs } portfolios={portfolios} leads={leads} >
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <OpenDealsTable color="light" deals={dealData} />
        </div>
        <div className="w-full mb-12 px-4">
          <ClosedDealTable color="light" deals={dealData} />
        </div>
      </div>
    </Admin>
  );
}


export async function getServerSideProps(context) {

  const dealRes = await fetch(`http://localhost:3000/api/deals`);
  const dealData = await dealRes.json();

  const blogRes = await fetch(`http://localhost:3000/api/blog`);
  const blogData = await blogRes.json();

  const portRes = await fetch(`http://localhost:3000/api/portfolio`);
  const portData = await portRes.json();

  const userRes = await fetch(`http://localhost:3000/api/auth/users`);
  const userData = await userRes.json();

  return {
    props: {
      dealData: dealData.allDeals,
      allBlogs: blogData.allBlogs,
      portfolios: portData.allPortProjects,
      leads: userData.unregistered
    }
  }
}