import React from "react";
import { classNames } from "../../utils/utils";
import { LinkIcon } from "@heroicons/react/outline";
import { useEffect } from "react";
import { createFetchUrlForPriceHistory } from "../../utils/utils";

const CompanyTable = (props) => {
  const toggleHistoryModal = props.toggleHistoryModal;
  const setSymbol = props.setSymbol;

  const handleTdClick = (e) => {
    let s = e.target.getAttribute("ticker");
    let companyName = e.target.getAttribute("companyname");
    setSymbol(s);
    const newUrl = createFetchUrlForPriceHistory(
      s,
      props.resolution,
      props.dateFrom,
      props.dateTo
    );
    props.setUrl(newUrl);
    props.setCompanyName(companyName);
    toggleHistoryModal();
  };

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
        {props.profileData.map((company, index) => (
          <tr
            className={classNames(
              index !== props.profileData.length - 1
                ? "border-b border-gray-300"
                : "border-none",
              "h-14",
              index % 2 !== 0 ? "bg-gray-200" : ""
            )}
            key={company.ticker}
          >
            <td
              onClick={handleTdClick}
              className="p-3 px-5 text-left hover:bg-blue-100 hover:cursor-pointer"
              ticker={company.ticker}
              companyname={company.name}
            >
              {company.name}
            </td>
            <td className="text-center">{company.country}</td>
            <td className="text-center">{company.currency}</td>
            <td className="text-center">
              <a
                href={company.weburl}
                target="blank"
                className="flex justify-center"
              >
                <LinkIcon className="h-6 w-6 text-gray-700 hover:text-blue-600" />
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CompanyTable;
