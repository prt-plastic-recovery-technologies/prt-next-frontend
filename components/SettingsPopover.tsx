"use client";

import React, { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { CircleX, Save } from "lucide-react";

import PopoverContent from "@/components/PopoverContent";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";

interface SystemStatusProps {
  device?: {
    id: bigint;
    s1: boolean;
    s2: boolean;
    s3: boolean;
    s4: boolean;
    s5: boolean;
    s6: boolean;
    s7: boolean;
    s8: boolean;
    s9: boolean;
    s10: boolean;
    s11: boolean;
    s12: boolean;
    zs1: bigint;
    zs2: bigint;
    zs3: bigint;
    zs4: bigint;
    zs5: bigint;
    zs6: bigint;
    zs7: bigint;
    zs8: bigint;
    zs9: bigint;
    zs10: bigint;
  };
}

export default function SettingsPopover({ device }: SystemStatusProps) {

  const [loading, setLoading] = useState(false);
  
  const [switches, setSwitches] = React.useState({
    stopForward: device?.s1 ?? false,
    holdToRun: device?.s2 ?? false,
    startForward: device?.s3 ?? false,
    singlePhase: device?.s4 ?? false,
    multiCycle: device?.s5 ?? false,
    retPressure: device?.s6 ?? false,
    doorCount: device?.s7 ?? false,
    forwardTime: device?.s8 ?? false,
    revTime: device?.s9 ?? false,
    timerStatus: device?.s10 ?? false,
    timerStartTime: device?.s11 ?? false,
    additionalFeature: device?.s12 ?? false,
  });

  const [sliders, setSliders] = React.useState({
    advanceFullness: [device?.zs1 ?? 1600, 1200, 1600],
    maximumFullness: [device?.zs2 ?? 1800, 1200, 2400],
    oilTemp80: [device?.zs3 ?? 112, 112, 130],
    oilTemp100: [device?.zs4 ?? 140, 130, 150],
    motorRunTime80: [device?.zs5 ?? 80, 50, 80],
    motorRunTime100: [device?.zs6 ?? 100, 90, 120],
    pmCycles80: [device?.zs7 ?? 7200, 6000, 7500],
    pmCycles100: [device?.zs8 ?? 9000, 7600, 10000],
    advanceBackpack: [device?.zs9 ?? 1800, 1500, 1800],
    maximumBackpack: [device?.zs10 ?? 2000, 1900, 2200],
  });


  const onSaveChanges = async () => {
    if (!device?.id) return;

    setLoading(true);

    const payload = {
      id: device.id,
      switches,
      sliders: Object.fromEntries(
        Object.entries(sliders).map(([key, [value]]) => [key, value])
      ),
    };

    const API_URL = process.env.NEXT_PUBLIC_API_URL;

    try {
      const response = await fetch(`${API_URL}/api/device/update/${device.id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        console.log("Device settings updated successfully!");
      } else {
        console.error("Failed to update device settings");
      }
    } catch (error) {
      console.error("Error updating settings. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="max-h-[calc(100vh-100px)] overflow-y-auto p-4 space-y-4 bg-white rounded-lg shadow-lg dark:bg-neutral-950">
      {/* Card Header */}
      <Card className="p-3">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
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

          <div className="flex flex-wrap gap-2">
            <Button variant="outline" onClick={() => {}}>
              <CircleX className="mr-2 h-4 w-4" />
              Discard
            </Button>

            <Dialog>
              <DialogTrigger asChild>
                <Button onClick={onSaveChanges} disabled={loading}>
                  <Save className="mr-2 h-4 w-4" />
                  {loading ? "Saving..." : "Save Changes"}
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

      {/* Content Section - Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* HMI Settings */}
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
                  {key.replace(/([A-Z])/g, " $1").trim()}
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

        {/* Compactor Threshold */}
        <Card className="p-3 space-y-4">
          <h3 className="text-sm font-medium">Compactor Threshold</h3>
          <div className="bg-neutral-100 p-2 rounded-md space-y-4 dark:bg-neutral-800">
            <div className="grid grid-cols-2 gap-2 text-xs text-sidebar-foreground">
              <div>Metric</div>
              <div>Value</div>
            </div>

            {/* Scrollable Container */}
            <div className="max-h-[300px] overflow-y-auto pr-2">
              {Object.entries(sliders).map(
                ([key, [defaultValue, min, max]]) => (
                  <div key={key} className="space-y-2">
                    <label className="text-sm font-medium">
                      {key.replace(/([A-Z])/g, " $1").trim()}
                    </label>
                    <Slider
                      value={[defaultValue]}
                      min={min}
                      max={max}
                      step={1}
                      onValueChange={(newValue) =>
                        setSliders((prev) => ({
                          ...prev,
                          [key]: [newValue[0], min, max],
                        }))
                      }
                    />
                    <div className="flex justify-between text-sm">
                      <span>{defaultValue}</span>
                      <span>{max}</span>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </Card>
      </div>
    </form>
  );
}
