import React, { useState } from "react";
import Link from "next/link";

export default function Sidebar({ toggle, setToggle }) {
  return (
    <sidebar
      className="fixed top-0 z-10 h-screen text-gray-600 bg-black body-font"
      style={{
        left: toggle ? "0%" : "-100%",
        transition: ".5s all",
      }}
    >
      <div className="flex flex-col p-5 mx-auto">
        <p className="flex items-center mb-4 font-medium text-gray-900 title-font">
          <button
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
          <span className="ml-3 text-xl">갈릭마늘빵의 포트폴리오</span>
        </p>
        <nav className="grid flex-wrap justify-start mt-12 text-base">
          <Link href="/">
            <p className=" hover:text-gray-900">홈</p>
          </Link>
          <Link href="/projects">
            <p className="hover:text-gray-900">프로젝트</p>
          </Link>
        </nav>
      </div>
    </sidebar>
  );
}
