"use client";

import { Search as SearchIcon } from "lucide-react";

type SearchFieldProps = {
  placeholder?: string;
  className?: string;
};

export default function SearchField({
  placeholder = "Search the app…",
  className = "",
}: SearchFieldProps) {
  return (
    <div className={`relative w-full max-w-md ${className}`}>
  
      <div className="flex items-center w-full px-4 py-2 rounded-lg bg-gray-100 shadow-md border border-gray-200">
        {/* Search Icon */}
        <SearchIcon className="w-5 h-5 text-gray-500 flex-shrink-0" />

        {/* Input */}
        <input
          type="text"
          aria-label="Search"
          placeholder={placeholder}
          className="w-full px-3 text-sm sm:text-base text-gray-800 placeholder-gray-400 bg-transparent outline-none"
        />

        {/* Shortcut Hint */}
        <div className="hidden sm:flex items-center gap-1 text-xs text-gray-500">
        
        </div>
      </div>
    </div>
  );
}
