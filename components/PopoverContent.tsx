"use client"

import { Card } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { Separator } from "@/components/ui/separator"
import { useState } from "react"

export default function PopoverContent() {
  // State for switches
  const [stopForwardStatus, setStopForwardStatus] = useState(false)
  const [holdToRunStatus, setHoldToRunStatus] = useState(false)
  const [startForwardStatus, setStartForwardStatus] = useState(false)
  const [multiCycle, setMultiCycle] = useState(false)
  
  // State for slider
  const [sliderValue, setSliderValue] = useState([1400])

  return (
    <div className="p-4 bg-white rounded-lg space-y-4 dark:bg-neutral-950">
      <div className="flex items-center">
        <h4 className="text-sm font-medium text-neutral-950 dark:text-neutral-50">Change Logs</h4>
      </div>
      
      <Separator />
      
      <div className="flex gap-4">
        <Card className="p-3 space-y-4 flex-1">
          <h4 className="text-sm font-medium text-neutral-950 dark:text-neutral-50">Previous</h4>
          
          <div className="bg-neutral-100 rounded-md p-2 space-y-2 dark:bg-neutral-800">
            <div className="flex gap-2">
              <p className="text-xs text-sidebar-foreground">Configuration</p>
              <p className="text-xs text-sidebar-foreground">Status</p>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-xs font-medium text-neutral-950 dark:text-neutral-50">Stop Forward Status</span>
              <Switch checked={stopForwardStatus} onCheckedChange={setStopForwardStatus} />
            </div>

            <div className="flex justify-between items-center">
              <span className="text-xs font-medium text-neutral-950 dark:text-neutral-50">Hold to Run Status</span>
              <Switch checked={holdToRunStatus} onCheckedChange={setHoldToRunStatus} />
            </div>

            <div className="flex justify-between items-center">
              <span className="text-xs font-medium text-neutral-950 dark:text-neutral-50">Start Forward Status</span>
              <Switch checked={startForwardStatus} onCheckedChange={setStartForwardStatus} />
            </div>

            <div className="flex justify-between items-center">
              <span className="text-xs font-medium text-neutral-950 dark:text-neutral-50">Multi Cycle</span>
              <Switch checked={multiCycle} onCheckedChange={setMultiCycle} />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-medium text-neutral-950 dark:text-neutral-50">Advance Fullness (1200 to 1600) DEF:1600</span>
              <Slider
                value={sliderValue}
                onValueChange={setSliderValue}
                max={1600}
                min={1200}
                step={1}
              />
              <div className="flex justify-between">
                <span className="text-xs font-medium text-neutral-950 dark:text-neutral-50">1200</span>
                <span className="text-xs font-medium text-neutral-950 dark:text-neutral-50">1600</span>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-3 space-y-4 flex-1">
          <h4 className="text-sm font-medium text-neutral-950 dark:text-neutral-50">Updated</h4>
          
          <div className="bg-neutral-100 rounded-md p-2 space-y-2 dark:bg-neutral-800">
            <div className="flex gap-2">
              <p className="text-xs text-sidebar-foreground">Metric</p>
              <p className="text-xs text-sidebar-foreground">Value</p>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-xs font-medium text-neutral-950 dark:text-neutral-50">Stop Forward Status</span>
              <Switch checked={stopForwardStatus} onCheckedChange={setStopForwardStatus} />
            </div>

            <div className="flex justify-between items-center">
              <span className="text-xs font-medium text-neutral-950 dark:text-neutral-50">Hold to Run Status</span>
              <Switch checked={holdToRunStatus} onCheckedChange={setHoldToRunStatus} />
            </div>

            <div className="flex justify-between items-center">
              <span className="text-xs font-medium text-neutral-950 dark:text-neutral-50">Start Forward Status</span>
              <Switch checked={startForwardStatus} onCheckedChange={setStartForwardStatus} />
            </div>

            <div className="flex justify-between items-center">
              <span className="text-xs font-medium text-neutral-950 dark:text-neutral-50">Multi Cycle</span>
              <Switch checked={multiCycle} onCheckedChange={setMultiCycle} />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-medium text-neutral-950 dark:text-neutral-50">Advance Fullness (1200 to 1600) DEF:1600</span>
              <Slider
                value={sliderValue}
                onValueChange={setSliderValue}
                max={1600}
                min={1200}
                step={1}
              />
              <div className="flex justify-between">
                <span className="text-xs font-medium text-neutral-950 dark:text-neutral-50">1200</span>
                <span className="text-xs font-medium text-neutral-950 dark:text-neutral-50">1600</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
