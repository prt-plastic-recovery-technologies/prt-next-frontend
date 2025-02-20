"use client"
import { useState, useEffect } from "react";
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  ArrowUpDown,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  MoreHorizontal,
  Search,
} from "lucide-react"
import Link from "next/link";



export default function DeviceList() {
  const [devices, setDevices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const csrfToken = localStorage.getItem("csrfToken");  
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const getCsrfToken = async () => {
    try {
      const response = await fetch(`${API_URL}/api/auth/csrf/`, {
        credentials: "include",
      });
      const data = await response.json();
      if (data.csrfToken) {
        localStorage.setItem("csrfToken", data.csrfToken);
      }
    } catch (error) {
      setError("Failed to fetch CSRF token");
    }
  };

  
  const getAuthToken = () => {
    return localStorage.getItem("authToken");
  };

  useEffect(() => {
    const fetchDevices = async () => {
      try {
        if (!csrfToken) {
          await getCsrfToken(); // Fetch CSRF token if not available
        }
        const token = getAuthToken();

        // Check if the token exists
        if (!token) {
          setError("Authentication token is missing.");
          return;
        }
        console.log(token)
        // Send the token in the Authorization header as a Bearer token
        const response = await fetch(`${API_URL}/api/devices/list?page=1&sort_by=id&order=asc`, {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json",
            "X-CSRFToken": csrfToken || "",
          },
          credentials: "include",
        });

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
          <div className="flex justify-between items-center gap-2 ">
            <div className="flex flex-col gap-1">
              <h2 className="text-neutral-950 text-base font-medium leading-none dark:text-neutral-50">
                Manage devices
              </h2>
              <p className="text-neutral-500 text-xs font-medium leading-none dark:text-neutral-400">
                This section allows you to add, edit, and manage all devices.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-500 dark:text-neutral-400" />
                <Input 
                  className="pl-9 h-10 w-[280px]" 
                  placeholder="Search devices"
                  type="search"
                />
              </div>

              <Button variant="outline">
                Organization
                <ChevronDown className="h-4 w-4" />
              </Button>

              <Button variant="outline">
                Compactor Status
                <ChevronDown className="h-4 w-4" />
              </Button>
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
                <span className="text-neutral-500 font-medium dark:text-neutral-400">Organization</span>
              </TableHead>
              <TableHead>
                <Button variant="ghost" className="h-8 px-2">
                  Site Name
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead>
                <span className="text-neutral-500 font-medium dark:text-neutral-400">Unit Status</span>
              </TableHead>
              <TableHead>
                <span className="text-neutral-500 font-medium dark:text-neutral-400">Description</span>
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
                <Link className="underline text-foreground" href="/frontend/devices/detail">
                {row.id}
              </Link>
                  </TableCell>
                <TableCell>
                  <div className="flex items-center space-x-2">
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" alt="Avatar" />
                    </Avatar>
                    <span>{row.organization}</span>
                  </div>
                </TableCell>
                <TableCell>{row.siteName}</TableCell>
                <TableCell>
                  <Badge>{row.unitStatus}</Badge>
                </TableCell>
                <TableCell>{row.description}</TableCell>
                <TableCell>{row.address}</TableCell>
                <TableCell>{row.model}</TableCell>
                <TableCell>{row.unitNumber}</TableCell>
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
              <Button variant="ghost" className="h-10 w-10">1</Button>
              <Button variant="outline" className="h-10 w-10">2</Button>
              <Button variant="ghost" className="h-10 w-10">3</Button>
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
  )
}
