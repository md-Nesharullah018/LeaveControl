"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Plus, Trash2, Pencil, Check, Loader2, Save } from "lucide-react";

/* ================= TYPES ================= */
type LeaveType = {
  id: string;
  name: string;
  shortCode: string;
  entitlement: number;
  maxCarry: number;
  carryEnabled: boolean;
};

type FormDataType = {
  name: string;
  shortCode: string;
  entitlement: string;
  maxCarry: string;
};

/* ================= TOGGLE ================= */
const CustomToggle = ({
  checked,
  onChange,
}: {
  checked: boolean;
  onChange: () => void;
}) => (
  <button
    onClick={onChange}
    className={`w-12 h-6 rounded-full p-1 flex items-center transition ${
      checked ? "bg-blue-600" : "bg-slate-300"
    }`}
  >
    <div
      className={`w-4 h-4 bg-white rounded-full transition-transform ${
        checked ? "translate-x-6" : "translate-x-0"
      }`}
    />
  </button>
);

/* ================= PAGE ================= */
export default function LeaveManagementPage() {
  const [data, setData] = useState<LeaveType[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState<FormDataType>({
    name: "",
    shortCode: "",
    entitlement: "",
    maxCarry: "0",
  });

  /* ================= INIT (SAFE LOCALSTORAGE) ================= */
  useEffect(() => {
    if (typeof window === "undefined") return;

    const saved = localStorage.getItem("leaveTypes");

    if (saved) {
      try {
        const parsed: LeaveType[] = JSON.parse(saved);
        setData(parsed);
      } catch {
        setData([]);
      }
    } else {
      setData([
        {
          id: "1",
          name: "Casual Leave",
          shortCode: "CL",
          entitlement: 12,
          maxCarry: 5,
          carryEnabled: true,
        },
      ]);
    }
  }, []);

  /* ================= AUTO SYNC (IMPORTANT FIX) ================= */
  useEffect(() => {
    localStorage.setItem("leaveTypes", JSON.stringify(data));
  }, [data]);

  /* ================= SAVE CONFIG ================= */
  const handleSaveConfiguration = async () => {
    try {
      setIsLoading(true);

      await new Promise((r) => setTimeout(r, 800));

      toast.success("Configuration saved successfully");
    } catch (err) {
      toast.error("Failed to save configuration");
    } finally {
      setIsLoading(false);
    }
  };

  /* ================= ADD ================= */
  const handleAdd = () => {
    if (!formData.name.trim()) {
      toast.error("Leave Name is required");
      return;
    }

    const newItem: LeaveType = {
      id: Date.now().toString(),
      name: formData.name,
      shortCode: formData.shortCode,
      entitlement: Number(formData.entitlement) || 0,
      maxCarry: Number(formData.maxCarry) || 0,
      carryEnabled: false,
    };

    setData((prev) => [...prev, newItem]);

    setFormData({
      name: "",
      shortCode: "",
      entitlement: "",
      maxCarry: "0",
    });

    setIsModalOpen(false);
    toast.success("Leave type added");
  };

  /* ================= UPDATE FIELD ================= */
  const updateField = (id: string, field: keyof LeaveType, value: any) => {
    setData((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  };

  /* ================= DELETE ================= */
  const handleDelete = (id: string) => {
    setData((prev) => prev.filter((i) => i.id !== id));
    toast.success("Deleted successfully");
  };

  /* ================= UI ================= */
  return (
    <Card className="p-6 border shadow-sm rounded-xl bg-white">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-xl font-bold">
          LEAVE TYPES & ENTITLEMENT
        </h2>

        <div className="flex gap-2">
          <Button
            onClick={handleSaveConfiguration}
            disabled={isLoading}
            variant="outline"
          >
            {isLoading ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Save className="mr-2 h-4 w-4" />
            )}
            Save Changes
          </Button>

          <Button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-600 hover:bg-blue-700"
          >
            <Plus className="mr-2 h-4 w-4" />
            Add Leave Type
          </Button>
        </div>
      </div>

      {/* TABLE */}
      <div className="bg-slate-50 rounded-xl border p-4 overflow-x-auto">
        <div className="min-w-[700px]">

          {/* HEADER */}
          <div className="grid grid-cols-6 gap-4 px-4 py-2 text-xs font-bold text-slate-500">
            <div>Leave Type</div>
            <div className="text-center">Code</div>
            <div className="text-center">Entitlement</div>
            <div className="text-center">Carry</div>
            <div className="text-center">Max</div>
            <div className="text-center">Actions</div>
          </div>

          {/* ROWS */}
          <div className="space-y-3 mt-2">
            {data.map((item) => (
              <div
                key={item.id}
                className="grid grid-cols-6 gap-4 items-center bg-white px-4 py-3 rounded-lg border"
              >
                <div className="font-semibold">{item.name}</div>

                <Input
                  disabled={editingId !== item.id}
                  value={item.shortCode}
                  onChange={(e) => {
                    if (editingId !== item.id) return;
                    updateField(item.id, "shortCode", e.target.value);
                  }}
                />

                <Input
                  type="number"
                  disabled={editingId !== item.id}
                  value={item.entitlement}
                  onChange={(e) => {
                    if (editingId !== item.id) return;
                    updateField(
                      item.id,
                      "entitlement",
                      Number(e.target.value)
                    );
                  }}
                />

                <div className="flex justify-center">
                  <CustomToggle
                    checked={item.carryEnabled}
                    onChange={() => {
                      setData((prev) =>
                        prev.map((i) =>
                          i.id === item.id
                            ? { ...i, carryEnabled: !i.carryEnabled }
                            : i
                        )
                      );
                    }}
                  />
                </div>

                <Input
                  type="number"
                  disabled={!item.carryEnabled}
                  value={item.maxCarry}
                  onChange={(e) => {
                    if (editingId !== item.id) return;
                    updateField(
                      item.id,
                      "maxCarry",
                      Number(e.target.value)
                    );
                  }}
                />

                <div className="flex justify-center gap-3">
                  {editingId === item.id ? (
                    <Check
                      className="text-green-600 cursor-pointer"
                      onClick={() => setEditingId(null)}
                    />
                  ) : (
                    <Pencil
                      className="text-blue-500 cursor-pointer"
                      onClick={() => setEditingId(item.id)}
                    />
                  )}

                  <Trash2
                    className="text-red-500 cursor-pointer"
                    onClick={() => handleDelete(item.id)}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-6 rounded-2xl w-full max-w-sm space-y-4">
            <h3 className="font-bold text-lg">Add Leave Type</h3>

            <Input
              placeholder="Leave Name"
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />

            <div className="grid grid-cols-3 gap-2">
              <Input
                placeholder="Code"
                onChange={(e) =>
                  setFormData({ ...formData, shortCode: e.target.value })
                }
              />
              <Input
                type="number"
                placeholder="Days"
                onChange={(e) =>
                  setFormData({ ...formData, entitlement: e.target.value })
                }
              />
              <Input
                type="number"
                placeholder="Max"
                onChange={(e) =>
                  setFormData({ ...formData, maxCarry: e.target.value })
                }
              />
            </div>

            <Button className="w-full bg-blue-600" onClick={handleAdd}>
              Save Policy
            </Button>

            <Button
              variant="ghost"
              className="w-full"
              onClick={() => setIsModalOpen(false)}
            >
              Cancel
            </Button>
          </div>
        </div>
      )}
    </Card>
  );
}