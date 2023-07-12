import React from "react";

function todo() {
  return (
    <div>
      <svg
        height={"50px"}
        width={"50px"}
        fill="#000000"
        viewBox="0 0 24 24"
        id="check-lists-square"
        data-name="Flat Color"
        xmlns="http://www.w3.org/2000/svg"
        className="icon flat-color"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <rect
            id="primary"
            x="2"
            y="2"
            width="20"
            height="20"
            rx="2"
            fill="#000000"
          ></rect>
          <path
            id="secondary"
            d="M7,11a1,1,0,0,1-.71-.29l-1-1A1,1,0,0,1,6.71,8.29l.29.3,1.29-1.3A1,1,0,1,1,9.71,8.71l-2,2A1,1,0,0,1,7,11Zm.71,5.71,2-2a1,1,0,0,0-1.42-1.42L7,14.59l-.29-.3a1,1,0,0,0-1.42,1.42l1,1a1,1,0,0,0,1.42,0ZM19,15a1,1,0,0,0-1-1H13a1,1,0,0,0,0,2h5A1,1,0,0,0,19,15Zm0-6a1,1,0,0,0-1-1H13a1,1,0,0,0,0,2h5A1,1,0,0,0,19,9Z"
            fill="#2ca9bc"
          ></path>
        </g>
      </svg>
    </div>
  );
}

export default todo;
