"use client";
import { Card } from "@/components/ui/card";
import FormInput from "@/components/form/FormInput";
import MultiSelect from "@/components/form/MultiSelect";
import DatePicker from "@/components/form/DatePicker";
import TextArea from "@/components/form/TextArea";
import SectionTitle from "@/components/common/SectionTitle";

export default function BasicConfiguration() {
  return (
    <Card className="p-8 border-slate-200 shadow-none hover:border-blue-300 transition-all duration-300">
      <SectionTitle title="Basic Configuration" />
      
      <div className="grid grid-cols-12 gap-6 mt-6">
        
        <div className="col-span-12">
          <FormInput 
            label="Configuration Name *" 
            placeholder="e.g. Standard Outlet Leave Policy" 
          />
        </div>

        <div className="col-span-12 md:col-span-6 space-y-1.5">
          <label className="text-sm font-semibold text-slate-700">Applicable Outlets *</label>
          <div className="mt-1.5">
            <MultiSelect />
          </div>
        </div>

        <div className="col-span-12 md:col-span-6 space-y-1.5">
          <label className="text-sm font-semibold text-slate-700">Effective From *</label>
          <div className="mt-1.5">
            <DatePicker />
          </div>
        </div>

        <div className="col-span-12 mt-2">
          <TextArea 
            label="Description (Optional)" 
            placeholder="A brief description about how this policy applies to the outlets..." 
          />
        </div>
      </div>
    </Card>
  );
}