"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function NumberInput({ label, placeholder }: { label: string, placeholder: string }) {
  return (
    <div className="space-y-1.5">
      <Label className="text-sm font-medium text-slate-700">{label}</Label>
      <Input 
        type="number" 
        placeholder={placeholder} 
        className="h-10 border-slate-200 focus:border-blue-500 focus:ring-blue-500/20 transition-all" 
      />
    </div>
  );
}