"use client";
import { useState, useEffect } from "react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  ArrowUpDown,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  MoreHorizontal,
  Search,
} from "lucide-react";
import Link from "next/link";

interface Device {
  id: string;
  sn: string;
  name: string;
  unit_status: string;
  des: string;
  address: string;
  model: string;
  unit_num: string;
  organization__name: string;
  organization__logo: string;
}

export default function DeviceList() {
  const [devices, setDevices] = useState<Device[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    const fetchDevices = async () => {
      try {
        const token = localStorage.getItem("authToken");

        if (!token) {
          setError("Authentication token is missing.");
          return;
        }

        const response = await fetch(
          `${API_URL}/api/device/list?page=1&sort_by=id&order=asc`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
            credentials: "include",
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch devices");
        }

        const data = await response.json();
        setDevices(data.devices);
      } catch (err) {
        setError("Failed to load devices");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchDevices();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <div className="border-b px-6 py-6">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
  {/* Title and Description */}
  <div className="flex flex-col gap-1">
    <h2 className="text-neutral-950 text-base font-medium leading-none dark:text-neutral-50">
      Manage Devices
    </h2>
    <p className="text-neutral-500 text-xs font-medium leading-none dark:text-neutral-400">
      This section allows you to add, edit, and manage all devices.
    </p>
  </div>

  {/* Search & Filters - Responsive */}
  <div className="flex flex-col sm:flex-row items-start sm:items-center w-full sm:w-auto gap-3">
    {/* Search Input */}
    <div className="relative w-full sm:max-w-[280px]">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-500 dark:text-neutral-400" />
      <Input className="pl-9 h-10 w-full sm:w-[280px]" placeholder="Search devices" type="search" />
    </div>

    {/* Filters - Stack on mobile, inline on desktop */}
    <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-2">
      <Button variant="outline" className="w-full sm:w-auto">
        Organization
        <ChevronDown className="h-4 w-4" />
      </Button>
      <Button variant="outline" className="w-full sm:w-auto">
        Compactor Status
        <ChevronDown className="h-4 w-4" />
      </Button>
    </div>
  </div>
</div>

      </div>

      <div className="p-6">
        <div className="rounded-lg border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-12">
                  <Checkbox />
                </TableHead>
                <TableHead>
                  <Button variant="ghost" className="h-8 px-2">
                    Serial #
                  </Button>
                </TableHead>
                <TableHead>
                  <span className="text-neutral-500 font-medium dark:text-neutral-400">
                    Organization
                  </span>
                </TableHead>
                <TableHead>
                  <Button variant="ghost" className="h-8 px-2">
                    Site Name
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                  </Button>
                </TableHead>
                <TableHead>
                  <span className="text-neutral-500 font-medium dark:text-neutral-400">
                    Unit Status
                  </span>
                </TableHead>
                <TableHead>
                  <span className="text-neutral-500 font-medium dark:text-neutral-400">
                    Description
                  </span>
                </TableHead>
                <TableHead>
                  <Button variant="ghost" className="h-8 px-2">
                    Address
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                  </Button>
                </TableHead>
                <TableHead>
                  <Button variant="ghost" className="h-8 px-2">
                    Model
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                  </Button>
                </TableHead>
                <TableHead>
                  <Button variant="ghost" className="h-8 px-2">
                    Unit #
                  </Button>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {devices.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>
                    <Checkbox />
                  </TableCell>
                  <TableCell className="font-medium">
                    <Link
                      className="text-foreground"
                      href={`/frontend/devices/detail/${row.id}`}
                    >
                      {row.sn}
                    </Link>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Avatar>
                        <AvatarImage
                          src={
                            row.organization__logo
                              ? `${API_URL}/media/${row.organization__logo}`
                              : "https://github.com/shadcn.png"
                          }
                          alt={row.organization__name || "Organization Avatar"}
                          onError={(e) =>
                            (e.currentTarget.src =
                              "https://github.com/shadcn.png")
                          }
                        />
                      </Avatar>
                      <span>{row.organization__name || "----------"}</span>
                    </div>
                  </TableCell>

                  <TableCell>
                    {row.name !== "undefined" ? row.name : "----------"}
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        row.unit_status === "deployed" ? "success" : "default"
                      }
                    >
                      {row.unit_status || "----------"}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {row.des !== "undefined" && row.des !== "default"
                      ? row.des
                      : "----------"}
                  </TableCell>
                  <TableCell>{row.address || "----------"}</TableCell>
                  <TableCell>{row.model || "----------"}</TableCell>
                  <TableCell>{row.unit_num || "----------"}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Pagination */}
        <div className="flex justify-end px-4 py-4">
          <div className="flex items-center gap-1">
            <Button variant="ghost" className="gap-1">
              <ChevronLeft className="h-4 w-4" />
              Previous
            </Button>
            <Button variant="ghost" className="h-10 w-10">
              1
            </Button>
            <Button variant="outline" className="h-10 w-10">
              2
            </Button>
            <Button variant="ghost" className="h-10 w-10">
              3
            </Button>
            <Button variant="ghost" size="icon">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
            <Button variant="ghost" className="gap-1">
              Next
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
