import React from "react";
import { GlobeAltIcon, LinkIcon } from "@heroicons/react/outline";
import { isEmptyObject } from "../../utils/utils";

const CompanyTable = (props) => {
  const company = props.data;

  return (
    <table className="table-auto w-full rounded">
      {/* {!isEmptyObject(company) && ( */}
      <thead>
        <tr className="border-b border-gray-300">
          <th className="text-center p-3 px-5">Name</th>
          <th className="text-center p-3 px-5">Country</th>
          <th className="text-center p-3 px-5">Currency</th>
          <th className="text-center p-3 px-5">URL</th>
        </tr>
      </thead>
      {/* )} */}
      <tbody>
        <tr className="h-14" key={company?.ticker}>
          <td className="text-center">{company?.name}</td>
          <td className="text-center">{company?.country}</td>
          <td className="text-center">{company?.currency}</td>
          <td className="text-center">
            {!isEmptyObject(company) && (
              <a href={company?.weburl} className="flex justify-center">
                <LinkIcon className="h-6 w-6 text-gray-700" />
              </a>
            )}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default CompanyTable;
