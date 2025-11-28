"use client";
import React from "react";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-cyan-100 bg-opacity-80 backdrop-blur-lg">
      <div className="flex flex-col items-center gap-4 animate-fadeInUp">
        <svg className="animate-spin-slow w-16 h-16 text-blue-500" viewBox="0 0 50 50">
          <circle cx="25" cy="25" r="20" fill="none" stroke="#06b6d4" strokeWidth="6" strokeDasharray="31.4 31.4" />
        </svg>
        <span className="text-xl font-bold text-blue-600 animate-pulse-slow">Loading...</span>
      </div>
    </div>
  );
}
