import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

export default function TextArea({ label, ...props }: TextAreaProps) {
  return (
    <div className="grid w-full gap-1.5">
      <Label className="text-sm font-medium text-slate-700">{label}</Label>
      <Textarea 
        className="min-h-[120px] border-slate-200 focus:border-blue-500 focus:ring-blue-500/20 transition-all resize-none" 
        {...props} 
      />
    </div>
  );
}