import React from "react";
import { getSession } from "next-auth/react";
import useSWR from 'swr';
import axios from 'axios';
import ContactsTable from "../../../components/Cards/Tables/ContactsTable";
import MessagesTable from "../../../components/Cards/Tables/MessagesTable";
import Admin from "../../../layouts/Admin.js";
import Blog from "../../../Models/Blog";
import PortfolioProject from "../../../Models/PortfolioProject";
import UnregUser from "../../../Models/UnregUser";
import RegUser from "../../../Models/RegUser";
import CFMessage from "../../../Models/Message";


export default function CommunicationsTables({ contactMessages, registeredUsers, unregisteredUsers, allBlogs, portProjects, }) {
  const Blogs = JSON.parse(allBlogs)
  const PortProjects = JSON.parse(portProjects)
  const Leads = JSON.parse(unregisteredUsers)
  const RegisteredUsers = JSON.parse(registeredUsers)
  const Messages = JSON.parse(contactMessages)

  return (
    <Admin blogs={ Blogs } portfolios={PortProjects} leads={Leads} >
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <MessagesTable color="light" messages={Messages} />
        </div>
        <div className="w-full mb-12 px-4">
          <ContactsTable color="light" contacts={RegisteredUsers} />
        </div>
        <div className="w-full mb-12 px-4">
          <ContactsTable color="light" contacts={Leads} />
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
  
    const uUserRes = await UnregUser.find({});
    const uUserData = JSON.stringify(uUserRes);

    const rUserRes = await RegUser.find({});
    const rUserData = JSON.stringify(rUserRes);

    const messRes = await CFMessage.find({});
    const messData = JSON.stringify(messRes);


  
    return {
      props: {
        allBlogs: blogData,
        portProjects: portData,
        registeredUsers: rUserData,
        unregisteredUsers: uUserData,
        contactMessages: messData,
      }
    }
  }
}