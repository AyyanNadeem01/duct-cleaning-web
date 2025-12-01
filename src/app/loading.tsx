"use client";
import React from "react";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center bg-white/90 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-4">
        <svg className="animate-spin w-12 h-12 text-blue-500" viewBox="0 0 50 50">
          <circle cx="25" cy="25" r="20" fill="none" stroke="currentColor" strokeWidth="4" strokeDasharray="31.4 31.4" />
        </svg>
        <span className="text-sm font-semibold text-blue-600">Loading...</span>
      </div>
    </div>
  );
}
