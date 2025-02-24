import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { BarChart } from "@tremor/react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import * as React from "react";
import {
  ArrowUpDown,
  ChevronLeft,
  ChevronRight,
  MoreHorizontal,
} from "lucide-react";

export default function Cycles(){
    const [selectedRows, setSelectedRows] = React.useState<string[]>([]);
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



    return(
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
    )
}