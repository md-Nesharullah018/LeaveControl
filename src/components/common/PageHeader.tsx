"use client";

interface PageHeaderProps {
  title: string;
  description: string;
  breadcrumb?: string;
}

export default function PageHeader({ title, description, breadcrumb }: PageHeaderProps) {
  return (
    <div className="mb-8 pb-6 border-b border-slate-200">

      {breadcrumb && (
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
          {breadcrumb.split('/').map((item, index, arr) => (
            <span key={item} className={index === arr.length - 1 ? "text-blue-600" : "text-slate-400"}>
              {item.trim()} {index < arr.length - 1 && <span className="text-slate-300 ml-2">/</span>}
            </span>
          ))}
        </div>
      )}
      
      <div className="flex items-center gap-3">
        <div className="h-8 w-1.5 bg-blue-600 rounded-full" />
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
          {title}
        </h1>
      </div>
      
      <p className="mt-2 text-slate-500 max-w-2xl text-sm leading-relaxed ml-4.5 pl-4">
        {description}
      </p>
    </div>
  );
}