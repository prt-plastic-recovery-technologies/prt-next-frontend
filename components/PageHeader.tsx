"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, ChevronDown } from "lucide-react"

export default function PageHeader() {
  return (
    <div className="w-full bg-white border border-neutral-200 py-6 dark:bg-neutral-950 dark:border-neutral-800">
      <div className="container px-6">
        <div className="flex justify-between items-center gap-2">
          <div className="flex flex-col gap-1">
            <h2 className="text-neutral-950 text-base font-medium leading-none dark:text-neutral-50">
              Manage devices
            </h2>
            <p className="text-neutral-500 text-xs font-medium leading-none dark:text-neutral-400">
              This section allows you to add, edit, and manage all devices.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-500 dark:text-neutral-400" />
              <Input 
                className="pl-9 h-10 w-[280px]" 
                placeholder="Search devices"
                type="search"
              />
            </div>

            <Button variant="outline">
              Organization
              <ChevronDown className="h-4 w-4" />
            </Button>

            <Button variant="outline">
              Compactor Status
              <ChevronDown className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
