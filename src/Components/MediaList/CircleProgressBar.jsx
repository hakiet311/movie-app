import React from "react";

function CircleProgressBar({ percent = 5 }) {
  const point = Math.round(percent * 10);
  return (
    <div className="relative size-10">
      <svg
        className="size-full -rotate-90"
        viewBox="0 0 36 36"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="18"
          cy="18"
          r="16"
          fill="none"
          className="stroke-current text-gray-200"
          strokeWidth="2"
        ></circle>
        <circle
          cx="18"
          cy="18"
          r="16"
          fill="none"
          className={`stroke-current text-green-600 ${
            point <= 70 ? "text-yellow-400" : ""
          }`}
          strokeWidth="3"
          strokeDasharray="100"
          strokeDashoffset={100 - point}
          strokeLinecap="round"
        ></circle>
      </svg>

      <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
        <span
          className={`text-center font-bold text-green-600 ${
            point <= 70 ? "text-yellow-400" : ""
          }`}
        >
          {point}
        </span>
      </div>
    </div>
  );
}

export default CircleProgressBar;
