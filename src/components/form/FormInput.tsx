"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export default function FormInput({ label, className, ...props }: InputProps) {
  return (
    <div className="space-y-1.5 w-full">
      <Label className="text-sm font-medium text-slate-700">{label}</Label>
      <Input 
        {...props} 
        className={`h-10 border-slate-200 focus:border-blue-500 focus:ring-blue-500/20 transition-all ${className}`} 
      />
    </div>
  );
}