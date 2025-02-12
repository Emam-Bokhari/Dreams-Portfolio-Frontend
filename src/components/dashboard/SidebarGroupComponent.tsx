import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import Link from "next/link";

export default function SidebarGroupComponent({
  label,
  items,
}: {
  label: string;
  items: { title: string; url: string; icon: React.ElementType }[];
}) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel className="text-[#989BA4]">{label}</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild>
                <Link href={item.url} className="hover:bg-[#2A1B30]">
                  <item.icon className="text-[#989BA4]" />

                  <span className="text-white">{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
