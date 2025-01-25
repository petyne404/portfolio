import Image from "next/image";
import React from "react";

const Nav = () => {
  return (
    <nav className="w-full bg-blue-400 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-row items-start space-x-4">
          <i className="snes-jp-logo"></i>
          <h1 className="text-white xl:text-2xl xl:pt-2">Tharathep Noennok</h1>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
