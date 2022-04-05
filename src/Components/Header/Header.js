import React, { useState } from "react";
import CustomLink from "../CustomLink/CustomLink";
import { MenuIcon, XIcon } from "@heroicons/react/solid";

const Header = () => {
  const [open, setOpen] = useState(false);

  const routes = [
    { id: 1, name: "Home", link: "/home" },
    { id: 2, name: "Reviews", link: "/reviews" },
    { id: 3, name: "Dashboard", link: "/dashboard" },
    { id: 4, name: "Blog", link: "/blog" },
    { id: 5, name: "About", link: "/about" },
  ];
  return (

    <div>
      <h1 className="font-bold text-2xl text-red-500 absolute top-8 sm:block hidden">Norwegian Wood Reveiw</h1>
    <nav className='flex justify-end'>
      <div onClick={() => setOpen(!open)} className="w-6 pt-2 mr-2 z-20 h-6 md:hidden">
        {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
      </div>
      <ul className={`md:flex items-center absolute md:static md:bg-white md:top-20 mb-20 ease-in duration-500 
      ${open ? 'top-10 text-center text-slate-50 bg-red-300 z-0 pb-14':'flex justify-center mt-10 top-[-120px]'}`}>
        {routes.map((route) => (
          <CustomLink className="pb-5" key={route.id} route={route}></CustomLink>
        ))}
      </ul>
    </nav>
    </div>
  );
};
/* className=
{`md:flex my-12 justify-center ease-in duration-500 ${open ? "top-6" : "top-[-120px]"}`} */
export default Header;
