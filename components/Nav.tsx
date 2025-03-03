import { Bars3Icon } from "@heroicons/react/16/solid";
import React from "react";

interface Props {
  open: () => void;
}

const Nav = ({open}:Props) => {
  return (
    <div className="w-[100%] sticky z-[10000] top-0 h-[12vh] bg-[#01204E] shadow-md">
      <div className="flex items-center justify-between w-[80%] mx-auto h-[100%]">
        <h1 className="flex-[0.6] cursor-pointer text-2xl font-bold text-white">
          Kiran<span className="text-yellow-300">Sahu</span>
        </h1>
        <div className="nav-link">Home</div>
        <div className="nav-link">Srvices</div>
        <div className="nav-link">About</div>
        <div className="nav-link">Projects</div>
        <div className="nav-link">Blog</div>
        <div className="nav-link">Contacts</div>
        <div onClick={open}>
          <Bars3Icon className="w-[2rem] md:hidden h-[2rem] cursor-pointer text-yellow-300" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
