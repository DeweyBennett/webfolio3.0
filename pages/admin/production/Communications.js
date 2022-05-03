import React from "react";
import ContactsTable from "../../../components/Cards/Tables/ContactsTable";
import MessagesTable from "../../../components/Cards/Tables/MessagesTable";
import Admin from "../../../layouts/Admin.js";

export default function CommunicationsTables({ contactMessages, registeredUsers, unregisteredUsers, allBlogs, portfolios, }) {
  return (
    <Admin blogs={ allBlogs } portfolios={portfolios} leads={unregisteredUsers} >
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <MessagesTable color="light" messages={contactMessages} />
        </div>
        <div className="w-full mb-12 px-4">
          <ContactsTable color="light" contacts={registeredUsers} />
        </div>
        <div className="w-full mb-12 px-4">
          <ContactsTable color="light" contacts={unregisteredUsers} />
        </div>
      </div>
    </Admin>
  );
}


export async function getServerSideProps(context) {

  const userRes = await fetch(`http://localhost:3000/api/auth/users`);
  const userData = await userRes.json();

  const messRes = await fetch(`http://localhost:3000/api/messaging/contactForm`);
  const messData = await messRes.json();

  const blogRes = await fetch(`http://localhost:3000/api/blog`);
  const blogData = await blogRes.json();

  const portRes = await fetch(`http://localhost:3000/api/portfolio`);
  const portData = await portRes.json();
  
  console.log(userData.registered, userData.unregistered, messData)

  return {
    props: {
      contactMessages: messData,
      registeredUsers: userData.registered,
      unregisteredUsers: userData.unregistered,
      allBlogs: blogData.allBlogs,
      portfolios: portData.allPortProjects,
    }
  }
}