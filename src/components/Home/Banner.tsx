import Image from "next/image";
import { Fragment } from "react";
import facebook from "@/assets/facebook.png";
import linkedin from "@/assets/linkedin.png";
import react from "@/assets/React.svg";
import redux from "@/assets/Redux.svg";
import mongodb from "@/assets/MongoDB.svg";
import javascript from "@/assets/JavaScript.svg";
import TechAnimation from "./TechAnimation";
import Link from "next/link";

export default function Banner() {
  return (
    <Fragment>
      <div className="flex justify-between items-center  xl:h-[calc(100vh-7rem)] gap-10">
        {/* text */}
        <div className=" space-y-4">
          <h2 className="text-sm font-medium text-[#110E18] dark:text-white">
            Welcome To My Profile
          </h2>
          <h3 className="text-5xl lg:text-[60px] font-bold text-[#110E18] dark:text-white">
            Hi, I’m{" "}
            <span className="text-[#8750F7] font-semibold">
              Moshfiqur Rahman
            </span>
          </h3>
          <h4 className="text-4xl lg:text-5xl font-medium text-[#110E18] dark:text-white">
            Full-Stack Developer
          </h4>
          <p className="text-base text-[#989BA4]">
            My mother tongue in programming language is JavaScript. I work
            Frontend with <br /> JavaScript based libraries and frameworks such
            as React and NextJS. Backend works <br /> with Node Js, Express Js,
            MongoDB and PostgreSql Database.
          </p>
          {/* icons */}
          <div className="flex flex-col xl:flex-row  gap-4 xl:gap-20">
            {/* find with me  */}
            <div className="space-y-4">
              <p className="text-sm text-[#110E18] dark:text-white">
                Find With Me
              </p>

              <div className="flex items-center gap-5">
                <Link href="https://www.facebook.com/emambokhari99">
                  <Image
                    src={facebook}
                    width={50}
                    height={50}
                    alt="Facebook Icon"
                  />
                </Link>
                <Link href="#">
                  <Image
                    src={linkedin}
                    width={50}
                    height={50}
                    alt="Linkedin Icon"
                  />
                </Link>
              </div>
            </div>
            {/* best skills on */}
            <div className="space-y-4">
              <p className="text-sm text-[#110E18] dark:text-white">
                Best Skills On
              </p>

              <div className="flex items-center gap-5">
                <Image
                  src={javascript}
                  width={50}
                  height={50}
                  alt="Javascript Icon"
                />
                <Image src={react} width={50} height={50} alt="React Icon" />
                <Image src={redux} width={50} height={50} alt="Redux Icon" />
                <Image
                  src={mongodb}
                  width={50}
                  height={50}
                  alt="MongodDB Icon"
                />
              </div>
            </div>
          </div>
        </div>
        {/* animation */}
        <div className="hidden lg:block">
          <TechAnimation />
        </div>
      </div>
      {/* icons */}
    </Fragment>
  );
}
