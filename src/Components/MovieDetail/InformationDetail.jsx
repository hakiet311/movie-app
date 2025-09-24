import React from "react";
import { changeToCurrency } from "../../constant";

function InformationDetail({ data }) {
  const { name, title, revenue, status, origin_country, budget, networks } =
    data;

  return (
    <div className="space-y-3 mt-6 border-2 border-white p-3 rounded-md">
      <div className="*:first:font-bold">
        <p>Original name</p>
        <p>{name || title}</p>
      </div>
      <div className="*:first:font-bold">
        <p>Original Country</p>
        <p>{origin_country}</p>
      </div>
      <div className="*:first:font-bold">
        <p>Status</p>
        <p>{status}</p>
      </div>
      {budget && (
        <>
          <div className="*:first:font-bold">
            <p>Budget</p>
            <p>{changeToCurrency(budget)}</p>
          </div>
          <div className="*:first:font-bold">
            <p>Revenue</p>
            <p>{changeToCurrency(revenue)}</p>
          </div>
        </>
      )}
      {networks && (
        <div className="space-y-2">
          <p className="font-bold">Network</p>
          <div className="flex gap-6 bg-slate-200 p-3 justify-center rounded-md">
            {networks.map((network) => (
              <img
                className="w-12"
                src={`${import.meta.env.VITE_API_IMG}${network.logo_path}`}
                key={network.id}
              ></img>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default InformationDetail;
