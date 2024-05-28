import { XMarkIcon } from "@heroicons/react/16/solid";
import React from "react";

interface Props {
  nav: boolean;
  close: () => void;
}

const MobNav = ({ nav, close }: Props) => {
  const navAnimation = nav ? "translate-x-0" : "translate-x-[-100%]";

  return (
    <div
      className={`fixed ${navAnimation} transform transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[10000] bg-[#09101a]`}
    >
      <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center ">
        <div className="nav-link-mob">Home</div>
        <div className="nav-link-mob">Srvices</div>
        <div className="nav-link-mob">About</div>
        <div className="nav-link-mob">Projects</div>
        <div className="nav-link-mob">Blog</div>
        <div className="nav-link-mob">Contacts</div>
      </div>
      <div className="absolute cursor-pointer top-[2rem] right-[2rem] w-[2rem] h-[2rem] text-yellow-400 ">
        <XMarkIcon onClick={close} />
      </div>
    </div>
  );
};

export default MobNav;
