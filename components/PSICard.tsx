"use client"

import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function PSICard() {
  return (
    <Card className="w-40 p-3 bg-neutral-100 flex flex-col gap-4 dark:bg-neutral-800">
      {/* Labels */}
      <div className="flex flex-col">
        <div className="flex items-center">
          <span className="text-xs font-medium text-sidebar-foreground/70">
            Last Cycle
          </span>
        </div>
        <div className="flex items-center">
          <span className="text-xs font-medium text-neutral-950/70 dark:text-neutral-50/70">
            Max PSI Forward
          </span>
        </div>
      </div>

      {/* Chart Section */}
      <div className="relative flex flex-col items-center">
        {/* Radial Progress */}
        <div className="relative w-[124px] h-[124px]">
          <div className="absolute inset-0">
            <Progress
              value={22.3}
              className="h-full w-full rounded-full border-[8px] border-slate-300"
              indicatorClassName="bg-sky-600"
            />
            {/* Center Text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-2xl font-bold text-neutral-950 dark:text-neutral-50">268</span>
              <span className="text-xs text-neutral-500 dark:text-neutral-400">PSI</span>
            </div>
          </div>
        </div>

        {/* Min/Max Labels */}
        <div className="flex justify-between w-full mt-2">
          <div className="flex flex-col items-center">
            <span className="text-[8px] text-[#75757B]">Min</span>
            <span className="text-[10px] text-neutral-900 dark:text-neutral-50">100</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[8px] text-[#75757B]">Max</span>
            <span className="text-[10px] text-neutral-900 dark:text-neutral-50">1200</span>
          </div>
        </div>
      </div>
    </Card>
  )
}
