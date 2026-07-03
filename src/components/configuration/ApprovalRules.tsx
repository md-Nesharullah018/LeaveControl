import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ApprovalRules() {
  return (
    <Card className="p-6 border-slate-200 shadow-sm rounded-xl bg-white w-full">
      <h3 className="font-bold text-slate-900 mb-6">Approval Rules</h3>
      
      <div className="space-y-6">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-1.5">
            <Label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
              LEAVE UP TO (DAYS)
            </Label>
            <Input type="number" defaultValue={2} />
          </div>
          <div className="space-y-1.5">
            <Label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
              CAN BE APPROVED BY
            </Label>
            <select className="w-full h-10 px-3 border border-slate-200 rounded-lg bg-white text-sm outline-none focus:ring-2 focus:ring-blue-500">
              <option>Outlet Manager</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-1.5">
            <Label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
              LEAVE ABOVE (DAYS)
            </Label>
            <Input type="number" defaultValue={2} />
          </div>
          <div className="space-y-1.5">
            <Label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
              REQUIRES APPROVAL FROM
            </Label>
            <select className="w-full h-10 px-3 border border-slate-200 rounded-lg bg-white text-sm outline-none focus:ring-2 focus:ring-blue-500">
              <option>Area Manager</option>
            </select>
          </div>
        </div>
      </div>
    </Card>
  );
}