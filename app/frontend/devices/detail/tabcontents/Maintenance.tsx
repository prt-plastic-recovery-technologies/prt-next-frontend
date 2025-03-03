import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { TabsContent } from "@/components/ui/tabs";
import {
  Plus,
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
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Shield } from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface MaintenanceProps {
  cyclesData: { total_cycle: string; total_runtime: string } | null;
}


export default function Maintenance({ cyclesData }: MaintenanceProps) {
  return (
    <TabsContent value="maintenance">
      <Card className="p-0">
        <div className="p-3 space-y-4">
          <div className="container">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-neutral-950 dark:text-neutral-50">
                Maintenance
              </h2>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Add maintenace record
              </Button>
            </div>
          </div>
          <Separator />
        </div>

        <div className="p-3 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="flex flex-col items-center justify-start p-3 bg-neutral-100 w-100 dark:bg-neutral-800">
              <div className="w-full flex items-center h-8 opacity-70">
                <span className="text-xs font-medium text-sidebar-foreground">
                  BACK PRESSURE
                </span>
              </div>

              <div className="relative w-full">
                <div className="absolute inset-0 rounded-lg dark:bg-neutral-950/50" />
                <div className="relative p-4 flex flex-col items-center justify-center">
                  <div className="w-full">
                    <Image
                      src="/svg/container_2.svg"
                      alt="Container"
                      width={500}
                      height={500}
                      className="rounded-lg relative "
                    />
                    <Progress
                      value={100}
                      className="h-[109px] rounded-[5.57px] -mt-[118px] pl-[2px] md:pr-[292px] pr-[228px] md:pt-[10px] pt-[33px] pb-[4px]"
                    />
                  </div>

                  {/* Percentage text */}
                  <p className="text-2xl font-bold text-neutral-100 text-center mt-2 dark:text-neutral-800">
                    75%
                  </p>
                </div>
              </div>
            </Card>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-neutral-100 rounded-md p-2 space-y-3 dark:bg-neutral-800">
                  <span className="text-xs text-sidebar-foreground">
                    PM - Cycles (Count)
                  </span>
                  <div className="bg-neutral-100 rounded-md p-2 space-y-3 dark:bg-neutral-800 flex flex-col items-center justify-center">
                    <div className="relative w-[124px] h-[124px] flex items-center justify-center">
                      <div className="absolute w-full h-full rounded-full border-[12px] border-slate-300" />

                      <div
                        className="absolute w-full h-full rounded-full border-[12px] border-sky-600 rotate-180"
                        style={{ clipPath: "polygon(0 0, 100% 75%, 0 75%)" }}
                      />

                      <div className="flex flex-col items-center justify-center z-10">
                        <p className="text-base font-bold text-neutral-950 leading-[22px] dark:text-neutral-50">
                          268
                        </p>
                        <p className="text-[8px] text-neutral-500 leading-[11px] dark:text-neutral-400">
                          Cycles
                        </p>
                      </div>
                    </div>

                    <div className="text-center mt-2">
                      <p className="text-xs text-neutral-500 dark:text-neutral-400">
                        Max
                      </p>
                      <p className="text-sm text-neutral-900 block dark:text-neutral-50">
                        1200
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-neutral-100 rounded-md p-2 space-y-3 dark:bg-neutral-800">
                  <span className="text-xs text-sidebar-foreground">
                    PM - Runtime (Hours)
                  </span>
                  <div className="bg-neutral-100 rounded-md p-2 space-y-3 dark:bg-neutral-800 flex flex-col items-center justify-center">
                    <div className="relative w-[124px] h-[124px] flex items-center justify-center">
                      <div className="absolute w-full h-full rounded-full border-[12px] border-slate-300" />

                      <div
                        className="absolute w-full h-full rounded-full border-[12px] border-sky-600 rotate-180"
                        style={{ clipPath: "polygon(0 0, 100% 75%, 0 75%)" }}
                      />

                      <div className="flex flex-col items-center justify-center z-10">
                        <p className="text-base font-bold text-neutral-950 leading-[22px] dark:text-neutral-50">
                          268
                        </p>
                        <p className="text-[8px] text-neutral-500 leading-[11px] dark:text-neutral-400">
                          Cycles
                        </p>
                      </div>
                    </div>

                    <div className="text-center mt-2">
                      <p className="text-xs text-neutral-500 dark:text-neutral-400">
                        Max
                      </p>
                      <p className="text-sm text-neutral-900 block dark:text-neutral-50">
                        1200
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-neutral-100 rounded-md p-2 space-y-3 dark:bg-neutral-800">
                  <div className="flex flex-col gap-3 bg-muted rounded-md p-2 w-full">
                    <p className="text-xs text-sidebar-foreground">
                      Total Cycles
                    </p>
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-bold text-foreground">
                      {cyclesData?.total_cycle || "N/A"}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-neutral-100 rounded-md p-2 space-y-3 dark:bg-neutral-800">
                  <div className="flex flex-col gap-3 bg-muted rounded-md p-2 w-full">
                    <p className="text-xs text-sidebar-foreground">
                      Total Runtime
                    </p>
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-bold text-foreground"> {cyclesData?.total_runtime || "N/A"}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-4">
              Maintenance history table
            </h3>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-12">
                    <Checkbox />
                  </TableHead>
                  <TableHead>
                    <Button variant="ghost" className="flex items-center">
                      Date
                      <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                  </TableHead>
                  <TableHead>
                    <Button variant="ghost" className="flex items-center">
                      User
                      <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                  </TableHead>
                  <TableHead>
                    <Button variant="ghost" className="flex items-center">
                      Total Cycles
                      <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                  </TableHead>
                  <TableHead>
                    <Button variant="ghost" className="flex items-center">
                      Total Runtime
                      <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                  </TableHead>
                  <TableHead>Notes</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {Array.from({ length: 3 }).map((_, i) => (
                  <TableRow key={i}>
                    <TableCell>
                      <Checkbox />
                    </TableCell>
                    <TableCell>2025-02-10 09:00:00</TableCell>
                    <TableCell>
                      {["Josh Adams", "Emma Watson", "Liam Johnson"][i]}
                    </TableCell>
                    <TableCell>943</TableCell>
                    <TableCell>943</TableCell>
                    <TableCell>943</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            <div className="flex justify-end px-4 py-4">
              <div className="flex gap-1">
                <Button variant="ghost" className="h-10">
                  <ChevronLeft className="h-4 w-4 mr-2" />
                  Previous
                </Button>
                <Button variant="ghost" className="h-10 w-10">
                  1
                </Button>
                <Button variant="ghost" className="h-10 w-10">
                  2
                </Button>
                <Button variant="ghost" className="h-10 w-10">
                  3
                </Button>
                <Button variant="ghost" className="h-10 w-10">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
                <Button variant="ghost" className="h-10">
                  Next
                  <ChevronRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Card>
      <Card className="rounded-lg border border-neutral-200 shadow-sm dark:border-neutral-800">
        <div className="p-3 space-y-4">
          <div className="container">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-semibold text-neutral-950 leading-7 dark:text-neutral-50">
                  Warranty
                </h3>
              </div>
              <Button>
                <Shield className="w-4 h-4" />
                Submit Warranty Claim
              </Button>
            </div>
          </div>
          <Separator />
        </div>

        <div className="p-3">
          <div className="grid grid-cols-3 gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <p className="text-sm font-medium text-neutral-950 dark:text-neutral-50">
                  Warranty Status
                </p>
              </div>
              <div className="flex gap-2">
                <Badge className="bg-green-500">Active</Badge>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <p className="text-sm font-medium text-neutral-950 dark:text-neutral-50">
                  Date deployed
                </p>
              </div>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                2025-02-10
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <p className="text-sm font-medium text-neutral-950 dark:text-neutral-50">
                  Warranty Expiration
                </p>
              </div>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                2027-02-10
              </p>
            </div>
          </div>
        </div>
      </Card>
    </TabsContent>
  );
}
