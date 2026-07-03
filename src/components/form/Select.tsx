interface SelectProps {
  label: string;
  options: string[];
}

export default function Select({ label, options }: SelectProps) {
  return (
    <div className="space-y-1.5">
      <label className="text-sm font-medium text-slate-700">{label}</label>
      <select className="w-full h-10 px-3 border border-slate-200 rounded-md bg-white text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all cursor-pointer">
        <option value="" disabled selected>Select an option</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );
}