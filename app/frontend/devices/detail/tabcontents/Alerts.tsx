
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

export default function Alerts() {
  const [selectedRows, setSelectedRows] = useState<string[]>([])
  const data = [
    { id: 1, alertType: "Critical", alertStatus: "Active", status: "Pending", timestamp: "2025-02-26 10:00 AM" },
    { id: 2, alertType: "Warning", alertStatus: "Resolved", status: "Closed", timestamp: "2025-02-26 11:00 AM" },
    { id: 3, alertType: "Info", alertStatus: "Active", status: "Ongoing", timestamp: "2025-02-26 12:00 PM" },
  ];

  return (
    <TabsContent value ="alerts">
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
              {Array.from({ length: 8 }).map((_, i) => (
                <TableRow key={i}>
                  <TableCell>
                    <Checkbox />
                  </TableCell>
                  <TableCell>943</TableCell>
                  <TableCell>a0</TableCell>
                  <TableCell>System Comm</TableCell>
                  <TableCell>
                    <div className="flex gap-2 flex-wrap">
                      <Badge variant="secondary">GSimone@PRTParts.com</Badge>
                      <Badge variant="secondary">ex@PRTParts.com</Badge>
                      <Badge variant="secondary">...</Badge>
                    </div>
                  </TableCell>
                  <TableCell>33</TableCell>
                  <TableCell>6140495</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
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
                    {data.map((row) => (
                      <TableRow key={row.id}>
                        <TableCell>{row.id}</TableCell>
                        <TableCell>{row.alertType}</TableCell>
                        <TableCell>{row.alertStatus}</TableCell>
                        <TableCell>{row.status}</TableCell>
                        <TableCell>{row.timestamp}</TableCell>
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
