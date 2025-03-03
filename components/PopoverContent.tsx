"use client";

import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Separator } from "@/components/ui/separator";

interface PopoverContentProps {
  changes: { field: string; old_value: string | number; new_value: string | number }[];
  switches: { [key: string]: boolean };
  sliders: { [key: string]: number[] };
}

const switchLabels: { [key: string]: string } = {
  s1: "Stop Forward Status",
  s2: "Hold to Run Status",
  s3: "Start Forward Status",
  s4: "Single Phase",
  s5: "Multi Cycle",
  s6: "Return Pressure",
  s7: "Door Count",
  s8: "Forward Time",
  s9: "Reverse Time",
  s10: "Timer Status",
  s11: "Timer Start Time",
  s12: "Additional Feature",
};

const sliderLabels: { [key: string]: { label: string; min: number; max: number } } = {
  zs1: { label: "Advance Fullness", min: 1200, max: 1600 },
  zs2: { label: "Maximum Fullness", min: 1200, max: 2400 },
  zs3: { label: "Oil Temperature (80°C)", min: 112, max: 130 },
  zs4: { label: "Oil Temperature (100°C)", min: 130, max: 150 },
  zs5: { label: "Motor Run Time (80°C)", min: 50, max: 80 },
  zs6: { label: "Motor Run Time (100°C)", min: 90, max: 120 },
  zs7: { label: "PM Cycles (80°C)", min: 6000, max: 7500 },
  zs8: { label: "PM Cycles (100°C)", min: 7600, max: 10000 },
  zs9: { label: "Advance Backpack", min: 1500, max: 1800 },
  zs10: { label: "Maximum Backpack", min: 1900, max: 2200 },
};


export default function PopoverContent({ changes, switches, sliders }: PopoverContentProps) {
  const changedSwitches = changes.filter(change => switchLabels[change.field]);
  const changedSliders = changes.filter(change => sliderLabels[change.field]);

  return (
    <div className="max-h-[calc(100vh-100px)] overflow-y-auto p-4 bg-white rounded-lg space-y-4 dark:bg-neutral-950">
      <div className="flex items-center">
        <h4 className="text-sm font-medium text-neutral-950 dark:text-neutral-50">Change Logs</h4>
      </div>
      <Separator />

      {/* Grid Layout for Comparison */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {['Previous', 'Updated'].map((title, index) => (
          <Card key={title} className="p-3 space-y-4">
            <h4 className="text-sm font-medium text-neutral-950 dark:text-neutral-50">{title}</h4>
            <div className="bg-neutral-100 rounded-md p-2 space-y-3 dark:bg-neutral-800">
              <div className="grid grid-cols-2 text-xs text-sidebar-foreground">
             
              </div>

              {/* Switches - Show Only Changed */}
              {changedSwitches.map(({ field, old_value, new_value }) => (
                <div key={field} className="flex justify-between items-center">
                  <span className="text-xs font-medium text-neutral-950 dark:text-neutral-50">
                    {switchLabels[field]}
                  </span>
                  <Switch checked={index === 0 ? old_value === '1' : new_value === '1'} disabled />
                </div>
              ))}

              {/* Sliders - Show Only Changed */}
              {changedSliders.map(({ field, old_value, new_value }) => (
                <div key={field} className="space-y-2">
                  <span className="text-xs font-medium text-neutral-950 dark:text-neutral-50">
                    {sliderLabels[field]?.label}
                  </span>
                  <Slider
                    value={[index === 0 ? Number(old_value) : Number(new_value)]}
                    min={sliderLabels[field]?.min ?? 0}
                    max={sliderLabels[field]?.max ?? 100}
                    step={1}
                    disabled
                  />
                  <div className="flex justify-between">
                    <span className="text-xs font-medium text-neutral-950 dark:text-neutral-50">{index === 0 ? old_value : new_value}</span>
                    <span className="text-xs font-medium text-neutral-950 dark:text-neutral-50">{sliderLabels[field]?.max}</span>
                  </div>
                </div>
              ))}

            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}