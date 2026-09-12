import React from 'react';

export default function Logo({ className = "", isDark = false, size = "normal" }) {
  // Height presets for responsive display
  const heightClasses = {
    small: "h-8 sm:h-10",
    normal: "h-10 sm:h-12 lg:h-14",
    large: "h-14 sm:h-16 lg:h-20"
  };

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <img
        src="/logo.png"
        alt="Aryavik Technologies - MADE FOR MORE"
        className={`${heightClasses[size] || heightClasses.normal} w-auto object-contain rounded-lg transition-transform duration-300 hover:scale-105`}
      />
    </div>
  );
}
