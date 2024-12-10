"use client";
import { useState, useEffect } from "react";
import "../User.css";
import { cn } from "@/lib/utils";
import {
  Heart,
  History,
  LayoutDashboard,
  LogOut,
  Menu,
  X,
  Settings,
  ShoppingCart,
} from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

export default function DashboardSidebar() {
  const pathname = usePathname();
  const path = pathname?.split("/")[2];
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const router = useRouter();

  const SIDEBAR_LINKS = [
    {
      key: "dashboard",
      label: "Dashboard",
      icon: <LayoutDashboard size={25} />,
      href: "/user/profile",
    },
    {
      key: "orderHistory",
      label: "Order History",
      icon: <History size={25} />,
      href: "/user/order-history",
    },

    {
      key: "shopping-cart",
      label: "Shopping Cart",
      icon: <ShoppingCart size={25} />,
      href: "/cart",
    },
    {
      key: "settings",
      label: "Settings",
      icon: <Settings size={25} />,
      href: "/user/account-settings",
    },
  ];

  // Toggle the sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  // Close the sidebar when clicking outside
  const handleClickOutside = (event: MouseEvent) => {
    const sidebar = document.getElementById("dashboardSidebar");
    if (sidebar && !sidebar.contains(event.target as Node)) {
      setIsSidebarVisible(false);
    }
  };

  useEffect(() => {
    if (isSidebarVisible) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isSidebarVisible]);

  return (
    <div>
      {/* Menu Toggle Button for mobile/tablet devices */}
      <div className="p-4 xl:hidden">
        <button
          onClick={toggleSidebar}
          className="text-gray-500 hover:text-gray-700"
        >
          {isSidebarVisible ? <X size={28} /> : <Menu size={28} />}{" "}
          {/* Toggle between Menu and Close (X) icons */}
        </button>
      </div>

      {/* Sidebar */}
      <div
        id="dashboardSidebar"
        className={`fixed inset-y-0 left-0 z-30 xl:z-10 w-64 transform bg-white shadow-lg transition-transform duration-300 ease-in-out xl:relative xl:transform-none xl:shadow-none ${
          isSidebarVisible
            ? "translate-x-0"
            : "-translate-x-full xl:translate-x-0"
        }`}
      >
        <div className="dashboard-card bg-white py-5">
          <h4 className="mb-5 px-5 text-xl font-bold">Navigation</h4>

          <div className="space-y-2">
            {SIDEBAR_LINKS.map((link) => (
              <Link
                href={link.href}
                key={link.key}
                className={cn(
                  "flex items-center gap-x-3 px-5 py-4 text-lg text-gray-scale-600 transition-all duration-300 ease-in-out",
                  pathname === link.href &&
                    "border-l-4 border-l-[#EA5326] bg-[#FDEEE9] text-black",
                  link.href.includes(path) &&
                    "border-l-4 border-l-[#EA5326] bg-[#FDEEE9] text-black"
                )}
              >
                {link.icon}
                <span>{link.label}</span>
              </Link>
            ))}

            <button
              onClick={() => {
                router.push("/sign-in");
              }}
              type="button"
              className="flex items-center gap-x-3 px-5 py-4 text-lg text-gray-scale-600"
            >
              <LogOut size={25} />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
