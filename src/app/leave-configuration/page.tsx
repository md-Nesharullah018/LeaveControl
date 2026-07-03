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

/* ================= TYPE ================= */


export default function LeaveConfigurationPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);


const handleSaveConfiguration = async () => {
  try {
    setIsLoading(true);

    await new Promise((res) => setTimeout(res, 800));

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

      {/* SIDEBAR */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-slate-900 border-r transition-transform lg:static lg:translate-x-0 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Sidebar />
      </div>

      {/* MAIN */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">

        <Navbar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

        <div className="flex-1 overflow-y-auto">
          <div className="w-full max-w-[1600px] mx-auto p-6 md:p-10 space-y-8">

            <PageHeader
              title="Leave Configuration"
              description="Configure leave types, entitlement, rules and restrictions for outlet staff."
            />

            <div className="grid grid-cols-12 gap-8">

              {/* LEFT MENU */}
              <div className="col-span-12 xl:col-span-2 space-y-6">

                {/* MENU CARD */}
                <Card className="p-2">
                  {[
                    { name: "Configuration", icon: Settings, active: true },
                    { name: "Assign to Staff", icon: Users },
                    { name: "Leave Policies", icon: FileText },
                    { name: "Overview", icon: PieChart },
                  ].map((item) => (
                    <button
                      key={item.name}
                      className={`w-full flex items-center gap-3 p-3 rounded-lg text-sm ${
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

                {/* ✅ NEW "ABOUT CARD" (LIKE YOUR IMAGE) */}
                <Card className="p-4 space-y-3">
                  <h3 className="font-semibold text-slate-900">
                    About Leave Configuration
                  </h3>

                  <p className="text-sm text-slate-500 leading-relaxed">
                    Configure leave rules, balances and policies for outlet staff.
                    These settings will be used to calculate and manage leave requests.
                  </p>
                  
                </Card>

              </div>

              {/* CONTENT */}
              <div className="col-span-12 xl:col-span-10 space-y-8">

                <BasicConfiguration />

                <LeaveTypesTable />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <GeneralRules />
                  <ApprovalRules />
                </div>

                <div className="flex justify-end">
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

      {/* OVERLAY */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
}