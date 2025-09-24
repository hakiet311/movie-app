import React from "react";

function PersonalInfo({ data }) {
  const { birthday, known_for_department, name, place_of_birth, gender } = data;
  return (
    <div className="space-y-3 p-3 border-2 rounded-md">
      <p className="md:text-xl lg:text-2xl"> Personal Information</p>
      <div className="*:first:font-bold">
        <p>Name</p>
        <p>{name}</p>
      </div>
      <div className="*:first:font-bold">
        <p>Know for</p>
        <p>{known_for_department}</p>
      </div>
      <div className="*:first:font-bold">
        <p>Gender</p>
        <p>{gender === 1 ? "Female" : "Male"}</p>
      </div>
      <div className="*:first:font-bold">
        <p>Place of Birth</p>
        <p>{place_of_birth}</p>
      </div>
      <div className="*:first:font-bold">
        <p>Birthday</p>
        <p>{birthday}</p>
      </div>
    </div>
  );
}

export default PersonalInfo;
