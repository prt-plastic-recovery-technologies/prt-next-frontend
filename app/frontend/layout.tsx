"use client"
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {

  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const checkAuth = () => {
    const token = localStorage.getItem("authToken");

    if (!token) {
      router.push("/auth/login");
    } else {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex h-screen bg-white dark:bg-neutral-950">
  <Sidebar />
  <div className="flex-1 flex flex-col overflow-hidden">
    <Header />
    <main className="flex-1 overflow-y-auto">{children}</main>
  </div>
</div>

  );
}
