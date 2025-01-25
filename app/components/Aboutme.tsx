import Image from "next/image";
import React from "react";

const contact = [
  {
    icon: "whatsapp",
    value: "084-150-5180",
  },
  {
    icon: "gmail",
    value: "tharathep.dev@gmail.com",
  },
  {
    icon: "github",
    value: "petyne404",
  },
  {
    icon: "linkedin",
    value: "tharathepnoe",
  },
];

const Aboutme = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row gap-5">
      <div className="xl:w-2/6 flex flex-col-reverse lg:flex-col gap-5">
        <div id="contact" className="nes-container with-title">
          <p className="title">Contact Me</p>
          {contact.map((item) => (
            <div className="flex flex-row items-center gap-5 mt-3" key={item.icon}>
              <i className={`nes-icon ${item.icon}`}></i>
              <span className="text-xs lg:text-sm">{item.value}</span>
            </div>
          ))}
        </div>

        <div id="education">
          <div className="nes-container with-title is-dark">
            <p className="title">Education</p>
            <p>Bachelor of Science Information Technology</p>
            <p>Rajamangala University of Technology Tawan-Ok</p>
          </div>
        </div>

        <div id="skill">
          <div className="nes-container flex flex-col gap-5 with-title">
            <p className="title">Skill</p>
            <div className="nes-container with-title is-dark">
              <p className="title">Frontend</p>
              <div className="flex flex-col gap-5">
                <p>
                  HTML, CSS, JavaScript, React, ReactNative, NextJS, Flutter
                </p>
              </div>
            </div>
            <div className="nes-container with-title is-dark">
              <p className="title">Backend</p>
              <p>Node.js, Express, Next.js, PHP, Laravel, Supabase</p>
            </div>
            <div className="nes-container with-title is-dark">
              <p className="title">Database</p>
              <p>MySQL, SQL, MongoDB, Postgresql</p>
            </div>
          </div>
        </div>
      </div>

      <div className="xl:w-4/6 flex flex-col gap-5">
        <div id="experience">
          <p className="flex items-center gap-5">
            <i className="nes-icon is-medium star"></i>
            Previous Experience
          </p>
          <div className="nes-container with-title is-dark flex flex-col gap-5">
            <div className="flex flex-row items-start gap-5">
              <Image
                className="p-2 bg-white"
                src="/static/images/tgs_logo.png"
                width={150}
                height={150}
                alt="tgs-logo"
              />
              <div>
                <h1>Triangle Soft Co.,Ltd</h1>
                <h2>Web Developer</h2>
                <p>2023-Present</p>
              </div>
            </div>

            <div className="flex flex-row items-start gap-5">
              <Image
                className="p-2 bg-white"
                src="/static/images/tgs_logo.png"
                width={150}
                height={150}
                alt="tgs-logo"
              />
              <div>
                <h1>Triangle Soft Co.,Ltd</h1>
                <h2>Intern Automated Tester</h2>
                <p>2023</p>
              </div>
            </div>
          </div>
        </div>

        <div id="project">
          <p className="flex items-center gap-5">
            <i className="nes-icon is-medium star"></i>
            My Project
          </p>
          <div className="nes-container">
            Now Im lazy. Will add more information another day.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
