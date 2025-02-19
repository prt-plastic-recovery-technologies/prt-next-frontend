// app/layout.tsx
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-white dark:bg-neutral-950">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <main className="">{children}</main>
      </div>
    </div>
  );
}
