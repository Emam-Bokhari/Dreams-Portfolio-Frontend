import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import SectionTitle from "../shared/SectionTitle";
import { Label } from "../ui/label";
import Link from "next/link";
import Image from "next/image";
import facebook from "@/assets/facebook.png";
import linkedin from "@/assets/linkedin.png";
import github from "@/assets/github-icon-2.svg";
import email from "@/assets/email.png";

export default function ContactForm() {
  return (
    <div>
      {/* title */}
      <SectionTitle title="Contact With Me" />

      <Card className=" w-full text-white dark:bg-[#140C1C]  mt-10">
        <CardContent className="p-5 flex flex-col gap-8">
          {/* Title */}
          <div>
            <p className="text-sm text-[#110E18] dark:text-white">
              Feel free to reach out if you have any questions or concerns. I am
              open to work opportunities that align with my skills and
              interests.
            </p>
          </div>

          <div className="flex gap-20 items-center">
            {/* Contact Form */}
            <form className="space-y-4 flex-1">
              {/* name */}
              <div className="space-y-2">
                <Label className="text-base text-[#110E18] dark:text-white">
                  Your Name
                </Label>
                <Input placeholder="Enter Your Name" className="h-10 " />
              </div>
              <div className="space-y-2">
                <Label className="text-base text-[#110E18] dark:text-white">
                  Your Email
                </Label>
                <Input placeholder="Enter Your Email" className="h-10" />
              </div>
              <div className="space-y-2">
                <Label className="text-base text-[#110E18] dark:text-white">
                  Your Phone Number
                </Label>
                <Input placeholder="Enter Your Number" className="h-10" />
              </div>
              <div className="space-y-2">
                <Label className="text-base text-[#110E18] dark:text-white">
                  Your Message
                </Label>
                <Textarea
                  placeholder="Enter Your Message ..."
                  className="h-36 text-[#110E18] dark:text-white"
                />
              </div>
              <Button className="bg-[#8750F7] hover:bg-[#733DD6] text-white">
                Send Message
                <Image src={email} alt="Email Icon" width={24} height={24} />
              </Button>
            </form>

            {/* social icons */}
            <div className="space-y-4 flex-1">
              <p className="text-[#8750F7] text-2xl font-bold">
                Moshfiqur Rahman
              </p>
              <p className="text-[#989BA4] text-base">
                moshfiqurrahman37@gmail.com
              </p>
              <p className="text-[#989BA4] text-base">Gulshan-02, Dhaka</p>
              <div>
                <div className="flex items-center gap-5">
                  <Link href="#">
                    <Image
                      src={github}
                      width={40}
                      height={40}
                      alt="GitHub Icon"
                    />
                  </Link>
                  <Link href="https://www.facebook.com/emambokhari99">
                    <Image
                      src={facebook}
                      width={40}
                      height={40}
                      alt="Facebook Icon"
                    />
                  </Link>
                  <Link href="#">
                    <Image
                      src={linkedin}
                      width={40}
                      height={40}
                      alt="Linkedin Icon"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
