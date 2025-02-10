import Image from "next/image";
import logo from "@/assets/Logo.png";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Home,
  Info,
  Briefcase,
  PenTool,
  Menu,
  Contact,
  LogInIcon,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import NavigationLink from "./NavigationLink";
import { ModeToggle } from "./ModeToggle";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 border-2 border-red-500 text-[#110E18] dark:text-white  lg:max-w-screen-2xl mx-auto">
      {/* Left side - Logo */}
      <div className="text-xl font-bold">
        <Link href="/">
          <Image src={logo} alt="Logo" width={50} height={50} />
        </Link>
      </div>

      {/* Right side - Navigation links and Login button */}
      <div className="hidden lg:flex items-center space-x-6">
        <NavigationLink path="/" route="Home" />
        <NavigationLink path="/about" route="About" />
        <NavigationLink path="/projects" route="Projects" />
        <NavigationLink path="/blogs" route="Blogs" />
        <NavigationLink path="/contact" route="Contact" />
        <ModeToggle />
        <Button className="bg-[#8750F7] hover:bg-[#733DD6]">
          <LogInIcon className="w-4 h-4" />
          Login
        </Button>
      </div>

      {/* Hamburger Menu for mobile */}
      {/* Hamburger Menu for small devices */}
      <div className="lg:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Menu />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Explore</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Home className="w-4 h-4  " />
                Home
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Info className="w-4 h-4" />
                About
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Briefcase className="w-4 h-4" />
                Projects
              </DropdownMenuItem>
              <DropdownMenuItem>
                <PenTool className="w-4 h-4" />
                Blogs
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Contact className="w-4 h-4" />
                Contact
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogInIcon className="w-4 h-4" />
              Login
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}
