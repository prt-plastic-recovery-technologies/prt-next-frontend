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
import Maintenance from "@/app/frontend/devices/detail/tabcontents/Maintenance";
import Alerts from "@/app/frontend/devices/detail/tabcontents/Alerts";
import Connectivity from "@/app/frontend/devices/detail/tabcontents/Connectivity";
import Diagnostic from "@/app/frontend/devices/detail/tabcontents/Diagnostic";
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

  interface Device_Alerts {
    id: string;
    sn: string;
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

  interface Email {
    email_logs: {
      id: number;
      alert_type: string;
      timestamp: string;
      recipients: string;
      status: string;
    }[];
  }
  

  const params = useParams();
  const id = params.id as string;
  const [detail, setDetail] = useState<Detail | null>(null);
  const [emailLogs, setEmailLogs] = useState<Email>({ email_logs: [] });

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
      
        setEmailLogs({ email_logs: data.email_logs || [] });
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
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
        {/* Device Details - 10 Columns */}
        <Card className="md:col-span-10">
          <CardHeader className="p-3">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
              <div className="space-y-1">
                <h3 className="text-base font-semibold">Device Details</h3>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                  View and update your asset details here.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <Button variant="secondary">
                  <RefreshCcw className="h-4 w-4 mr-2" />
                  Sync Compactor
                </Button>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="setting">
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
                <div className="flex flex-col gap-1 bg-neutral-100 p-2 rounded-md dark:bg-neutral-800">
                  <div className="flex flex-col sm:flex-row sm:justify-between">
                    <p className="text-sm text-neutral-950 dark:text-neutral-50">
                      Name
                    </p>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">
                      {detail?.organization?.name || "----------"}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-1 bg-neutral-100 p-2 rounded-md dark:bg-neutral-800">
                  <div className="flex flex-col sm:flex-row sm:justify-between">
                    <p className="text-sm text-neutral-950 dark:text-neutral-50">
                      Description
                    </p>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">
                      {detail?.device?.des !== "default"
                        ? detail?.device?.des
                        : "----------"}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-1 bg-neutral-100 p-2 rounded-md dark:bg-neutral-800">
                  <div className="flex flex-col sm:flex-row sm:justify-between">
                    <p className="text-sm text-neutral-950 dark:text-neutral-50">
                      Address
                    </p>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">
                      {detail?.device?.address || "----------"}
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-neutral-100 rounded-default p-2 flex flex-col gap-1 dark:bg-neutral-800">
                <div className="flex flex-col gap-1 bg-neutral-100 p-2 rounded-md dark:bg-neutral-800">
                  <div className="flex flex-col sm:flex-row sm:justify-between">
                    <p className="text-sm text-neutral-950 dark:text-neutral-50">
                      Site
                    </p>
                    <p className="text-xs text-neutral-500 leading-4 dark:text-neutral-400">
                      {detail?.device?.name !== "undefined"
                        ? detail?.device?.name
                        : "----------"}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-1 bg-neutral-100 p-2 rounded-md dark:bg-neutral-800">
                  <div className="flex flex-col sm:flex-row sm:justify-between">
                    <p className="text-sm text-neutral-950 dark:text-neutral-50">
                      Serial Number
                    </p>
                    <p className="text-xs text-neutral-500 leading-4 dark:text-neutral-400">
                      {detail?.device?.sn || "----------"}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-1 bg-neutral-100 p-2 rounded-md dark:bg-neutral-800">
                  <div className="flex flex-col sm:flex-row sm:justify-between">
                    <p className="text-sm text-neutral-950 dark:text-neutral-50">
                      Unit Number
                    </p>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">
                      <p className="text-xs text-neutral-500 leading-4 dark:text-neutral-400">
                        {detail?.device?.unit_num || "----------"}
                      </p>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="md:col-span-2 flex items-center justify-center bg-neutral-900 dark:bg-neutral-50 w-[140px] mx-auto">
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
        <TabsList className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
          <TabsTrigger value="system-status">
            <BadgeInfo className="h-4 w-4" />
            System Status
          </TabsTrigger>
          <TabsTrigger value="cycles">
            <Repeat className="h-4 w-4" />
            Cycles
          </TabsTrigger>
          <TabsTrigger value="maintenance">
            <ServerCog className="h-4 w-4" />
            Maintenance
          </TabsTrigger>
          <TabsTrigger value="alerts">
            <ShieldAlert className="h-4 w-4" />
            Alerts
          </TabsTrigger>
          <TabsTrigger value="connectivity">
            <Unplug className="h-4 w-4" />
            Connectivity
          </TabsTrigger>
          <TabsTrigger value="diagnostic">
            <InspectionPanel className="h-4 w-4" />
            Diagnostic Tools
          </TabsTrigger>
        </TabsList>
        <div className="mt-[100px] md:mt-0">
        <SystemStatus
          detail={
            detail ?? {
              current_status: "Unknown",
              compacter_fullness: 0,
              safe_stop: "Unknown",
              alert_status: "Unknown",
              system_health: "Unknown",
            }
          }
        />
        <Cycles />
        <Maintenance />
        <Alerts email_logs={emailLogs.email_logs} id={id} sn={detail?.device?.sn} />
        <Connectivity email_logs={emailLogs.email_logs} id={id} sn={detail?.device?.sn} />
        <Diagnostic />
        </div>
      </Tabs>
    </div>
  );
}
