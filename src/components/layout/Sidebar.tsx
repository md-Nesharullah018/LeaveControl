"use client";
import { 
  LayoutDashboard, Building2, Users, Clock, CalendarDays, 
  Wallet, FileBarChart, ShieldCheck, Settings, Bell, ChevronDown, HelpCircle, ChevronRight
} from "lucide-react";

export default function Sidebar() {
  const mainNav = [
    { name: "Dashboard", icon: LayoutDashboard },
    { name: "Outlets", icon: Building2 },
    { name: "Staff", icon: Users },
    { name: "Attendance", icon: Clock },
    { name: "Leaves", icon: CalendarDays },
    { name: "Payroll", icon: Wallet },
    { name: "Reports", icon: FileBarChart },
  ];

  const settingsNav = [
    { name: "Roles & Permissions", icon: ShieldCheck },
    { name: "Leave Management", icon: Settings },
    { name: "Holidays", icon: CalendarDays },
    { name: "Notifications", icon: Bell },
    { name: "General Settings", icon: Settings },
  ];

  return (

    <aside className="w-64 h-screen bg-[#050b1a] text-slate-400 flex flex-col p-4 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      
      <div className="flex items-center gap-3 px-3 py-6">
        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">O</div>
        <span className="text-white font-semibold text-lg">Outlet HRMS</span>
      </div>

      <div className="flex-1 space-y-8 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">

        <div>
          <h3 className="px-3 text-[10px] font-bold text-slate-600 uppercase tracking-wider mb-2">Main</h3>
          <nav className="space-y-1">
            {mainNav.map((item) => (
              <a key={item.name} href="#" className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${item.name === "Leaves" ? "bg-blue-600 text-white" : "hover:bg-slate-800/50 hover:text-white"}`}>
                <item.icon className="w-4 h-4" />
                {item.name}
              </a>
            ))}
          </nav>
        </div>

        <div>
          <h3 className="px-3 text-[10px] font-bold text-slate-600 uppercase tracking-wider mb-2">Settings</h3>
          <nav className="space-y-1">
            {settingsNav.map((item) => (
              <div key={item.name}>
                <a href="#" className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${item.name === "Leave Management" ? "text-white" : "hover:bg-slate-800/50 hover:text-white"}`}>
                  <div className="flex items-center gap-3">
                    <item.icon className="w-4 h-4" />
                    {item.name}
                  </div>
                  {item.name === "Leave Management" && <ChevronDown className="w-4 h-4" />}
                </a>
                
                {item.name === "Leave Management" && (
                  <div className="mt-1 space-y-1">
                    <a href="#" className="block px-10 py-2 text-sm text-slate-400 hover:text-white">Leave Types</a>
                    <a href="#" className="block px-10 py-2 text-sm bg-blue-900/20 text-blue-400 font-medium rounded-lg">Leave Configuration</a>
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>

      <div className="mt-4 bg-[#0a1226] p-4 rounded-xl border border-slate-800">
        <div className="flex items-center gap-3 mb-2">
          <HelpCircle className="w-5 h-5 text-slate-400" />
          <span className="text-white font-medium text-sm">Need Help?</span>
        </div>
        <div className="flex items-center justify-between text-xs text-slate-500">
          <span>Visit our help center</span>
          <ChevronRight className="w-4 h-4" />
        </div>
      </div>
    </aside>
  );
}