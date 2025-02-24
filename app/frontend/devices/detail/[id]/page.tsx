"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
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
import { useParams } from "next/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  ArrowUpDown,
  ChevronLeft,
  ChevronRight,
  MoreHorizontal,
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import * as React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Bar, BarChart, Grid, XAxis, YAxis } from "@tremor/react";

export default function Detail() {
  const [selectedRows, setSelectedRows] = React.useState<string[]>([]);

  const chartdata = [
    {
      time: "2/12 16:00",
      value: 14,
    },
    {
      time: "2/12 16:00",
      value: 41,
    },
    {
      time: "2/12 16:00",
      value: 21,
    },
    {
      time: "2/12 16:00",
      value: 30,
    },
    {
      time: "2/12 16:00",
      value: 15,
    },
    {
      time: "2/12 16:00",
      value: 23,
    },
  ];

  const data = Array(8).fill({
    startTime: "2025-02-10 09:00:00",
    endTime: "2025-02-10 17:20:00",
    maxForwardPressure: "943",
    maxBackwardPressure: "943",
  });

  const toggleSelectAll = () => {
    if (selectedRows.length === data.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(data.map((_, index) => index.toString()));
    }
  };

  const toggleRow = (id: string) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    );
  };

  const params = useParams();
  const id = params.id as string;
  const [error, setError] = useState("");
  const [detail, setDetail] = useState([]);
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    if (!id) return; // Exit early if id is not available

    const getDeviceData = async () => {
      const token = localStorage.getItem("authToken");

      if (!token) {
        setError("Authentication token is missing.");
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
      } catch (err) {
        setError("An error occurred while fetching device data.");
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
                    {detail.organization?.name}
                  </p>
                </div>

                <div className="flex items-start">
                  <div className="flex items-center gap-2 w-[120px]">
                    <p className="text-sm text-neutral-950 dark:text-neutral-50">
                      Description
                    </p>
                  </div>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">
                    {detail.device?.des}
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="flex items-center gap-2 w-[120px]">
                    <p className="text-sm text-neutral-950 dark:text-neutral-50">
                      Address
                    </p>
                  </div>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">
                    {detail.device?.address}
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
                    {detail.device?.name}
                  </p>
                </div>

                <div className="flex">
                  <div className="flex gap-2 w-[120px]">
                    <p className="text-xs text-neutral-950 leading-4 dark:text-neutral-50">
                      Serial Number
                    </p>
                  </div>
                  <p className="text-xs text-neutral-500 leading-4 dark:text-neutral-400">
                    {detail.device?.sn}
                  </p>
                </div>

                <div className="flex">
                  <div className="flex gap-2 w-[120px]">
                    <p className="text-xs text-neutral-950 leading-4 dark:text-neutral-50">
                      Unit Number
                    </p>
                  </div>
                  <p className="text-xs text-neutral-500 leading-4 dark:text-neutral-400">
                    {detail.device?.unit_num}
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
        <TabsContent value="system-status">
          <Card>
            <CardHeader className="space-y-3 p-3">
              <div>
                <div className="space-y-1">
                  <h2 className="text-xl font-semibold">Current Status</h2>
                  <Badge variant="success">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: detail.current_status,
                      }}
                    />
                  </Badge>
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
                      <Progress
                        value={detail.compacter_fullness}
                        className="h-[109px] rounded-[5.57px]"
                      />
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
                      <span className="text-sm font-medium">
                        Safe stop status
                      </span>
                      <Badge>{detail.safe_stop}</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Alert status</span>
                      <Badge>{detail.alert_status}</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">
                        Diagnostic Status
                      </span>
                      <Badge>{detail.system_health}</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">
                        Communication Status
                      </span>
                      <Badge variant="success">NO DATA</Badge>
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
        </TabsContent>
        <TabsContent value="cycles">
          <Card className="w-full">
            <CardHeader className="space-y-4 p-3">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <h2 className="text-xl font-semibold text-foreground">
                    Cycles
                  </h2>
                </div>
              </div>
              <Separator />
            </CardHeader>

            <CardContent className="p-3 space-y-4">
              <div className="flex gap-3">
                <div className="flex flex-col gap-6 bg-neutral-100 p-3 pr-6 pl-12 rounded-lg dark:bg-neutral-800">
                  <div className="h-8 opacity-70">
                    <p className="text-xs font-medium text-sidebar-foreground">
                      Cycles Pressure (24hr - HOURLY AVG)
                    </p>
                  </div>

                  <div className="flex flex-col gap-10">
                    <div className="h-[200px]">
                      <BarChart
                        data={chartdata}
                        index="time"
                        categories={["value"]}
                        colors={["cyan"]}
                        valueFormatter={(value) => `${value}`}
                        yAxisWidth={48}
                        showLegend={false}
                        className="h-[148px]"
                      ></BarChart>

                      <div className="mt-9 flex items-center gap-1.5">
                        <div className="h-3 w-3 rounded-sm bg-cyan-600" />
                        <span className="text-xs text-neutral-950 dark:text-neutral-50">
                          Press 6139992
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-6 bg-neutral-100 p-3 pr-6 pl-12 rounded-lg dark:bg-neutral-800">
                  <div className="h-8 opacity-70">
                    <p className="text-xs font-medium text-sidebar-foreground">
                      Cycles Pressure (Realtime)
                    </p>
                  </div>

                  <div className="flex flex-col gap-10">
                    <div className="h-[200px]">
                      <BarChart
                        data={chartdata}
                        index="time"
                        categories={["value"]}
                        colors={["cyan"]}
                        valueFormatter={(value) => `${value}`}
                        yAxisWidth={48}
                        showLegend={false}
                        className="h-[148px]"
                      ></BarChart>

                      <div className="mt-9 flex items-center gap-1.5">
                        <div className="h-3 w-3 rounded-sm bg-cyan-600" />
                        <span className="text-xs text-neutral-950 dark:text-neutral-50">
                          Press 6139992
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium mb-4">Cycles table</h3>
                <div className="flex flex-col space-y-4">
                  <div className="rounded-lg border">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-12">
                            <Checkbox
                              checked={selectedRows.length === data.length}
                              onCheckedChange={toggleSelectAll}
                            />
                          </TableHead>
                          <TableHead>
                            <Button
                              variant="ghost"
                              className="text-neutral-500 dark:text-neutral-400"
                            >
                              Start time
                              <ArrowUpDown className="ml-2 h-4 w-4" />
                            </Button>
                          </TableHead>
                          <TableHead>
                            <Button
                              variant="ghost"
                              className="text-neutral-500 dark:text-neutral-400"
                            >
                              End time
                              <ArrowUpDown className="ml-2 h-4 w-4" />
                            </Button>
                          </TableHead>
                          <TableHead>
                            <Button
                              variant="ghost"
                              className="text-neutral-500 dark:text-neutral-400"
                            >
                              Max Forward Pressure (PSI)
                              <ArrowUpDown className="ml-2 h-4 w-4" />
                            </Button>
                          </TableHead>
                          <TableHead>
                            <Button
                              variant="ghost"
                              className="text-neutral-500 dark:text-neutral-400"
                            >
                              Max Backward Pressure (PSI)
                              <ArrowUpDown className="ml-2 h-4 w-4" />
                            </Button>
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {data.map((row, index) => (
                          <TableRow key={index}>
                            <TableCell className="w-12">
                              <Checkbox
                                checked={selectedRows.includes(
                                  index.toString()
                                )}
                                onCheckedChange={() =>
                                  toggleRow(index.toString())
                                }
                              />
                            </TableCell>
                            <TableCell>{row.startTime}</TableCell>
                            <TableCell>{row.endTime}</TableCell>
                            <TableCell>{row.maxForwardPressure}</TableCell>
                            <TableCell>{row.maxBackwardPressure}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>

                  <div className="flex justify-end px-4">
                    <div className="flex items-center space-x-1">
                      <Button variant="ghost" className="h-10 px-4">
                        <ChevronLeft className="h-4 w-4 mr-1" />
                        Previous
                      </Button>
                      <Button variant="ghost" className="h-10 w-10">
                        1
                      </Button>
                      <Button
                        variant="ghost"
                        className="h-10 w-10 bg-white border dark:bg-neutral-950"
                      >
                        2
                      </Button>
                      <Button variant="ghost" className="h-10 w-10">
                        3
                      </Button>
                      <Button variant="ghost" className="h-9 w-9 p-0">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" className="h-10 px-4">
                        Next
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
