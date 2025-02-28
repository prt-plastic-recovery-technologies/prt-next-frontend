"use client";

import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";

export default function PopoverContent() {
  // State for switches
  const [stopForwardStatus, setStopForwardStatus] = useState(false);
  const [holdToRunStatus, setHoldToRunStatus] = useState(false);
  const [startForwardStatus, setStartForwardStatus] = useState(false);
  const [multiCycle, setMultiCycle] = useState(false);

  // State for slider
  const [sliderValue, setSliderValue] = useState([1400]);

  return (
    <div className="max-h-[calc(100vh-100px)] overflow-y-auto p-4 bg-white rounded-lg space-y-4 dark:bg-neutral-950">
      <div className="flex items-center">
        <h4 className="text-sm font-medium text-neutral-950 dark:text-neutral-50">
          Change Logs
        </h4>
      </div>

      <Separator />

      {/* Grid Layout for Mobile & Desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Previous Logs */}
        <Card className="p-3 space-y-4">
          <h4 className="text-sm font-medium text-neutral-950 dark:text-neutral-50">
            Previous
          </h4>

          <div className="bg-neutral-100 rounded-md p-2 space-y-3 dark:bg-neutral-800">
            <div className="grid grid-cols-2 text-xs text-sidebar-foreground">
              <p>Configuration</p>
              <p>Status</p>
            </div>

            {[
              {
                label: "Stop Forward Status",
                state: stopForwardStatus,
                setState: setStopForwardStatus,
              },
              {
                label: "Hold to Run Status",
                state: holdToRunStatus,
                setState: setHoldToRunStatus,
              },
              {
                label: "Start Forward Status",
                state: startForwardStatus,
                setState: setStartForwardStatus,
              },
              {
                label: "Multi Cycle",
                state: multiCycle,
                setState: setMultiCycle,
              },
            ].map(({ label, state, setState }) => (
              <div key={label} className="flex justify-between items-center">
                <span className="text-xs font-medium text-neutral-950 dark:text-neutral-50">
                  {label}
                </span>
                <Switch checked={state} onCheckedChange={setState} />
              </div>
            ))}

            {/* Slider */}
            <div className="space-y-2">
              <span className="text-xs font-medium text-neutral-950 dark:text-neutral-50">
                Advance Fullness (1200 to 1600) DEF:1600
              </span>
              <Slider
                value={sliderValue}
                onValueChange={setSliderValue}
                max={1600}
                min={1200}
                step={1}
              />
              <div className="flex justify-between">
                <span className="text-xs font-medium text-neutral-950 dark:text-neutral-50">
                  1200
                </span>
                <span className="text-xs font-medium text-neutral-950 dark:text-neutral-50">
                  1600
                </span>
              </div>
            </div>
          </div>
        </Card>

        {/* Updated Logs */}
        <Card className="p-3 space-y-4">
          <h4 className="text-sm font-medium text-neutral-950 dark:text-neutral-50">
            Updated
          </h4>

          <div className="bg-neutral-100 rounded-md p-2 space-y-3 dark:bg-neutral-800">
            <div className="grid grid-cols-2 text-xs text-sidebar-foreground">
              <p>Metric</p>
              <p>Value</p>
            </div>

            {[
              {
                label: "Stop Forward Status",
                state: stopForwardStatus,
                setState: setStopForwardStatus,
              },
              {
                label: "Hold to Run Status",
                state: holdToRunStatus,
                setState: setHoldToRunStatus,
              },
              {
                label: "Start Forward Status",
                state: startForwardStatus,
                setState: setStartForwardStatus,
              },
              {
                label: "Multi Cycle",
                state: multiCycle,
                setState: setMultiCycle,
              },
            ].map(({ label, state, setState }) => (
              <div key={label} className="flex justify-between items-center">
                <span className="text-xs font-medium text-neutral-950 dark:text-neutral-50">
                  {label}
                </span>
                <Switch checked={state} onCheckedChange={setState} />
              </div>
            ))}

            {/* Slider */}
            <div className="space-y-2">
              <span className="text-xs font-medium text-neutral-950 dark:text-neutral-50">
                Advance Fullness (1200 to 1600) DEF:1600
              </span>
              <Slider
                value={sliderValue}
                onValueChange={setSliderValue}
                max={1600}
                min={1200}
                step={1}
              />
              <div className="flex justify-between">
                <span className="text-xs font-medium text-neutral-950 dark:text-neutral-50">
                  1200
                </span>
                <span className="text-xs font-medium text-neutral-950 dark:text-neutral-50">
                  1600
                </span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
