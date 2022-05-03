import React from "react";
import FooterAdmin from "../components/Footers/AdminFooter";
import HeaderStats from "../components/Headers/StatsHeader";
import AdminNavbar from "../components/Navbars/AdminNavbar";
import Sidebar from "../components/Sidebar/Sidebar";


export default function Admin({ children, blogs, portfolios, leads }) {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-[#040C18]">
        <AdminNavbar />
        {/* Header */}
        <HeaderStats blogs={blogs} portfolios={portfolios} leads={leads} />
        <div className="px-4 py-4 md:px-10 mx-auto w-full -m-24">
          {children}
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
