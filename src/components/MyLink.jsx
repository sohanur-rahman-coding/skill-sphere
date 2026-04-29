"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const MyLink = ({ href, children }) => {
  const pathName = usePathname();

  return (
    <Link href={href}>
      <li>
        <p
          className={`
      relative px-3 py-2  font-medium cursor-pointer
      transition-all duration-300 ease-in-out
      ${
        pathName === href
          ? "text-blue-700  after:w-full"
          : "text-gray-700 hover:text-blue-600 after:w-0 hover:after:w-full"
      }
      
      after:content-[''] after:absolute after:left-0 after:bottom-0
      after:h-0.5 after:bg-blue-600 after:transition-all after:duration-300
    `}
        >
          {children}
        </p>
      </li>
    </Link>
  );
};

export default MyLink;
