import React, { useState } from "react";
import Link from "next/link";
import Sidebar from "./sidebar";
import Darkmode from "./home/darkmode";

export default function Header() {
  const [hideSidebar, showSidebar] = useState(false);

  return (
    <header className="text-gray-600 body-font">
      <div className="flex flex-col flex-wrap p-5 mx-auto  md:flex-row">
        <p className="flex items-center mb-4 font-medium text-gray-900 title-font md:mb-0">
          <button
            onClick={() => {
              showSidebar(!hideSidebar);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
          <Link href="/">
            <span className="ml-3 text-xl">갈릭마늘빵의 포트폴리오</span>
          </Link>
        </p>
        <nav className="flex flex-wrap items-center justify-end text-base md:ml-auto">
          <Link href="/">
            <p className="mr-5 hover:text-gray-900">홈</p>
          </Link>
          <Link href="/projects">
            <p className="mr-5 hover:text-gray-900">프로젝트</p>
          </Link>
          <Darkmode />

          {/*
          <Link href="https://open.kakao.com/~~">
            <a className="mr-5 hover:text-gray-900">연락하기</a>
          </Link>
          */}
        </nav>
      </div>
      <Sidebar toggle={hideSidebar} setToggle={showSidebar} />
    </header>
  );
}
