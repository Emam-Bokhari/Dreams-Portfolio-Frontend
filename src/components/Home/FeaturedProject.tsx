import { Fragment } from "react";
import SectionTitle from "../shared/SectionTitle";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Info, PlayCircle } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import { Badge } from "../ui/badge";
import Link from "next/link";
import calendar from "@/assets/schedule.png";
import { getRandomColor } from "@/lib/generateRandomColors";

export default function FeaturedProject() {
  const technologies = ["Next.Js", "ShadcnUI", "Redux", "Express", "Mongoose"];

  return (
    <Fragment>
      <div className="border-2 border-orange-500 mt-10">
        <SectionTitle title="Featured Project" />
        {/* card */}
        <section className="mt-10">
          <Card
            className="w-full dark:bg-[#140C1C] dark:hover:bg-[#1d0f28] overflow-hidden flex flex-col xl:flex-row xl:items-stretch gap-5 p-4 
  transition-all duration-500 ease-in-out transform group 
  hover:-translate-y-2 hover:shadow-[0px_0px_20px_rgba(135,80,247,0.6)] hover:border-[#8750F7] border-2 border-transparent"
          >
            {/* Left Side - Image */}

            <div className="flex-1">
              <Image
                src="https://themewagon.com/wp-content/uploads/2020/12/eflyer.jpg"
                alt="Featured Project"
                sizes="100vw"
                width={1200}
                height={1200}
                className="w-full h-full object-cover rounded"
              />
            </div>

            {/* Right Side - Content */}
            <CardContent className="flex-1  p-0 space-y-4">
              {/* title and timeline*/}
              <div className="flex flex-col xl:flex-row gap-4 xl:gap-0 xl:justify-between">
                <h2 className="text-2xl text-[#8750F7] font-bold">
                  Green Leaf Book Store
                </h2>
                <div className="flex items-center space-x-3 ">
                  <p className="text-base text-[#989BA4]">
                    Completed in 25 days
                  </p>
                  <Image
                    width={25}
                    height={25}
                    alt="Calendar Icon"
                    src={calendar}
                  />
                </div>
              </div>
              {/* description */}
              <p className=" text-base text-[#989BA4] leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                fuga ullam impedit libero sed et eaque repellendus laborum
                tempore exercitationem debitis fugiat totam ad atque odio itaque
                labore, quam ab commodi excepturi necessitatibus voluptates
                error velit? Non voluptatum ea odio quis sint et quos similique
                placeat possimus iste fugiat dignissimos cum minus debitis
                tempore, maxime, nihil ex, labore fugit dolorem. Vel dolorum
                voluptates dolores ipsam pariatur repellendus nemo rem fugiat
                optio ratione accusamus aspernatur molestiae rerum doloremque
                accusantium, unde, sit laboriosam! Laudantium inventore
                accusamus delectus repudiandae dignissimos voluptates quasi
                obcaecati ad, iusto cum id error, cumque ea expedita illo
                repellat.
              </p>
              <div>
                {/* technologies used */}
                <div className="flex gap-4 flex-wrap">
                  {technologies.map((tech, index) => {
                    const color = getRandomColor();
                    return (
                      <Badge
                        key={index}
                        className={`${color.base} ${color.hover} px-3 py-1 rounded-md transition-all`}
                      >
                        {tech}
                      </Badge>
                    );
                  })}
                </div>
              </div>
              <div>
                {/* button */}
                <div className="flex gap-4 flex-wrap">
                  <Button
                    asChild
                    className="bg-[#8750F7] hover:bg-[#733DD6] text-white"
                  >
                    <Link href="#" target="_blank" rel="noopener noreferrer">
                      Live Demo <PlayCircle size={18} />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    className="bg-[#8750F7] hover:bg-[#733DD6] text-white"
                  >
                    <Link href="#" target="_blank" rel="noopener noreferrer">
                      Frontend GitHub <FaGithub size={18} />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    className="bg-[#8750F7] hover:bg-[#733DD6] text-white"
                  >
                    <Link href="#" target="_blank" rel="noopener noreferrer">
                      Backend GitHub <FaGithub size={18} />
                    </Link>
                  </Button>
                </div>
              </div>
              {/* details button */}
              <Button className="bg-[#8750F7] hover:bg-[#733DD6] text-white flex items-center gap-2">
                <Info size={18} />
                View Project Details
              </Button>
            </CardContent>
          </Card>
        </section>
      </div>
    </Fragment>
  );
}
