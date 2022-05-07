import React from "react";
import ClosedDealTable from "../../../components/Cards/Tables/ClosedDealsTable.js";
import OpenDealsTable from "../../../components/Cards/Tables/OpenDealsTable.js";
import Admin from "../../../layouts/Admin.js";
import { getSession, useSession } from "next-auth/react";


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
  const session = await getSession(context);

  console.log("Dash session", session)

  if ( !session ) {
    return {
      redirect: {
        destination: `${process.env.DEV_BASE_URL}`,
        permanent: false,
      },
    }
  } else {
    const blogRes = await fetch(`${process.env.DEV_BASE_URL}/api/blog`);
    const blogData = await blogRes.json();
  
    const portRes = await fetch(`${process.env.DEV_BASE_URL}/api/portfolio`);
    const portData = await portRes.json();
  
    const userRes = await fetch(`${process.env.DEV_BASE_URL}/api/auth/users`);
    const userData = await userRes.json();

    const dealRes = await fetch(`${process.env.DEV_BASE_URL}/api/deals`);
    const dealData = await dealRes.json();


  
    return {
      props: {
        allBlogs: blogData.allBlogs,
        portfolios: portData.allPortProjects,
        leads: userData.unregistered,
        dealData: dealData.allDeals,
      }
    }
  }
}