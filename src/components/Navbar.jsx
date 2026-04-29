"use client";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import logo from "../../public/assests/skillsphere.png";
import MyLink from "./MyLink";
import { Avatar, Button, SearchField } from "@heroui/react";
import React from "react";
import Link from "next/link";

const Navbar = () => {
  const [value, setValue] = React.useState("");

  const userData = authClient.useSession();
  const user = userData.data?.user;

  const handleSignOut = async () => {
    await authClient.signOut();
  };

  const navItems = [
    { path: "/", text: `Home` },
    { path: "/courses", text: "Courses" },
    { path: "/myprofile", text: "My Profile" },
  ];

  return (
    <div className="bg-base-100 shadow-sm sticky top-0 z-50">
      <div className="navbar container mx-auto px-4">
        {/* Navbar Start: Logo and Mobile Dropdown */}
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-64 p-4 shadow space-y-3"
            >
              {navItems.map((item, ind) => (
                <li key={ind}>
                  <Link href={item.path}>{item.text}</Link>
                </li>
              ))}
              {/* SearchField for Mobile/Tablet Dropdown */}
              <div className="pt-2">
                <SearchField
                  aria-label="Search site"
                  value={value}
                  onChange={setValue}
                  className="max-w-xs" // Desktop-e size control korar jonno
                >
                  <SearchField.Group className="bg-gray-100 border-none shadow-sm hover:bg-gray-200 transition-all rounded-full px-3">
                    <SearchField.SearchIcon className="text-blue-600 font-bold" />
                    <SearchField.Input
                      placeholder="Search courses..."
                      className="placeholder:text-gray-400 text-sm font-medium focus:ring-0"
                    />
                    {value && (
                      <SearchField.ClearButton className="text-gray-500 hover:text-red-500" />
                    )}
                  </SearchField.Group>
                </SearchField>
              </div>
            </ul>
          </div>
          <div className="flex items-center gap-2">
            <Image src={logo} alt="logo" width={40} height={40} />
            <p className="text-xl md:text-2xl font-black tracking-wider hidden sm:block">
              <span className="text-blue-900">Skill</span>
              <span className="text-cyan-500">Sphere</span>
            </p>
          </div>
        </div>

        {/* Navbar Center: Desktop Menu Only */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex gap-3">
            {navItems.map((item, ind) => (
              <MyLink href={item.path} key={ind}>
                {item.text}
              </MyLink>
            ))}
          </ul>
        </div>

        {/* Navbar End: Search (Desktop) and Auth Actions */}
        <div className="navbar-end gap-4">
          {/* SearchField for Large Screens Only */}
          <div className="hidden lg:block">
            <SearchField
              aria-label="Search site"
              value={value}
              onChange={setValue}
              className="max-w-xs" // Desktop-e size control korar jonno
            >
              <SearchField.Group className="bg-gray-100 border-none shadow-sm hover:bg-gray-200 transition-all rounded-full px-3">
                <SearchField.SearchIcon className="text-blue-600 font-bold" />
                <SearchField.Input
                  placeholder="Search courses..."
                  className="placeholder:text-gray-400 text-sm font-medium focus:ring-0"
                />
                {value && (
                  <SearchField.ClearButton className="text-gray-500 hover:text-red-500" />
                )}
              </SearchField.Group>
            </SearchField>
          </div>

          <div className="flex gap-4 items-center">
            {!user && (
              <ul className="flex items-center text-sm gap-3 md:gap-5 font-medium">
                <li>
                  <Link href={"/auth/register"} className="hover:text-blue-600">
                    Register
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/auth/login"}
                    className="btn btn-sm btn-outline border-blue-900 text-blue-900"
                  >
                    Login
                  </Link>
                </li>
              </ul>
            )}

            {user && (
              <div className="flex items-center gap-3">
                <Avatar size="sm">
                  <Avatar.Image
                    alt={user?.name}
                    src={user?.image}
                    referrerPolicy="no-referrer"
                  />
                  <Avatar.Fallback>{user?.name?.charAt(0)}</Avatar.Fallback>
                </Avatar>
                <Button onClick={handleSignOut} size="sm" variant="danger">
                  Sign Out
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
