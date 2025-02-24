import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";

export default function SystemStatus({ detail }: SystemStatusProps) {
    return(
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
    )
}