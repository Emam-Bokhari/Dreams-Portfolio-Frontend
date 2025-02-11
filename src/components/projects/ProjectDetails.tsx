import { Fragment } from "react";
import SectionTitle from "../shared/SectionTitle";
import Image from "next/image";
import calendar from "@/assets/schedule.png";
import { Button } from "../ui/button";
import Link from "next/link";
import { PlayCircle } from "lucide-react";
import { FaBook, FaGithub } from "react-icons/fa";

export default function ProjectDetails() {
  return (
    <Fragment>
      <SectionTitle title="Project Details" />
      <div className="mt-10  space-y-4 dark:bg-[#140C1C] rounded-md p-4">
        {/* image */}
        <div className="h-[600px]">
          <Image
            src="https://themewagon.com/wp-content/uploads/2020/12/eflyer.jpg"
            alt="Featured Project"
            sizes="100vw"
            width={1200}
            height={500}
            className="w-full h-full object-cover rounded"
          />
        </div>
        {/* title and timeline*/}
        <div className="flex flex-col xl:flex-row gap-4 xl:gap-0 xl:justify-between">
          <h2 className="text-2xl text-[#8750F7] font-bold">
            Green Leaf Book Store
          </h2>
          <div className="flex items-center space-x-3 ">
            <p className="text-base text-[#989BA4]">Completed in 25days</p>
            <Image width={25} height={25} alt="Calendar Icon" src={calendar} />
          </div>
        </div>
        {/* description */}
        <div>
          <p className=" text-base text-[#989BA4] leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
            doloribus assumenda similique tempora ducimus molestiae dolorum,
            fugiat, corrupti nihil quaerat veniam maxime ipsum eius? Inventore
            laborum repellat ducimus ut quis aspernatur sed molestiae! Non nam
            veritatis et nemo veniam provident dolorem reiciendis at nisi? Modi
            voluptas tempore fugiat ipsam magni adipisci quo, esse nostrum est
            eius, officiis id doloribus mollitia consectetur in quaerat, quam
            rem. Modi animi id architecto eum iusto veniam optio! Laboriosam
            adipisci perspiciatis reiciendis architecto placeat dolore veritatis
            ratione voluptatum, blanditiis aspernatur? Laudantium iusto, officia
            praesentium sed magni labore mollitia optio quis officiis sapiente
            maxime harum accusantium repellat alias ea beatae unde iure magnam
            fugit minus ullam. Aliquid minus omnis natus voluptatum. Unde,
            consequuntur cupiditate suscipit porro assumenda explicabo
            laudantium nesciunt at facilis laboriosam commodi iusto ex magni nam
            ad cumque deserunt praesentium nobis ullam eos sed? Vero, ut
            doloribus. Ut maiores veniam ullam rem natus ipsa dolorum cumque
            consequatur quaerat sed dignissimos distinctio earum quae illum
            adipisci, optio eum, dicta iusto dolorem numquam tempore unde
            laboriosam eos tempora. Delectus magnam nihil in, id earum possimus
            eius repellendus amet totam cum. Pariatur dicta consequatur mollitia
            quasi voluptas, reiciendis natus! Inventore quibusdam labore
            excepturi fugit libero accusantium sequi.
          </p>
        </div>
        {/* key features */}
        <div>
          <h3 className="text-[#8750F7] text-xl font-medium">Key Features:</h3>
          <ul className="text-[#989BA4] text-base list-inside list-disc">
            <li>
              Blogs Create, Read, Update, Delete (CRUD) blog posts Projects
            </li>
            <li>Manage portfolio projects dynamically</li>
            <li>Contacts Store and manage contact form submissions</li>
          </ul>
        </div>

        {/* technology used */}
        <div>
          <h3 className="text-[#8750F7] text-xl font-medium">
            Uses Technologies:
          </h3>
          <ul className="text-[#989BA4] text-base list-inside list-disc">
            <li>React</li>
            <li>Redux</li>
            <li>MongoDB</li>
            <li>Ant Design</li>
            <li>Express.js</li>
          </ul>
        </div>
        {/* project role */}
        <div>
          <h3 className="text-[#8750F7] text-xl font-medium">Project Role:</h3>
          <p className=" text-base text-[#989BA4] leading-relaxed">
            In this project, I served as the lead developer, responsible for
            designing the architecture, implementing the front-end and back-end,
            and integrating essential features to deliver a seamless user
            experience. My role also involved collaborating with a
            cross-functional team to ensure the project met all functional and
            non-functional requirements.
          </p>
        </div>
        {/*  Project goals & objectives */}
        <div>
          <h3 className="text-[#8750F7] text-xl font-medium">
            Project goals & objectives:
          </h3>
          <p className=" text-base text-[#989BA4] leading-relaxed">
            The primary goal of this project was to create an intuitive and
            user-friendly platform that effectively addresses [specific problem
            or need]. The objectives included: Designing a responsive and
            scalable user interface. Implementing robust back-end systems for
            seamless data management. Ensuring high performance, security, and
            accessibility across all devices. Delivering a reliable solution
            that meets the user’s needs while being cost-effective and
            maintainable. These objectives guided the development process,
            ensuring the project was delivered on time and aligned with user
            expectations.
          </p>
        </div>
        {/*  Challenges Faced:*/}
        <div>
          <h3 className="text-[#8750F7] text-xl font-medium">
            Challenges Faced:
          </h3>
          <p className=" text-base text-[#989BA4] leading-relaxed">
            Throughout the development process, I encountered several challenges
            that required creative solutions. Debugging complex issues in the
            integration between the front-end and back-end was a significant
            challenge, especially when identifying inconsistencies in data flow
            and API responses. To address performance concerns, I focused on
            optimizations like lazy loading and caching to improve load times
            and enhance user experience, especially when dealing with large
            datasets and dynamic content. Tight deadlines also presented
            challenges, requiring effective time management and prioritization
            to ensure high-quality delivery without compromising deadlines.
            Additionally, coordinating with cross-functional teams—such as
            designers—required clear communication and regular meetings to align
            on design and functional requirements, which helped keep the project
            on track. These challenges pushed me to improve my problem-solving
            skills and adapt to the dynamic needs of the project.
          </p>
        </div>

        {/*  Solution/Outcome*/}
        <div>
          <h3 className="text-[#8750F7] text-xl font-medium">
            Solution/Outcome:
          </h3>
          <p className=" text-base text-[#989BA4] leading-relaxed">
            To address the challenges, I implemented advanced logging and
            testing to resolve integration issues, ensuring stable data flow.
            Performance was optimized through lazy loading and caching,
            improving page load times by 30%. Agile project management allowed
            me to meet tight deadlines, while regular team syncs ensured
            alignment on design and functionality. As a result, the project was
            delivered on time with enhanced performance, smoother user
            experience, and improved user engagement, including a 20% decrease
            in bounce rate and a 25% increase in session duration.
          </p>
        </div>

        {/*  Solution/Outcome*/}
        <div>
          <h3 className="text-[#8750F7] text-xl font-medium">
            Future Improvements:
          </h3>
          <p className=" text-base text-[#989BA4] leading-relaxed">
            In the future, I plan to enhance the application by implementing
            additional security features like multi-factor authentication (MFA)
            and refining the performance with server-side rendering (SSR) for
            faster load times. I also aim to incorporate machine learning
            algorithms for personalized user experiences and explore more
            advanced analytics to track user behavior and optimize features.
            Additionally, I will continue to improve accessibility, ensuring the
            app is fully compliant with WCAG standards. Regular updates and
            feature enhancements will be made based on user feedback and
            emerging industry best practices.
          </p>
        </div>
        {/*  Security Considerations*/}
        <div>
          <h3 className="text-[#8750F7] text-xl font-medium">
            Security Considerations:
          </h3>
          <p className=" text-base text-[#989BA4] leading-relaxed">
            I prioritized security by using JWT for secure authentication and
            HTTPS to encrypt data transmission. Input validation and
            sanitization were implemented to prevent SQL injection and XSS
            attacks. API keys and sensitive data were stored in environment
            variables, and role-based access control was used to restrict
            feature access. Regular security audits ensured the application
            remained secure and reliable.
          </p>
        </div>
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
          <Button
            asChild
            className="bg-[#8750F7] hover:bg-[#733DD6] text-white"
          >
            <Link href="#" target="_blank" rel="noopener noreferrer">
              Api Documentation <FaBook size={18} />
            </Link>
          </Button>
        </div>
      </div>
    </Fragment>
  );
}
