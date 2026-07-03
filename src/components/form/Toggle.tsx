"use client";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export default function Toggle({ label, description, className = "" }: { label?: string; description?: string; className?: string }) {

  if (!label) {
    return (
      <div className={`flex justify-center ${className}`}>
        <Switch className="data-[state=checked]:bg-blue-600 h-5 w-9 transition-colors" />
      </div>
    );
  }

  return (
    <div className={`flex items-center justify-between p-4 border border-slate-200 rounded-xl bg-white ${className}`}>
      <div className="flex flex-col gap-0.5">
        <Label className="text-sm font-semibold text-slate-900">{label}</Label>
        {description && <p className="text-xs text-slate-500">{description}</p>}
      </div>
      <Switch className="data-[state=checked]:bg-blue-600" />
    </div>
  );
}