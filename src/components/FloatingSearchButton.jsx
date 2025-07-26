import React from 'react';
import { IconSearch, IconCommand } from '@tabler/icons-react';

const FloatingSearchButton = ({ onClick, theme }) => {
  return (
    <button
      onClick={onClick}
      className="floating-search-btn fixed bottom-6 right-6 z-50 bg-white shadow-lg hover:shadow-xl border border-gray-200 rounded-full p-4 transition-all duration-200 hover:scale-105 group"
      style={{ 
        backgroundColor: theme?.primaryColor || '#6366f1',
        color: 'white'
      }}
      title="Search pages (Ctrl+K)"
    >
      <div className="flex items-center gap-2">
        <IconSearch size={20} />
        <div className="hidden md:flex items-center gap-1 text-sm">
          <span>Search</span>
          <div className="flex items-center gap-1 ml-2 opacity-75">
            <kbd className="px-1 py-0.5 bg-white/20 rounded text-xs">⌘</kbd>
            <kbd className="px-1 py-0.5 bg-white/20 rounded text-xs">K</kbd>
          </div>
        </div>
      </div>
    </button>
  );
};

export default FloatingSearchButton;
