"use client";

import { useState } from "react";
import Sidebar from "@/components/layout/Sidebar";
import Navbar from "@/components/layout/Navbar";
import { Card } from "@/components/ui/card";
import { Settings, Users, FileText, PieChart } from "lucide-react";
import PageHeader from "@/components/common/PageHeader";
import BasicConfiguration from "@/components/configuration/BasicConfiguration";
import LeaveTypesTable from "@/components/configuration/LeaveTypesTable";
import GeneralRules from "@/components/configuration/GeneralRules";
import ApprovalRules from "@/components/configuration/ApprovalRules";
import FooterActions from "@/components/configuration/FooterActions";

export default function LeaveConfigurationPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // ✅ FIX 1: ADD STATE FOR DATA
  const [data, setData] = useState([]);

  // optional: receive data from child via callback later if needed

  const handleSaveConfiguration = async () => {
    try {
      setIsLoading(true);

      await new Promise((res) => setTimeout(res, 800));

      // ✅ FIX 2: now data exists
      localStorage.setItem("leaveTypes", JSON.stringify(data));

      alert("Configuration saved successfully!");
    } catch (error) {
      console.error(error);
      alert("Save failed!");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    window.location.reload();
  };

  return (
    <div className="flex h-screen w-full bg-slate-50 overflow-hidden">

      {/* Sidebar */}
      <div
        className={`
          fixed inset-y-0 left-0 z-50 w-64 h-screen bg-slate-900 border-r border-slate-800
          transition-transform duration-300 lg:static lg:translate-x-0
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <Sidebar />
      </div>

      {/* Main */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden min-w-0">
        <Navbar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

        <div className="flex-1 overflow-y-auto">
          <div className="w-full max-w-[1600px] mx-auto p-6 md:p-10 space-y-8">

            <PageHeader
              title="Leave Configuration"
              description="Configure leave types, entitlement, rules and restrictions for outlet staff."
            />

            <div className="grid grid-cols-12 gap-8">

              {/* Sidebar menu */}
              <div className="col-span-12 xl:col-span-2 space-y-6">
                <Card className="p-2 border-slate-200 shadow-sm bg-white">
                  {[
                    { name: "Configuration", icon: Settings, active: true },
                    { name: "Assign to Staff", icon: Users },
                    { name: "Leave Policies", icon: FileText },
                    { name: "Overview", icon: PieChart },
                  ].map((item) => (
                    <button
                      key={item.name}
                      className={`w-full flex items-center gap-3 p-3 rounded-lg text-sm font-medium ${
                        item.active
                          ? "bg-blue-50 text-blue-600"
                          : "text-slate-600 hover:bg-slate-50"
                      }`}
                    >
                      <item.icon size={18} />
                      {item.name}
                    </button>
                  ))}
                </Card>
              </div>

              {/* Content */}
              <div className="col-span-12 xl:col-span-10 space-y-8">

                <BasicConfiguration />

                {/* IMPORTANT: pass setter to table */}
                <LeaveTypesTable setData={setData} />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <GeneralRules />
                  <ApprovalRules />
                </div>

                <div className="flex justify-end pt-6">
                  <FooterActions
                    onSave={handleSaveConfiguration}
                    onCancel={handleCancel}
                    isLoading={isLoading}
                  />
                </div>

              </div>
            </div>
          </div>
        </div>
      </main>

      {/* overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
}