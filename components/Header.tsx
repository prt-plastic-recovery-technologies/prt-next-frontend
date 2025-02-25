"use client"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { PanelLeft, CircleUser } from "lucide-react"

export default function Header() {
  return (
    <header className="h-16 bg-white border-b border-neutral-200 flex items-center dark:bg-neutral-950 dark:border-neutral-800">
      <div className="flex items-center justify-between px-6 w-full">
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7 rounded-md"
          >
            <PanelLeft className="h-4 w-4" />
          </Button>
          
          <div className="flex items-center h-[15px]">
            <Separator orientation="vertical" />
          </div>

          <nav>
            <Button
              variant="link"
              className="h-5 px-0 text-neutral-950 hover:no-underline dark:text-neutral-50"
            >
              Devices
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}
