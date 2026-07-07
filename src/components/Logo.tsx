import React from "react";

interface LogoProps {
  className?: string;
  height?: number | string;
  variant?: "full" | "icon";
  textColor?: "white" | "default";
}

export default function Logo({ className = "", height = 48, variant = "full", textColor = "default" }: LogoProps) {
  // We can calculate dynamic width or use responsive classes
  const semcoColor = textColor === "white" ? "#ffffff" : "#0e4a81"; // Deep blue/royal blue from original logo
  const panamaColor = textColor === "white" ? "#cbd5e1" : "#555555"; // Gray from original logo

  return (
    <div className={`flex items-center gap-3 select-none ${className}`} style={{ height }}>
      {/* Graphic Mark: Gear + Lightning Bolt */}
      <svg
        viewBox="0 0 100 100"
        className="h-full w-auto shrink-0 filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.15)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Gradients */}
        <defs>
          <linearGradient id="lightningGrad" x1="20" y1="10" x2="80" y2="90" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#ffb000" /> {/* Vibrant Golden Orange */}
            <stop offset="100%" stopColor="#e06c00" /> {/* Deep Orange */}
          </linearGradient>
          <linearGradient id="gearGrad" x1="10" y1="10" x2="90" y2="90" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#a3a3a3" /> {/* Metallic light gray */}
            <stop offset="100%" stopColor="#525252" /> {/* Metallic dark gray */}
          </linearGradient>
        </defs>

        {/* 1. Industrial Gear (Gray with 3D gradient) */}
        <g id="gear-group">
          {/* Inner ring */}
          <circle cx="50" cy="50" r="18" fill="none" stroke="url(#gearGrad)" strokeWidth="6" />
          {/* Outer ring */}
          <circle cx="50" cy="50" r="30" fill="none" stroke="url(#gearGrad)" strokeWidth="8" />
          {/* Gear teeth */}
          <path
            d="
              M 45,8 L 55,8 L 54,18 L 46,18 Z
              M 45,82 L 55,82 L 54,72 L 46,72 Z
              M 8,45 L 8,55 L 18,54 L 18,46 Z
              M 82,45 L 82,55 L 72,54 L 72,46 Z
              
              M 20.4,20.4 L 27.4,27.4 L 34.5,20.3 L 27.5,13.3 Z
              M 79.6,79.6 L 72.6,72.6 L 65.5,79.7 L 72.5,86.7 Z
              M 20.4,79.6 L 27.4,72.6 L 20.3,65.5 L 13.3,72.5 Z
              M 79.6,20.4 L 72.6,27.4 L 79.7,34.5 L 86.7,27.5 Z
            "
            fill="url(#gearGrad)"
          />
          {/* Internal spokes */}
          <rect x="47" y="20" width="6" height="60" rx="2" fill="url(#gearGrad)" />
          <rect x="20" y="47" width="60" height="6" rx="2" fill="url(#gearGrad)" />
          {/* Central hub cutout */}
          <circle cx="50" cy="50" r="12" fill="#0b132b" className="dark-bg-cutout" />
        </g>

        {/* 2. Energetic Lightning Bolt (Vibrant Yellow/Orange with overlapping sweep) */}
        <path
          d="M 52,10 
             L 25,58 
             L 48,58 
             L 36,92 
             L 75,42 
             L 50,42 
             Z"
          fill="url(#lightningGrad)"
          stroke="#ffffff"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>

      {/* Text Mark: "SEMCO Panamá" (Only rendered if variant is "full") */}
      {variant === "full" && (
        <div className="flex flex-col justify-center select-none leading-none">
          {/* "SEMCO" Text */}
          <span
            className="font-sans font-black tracking-tight uppercase"
            style={{
              color: semcoColor,
              fontSize: "1.45rem",
              fontWeight: 900,
              letterSpacing: "-0.04em",
            }}
          >
            SEMCO
          </span>
          {/* "Panamá" Text */}
          <span
            className="font-sans font-semibold tracking-wide"
            style={{
              color: panamaColor,
              fontSize: "0.95rem",
              fontWeight: 600,
              letterSpacing: "-0.01em",
              marginTop: "2px",
            }}
          >
            Panamá
          </span>
        </div>
      )}
    </div>
  );
}
