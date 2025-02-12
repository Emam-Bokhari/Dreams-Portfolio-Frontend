import { LogOut, Moon, Settings } from "lucide-react";
import logo from "@/assets/Logo.png";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";
import Image from "next/image";
import Link from "next/link";
import SidebarGroupComponent from "./dashboard/SidebarGroupComponent";
import {
  FilePlus,
  FolderKanban,
  Edit,
  BookOpenText,
  Users,
} from "lucide-react";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

// menu items
const project = [
  {
    title: "Create Project",
    url: "/dashboard/projects/create-project",
    icon: FilePlus,
  },
  {
    title: "Projects",
    url: "/dashboard/projects",
    icon: FolderKanban,
  },
];

const blog = [
  {
    title: "Create Blog",
    url: "#",
    icon: Edit,
  },
  {
    title: "Blogs",
    url: "#",
    icon: BookOpenText,
  },
];

const contact = [
  {
    title: "Contacts",
    url: "#",
    icon: Users,
  },
];

export function AppSidebar() {
  return (
    <Sidebar className="bg-[#140C1C]">
      <SidebarHeader className="bg-[#140C1C]">
        <Link href="/">
          <div className="flex gap-2">
            <Image src={logo} width={40} height={40} alt="Logo" />
            <div className="leading-[0.8] text-sm">
              <h2 className="text-base">Portfolio</h2>
              <small className="text-xs">Moshfiqur Rahman</small>
            </div>
          </div>
        </Link>
      </SidebarHeader>
      <SidebarContent className="bg-[#140C1C]">
        <SidebarGroupComponent label="Project" items={project} />
        <SidebarGroupComponent label="Blog" items={blog} />
        <SidebarGroupComponent label="Contact" items={contact} />
      </SidebarContent>
      <SidebarFooter className="border-t border-gray-700 p-3">
        {/* user info */}
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage
              src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?t=st=1739330618~exp=1739334218~hmac=48e3a273f703d93d105f61cfda8b83bf464b093f5dd5f75385a1fda545a9b24c&w=996"
              alt="User Avatar"
            />
            <AvatarFallback>MR</AvatarFallback>
          </Avatar>
          <div className="text-white text-sm">
            <p className="font-medium">Moshfiqur Rahman</p>
            <p className="text-[11px] text-gray-400">
              moshfiqurrahman37@email.com
            </p>
          </div>
        </div>

        {/* actions */}
        <div className="mt-3 flex justify-between">
          {/* theme toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-gray-800"
          >
            <Moon className="w-5 h-5" />
          </Button>

          {/* settings */}
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-gray-800"
          >
            <Settings className="w-5 h-5" />
          </Button>

          {/* logout */}
          <Button className="bg-[#8750F7] hover:bg-[#733DD6] text-white flex items-center gap-2">
            <LogOut className="w-5 h-5" />
            Log Out
          </Button>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
