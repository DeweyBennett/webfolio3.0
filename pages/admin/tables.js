import React from "react";
import CardTable from "../../components/Cards/TableCard";
import Admin from "../../layouts/Admin.js";

export default function Tables() {
  return (
    <Admin>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardTable color="light" />
        </div>
        <div className="w-full mb-12 px-4">
          <CardTable color="light" />
        </div>
      </div>
    </Admin>
  );
}

