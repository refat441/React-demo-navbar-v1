import React, { useState } from "react";
import Link from "../Link/Link";
import { IoMdClose } from "react-icons/io";
import { IoMenuOutline } from "react-icons/io5";

const NavBar = () => {
  const [open, setopen] = useState(false);
  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "/blog", name: "Blog" },
  ];

  return (
    <nav>
      <div className="md:hidden" onClick={() => setopen(!open)}>
        {open === true ? <IoMdClose /> : <IoMenuOutline />}
      </div>
      <ul
        className={`md: flex gap-5 p-5  absolute md:static delay-500 ${
          !open ? "top-16" : "-top-60"
        }`}
      >
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
