import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-row items-center gap-5">
      <div className="">
        <Image
          src="/static/images/profile.png"
          width={150}
          height={150}
          alt="profile picture"
          className="bg-blue-400"
        />
      </div>
      <div className="flex flex-row items-center nes-balloon from-left">
        <p className="text-xl">
          Hello World this is my website{" "}
          <i className="nes-icon is-medium star"></i>
        </p>
      </div>
    </div>
  );
};

export default Hero;
