"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Home, Keyboard, Activity, BarChart2, FileBarChart, Landmark, Users, ChevronsUpDown, Building } from "lucide-react";
import Image from "next/image";
import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";

// Import a default icon if you don't have specific logos
// Using Building icon from lucide-react as a placeholder
const DefaultLogo = () => (
  <Image src="/images/prtLogo.png" alt="PRT SmartC" width={24} height={24} />
);

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "https://github.com/shadcn.png",
  },
  navMain: [
    { title: "Dashboard", url: "#", icon: Home },
    { title: "Devices", url: "#", icon: Keyboard },
    { title: "User Activity", url: "#", icon: Activity },
    { title: "Alert History", url: "#", icon: BarChart2 },
    { title: "Reporting", url: "#", icon: FileBarChart },
    { title: "Organizations", url: "#", icon: Landmark },
    { title: "Users", url: "#", icon: Users },
  ],
  teams: [{ name: "PRT", plan: "SmartC", logo: DefaultLogo }], // Added the logo property
};

export default function SidebarComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const handleLogOut = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("refreshToken");
    router.push("/");
  };

  return (
    <SidebarProvider>
      <Sidebar collapsible="icon" className="sidebar-height">
        <SidebarHeader>
          <TeamSwitcher teams={data.teams} />
        </SidebarHeader>
        <SidebarContent>
          <NavMain items={data.navMain} />
        </SidebarContent>
        <SidebarFooter>
          <NavUser user={data.user} />
        </SidebarFooter>
      </Sidebar>

      <SidebarInset className="flex-1 overflow-hidden">
        <div className="p-2 relative">
          <Button variant="ghost" className="w-full justify-between p-2" onClick={() => setIsOpen(!isOpen)}>
            <div className="flex items-center gap-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src={data.user.avatar} alt="User avatar" />
              </Avatar>
              <div className="flex flex-col items-start">
                <span className="text-sm font-semibold text-sidebar-foreground">{data.user.name}</span>
                <span className="text-xs text-sidebar-foreground">{data.user.email}</span>
              </div>
            </div>
            <ChevronsUpDown className={`h-4 w-4 text-sidebar-foreground transition-transform ${isOpen ? "rotate-180" : ""}`} />
          </Button>
          {isOpen && (
            <div className="absolute left-0 bottom-full mb-2 w-full bg-white border rounded-lg shadow-lg z-50">
              <ul className="p-2 text-sm text-gray-700">
                <li className="p-2 font-bold text-red-500 hover:bg-gray-100 cursor-pointer" onClick={handleLogOut}>
                  Logout
                </li>
              </ul>
            </div>
          )}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}