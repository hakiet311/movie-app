import React from "react";

function Biography({ data }) {
  const { name, biography } = data;
  return (
    <div>
      <p className="text-center font-bold md:text-xl lg:text-2xl">{name}</p>
      <div className="space-y-3">
        <p className="font-bold">Biography</p>
        <p>{biography || "None"}</p>
      </div>
    </div>
  );
}

export default Biography;
