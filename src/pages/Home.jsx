import { useState } from "react";
import InputField from "../components/form/InputField";
import DatePicker from "../components/form/DatePicker";
import SearchButton from "../components/form/SearchButton";
import ResetButton from "../components/form/ResetButton";
import CompanyTable from "../components/data/CompanyTable";

function Home() {
  return (
    <div className="pt-8 p-8 h-screen min-h-screen">
      <div
        className="container 
          mx-auto pt-10 max-w-xl px-6 
          h-full border bg-gray-100 rounded min-w-min opacity-95"
      >
        <form>
          <div className="mb-4">
            <InputField />
          </div>
          <div className="w-full">
            <DatePicker />
          </div>
        </form>
        <div className="md:flex md:justify-between">
          <SearchButton />
          <ResetButton />
        </div>
        <div className="container border mt-4">
          <CompanyTable />
        </div>
      </div>
    </div>
  );
}

export default Home;
