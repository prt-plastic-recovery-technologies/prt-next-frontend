"use client"

import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn } from "@/lib/utils"

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      "relative w-full h-full overflow-hidden rounded-md flex flex-col-reverse",
      className
    )}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className="w-full bg-[#0891b2] transition-all dark:bg-[#067a95] rounded"
      style={{ height: `${value || 0}%` }}
    />
  </ProgressPrimitive.Root>
))

Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
