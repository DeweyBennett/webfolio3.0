import React from "react";
import CardSettings from "../../components/Cards/SettingsCard";
import CardProfile from "../../components/Cards/ProfileCard";
import Admin from "../../layouts/Admin.js";

export default function Settings() {
  return (
    <Admin>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-8/12 px-4">
          <CardSettings />
        </div>
        <div className="w-full lg:w-4/12 px-4">
          <CardProfile />
        </div>
      </div>
    </Admin>
  );
}

