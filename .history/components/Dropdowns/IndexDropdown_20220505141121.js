import React, { useState } from "react";
import Link from "next/link";
import { createPopper } from "@popperjs/core";
import axios from "axios";
import PortfolioLink from "../Links/PortfolioLink";
import { getSession, useSession } from "next-auth/react";

const IndexDropdown = ({ portProjects }) => {
  const session = useSession();
  console.log("Dash session", session)

  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();

  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };

  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };

  return (
    <>
      <a
        className="hover:text-gray-200 text-gray-500 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
        href="#pablo"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        Demo Pages
      </a>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-[300px]"
        }
      >
      {session && 
      <></>
        <span
          className={
            "text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400"
          }
        >
          Admin Layout
        </span>
        <Link href="/admin/dashboards/homeDashboard">
          <a
            href="#"
            className={
              "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blue-900"
            }
          >
            Dashboard
          </a>
        </Link>
        <div className="h-0 mx-4 my-2 border border-solid border-blueGray-100" />
      
      }
        <span
          className={
            "text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400"
          }
        >
          Portfolio Demos
        </span>
        {portProjects.map((project) => (
          <PortfolioLink key={project._id} project={project} />
        ))}
      </div>
    </>
  );
};

export default IndexDropdown;
