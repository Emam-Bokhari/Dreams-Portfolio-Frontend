import { Fragment } from "react";
import SectionTitle from "../shared/SectionTitle";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import calendar from "@/assets/schedule.png";
import { getRandomColor } from "@/lib/generateRandomColors";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import Link from "next/link";
import { Info, PlayCircle } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  const technologies = ["Next.Js", "ShadcnUI", "Redux", "Express", "Mongoose"];
  return (
    <Fragment>
      <SectionTitle title="My Projects" />
      <div className=" mt-10">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
          <Card className="w-full dark:bg-[#140C1C]  overflow-hidden flex flex-col gap-5 p-4 ">
            {/* Left Side - Image */}
            <div className="h-[350px]">
              <Image
                src="https://themewagon.com/wp-content/uploads/2020/12/eflyer.jpg"
                alt="Featured Project"
                sizes="100vw"
                width={1200}
                height={500}
                className="w-full h-full object-cover rounded"
              />
            </div>

            {/* Right Side - Content */}
            <CardContent className=" p-0 space-y-4">
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
                assumenda amet, est illo quidem, expedita facere debitis dicta
                adipisci reiciendis suscipit? Doloribus iste libero odit culpa
                illo minus unde fugit iure modi sapiente fugiat debitis
                laudantium sit, omnis enim laborum neque? Rerum, vero optio.
                Ipsam deleniti voluptatum vel suscipit consequuntur.
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
          <Card className="w-full dark:bg-[#140C1C]  overflow-hidden flex flex-col gap-5 p-4 ">
            {/* Left Side - Image */}

            <div className="h-[350px]">
              <Image
                src="https://themewagon.com/wp-content/uploads/2020/12/eflyer.jpg"
                alt="Featured Project"
                sizes="100vw"
                width={1200}
                height={500}
                className="w-full h-full object-cover rounded"
              />
            </div>

            {/* Right Side - Content */}
            <CardContent className=" p-0 space-y-4">
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                nemo debitis accusamus consequuntur aut error earum numquam
                molestiae illum nisi? Voluptate asperiores inventore alias
                accusantium. Veritatis architecto nisi mollitia reiciendis ex
                earum pariatur repellendus, recusandae possimus dolores quaerat
                culpa, dignissimos vitae atque consequatur. Tempora voluptate
                aliquam dolores distinctio? Harum, ex.
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
        </div>
      </div>
    </Fragment>
  );
}
