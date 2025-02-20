"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import {
  BadgeInfo,
  RefreshCcw,
  Settings,
  Repeat,
  ServerCog,
  ShieldAlert,
  Unplug,
  InspectionPanel,
  SquarePen,
} from "lucide-react";
import Image from "next/image";

export default function Detail() {
  return (
    <div className="space-y-3 p-3">
      <div className="flex gap-3">
        <Card className="flex-1">
          <CardHeader className="space-y-3 p-3">
            <div className="flex justify-between items-center">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-base font-semibold">Device details</h3>
                </div>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                  View and update your assets details here.
                </p>
              </div>
              <div className="flex gap-2">
                <Button variant="secondary">
                  <RefreshCcw className="h-4 w-4 mr-2" />
                  Sync Compactor
                </Button>
                <Button>
                  <Settings className="h-4 w-4" />
                </Button>
                <Button>
                  <SquarePen className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <Separator />
          </CardHeader>
          <CardContent className="p-3">
            <div className="grid grid-cols-2 gap-3">
              <div className="flex flex-col gap-1 bg-neutral-100 p-2 rounded-md dark:bg-neutral-800">
                <div className="flex items-start">
                  <div className="flex items-center gap-2 w-[120px]">
                    <p className="text-sm text-neutral-950 dark:text-neutral-50">
                      Name
                    </p>
                  </div>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">
                    Republic Services
                  </p>
                </div>

                <div className="flex items-start">
                  <div className="flex items-center gap-2 w-[120px]">
                    <p className="text-sm text-neutral-950 dark:text-neutral-50">
                      Description
                    </p>
                  </div>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">
                    IMGPCB-GEN3(SN7)
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="flex items-center gap-2 w-[120px]">
                    <p className="text-sm text-neutral-950 dark:text-neutral-50">
                      Address
                    </p>
                  </div>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">
                    375 W Tyranena Park Rd, Lake Mills, WI 53551
                  </p>
                </div>
              </div>
              <div className="bg-neutral-100 rounded-default p-2 flex flex-col gap-1 dark:bg-neutral-800">
                <div className="flex">
                  <div className="flex gap-2 w-[120px]">
                    <p className="text-xs text-neutral-950 leading-4 dark:text-neutral-50">
                      Site
                    </p>
                  </div>
                  <p className="text-xs text-neutral-500 leading-4 dark:text-neutral-400">
                    Venetian LV
                  </p>
                </div>

                <div className="flex">
                  <div className="flex gap-2 w-[120px]">
                    <p className="text-xs text-neutral-950 leading-4 dark:text-neutral-50">
                      Serial Number
                    </p>
                  </div>
                  <p className="text-xs text-neutral-500 leading-4 dark:text-neutral-400">
                    6184626
                  </p>
                </div>

                <div className="flex">
                  <div className="flex gap-2 w-[120px]">
                    <p className="text-xs text-neutral-950 leading-4 dark:text-neutral-50">
                      Unit Number
                    </p>
                  </div>
                  <p className="text-xs text-neutral-500 leading-4 dark:text-neutral-400">
                    6184626
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="w-[140px] flex items-center justify-center bg-neutral-900 dark:bg-neutral-50">
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <Image
                  src="/svg/switch_off.svg"
                  alt="Switch"
                  width={46}
                  height={46}
                  className=""
                />
                <span className="text-xs text-neutral-100 dark:text-neutral-800">
                  Switch
                </span>
              </div>
              <div className="text-center">
                <Image
                  src="/svg/stop_disengaged.svg"
                  alt="Stop"
                  width={46}
                  height={46}
                  className=""
                />
                <span className="text-xs text-neutral-100 dark:text-neutral-800">
                  Stop
                </span>
              </div>
              <div className="text-center">
                <Image
                  src="/svg/start_on.svg"
                  alt="Start"
                  width={46}
                  height={46}
                  className=""
                />
                <span className="text-xs text-neutral-100 dark:text-neutral-800">
                  Start
                </span>
              </div>
              <div className="text-center">
                <Image
                  src="/svg/reverse_on.svg"
                  alt="Reverse"
                  width={46}
                  height={46}
                  className=""
                />
                <span className="text-xs text-neutral-100 dark:text-neutral-800">
                  Reverse
                </span>
              </div>
            </div>
          </div>
        </Card>
      </div>

      <Tabs defaultValue="system-status" className="w-full">
        <TabsList>
          <TabsTrigger value="system-status" className="gap-2">
            <BadgeInfo className="h-4 w-4" />
            System Status
          </TabsTrigger>
          <TabsTrigger value="cycles" className="gap-2">
            <Repeat className="h-4 w-4" />
            Cycles
          </TabsTrigger>
          <TabsTrigger value="maintenance" className="gap-2">
            <ServerCog className="h-4 w-4" />
            Maintenance
          </TabsTrigger>
          <TabsTrigger value="alerts" className="gap-2">
            <ShieldAlert className="h-4 w-4" />
            Alerts
          </TabsTrigger>
          <TabsTrigger value="connectivity" className="gap-2">
            <Unplug className="h-4 w-4" />
            Connectivity
          </TabsTrigger>
          <TabsTrigger value="diagnostic" className="gap-2">
            <InspectionPanel className="h-4 w-4" />
            Diagnostic Tools
          </TabsTrigger>
        </TabsList>
      </Tabs>

      <Card>
        <CardHeader className="space-y-3 p-3">
          <div>
            <div className="space-y-1">
              <h2 className="text-xl font-semibold">Current Status</h2>
              <Badge variant="success">Compactor is ready to run</Badge>
            </div>
          </div>
          <Separator />
        </CardHeader>
        <div className="p-3 space-x-3 flex">
          {/* Compactor Fullness Card */}
          <Card className="flex flex-col items-center justify-start p-3 bg-neutral-100 w-72 dark:bg-neutral-800">
            <div className="w-full flex items-center h-8 opacity-70">
              <span className="text-xs font-medium text-sidebar-foreground">
                Compactor Fullness
              </span>
            </div>

            <div className="relative w-full max-w-[264px]">
              {/* Decorative background */}
              <div className="absolute inset-0 bg-white/50 rounded-lg dark:bg-neutral-950/50" />

              {/* Chart container */}
              <div className="relative p-4 flex flex-col items-center justify-center">
                {/* Progress bar */}
                <div className="w-full">
                  <Image
                    src="/svg/container.svg"
                    alt="Container"
                    width={500}
                    height={500}
                    className="rounded-lg"
                  />
                  {/* <Progress value={75} className="h-[109px] rounded-[5.57px]" /> */}
                </div>

                {/* Percentage text */}
                <p className="text-2xl font-bold text-neutral-100 text-center mt-2 dark:text-neutral-800">
                  75%
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-3 bg-neutral-100 flex-1 dark:bg-neutral-800">
            <div className="space-y-4">
              <div className="text-xs font-medium text-sidebar-foreground opacity-70">
                System Status
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Safe stop status</span>
                  <Badge>CLEAR</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Alert status</span>
                  <Badge>CLEAR</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Diagnostic Status</span>
                  <Badge>CLEAR</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">
                    Communication Status
                  </span>
                  <Badge variant="success">ACTIVE</Badge>
                </div>
              </div>
            </div>
          </Card>

          {/* Max PSI Forward Card */}
          <Card className="p-3 bg-neutral-100 w-40 dark:bg-neutral-800">
            <div className="space-y-4">
              <div>
                <div className="text-xs font-medium text-sidebar-foreground opacity-70">
                  Last Cycle
                </div>
                <div className="text-xs font-medium text-neutral-950 dark:text-neutral-50">
                  Max PSI Forward
                </div>
              </div>
              <div className="relative">
                <div className="rounded-full border-8 border-sky-600 w-32 h-32 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-2xl font-bold">268</div>
                    <div className="text-xs text-neutral-500 dark:text-neutral-400">
                      PSI
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-2 w-full flex justify-between text-[8px]">
                  <div>
                    <div className="text-neutral-100 dark:text-neutral-800">
                      Min
                    </div>
                    <div className="text-[10px]">100</div>
                  </div>
                  <div>
                    <div className="text-neutral-100 dark:text-neutral-800">
                      Max
                    </div>
                    <div className="text-[10px]">1200</div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Max PSI Retract Card */}
          <Card className="p-3 bg-neutral-100 w-40 dark:bg-neutral-800">
            <div className="space-y-4">
              <div>
                <div className="text-xs font-medium text-sidebar-foreground opacity-70">
                  Last Cycle
                </div>
                <div className="text-xs font-medium text-neutral-950 dark:text-neutral-50">
                  Max PSI Retract
                </div>
              </div>
              <div className="relative">
                <div className="rounded-full border-8 border-sky-600 w-32 h-32 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-2xl font-bold">268</div>
                    <div className="text-xs text-neutral-500 dark:text-neutral-400">
                      PSI
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-2 w-full flex justify-between text-[8px]">
                  <div>
                    <div className="text-neutral-100 dark:text-neutral-800">
                      Min
                    </div>
                    <div className="text-[10px]">100</div>
                  </div>
                  <div>
                    <div className="text-neutral-100 dark:text-neutral-800">
                      Max
                    </div>
                    <div className="text-[10px]">1200</div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </Card>
    </div>
  );
}
