"use client";

import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function GeneralRule() {
  const rules = [
    { id: "half-day", label: "Allow half day leave" },
    { id: "consecutive", label: "Allow consecutive leaves" },
    { id: "back-dated", label: "Allow back dated leave" },
    { id: "future", label: "Allow future leave application" },
  ];

  return (
    <Card className="p-6 border-slate-200 shadow-sm rounded-xl">
      <h3 className="font-bold text-slate-900 mb-5 text-lg">General Rules</h3>
      <div className="space-y-4">
        {rules.map((rule) => (
          <div key={rule.id} className="flex items-center space-x-3">
            <Checkbox 
              id={rule.id} 
              className="h-5 w-5 rounded border-slate-300 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
            />
            <Label 
              htmlFor={rule.id} 
              className="text-sm font-medium text-slate-700 cursor-pointer hover:text-slate-900 transition-colors"
            >
              {rule.label}
            </Label>
          </div>
        ))}
      </div>
    </Card>
  );
}