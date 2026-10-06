import React from "react";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function Logo({ className = "", size = "md" }: LogoProps) {
  const iconSizes = {
    sm: 32,
    md: 40,
    lg: 52,
  };

  const titleSizes = {
    sm: "text-base",
    md: "text-xl",
    lg: "text-3xl",
  };

  const subSizes = {
    sm: "text-[8px]",
    md: "text-[10px]",
    lg: "text-[12px]",
  };

  const dimension = iconSizes[size];

  return (
    <div className={`flex items-center gap-3 shrink-0 select-none ${className}`}>
      {/* LUXURY GOLDEN MONOGRAM EMBLEM */}
      <div
        className="relative flex items-center justify-center shrink-0 rounded-lg overflow-hidden"
        style={{
          width: dimension,
          height: dimension,
          background: "linear-gradient(135deg, #0f0f18 0%, #1a1a29 100%)",
          border: "1px solid rgba(197, 168, 128, 0.4)",
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.5), inset 0 1px 1px rgba(255, 255, 255, 0.1)",
        }}
      >
        <svg
          width={dimension * 0.65}
          height={dimension * 0.65}
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f3e0c0" />
              <stop offset="40%" stopColor="#c5a880" />
              <stop offset="100%" stopColor="#8c6d3f" />
            </linearGradient>
          </defs>
          {/* Diamond Pillar Shape */}
          <polygon
            points="50,8 90,30 90,70 50,92 10,70 10,30"
            stroke="url(#goldGradient)"
            strokeWidth="5"
            fill="rgba(197, 168, 128, 0.08)"
          />
          {/* Inner S Letter Architecture */}
          <path
            d="M65 32 C65 24, 35 24, 35 38 C35 55, 65 45, 65 64 C65 78, 35 78, 35 70"
            stroke="url(#goldGradient)"
            strokeWidth="7"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </div>

      {/* TYPOGRAPHY */}
      <div className="flex flex-col leading-none">
        <span className={`font-cinzel font-bold tracking-tight text-white ${titleSizes[size]}`}>
          SILVER STONE
        </span>
        <span className={`font-jakarta font-bold uppercase tracking-[0.3em] text-[#c5a880] mt-0.5 ${subSizes[size]}`}>
          INFRA REALTY
        </span>
      </div>
    </div>
  );
}
