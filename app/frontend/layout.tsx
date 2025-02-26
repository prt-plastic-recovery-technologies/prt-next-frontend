"use client";

import Header from "@/components/Header";
import { useEffect, useState } from "react";
import Image from "next/image";
import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar";
import {
  Home,
  Keyboard,
  Activity,
  BarChart2,
  FileBarChart,
  Landmark,
  Users,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { ModeToggle } from "@/components/theme-toggler";

// Define the DefaultLogo component outside of the Layout component
const DefaultLogo = () => (
  <Image src="/images/prtLogo.png" alt="PRT SmartC" width={24} height={24} />
);

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  // Define all state hooks at the top level, before any conditional returns
  const [isOpen, setIsOpen] = useState(false);

  const checkAuth = () => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("authToken");

      if (!token) {
        router.push("/auth/login");
      } else {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  const handleLogOut = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("refreshToken");
    router.push("/");
  };

  // Define data outside of the conditional rendering
  const data = {
    user: {
      name: "shadcn",
      email: "m@example.com",
      avatar: "https://github.com/shadcn.png",
    },
    navMain: [
      { title: "Dashboard", url: "#", icon: Home },
      { title: "Devices", url: "/frontend/devices/list", icon: Keyboard },
      { title: "User Activity", url: "#", icon: Activity },
      { title: "Alert History", url: "#", icon: BarChart2 },
      { title: "Reporting", url: "#", icon: FileBarChart },
      { title: "Organizations", url: "#", icon: Landmark },
      { title: "Users", url: "#", icon: Users },
    ],
    teams: [{ name: "PRT", plan: "SmartC", logo: DefaultLogo }],
  };

  if (loading) {
    return <div>Loading...</div>;
  }

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
        <Header />
        {/* <div className="flex items-center">
                <ModeToggle />
              </div> */}

        <div className="bg-background h-full overflow-auto">
          {/* Main content container */}
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}