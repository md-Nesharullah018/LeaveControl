"use client";
import { Checkbox as ShadcnCheckbox } from "@/components/ui/checkbox";

export default function Checkbox({ id, label }: { id: string; label?: string }) {
  return (
    <div className="flex items-center space-x-2">
      <ShadcnCheckbox 
        id={id} 
        className="h-5 w-5 border-slate-300 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600 transition-all duration-200" 
      />
      {label && (
        <label htmlFor={id} className="text-sm font-medium text-slate-700 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          {label}
        </label>
      )}
    </div>
  );
}