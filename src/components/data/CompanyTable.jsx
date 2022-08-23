import React from "react";
import { GlobeAltIcon, LinkIcon } from "@heroicons/react/outline";
import { isEmptyObject, classNames } from "../../utils/utils";

const CompanyTable = (props) => {
  const companies = props.data;

  return (
    <table className="table-auto w-full rounded">
      <thead className="sticky top-0 bg-gray-200 ">
        <tr className="border-b-2 border-gray-300">
          <th className="text-left p-3 px-5">Name</th>
          <th className="text-center p-3 px-5">Country</th>
          <th className="text-center p-3 px-5">Currency</th>
          <th className="text-center p-3 px-5">URL</th>
        </tr>
      </thead>
      <tbody className="overflow-auto">
        {companies.map((company, index) => (
          <tr
            className={classNames(
              index !== companies.length - 1
                ? "border-b border-gray-300"
                : "border-none",
              "h-14",
              index % 2 !== 0 ? "bg-gray-200" : ""
            )}
            key={company.ticker}
          >
            <td className="p-3 px-5 text-left">{company.name}</td>
            <td className="text-center">{company.country}</td>
            <td className="text-center">{company.currency}</td>
            <td className="text-center">
              <a href={company?.weburl} className="flex justify-center">
                <LinkIcon className="h-6 w-6 text-gray-700" />
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CompanyTable;
