"use client"

import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import {
  Home,
  Keyboard,
  Activity,
  BarChart2,
  FileBarChart,
  Landmark,
  Users,
  ChevronsUpDown,
} from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { useRouter } from "next/navigation";

export default function Sidebar() {
  const [isOpen, SetisOpen] = useState(false);
  const router = useRouter();
  const handleLogOut = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("refreshToken");
    router.push("/");
  }
  return (
    <div className="flex h-screen w-64 flex-col bg-sidebar border-r border-sidebar-border">
      <div className="p-2 space-y-2">
        <div className="flex items-center gap-2 p-2 rounded-md">
          <Image
            src="/images/prtLogo.png"
            alt="Logo"
            width={32}
            height={32}
          />
          <div>
            <p className="text-sm font-semibold text-sidebar-foreground">
              PRT SmartC
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-2">
        <div className="p-2">
          <nav className="space-y-1">
            <Button
              variant="ghost"
              className="w-full justify-start"
            >
              <Home className="mr-2 h-4 w-4" />
              Dashboard
            </Button>

            <Button
              variant="secondary"
              className="w-full justify-start font-medium"
            >
              <Keyboard className="mr-2 h-4 w-4" />
              Devices
            </Button>

            <Button
              variant="ghost"
              className="w-full justify-start"
            >
              <Activity className="mr-2 h-4 w-4" />
              User Activity
            </Button>

            <Button
              variant="ghost"
              className="w-full justify-start"
            >
              <BarChart2 className="mr-2 h-4 w-4" />
              Alert History
            </Button>

            <Button
              variant="ghost"
              className="w-full justify-start"
            >
              <FileBarChart className="mr-2 h-4 w-4" />
              Reporting
            </Button>

            <Button
              variant="ghost"
              className="w-full justify-start"
            >
              <Landmark className="mr-2 h-4 w-4" />
              Organizations
            </Button>

            <Button
              variant="ghost"
              className="w-full justify-start"
            >
              <Users className="mr-2 h-4 w-4" />
              Users
            </Button>
          </nav>
        </div>
      </div>

      {/* Footer */}

      <div className="p-2 relative">
        {/* Dropdown Button */}
        <Button
          variant="ghost"
          className="w-full justify-between p-2"
          onClick={() => SetisOpen(!isOpen)}
        >
          <div className="flex items-center gap-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src="https://github.com/shadcn.png" alt="User avatar" />
            </Avatar>
            <div className="flex flex-col items-start">
              <span className="text-sm font-semibold text-sidebar-foreground">
                shadcn
              </span>
              <span className="text-xs text-sidebar-foreground">
                m@example.com
              </span>
            </div>
          </div>
          <ChevronsUpDown
            className={`h-4 w-4 text-sidebar-foreground transition-transform ${isOpen ? "rotate-180" : ""
              }`}
          />
        </Button>
        {isOpen && (
          <div className="absolute left-0 bottom-full mb-2 w-full bg-white border rounded-lg shadow-lg z-50">
            <ul className="p-2 text-sm text-gray-700">
              {/* <li className="p-2 hover:bg-gray-100 cursor-pointer">Profile</li>
            <li className="p-2 hover:bg-gray-100 cursor-pointer">Settings</li> */}
              <li
                className="p-2 font-bold text-red-500 hover:bg-gray-100 cursor-pointer"
                onClick={handleLogOut}
              >Logout</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}
