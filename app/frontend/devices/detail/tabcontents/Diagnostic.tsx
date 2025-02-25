import { TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { LineChart } from "@/components/ui/line-chart"

export default function Diagnostic() {
    // Mock data for charts
    const chartData = {
        labels: ["18:00", "21:00", "00:00", "03:00", "06:00", "09:00"],
        datasets: [
            {
                data: [60,80,85,95,120],
                borderColor: "rgb(34, 211, 238)",
                tension: 0.4,
            },
        ],
    }

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
                                <Badge variant="outline">OFF</Badge>
                            </div>

                            <div className="flex items-center justify-between">
                                <p className="text-sm font-medium text-foreground">Auto-Start Active</p>
                                <Badge variant="outline">OFF</Badge>
                            </div>

                            <div className="flex items-center justify-between">
                                <p className="text-sm font-medium text-foreground">Manual Start Active</p>
                                <Badge>ACTIVE</Badge>
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
                                <Badge>OK</Badge>
                            </div>

                            <div className="flex items-center justify-between">
                                <p className="text-sm font-medium text-foreground">Oil Temp. Monitor</p>
                                <Badge>OK</Badge>
                            </div>

                            <div className="flex items-center justify-between">
                                <p className="text-sm font-medium text-foreground">Oil Level Monitor</p>
                                <Badge>OK</Badge>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        <div className="bg-neutral-100 bg-muted p-3 rounded-lg space-y-6">
                            <span className="text-xs font-medium text-muted-foreground opacity-70">
                                System Heartbeats Health
                            </span>
                            <div className="h-[230px]">
                                <LineChart data={chartData} />
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
                            <div className="h-[200px]">
                                <LineChart data={chartData} />
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
                            <div className="h-[200px]">
                                <LineChart data={chartData} />
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
