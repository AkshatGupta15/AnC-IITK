import React from "react";
import Logo from "../assets/anc-logo.png";
import "../output.css";
const NewNavbar = () => {
  const navlinks = [
    // {link : "Home", path: "home"},
    { link: "Academics", path: "academics" },
    { link: "Research", path: "research" },
    { link: "Int. Relation", path: "intrelation" },
    { link: "Career Dev", path: "careerdev" },
    { link: "Blogs", path: "blogs" },
    { link: "Interest Groups", path: "interestgroups" },
    { link: "Portals", path: "portals" },
    { link: "Contact", path: "contact" },
  ];
  return (
    <div className="drawer fixed z-[1000] bg-red-700 mt-24">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content  flex-col flex">
        {/* Navbar */}
        <div className="w-full navbar bg-red-500">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
        </div>
      </div>
      <div className="drawer-side mt-24 text-white">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200">
          {/* Sidebar content here */}
          {navlinks.map(({ link, path }) => (
            <a
              className="roboto-slab hover:text-white hover:bg-nav-links  px-3 py-2 rounded-xl  text-xl font-semibold transition-all duration-300"
              key={link}
              href={path}
            >
              {link}
            </a>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NewNavbar;
