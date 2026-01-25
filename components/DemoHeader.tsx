import React from 'react';

interface DemoHeaderProps {
  title: string;
  color: string;
  onBack?: () => void;
}

export const DemoHeader: React.FC<DemoHeaderProps> = ({ title, color, onBack }) => (
  <div 
    className="pt-10 pb-4 px-4 flex items-center gap-3 text-white shadow-lg sticky top-0 z-50" 
    style={{ backgroundColor: color }}
  >
    {onBack && (
      <button onClick={onBack} className="p-1 hover:bg-white/10 rounded-lg transition-colors">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
    )}
    <h1 className="text-xs font-black uppercase tracking-tight truncate flex-1 text-left">
      {title}
    </h1>
  </div>
);