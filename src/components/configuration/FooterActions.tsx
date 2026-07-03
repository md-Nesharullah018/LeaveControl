"use client";

import { Button } from "@/components/ui/button";
import { Loader2, Save } from "lucide-react";
import { toast } from "sonner";

export default function FooterActions({ onSave, isLoading, onCancel }) {

  const handleSave = async () => {
    try {
      if (!onSave) return;

      await onSave(); // parent handles actual save

      toast.success("Configuration saved successfully");
    } catch (error) {
      console.error(error);
      toast.error("Failed to save configuration");
    }
  };

  const handleCancel = () => {
    try {
      onCancel?.();
      toast("Action cancelled");
    } catch (error) {
      console.error(error);
      toast.error("Cancel failed");
    }
  };

  return (
    <div className="flex items-center justify-end gap-3">
      <Button
        variant="ghost"
        onClick={handleCancel}
        className="text-slate-600 hover:text-slate-900"
      >
        Cancel
      </Button>

      <Button
        onClick={handleSave}
        disabled={isLoading}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6"
      >
        {isLoading ? (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Save className="mr-2 h-4 w-4" />
        )}
        Save Configuration
      </Button>
    </div>
  );
}