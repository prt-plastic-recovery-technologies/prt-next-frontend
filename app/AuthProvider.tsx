"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function AuthProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    if (pathname === "/") {
      setIsLoading(false);
      return;
    }

    const checkToken = async () => {
      let token = localStorage.getItem("authToken");

      if (!token) {
        logoutUser();
        return;
      }

      try {
        const response = await fetch(`${API_URL}/api/token/verify/`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
          },
          body: JSON.stringify({ token }),
          credentials: "include",
        });
        console.log(response)
        if (!response.ok) {
          // Token expired, try refreshing it
          token = await refreshAccessToken();
          if (!token) {
            logoutUser();
            return;
          }
        }

        setIsLoading(false);
      } catch (error) {
        console.error("Error verifying token:", error);
        logoutUser();
      }
    };

    const refreshAccessToken = async () => {
      try {
        const refreshToken = localStorage.getItem("refreshToken");
        if (!refreshToken) return null;

        const response = await fetch(`${API_URL}/api/token/refresh/`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ refresh: refreshToken }),
          credentials: "include",
        });

        if (!response.ok) {
          localStorage.removeItem("authToken");
          localStorage.removeItem("refreshToken");
          return null;
        }

        const data = await response.json();
        localStorage.setItem("authToken", data.access);
        return data.access;
      } catch (error) {
        console.error("Error refreshing token:", error);
        return null;
      }
    };

    const logoutUser = () => {
      localStorage.removeItem("authToken");
      localStorage.removeItem("refreshToken");
      router.push("/");
      setIsLoading(false);
    };

    checkToken();
  }, [router, pathname, API_URL]);

  if (isLoading) return <p>Loading...</p>;

  return <>{children}</>;
}
