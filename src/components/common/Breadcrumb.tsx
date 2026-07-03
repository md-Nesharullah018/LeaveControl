import { ChevronRight } from "lucide-react";

export default function Breadcrumb() {
  const items = ["Settings", "Leave Management", "Leave Configuration"];

  return (
    <nav className="flex items-center text-sm mb-4" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-1">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          
          return (
            <li key={item} className="flex items-center">
              <span
                className={`transition-colors duration-200 ${
                  isLast 
                    ? "text-blue-600 font-semibold cursor-default" 
                    : "text-slate-500 hover:text-blue-600 cursor-pointer"
                }`}
              >
                {item}
              </span>
              
              {!isLast && (
                <ChevronRight className="h-4 w-4 mx-1.5 text-slate-400" />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}