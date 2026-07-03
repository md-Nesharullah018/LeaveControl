interface SectionTitleProps {
  title: string;
  className?: string; 
}

export default function SectionTitle({ title, className = "" }: SectionTitleProps) {
  return (
    <div className={`flex items-center mb-6 ${className}`}>
      <div className="w-1.5 h-6 bg-blue-600 rounded-full mr-3" />
      <h3 className="text-lg font-bold text-slate-900 tracking-tight uppercase tracking-wide text-[15px]">
        {title}
      </h3>
    </div>
  );
}