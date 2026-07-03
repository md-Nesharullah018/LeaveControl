"use client";
import { Bell, Menu } from "lucide-react"; 

interface NavbarProps {
  toggleSidebar: () => void;
}

export default function Navbar({ toggleSidebar }: NavbarProps) {
  return (
    <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 md:px-8 sticky top-0 z-10">

      <div className="flex items-center gap-3">
        <button 
          onClick={toggleSidebar} 
          className="lg:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
        >
          <Menu className="w-6 h-6" />
        </button>

        <div className="hidden md:flex items-center text-sm text-slate-500 font-medium">
          <span>Settings</span>
          <span className="mx-2 text-slate-300">/</span>
          <span>Leave Management</span>
          <span className="mx-2 text-slate-300">/</span>
          <span className="text-blue-600">Leave Configuration</span>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <button className="relative text-slate-500 hover:text-slate-900 transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white" />
        </button>

        <div className="flex items-center gap-3 border-l border-slate-200 pl-6">
          <div className="text-right">
            <p className="text-sm font-bold text-slate-900"> ADMIN </p>
            <p className="text-[11px] text-slate-500 font-medium uppercase tracking-wide">Area Manager</p>
          </div>
          <img 
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Vijay" 
            alt="Profile" 
            className="w-9 h-9 rounded-full border border-slate-200"
          />
        </div>
      </div>
    </header>
  );
}