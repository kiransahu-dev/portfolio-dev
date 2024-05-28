import MobNav from "@/components/MobNav";
import Nav from "@/components/Nav";
import React, { useState } from "react";

const HomePage = () => {
  const [nav, setNav] = useState(false);
  const open = () => {
    setNav(true);
  };
  const close = () =>{
    setNav(false)
  }

  return (
    <>
      <div className="overflow-x-hidden">
        <div>
          <MobNav nav={nav} close={close} />
          <Nav open={open} />
        </div>
      </div>
    </>
  );
};

export default HomePage;
