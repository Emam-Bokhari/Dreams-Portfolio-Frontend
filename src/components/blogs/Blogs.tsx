import { Fragment } from "react";
import SectionTitle from "../shared/SectionTitle";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import calendar from "@/assets/schedule.png";
import Link from "next/link";

export default function Blogs() {
  return (
    <Fragment>
      <SectionTitle title="Blogs" />
      <div className="mt-10 border-2 border-red-500">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
          <Card className="w-full dark:bg-[#140C1C]  overflow-hidden flex flex-col gap-5 p-4 ">
            {/* Left Side - Image */}
            <div className="h-[250px]">
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
              {/* title */}
              <div>
                <h2 className="text-2xl text-[#8750F7] font-bold">
                  Green Leaf Book Store
                </h2>
              </div>

              {/* categories and published date */}
              <div className="flex justify-between">
                <h2 className="text-base text-[#989BA4]">Technologies</h2>
                <div className="flex items-center space-x-3 ">
                  <p className="text-base text-[#989BA4]">2025-July-02</p>
                  <Image
                    width={25}
                    height={25}
                    alt="Calendar Icon"
                    src={calendar}
                  />
                </div>
              </div>
              {/* author name */}
              <div>
                <h2 className="text-[#989BA4]">Author: Moshfiqur Rahman</h2>
              </div>
              {/* intro */}
              <p className=" text-base text-[#989BA4] leading-relaxed">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Temporibus quod incidunt tempora officiis saepe non cum quisquam
                consequuntur tempore. Exercitationem sapiente architecto
                reiciendis velit, provident voluptatem quod totam tenetur sequi!
              </p>
              {/* read more button */}
              <Button className="bg-[#8750F7] hover:bg-[#733DD6] text-white ">
                Read More
                <ArrowRight />
              </Button>
            </CardContent>
          </Card>
          <Card className="w-full dark:bg-[#140C1C]  overflow-hidden flex flex-col gap-5 p-4 ">
            {/* Left Side - Image */}
            <div className="h-[250px]">
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
              {/* title */}
              <div>
                <h2 className="text-2xl text-[#8750F7] font-bold">
                  Green Leaf Book Store
                </h2>
              </div>

              {/* categories and published date */}
              <div className="flex justify-between">
                <h2 className="text-base text-[#989BA4]">Technologies</h2>
                <div className="flex items-center space-x-3 ">
                  <p className="text-base text-[#989BA4]">2025-July-02</p>
                  <Image
                    width={25}
                    height={25}
                    alt="Calendar Icon"
                    src={calendar}
                  />
                </div>
              </div>
              {/* author name */}
              <div>
                <h2 className="text-[#989BA4]">Author: Moshfiqur Rahman</h2>
              </div>
              {/* intro */}
              <p className=" text-base text-[#989BA4] leading-relaxed">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Temporibus quod incidunt tempora officiis saepe non cum quisquam
                consequuntur tempore. Exercitationem sapiente architecto
                reiciendis velit, provident voluptatem quod totam tenetur sequi!
              </p>
              {/* read more button */}
              <Button className="bg-[#8750F7] hover:bg-[#733DD6] text-white ">
                Read More
                <ArrowRight />
              </Button>
            </CardContent>
          </Card>
          <Card className="w-full dark:bg-[#140C1C]  overflow-hidden flex flex-col gap-5 p-4 ">
            {/* Left Side - Image */}
            <div className="h-[250px]">
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
              {/* title */}
              <div>
                <h2 className="text-2xl text-[#8750F7] font-bold">
                  Green Leaf Book Store
                </h2>
              </div>

              {/* categories and published date */}
              <div className="flex justify-between">
                <h2 className="text-base text-[#989BA4]">Technologies</h2>
                <div className="flex items-center space-x-3 ">
                  <p className="text-base text-[#989BA4]">2025-July-02</p>
                  <Image
                    width={25}
                    height={25}
                    alt="Calendar Icon"
                    src={calendar}
                  />
                </div>
              </div>
              {/* author name */}
              <div>
                <h2 className="text-[#989BA4]">Author: Moshfiqur Rahman</h2>
              </div>
              {/* intro */}
              <p className=" text-base text-[#989BA4] leading-relaxed">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Temporibus quod incidunt tempora officiis saepe non cum quisquam
                consequuntur tempore. Exercitationem sapiente architecto
                reiciendis velit, provident voluptatem quod totam tenetur sequi!
              </p>
              {/* read more button */}
              <Button className="bg-[#8750F7] hover:bg-[#733DD6] text-white ">
                Read More
                <ArrowRight />
              </Button>
            </CardContent>
          </Card>
          <Card className="w-full dark:bg-[#140C1C]  overflow-hidden flex flex-col gap-5 p-4 ">
            {/* Left Side - Image */}
            <div className="h-[250px]">
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
              {/* title */}
              <div>
                <h2 className="text-2xl text-[#8750F7] font-bold">
                  Green Leaf Book Store
                </h2>
              </div>

              {/* categories and published date */}
              <div className="flex justify-between">
                <h2 className="text-base text-[#989BA4]">Technologies</h2>
                <div className="flex items-center space-x-3 ">
                  <p className="text-base text-[#989BA4]">2025-July-02</p>
                  <Image
                    width={25}
                    height={25}
                    alt="Calendar Icon"
                    src={calendar}
                  />
                </div>
              </div>
              {/* author name */}
              <div>
                <h2 className="text-[#989BA4]">Author: Moshfiqur Rahman</h2>
              </div>
              {/* intro */}
              <p className=" text-base text-[#989BA4] leading-relaxed">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Temporibus quod incidunt tempora officiis saepe non cum quisquam
                consequuntur tempore. Exercitationem sapiente architecto
                reiciendis velit, provident voluptatem quod totam tenetur sequi!
              </p>
              {/* read more button */}
              <Link href="/about" className="block">
                <Button className="bg-[#8750F7] hover:bg-[#733DD6] text-white ">
                  Read More
                  <ArrowRight />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </Fragment>
  );
}
