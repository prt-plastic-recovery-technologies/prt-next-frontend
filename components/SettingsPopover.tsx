"use client";

import * as React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { CircleX, Save } from "lucide-react";

import PopoverContent from "@/components/PopoverContent";
import {
  Dialog,
  DialogTrigger,
  DialogContent
} from "@/components/ui/dialog";

export default function SettingsPopover() {
  const [switches, setSwitches] = React.useState({
    stopForward: false,
    holdToRun: false,
    startForward: false,
    singlePhase: false,
    multiCycle: false,
    retPressure: false,
    doorCount: false,
    forwardTime: false,
    revTime: false,
    timerStatus: false,
    timerStartTime: false,
  });

  const [sliders, setSliders] = React.useState({
    advanceFullness: [1600],
    maximumFullness: [1800],
    oilTemp80: [112],
    oilTemp100: [140],
    motorRunTime: [80],
  });

  return (
    <div className="p-4 space-y-4 bg-white rounded-lg shadow-lg dark:bg-neutral-950">
      <Card className="p-3">
        <div className="flex justify-between items-center">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <h2 className="text-neutral-950 text-base font-semibold dark:text-neutral-50">
                Venetian LV
              </h2>
              <Badge>Republic Services</Badge>
            </div>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">
              View and update your device settings here.
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={() => {}}>
              <CircleX className="mr-2 h-4 w-4" />
              Discard
            </Button>

            <Dialog>
              {/* Trigger Button */}
              <DialogTrigger asChild>
                <Button onClick={() => {}}>
                  <Save className="mr-2 h-4 w-4" />
                  Save Changes
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-3xl w-full">
                <PopoverContent />
              </DialogContent>
            </Dialog>
          </div>
        </div>
        <Separator className="mt-3" />
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="p-3 space-y-4">
          <h3 className="text-sm font-medium">HMI Settings</h3>
          <div className="bg-neutral-100 p-2 rounded-md space-y-2 dark:bg-neutral-800">
            <div className="grid grid-cols-2 gap-2 text-xs text-sidebar-foreground">
              <div>Configuration</div>
              <div>Status</div>
            </div>

            {Object.entries(switches).map(([key, value]) => (
              <div key={key} className="flex justify-between items-center">
                <span className="text-sm font-medium">
                  {key.replace(/([A-Z])/g, "' $1'").trim()}
                </span>
                <Switch
                  checked={value}
                  onCheckedChange={(checked) =>
                    setSwitches((prev) => ({ ...prev, [key]: checked }))
                  }
                />
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-3 space-y-4">
          <h3 className="text-sm font-medium">Compactor Threshold</h3>
          <div className="bg-neutral-100 p-2 rounded-md space-y-4 dark:bg-neutral-800">
            <div className="grid grid-cols-2 gap-2 text-xs text-sidebar-foreground">
              <div>Metric</div>
              <div>Value</div>
            </div>

            {Object.entries(sliders).map(([key, value]) => (
              <div key={key} className="space-y-2">
                <label className="text-sm font-medium">
                  {key.replace(/([A-Z])/g, "' $1'").trim()}
                </label>
                <Slider
                  value={value}
                  min={key.includes("'oil'") ? 112 : 1200}
                  max={key.includes("'oil'") ? 150 : 2400}
                  step={1}
                  onValueChange={(newValue) =>
                    setSliders((prev) => ({ ...prev, [key]: newValue }))
                  }
                />
                <div className="flex justify-between text-sm">
                  <span>{value[0]}</span>
                  <span>{key.includes("'oil'") ? 150 : 2400}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
