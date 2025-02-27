import { TabsContent } from "@/components/ui/tabs";
import { useState } from "react"
import { Cable, ArrowUpDown, MoreHorizontal, ChevronLeft, ChevronRight } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

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
  // device_alerts: DeviceAlert[];
}

export default function Connectivity({ email_logs, id, sn }: AlertsProps) {

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
    <TabsContent value="connectivity">
    <Card className="w-full">
      <div className="p-3 space-y-4">
        {/* Header */}
        <div className="container">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-semibold text-neutral-950 dark:text-neutral-50">Connectivity</h2>
            </div>
            <Button variant="default">
              <Cable className="w-4 h-4 mr-2" />
              Connection Settings
            </Button>
          </div>
          <Separator className="mt-4" />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
  {/* Firmware Version */}
  <div className="bg-neutral-100 rounded-md p-2 space-y-3 dark:bg-neutral-800">
    <p className="text-xs text-sidebar-foreground">Firmware version</p>
    <p className="text-sm font-medium text-neutral-950 dark:text-neutral-50">856</p>
  </div>

  {/* Last Heartbeat */}
  <div className="bg-neutral-100 rounded-md p-2 space-y-3 dark:bg-neutral-800">
    <p className="text-xs text-sidebar-foreground">Last heartbeat</p>
    <p className="text-sm font-medium text-neutral-950 dark:text-neutral-50">856</p>
  </div>

  {/* Cell Connectivity Status */}
  <div className="bg-neutral-100 rounded-md p-2 space-y-3 dark:bg-neutral-800">
    <p className="text-xs text-sidebar-foreground">Cell connectivity status</p>
    <Badge variant="default">Cell PWR</Badge>
  </div>

  {/* GPS */}
  <div className="bg-neutral-100 rounded-md p-2 space-y-3 dark:bg-neutral-800">
    <p className="text-xs text-sidebar-foreground">GPS</p>
    <p className="text-sm font-medium text-neutral-950 dark:text-neutral-50">41.40338, 2.17403</p>
  </div>
</div>


        {/* Alerts Table */}
        <div>
          <h3 className="text-sm font-medium mb-4">List of alerts</h3>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-12">
                  <Checkbox />
                </TableHead>
                <TableHead>
                  <Button variant="ghost" className="flex items-center">
                    Id
                  </Button>
                </TableHead>
                <TableHead>
                  <Button variant="ghost" className="flex items-center">
                    Alert Type <ArrowUpDown className="ml-2 h-4 w-4" />
                  </Button>
                </TableHead>
                <TableHead>
                  <Button variant="ghost" className="flex items-center">
                    Alert Status <ArrowUpDown className="ml-2 h-4 w-4" />
                  </Button>
                </TableHead>
                <TableHead>
                  <Button variant="ghost" className="flex items-center">
                    Recipient <ArrowUpDown className="ml-2 h-4 w-4" />
                  </Button>
                </TableHead>
                <TableHead>
                  <Button variant="ghost" className="flex items-center">
                    Device Id <ArrowUpDown className="ml-2 h-4 w-4" />
                  </Button>
                </TableHead>
                <TableHead>
                  <Button variant="ghost" className="flex items-center">
                    Device Sn <ArrowUpDown className="ml-2 h-4 w-4" />
                  </Button>
                </TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {email_logs.map((row) => (
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
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Pagination */}
        <div className="flex justify-end px-4">
          <div className="flex items-center gap-1">
            <Button variant="ghost" className="h-10">
              <ChevronLeft className="h-4 w-4 mr-1" />
              Previous
            </Button>
            <Button variant="ghost" className="w-10 h-10">1</Button>
            <Button variant="ghost" className="w-10 h-10 bg-white border dark:bg-neutral-950">2</Button>
            <Button variant="ghost" className="w-10 h-10">3</Button>
            <Button variant="ghost" className="w-9 h-9 p-2.5">...</Button>
            <Button variant="ghost" className="h-10">
              Next
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
        </div>
      </div>
    </Card>
    </TabsContent>
  )
}
