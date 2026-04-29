"use client";
import Image from "next/image";
import logo from "../../public/assests/skillsphere.png";
import MyLink from "./MyLink";
import { Description, FieldError, Label, SearchField } from "@heroui/react";
import React from "react";

const Navbar = () => {
  const [value, setValue] = React.useState("");
  
  const navItems = [
    {
      path: "/",
      text: `Home`,
    },
    {
      path: "/courses",
      text: "Courses",
    },
    {
      path: "/myprofile",
      text: "My Profile",
    },
  ];
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm z-10 container">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navItems.map((item, ind) => (
                <MyLink href={item.path} key={ind} icon={item.icon}>
                  {item.text}
                </MyLink>
              ))}
               <SearchField
            isRequired
            aria-label="Search site"
            name="search"
            value={value}
            onChange={setValue}
          >
           
            <SearchField.Group>
              <SearchField.SearchIcon />
              <SearchField.Input
                className="max-w-12.5"
                placeholder="Search..."
              />
              <SearchField.ClearButton />
            </SearchField.Group>
            
          </SearchField>
            </ul>
            
          </div>
          <Image src={logo} alt="logo" width={50} height={50}></Image>
          <p className="text-2xl md:text-3xl font-black tracking-wider">
            <span className="text-blue-900">Skill</span>
            <span className="text-cyan-500">Sphere</span>
          </p>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex gap-3">
            {navItems.map((item, ind) => (
              <MyLink href={item.path} key={ind} icon={item.icon}>
                {item.text}
              </MyLink>
            ))}
          </ul>
           <SearchField
            isRequired
            aria-label="Search site"
            name="search"
            value={value}
            onChange={setValue}
          >
           
            <SearchField.Group>
              <SearchField.SearchIcon />
              <SearchField.Input
                className=""
                placeholder="Search..."
              />
              <SearchField.ClearButton />
            </SearchField.Group>
          
          </SearchField>
        </div>
        <div className="navbar-end">
         <button>login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
