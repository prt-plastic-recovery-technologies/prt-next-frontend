import { TabsContent } from "@/components/ui/tabs";
import { Card, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";

interface SystemStatusProps {
  detail: {
    current_status: string;
    compacter_fullness: number;
    safe_stop: string;
    alert_status: string;
    system_health: string;
  };
}

export default function SystemStatus({ detail }: SystemStatusProps) {
  return (
    <TabsContent value="system-status">
      <Card>
        <CardHeader className="space-y-3 p-3">
          <div>
            <div className="space-y-1">
              <h2 className="text-xl font-semibold">Current Status</h2>
              <Badge
                variant={
                  detail.current_status === "Compactor is ready to run"
                    ? "success"
                    : "default"
                }
              >
                <span>{detail.current_status}</span>
              </Badge>
            </div>
          </div>
          <Separator />
        </CardHeader>

        {/* Responsive Grid Layout */}
        <div className="p-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4">
          {/* Compactor Fullness (3 Grid Columns) */}
          <Card className="flex flex-col items-center justify-start p-3 bg-neutral-100 dark:bg-neutral-800 lg:col-span-3">
            <div className="w-full flex items-center h-8 opacity-70">
              <span className="text-xs font-medium text-sidebar-foreground">
                Compactor Fullness
              </span>
            </div>

            <div className="relative w-full max-w-[264px]">
              <div className="absolute inset-0 rounded-lg dark:bg-neutral-950/50" />
              <div className="relative p-4 flex flex-col items-center justify-center">
                <div className="w-full">
                  <Image
                    src="/svg/container.svg"
                    alt="Container"
                    width={500}
                    height={500}
                    className="rounded-lg relative"
                  />
                  <Progress
                    value={detail.compacter_fullness}
                    className="h-[109px] rounded-[5.57px] -mt-[115px] md:pl-[55px] pl-[72px] pr-[8px] pt-[9px]"
                  />
                </div>

                {/* Percentage text */}
                <p className="text-2xl font-bold text-neutral-100 text-center mt-2 dark:text-neutral-800">
                  {detail.compacter_fullness}%
                </p>
              </div>
            </div>
          </Card>

          {/* System Status (4 Grid Columns) */}
          <Card className="p-3 bg-neutral-100 dark:bg-neutral-800 lg:col-span-4">
            <div className="space-y-4">
              <div className="text-xs font-medium text-sidebar-foreground opacity-70">
                System Status
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Safe stop status</span>
                  <Badge
                    variant={
                      detail.safe_stop === "CLEAR" ? "success" : "default"
                    }
                  >
                    {detail.safe_stop}
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Alert status</span>
                  <Badge
                    variant={
                      detail.alert_status === "OK" ? "success" : "default"
                    }
                  >
                    {detail.alert_status}
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">
                    Communication Status
                  </span>
                  <Badge
                    variant={
                      detail.system_health === "OK" ? "success" : "default"
                    }
                  >
                    {detail.system_health}
                  </Badge>
                </div>
              </div>
            </div>
          </Card>

          {/* Max PSI Forward & Retract (5 Grid Columns Combined) */}
          <div className="grid grid-cols-2 lg:col-span-5 gap-4">
            {/* Max PSI Forward Card */}
            <Card className="p-3 bg-neutral-100 dark:bg-neutral-800">
              <div className="space-y-4">
                <div>
                  <div className="text-xs font-medium text-sidebar-foreground opacity-70">
                    Last Cycle
                  </div>
                  <div className="text-xs font-medium text-neutral-950 dark:text-neutral-50">
                    Max PSI Forward
                  </div>
                </div>
                <div className="relative flex justify-center items-center">
                  <div className="rounded-full border-8 border-sky-600 w-24 h-24 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-2xl font-bold">268</div>
                      <div className="text-xs text-neutral-500 dark:text-neutral-400">
                        PSI
                      </div>
                    </div>
                  </div>

                  {/* Min & Max Labels */}
                  <div className="absolute -bottom-4 w-full flex justify-between text-[8px] px-2">
                    <div className="text-center">
                      <div className="text-neutral-100 dark:text-neutral-800">
                        Min
                      </div>
                      <div className="text-[10px]">100</div>
                    </div>
                    <div className="text-center">
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
            <Card className="p-3 bg-neutral-100 dark:bg-neutral-800">
              <div className="space-y-4">
                <div>
                  <div className="text-xs font-medium text-sidebar-foreground opacity-70">
                    Last Cycle
                  </div>
                  <div className="text-xs font-medium text-neutral-950 dark:text-neutral-50">
                    Max PSI Retract
                  </div>
                </div>
                <div className="relative flex justify-center items-center">
                  <div className="rounded-full border-8 border-sky-600 w-24 h-24 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-2xl font-bold">268</div>
                      <div className="text-xs text-neutral-500 dark:text-neutral-400">
                        PSI
                      </div>
                    </div>
                  </div>

                  {/* Min & Max Labels */}
                  <div className="absolute -bottom-4 w-full flex justify-between text-[8px] px-2">
                    <div className="text-center">
                      <div className="text-neutral-100 dark:text-neutral-800">
                        Min
                      </div>
                      <div className="text-[10px]">100</div>
                    </div>
                    <div className="text-center">
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
        </div>
      </Card>
    </TabsContent>
  );
}
