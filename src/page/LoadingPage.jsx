import React from "react";

function LoadingPage() {
  return (
    <div className="bg-slate-800 text-white font-bold text-xl h-screen flex justify-center items-center">
      <div className="spinner-mexican-wave">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default LoadingPage;
