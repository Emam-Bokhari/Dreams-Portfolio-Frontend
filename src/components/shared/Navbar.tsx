import Image from "next/image";
import logo from "@/assets/Logo.png";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-8 border-2 border-red-500 text-white lg:w-[80%] mx-auto">
      {/* Left side - Logo */}
      <div className="text-xl font-bold">
        <Link href="/">
          <Image src={logo} alt="Logo" width={50} height={50} />
        </Link>
      </div>

      {/* Right side - Navigation links and Login button */}
      <div className="hidden lg:flex items-center space-x-6">
        <Link
          href="#home"
          className="transition-all duration-300 relative group"
        >
          Home
          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#733DD6] transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link
          href="#about"
          className="transition-all duration-300 relative group"
        >
          About
          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#733DD6] transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link
          href="#projects"
          className="transition-all duration-300 relative group"
        >
          Projects
          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#733DD6] transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link
          href="#blogs"
          className="transition-all duration-300 relative group"
        >
          Blogs
          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#733DD6] transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link
          href="#contact"
          className="transition-all duration-300 relative group"
        >
          Contact
          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#733DD6] transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Button className="bg-[#8750F7] hover:bg-[#733DD6]">Login</Button>
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
              <DropdownMenuItem>Home</DropdownMenuItem>
              <DropdownMenuItem>About</DropdownMenuItem>
              <DropdownMenuItem>Projects</DropdownMenuItem>
              <DropdownMenuItem>Blogs</DropdownMenuItem>
              <DropdownMenuItem>Contact</DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Login</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}
