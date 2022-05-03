import React from "react";
import IndexNavbar from "../components/Navbars/indexNavbar.js";
import FooterSmall from "../components/Footers/SmallFooter.js";

export default function Auth({ children }) {
  return (
    <div>
      <IndexNavbar transparent />
      <main>
        <section className="relative w-full h-full py-40 min-h-screen">
          <div
            className="absolute top-0 w-full h-full bg-[#040C18]"
          ></div>
          {children}
          <FooterSmall absolute />
        </section>
      </main>
    </div>
  );
}
