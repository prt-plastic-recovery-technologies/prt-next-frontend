
import { TabsContent } from "@/components/ui/tabs";
import { useState } from "react"
import { Plus, ArrowUpDown, MoreHorizontal, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

interface AlertLog {
  id: number;
  alert_type: string;
  timestamp: string;
  recipients: string;
  status: string;
}
interface AlertsProps {
  email_logs: AlertLog[];
  id: string;
  sn?: string;
}

export default function Alerts({ email_logs, id, sn }: AlertsProps) {
  const alertTypeMapping: Record<string, string> = {
    a0: "SYSTEM COMM",
    a1: "80% FULLNESS",
    a2: "100% FULLNESS",
    a3: "80% OIL TEMP",
    a4: "100% OIL TEMP",
    a5: "LOW OIL",
    a6: "80% PM",
    a7: "100% PM",
    a8: "80% BACKPACK",
    a9: "100% BACKPACK",
    a10: "AUTO SHUTDOWN",
    a11: "REMOTE SHUTDOWN",
    a12: "SYSTEM RESET",
    a13: "MOTOR OVERLOAD",
    a14: "SYSTEM ALERT",
  };



  return (
    <TabsContent value="alerts">
      <div>
      </div>
      <div className="rounded-lg border border-neutral-200 bg-white text-neutral-950 shadow-sm dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-50">
        <div className="p-3 space-y-4">
          <div className="container">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-semibold text-neutral-950 dark:text-neutral-50">Alerts</h2>
              </div>
              <Button>
                <Plus className="h-4 w-4" />
                Add new alert
              </Button>
            </div>
          </div>
          <Separator />

          <div>
            <p className="text-sm font-medium mb-4">List of alerts</p>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-12">
                    <Checkbox />
                  </TableHead>
                  <TableHead>
                    <Button variant="ghost" className="flex items-center gap-2">
                      Id
                      <ArrowUpDown className="h-4 w-4" />
                    </Button>
                  </TableHead>
                  <TableHead>
                    <Button variant="ghost" className="flex items-center gap-2">
                      Alert Type
                      <ArrowUpDown className="h-4 w-4" />
                    </Button>
                  </TableHead>
                  <TableHead>
                    <Button variant="ghost" className="flex items-center gap-2">
                      Alert Status
                      <ArrowUpDown className="h-4 w-4" />
                    </Button>
                  </TableHead>
                  <TableHead>
                    <Button variant="ghost" className="flex items-center gap-2">
                      Recipient
                      <ArrowUpDown className="h-4 w-4" />
                    </Button>
                  </TableHead>
                  <TableHead>
                    <Button variant="ghost" className="flex items-center gap-2">
                      Device Id
                      <ArrowUpDown className="h-4 w-4" />
                    </Button>
                  </TableHead>
                  <TableHead>
                    <Button variant="ghost" className="flex items-center gap-2">
                      Device Sn
                      <ArrowUpDown className="h-4 w-4" />
                    </Button>
                  </TableHead>
                  <TableHead></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {email_logs.length > 0 ? (
                  email_logs.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell>
                        <Checkbox />
                      </TableCell>
                      <TableCell>{row.id}</TableCell>
                      <TableCell>{row.alert_type}</TableCell>
                      <TableCell>{alertTypeMapping[row.alert_type] || "Unknown Alert"}</TableCell>
                      <TableCell>
                        <div className="flex gap-2 flex-wrap">
                          {row.recipients.split(',').map((recipient, index) => (
                            <Badge key={index} variant="secondary">{recipient.trim()}</Badge>
                          ))}
                        </div>
                      </TableCell>
                      <TableCell>{id}</TableCell>
                      <TableCell>{sn}</TableCell>
                      <TableCell>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={8} className="text-center text-neutral-500 p-4">
                      No Alerts Available
                    </TableCell>
                  </TableRow>
                )}

              </TableBody>
            </Table>

            <div className="flex justify-end px-4 py-4">
              <div className="flex items-center gap-1">
                <Button variant="ghost" className="h-10 px-4">
                  <ChevronLeft className="h-4 w-4 mr-1" />
                  Previous
                </Button>
                <Button variant="ghost" className="h-10 w-10">1</Button>
                <Button variant="ghost" className="h-10 w-10 bg-white border dark:bg-neutral-950">2</Button>
                <Button variant="ghost" className="h-10 w-10">3</Button>
                <Button variant="ghost" className="h-9 w-9">...</Button>
                <Button variant="ghost" className="h-10 px-4">
                  Next
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-lg border border-neutral-200 bg-white shadow dark:border-neutral-800 dark:bg-neutral-950">
        <div className="p-3 space-y-4">
          <div className="container">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-semibold text-neutral-950 dark:text-neutral-50">History</h2>
              </div>
            </div>
          </div>
          <Separator />
        </div>

        <div className="p-6 space-y-6">
          <div>
            <h3 className="text-sm font-medium text-neutral-950 mb-4 dark:text-neutral-50">
              Alert trigger history
            </h3>

            <div className="rounded-lg border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>
                      <Button variant="ghost" className="font-medium">
                        Id
                      </Button>
                    </TableHead>
                    <TableHead>
                      <Button variant="ghost" className="font-medium">
                        Alert Type <ArrowUpDown className="ml-2 h-4 w-4" />
                      </Button>
                    </TableHead>
                    <TableHead>
                      <Button variant="ghost" className="font-medium">
                        Alert Status <ArrowUpDown className="ml-2 h-4 w-4" />
                      </Button>
                    </TableHead>
                    <TableHead>
                      <Button variant="ghost" className="font-medium">
                        Status <ArrowUpDown className="ml-2 h-4 w-4" />
                      </Button>
                    </TableHead>
                    <TableHead>
                      <Button variant="ghost" className="font-medium">
                        Time Stamp <ArrowUpDown className="ml-2 h-4 w-4" />
                      </Button>
                    </TableHead>
                    <TableHead></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {email_logs.length > 0 ? (email_logs.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell>{row.id}</TableCell>
                      <TableCell>{row.alert_type}</TableCell>
                      <TableCell>{alertTypeMapping[row.alert_type] || "Unknown Alert"}</TableCell>
                      <TableCell>{row.status}</TableCell>
                      <TableCell>{row.timestamp}</TableCell>
                      <TableCell>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                ):(
                  <TableRow>
                    <TableCell colSpan={8} className="text-center text-neutral-500 p-4">
                      No History Available
                    </TableCell>
                  </TableRow>
                )
                }
                </TableBody>
              </Table>
            </div>

            <div className="flex justify-end px-4 mt-4">
              <div className="flex items-center gap-1">
                <Button variant="ghost" className="h-10">
                  <ChevronLeft className="h-4 w-4" />
                  Previous
                </Button>
                <Button variant="ghost" className="h-10 w-10">1</Button>
                <Button variant="outline" className="h-10 w-10">2</Button>
                <Button variant="ghost" className="h-10 w-10">3</Button>
                <Button variant="ghost" className="h-9 w-9">...</Button>
                <Button variant="ghost" className="h-10">
                  Next
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TabsContent>


  )
}
