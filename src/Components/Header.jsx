import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className=" bg-black text-white flex justify-between items-center px-8">
      <div className="flex gap-8 items-center">
        <Link to={"/"}>
          <img className="w-14" src="/netflix.png" alt="netflix" />
        </Link>
        <div className="flex gap-4">
          <Link to={"/search?mediaType=movie"}>Movie</Link>
          <Link to={"/search?mediaType=tv"}>TV Show</Link>
        </div>
      </div>
      <Link to={"/search"}>
        <div>
          <FontAwesomeIcon
            className="cursor-pointer"
            icon={faMagnifyingGlass}
          />
        </div>
      </Link>
    </div>
  );
}

export default Header;
