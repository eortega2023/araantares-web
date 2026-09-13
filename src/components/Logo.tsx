import React, { useState } from 'react';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'compact' | 'symbol';
  isDark?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  variant = 'full', 
  isDark = false 
}) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* 3D Isometric Cube Emblem (Image with SVG fallback matching the user's uploaded logo) */}
      <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-lg bg-[#141414] overflow-hidden flex items-center justify-center p-1 border border-gray-700/50 shadow-md shrink-0 group-hover:scale-105 transition-transform">
        {!imageError ? (
          <img
            src="/logo-ara.jpg"
            alt="Logo ARA & ANTARES SAC"
            className="w-full h-full object-contain rounded"
            onError={() => setImageError(true)}
          />
        ) : (
          /* SVG reproduction of the 3D isometric cube with white 'A' and red 'A' */
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow">
            {/* Outer isometric frame in metallic silver */}
            <polygon points="50,5 92,27 92,73 50,95 8,73 8,27" fill="#202020" stroke="#8c8c8c" strokeWidth="4" />
            <polygon points="50,5 92,27 50,49 8,27" fill="#b0b0b0" />
            <polygon points="50,49 92,27 92,73 50,95" fill="#666666" />
            <polygon points="50,49 8,27 8,73 50,95" fill="#444444" />
            {/* Left Letter 'A' in solid white */}
            <path d="M28,68 L38,36 L46,36 L52,68 L44,68 L42,58 L34,58 L32,68 Z M36,50 L40,50 L38,42 Z" fill="#ffffff" />
            {/* Right Letter 'A' in solid vivid red (#cc0000) */}
            <path d="M54,68 L64,36 L72,36 L78,68 L70,68 L68,58 L60,58 L58,68 Z M62,50 L66,50 L64,42 Z" fill="#cc0000" />
          </svg>
        )}
      </div>

      {variant !== 'symbol' && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span className={`text-base sm:text-lg md:text-xl font-black tracking-tight leading-none ${
              isDark ? 'text-white' : 'text-[#222222]'
            }`}>
              ARA &amp; ANTARES <span className="text-[#cc0000]">SAC</span>
            </span>
          </div>
          {variant === 'full' && (
            <span className="text-[9px] sm:text-[10px] font-bold tracking-wider text-gray-500 uppercase block mt-1 leading-none">
              Topografía • Dron • Alquiler de Equipos
            </span>
          )}
        </div>
      )}
    </div>
  );
};
