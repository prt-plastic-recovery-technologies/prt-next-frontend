import { TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { LineChart } from "@/components/ui/line-chart"
import { useState,useEffect } from "react";

export default function Diagnostic({ diagnosticTools }: { diagnosticTools: { key: string; value: any }[] }) {
    console.log(diagnosticTools)
    const [chartDataHeartbeat, setChartDataHeartbeat] = useState<any>(null);
    const [chartDataOilTemperature, setChartDataOilTemperature] = useState<any>(null);
    const [chartDataSystemTemperature, setChartDataSystemTemperature] = useState<any>(null);
    
    useEffect(() => {
      const heartbeatStatus = diagnosticTools.find(tool => tool.key === "heartbeat_status")?.value;
      const oilTemperature = diagnosticTools.find(tool => tool.key === "oil_temperature")?.value;
      const systemTemperature = diagnosticTools.find(tool => tool.key === "system_temperature")?.value;
    
      // Formatting Heartbeat Status Data
      if (heartbeatStatus) {
        const formattedHeartbeatData = {
          labels: heartbeatStatus.map((entry: { timestamp: string }) => entry.timestamp),
          datasets: [
            {
              data: heartbeatStatus.map((entry: { value: number }) => entry.value),
              borderColor: "rgb(34, 211, 238)", 
            },
          ],
        };
        setChartDataHeartbeat(formattedHeartbeatData);
      }
    
      // Formatting Oil Temperature Data
      if (oilTemperature) {
        const formattedOilTemperatureData = {
          labels: oilTemperature.map((entry: { timestamp: string }) => entry.timestamp),
          datasets: [
            {
              data: oilTemperature.map((entry: { value: number }) => entry.value),
              borderColor: "rgb(255, 99, 132)", 
            },
          ],
        };
        setChartDataOilTemperature(formattedOilTemperatureData);
      }
    
      // Formatting System Temperature Data
      if (systemTemperature) {
        const formattedSystemTemperatureData = {
          labels: systemTemperature.map((entry: { timestamp: string }) => entry.timestamp),
          datasets: [
            {
              data: systemTemperature.map((entry: { value: number }) => entry.value),
              borderColor: "rgb(75, 192, 192)", 
            },
          ],
        };
        setChartDataSystemTemperature(formattedSystemTemperatureData);
      }
    }, [diagnosticTools]);
    
      
    const estopButton = diagnosticTools.find(tool => tool.key === "estop_button")?.value;
    const autoStartActive = diagnosticTools.find(tool => tool.key === "auto_start_active")?.value;
    const manualStartActive = diagnosticTools.find(tool => tool.key === "manual_start_active")?.value;
    const pressureMonitor = diagnosticTools.find(tool => tool.key === "pressure_monitor")?.value;
    const oilTempMonitor = diagnosticTools.find(tool => tool.key === "oil_temp_monitor")?.value;
    const oilLevelMonitor = diagnosticTools.find(tool => tool.key === "oil_level_monitor")?.value;


    return (
        <TabsContent value="diagnostic">
            <Card className="p-0 shadow-sm">
                <div className="p-3 space-y-4">
                    <div className="container flex justify-between items-center">
                        <div className="flex gap-2">
                            <h2 className="text-xl font-semibold text-foreground">Diagnostic Tools</h2>
                        </div>
                    </div>
                    <Separator />
                </div>

                <div className="p-3 space-y-3">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {/* First Column */}
                        <div className="bg-neutral-100 bg-muted rounded-lg p-3 space-y-4">
                            <div className="h-8 opacity-70">
                                <p className="text-xs font-medium text-sidebar-foreground">
                                    Diagnostic Tools
                                </p>
                            </div>

                            <div className="flex items-center justify-between">
                                <p className="text-sm font-medium text-foreground">E-Stop Button</p>
                                <Badge variant="outline">{estopButton ? "ON" : "OFF"}</Badge>
                            </div>

                            <div className="flex items-center justify-between">
                                <p className="text-sm font-medium text-foreground">Auto-Start Active</p>
                                <Badge variant="outline">{autoStartActive? "ON":"OFF"}</Badge>
                            </div>

                            <div className="flex items-center justify-between">
                                <p className="text-sm font-medium text-foreground">Manual Start Active</p>
                                <Badge>{manualStartActive? "Active":"Inactive"}</Badge>
                            </div>
                        </div>

                        {/* Second Column */}
                        <div className="bg-neutral-100 bg-muted rounded-lg p-3 space-y-4">
                            <div className="h-8 opacity-70">
                                <p className="text-xs font-medium text-sidebar-foreground">
                                    Diagnostic Tools
                                </p>
                            </div>

                            <div className="flex items-center justify-between">
                                <p className="text-sm font-medium text-foreground">Pressure Monitor</p>
                                <Badge>{pressureMonitor? "OK":"OFF"}</Badge>
                            </div>

                            <div className="flex items-center justify-between">
                                <p className="text-sm font-medium text-foreground">Oil Temp. Monitor</p>
                                <Badge>{oilTempMonitor? "OK":"OFF"}</Badge>
                            </div>

                            <div className="flex items-center justify-between">
                                <p className="text-sm font-medium text-foreground">Oil Level Monitor</p>
                                <Badge>{oilLevelMonitor? "OK":"OFF"}</Badge>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        <div className="bg-neutral-100 bg-muted p-3 rounded-lg space-y-6">
                            <span className="text-xs font-medium text-muted-foreground opacity-70">
                                System Heartbeats Health
                            </span>
                            <div className="h-[230px]">
                                <LineChart data={chartDataHeartbeat} />
                                <div className="mt-4 flex justify-center items-center gap-1.5">
                                    <div className="h-2 w-2 rounded bg-cyan-600" />
                                    <span className="text-xs">hbs 6139992</span>
                                </div>

                            </div>
                        </div>

                        <div className="bg-neutral-100 bg-muted p-3 rounded-lg space-y-6">
                            <span className="text-xs font-medium text-muted-foreground opacity-70">
                                Oil Temperature
                            </span>
                            <div className="h-[230px]">
                                <LineChart data={chartDataOilTemperature} />
                                <div className="mt-4 flex justify-center items-center gap-1.5">
                                    <div className="h-2 w-2 rounded bg-cyan-600" />
                                    <span className="text-xs">oit 6139992</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-neutral-100 bg-muted p-3 rounded-lg space-y-6">
                            <span className="text-xs font-medium text-muted-foreground opacity-70">
                                System Temperature
                            </span>
                            <div className="h-[230px]">
                                <LineChart data={chartDataSystemTemperature} />
                                <div className="mt-4 flex justify-center items-center gap-1.5">
                                    <div className="h-2 w-2 rounded bg-cyan-600" />
                                    <span className="text-xs">temp 6139992</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        </TabsContent>
    )
}
