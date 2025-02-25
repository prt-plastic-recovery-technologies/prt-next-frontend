"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
import { useParams } from "next/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";

import * as React from "react";

import Cycles from "@/app/frontend/devices/detail/tabcontents/Cycles";
import SystemStatus from "@/app/frontend/devices/detail/tabcontents/SystemStatus";
import SettingsPopover from "@/components/SettingsPopover";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";

export default function Detail() {
  interface Organization {
    name: string;
  }

  interface Device {
    name: string;
    des: string;
    address: string;
    sn: string;
    unit_num: string;
  }

  interface Detail {
    organization?: Organization;
    device?: Device;
    current_status: string;
    compacter_fullness: number;
    safe_stop: string;
    alert_status: string;
    system_health: string;
  }
    

  const params = useParams();
  const id = params.id as string;
  const [detail, setDetail] = useState<Detail | null>(null);
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    if (!id) return; // Exit early if id is not available

    const getDeviceData = async () => {
      const token = localStorage.getItem("authToken");

      if (!token) {
        console.log("Authentication token is missing.");
        return;
      }

      try {
        const response = await fetch(`${API_URL}/api/device/detail/${id}`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          credentials: "include",
        });
        const data = await response.json();
        console.log(data);
        setDetail(data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          console.log(err.message || "An unexpected error occurred.");
        } else {
          console.log("An unexpected error occurred.");
        }
      }
    };

    getDeviceData();
  }, [id, API_URL]);
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
                <Dialog>
                  {/* Trigger Button */}
                  <DialogTrigger asChild>
                    <Button variant="outline">
                      <Settings className="h-4 w-4" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl w-full">
                    <SettingsPopover />
                  </DialogContent>
                </Dialog>
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
                    {detail?.organization?.name}
                  </p>
                </div>

                <div className="flex items-start">
                  <div className="flex items-center gap-2 w-[120px]">
                    <p className="text-sm text-neutral-950 dark:text-neutral-50">
                      Description
                    </p>
                  </div>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">
                    {detail?.device?.des}
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="flex items-center gap-2 w-[120px]">
                    <p className="text-sm text-neutral-950 dark:text-neutral-50">
                      Address
                    </p>
                  </div>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">
                    {detail?.device?.address}
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
                    {detail?.device?.name}
                  </p>
                </div>

                <div className="flex">
                  <div className="flex gap-2 w-[120px]">
                    <p className="text-xs text-neutral-950 leading-4 dark:text-neutral-50">
                      Serial Number
                    </p>
                  </div>
                  <p className="text-xs text-neutral-500 leading-4 dark:text-neutral-400">
                    {detail?.device?.sn}
                  </p>
                </div>

                <div className="flex">
                  <div className="flex gap-2 w-[120px]">
                    <p className="text-xs text-neutral-950 leading-4 dark:text-neutral-50">
                      Unit Number
                    </p>
                  </div>
                  <p className="text-xs text-neutral-500 leading-4 dark:text-neutral-400">
                    {detail?.device?.unit_num}
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
        <SystemStatus detail={detail ?? {
          current_status: "Unknown",
          compacter_fullness: 0,
          safe_stop: "Unknown",
          alert_status: "Unknown",
          system_health: "Unknown",
        }} />

        <Cycles />
      </Tabs>
    </div>
  );
}
