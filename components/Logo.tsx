import React from 'react';

export const Logo: React.FC<{ className?: string, dark?: boolean }> = ({ className = "", dark = false }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Abstract EP Icon based on PDF 2 */}
      <div className="relative w-10 h-10 flex-shrink-0">
        <div className="absolute inset-0 bg-teal-600 rounded-tr-xl rounded-bl-xl transform skew-x-[-10deg]"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white font-bold text-xl tracking-tighter italic font-sans" style={{ fontFamily: 'Arial, sans-serif' }}>EP</span>
        </div>
      </div>
      <div className="flex flex-col">
        <span className={`text-xl font-bold leading-none tracking-tight ${dark ? 'text-slate-900' : 'text-white'}`}>
          energy<span className="text-teal-500">pool</span>
        </span>
        <span className={`text-[0.6rem] uppercase tracking-widest ${dark ? 'text-slate-500' : 'text-slate-300'}`}>
          Waterproofing & Maintenance Experts
        </span>
      </div>
    </div>
  );
};