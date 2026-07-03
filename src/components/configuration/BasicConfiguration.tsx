"use client";

import { Card } from "@/components/ui/card";
import FormInput from "@/components/form/FormInput";
import MultiSelect from "@/components/form/MultiSelect";
import DatePicker from "@/components/form/DatePicker";
import TextArea from "@/components/form/TextArea";
import SectionTitle from "@/components/common/SectionTitle";

export default function BasicConfiguration() {
  return (
    <Card className="p-8 border-slate-200 shadow-sm">

      {/* TITLE */}
      <SectionTitle title="Basic Configuration" />

      {/* FORM GRID */}
      <div className="grid grid-cols-12 gap-6 mt-6">

        {/* CONFIG NAME */}
        <div className="col-span-12">
          <FormInput
            label="Configuration Name *"
            placeholder="e.g. Standard Outlet Leave Policy"
          />
        </div>

        {/* OUTLETS */}
        <div className="col-span-12 md:col-span-6">
          <label className="text-sm font-semibold text-slate-700">
            Applicable Outlets *
          </label>

          <div className="mt-2">
            <MultiSelect />
          </div>
        </div>

        {/* DATE */}
        <div className="col-span-12 md:col-span-6">
          <label className="text-sm font-semibold text-slate-700">
            Effective From *
          </label>

          <div className="mt-2">
            <DatePicker />
          </div>
        </div>

        {/* DESCRIPTION */}
        <div className="col-span-12">
          <TextArea
            label="Description (Optional)"
            placeholder="A brief description about policy usage..."
          />
        </div>

      </div>
    </Card>
  );
}