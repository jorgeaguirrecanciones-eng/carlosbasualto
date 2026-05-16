interface TrompetaIconProps {
  className?: string;
}

export default function TrompetaIcon({ className = "w-12 h-12" }: TrompetaIconProps) {
  return (
    <svg viewBox="0 0 280 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <path d="M4 56 L14 56 C18 56 20 54 20 50 L20 40 C20 36 23 34 27 34 L44 34" stroke="currentColor" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <circle cx="4" cy="56" r="4" fill="currentColor" />
      <rect x="42" y="28" width="118" height="16" rx="5" fill="currentColor" />
      <rect x="56" y="12" width="18" height="44" rx="6" fill="currentColor" />
      <ellipse cx="65" cy="12" rx="9" ry="5" fill="currentColor" opacity="0.85" />
      <ellipse cx="65" cy="56" rx="9" ry="4" fill="currentColor" opacity="0.55" />
      <rect x="83" y="12" width="18" height="44" rx="6" fill="currentColor" />
      <ellipse cx="92" cy="12" rx="9" ry="5" fill="currentColor" opacity="0.85" />
      <ellipse cx="92" cy="56" rx="9" ry="4" fill="currentColor" opacity="0.55" />
      <rect x="110" y="12" width="18" height="44" rx="6" fill="currentColor" />
      <ellipse cx="119" cy="12" rx="9" ry="5" fill="currentColor" opacity="0.85" />
      <ellipse cx="119" cy="56" rx="9" ry="4" fill="currentColor" opacity="0.55" />
      <path d="M160 28 L172 28 C176 28 178 30 180 34 L180 44 C178 48 176 50 172 50 L160 50" fill="currentColor" />
      <path d="M178 22 Q210 26 276 4 L276 96 Q210 74 178 78 Z" fill="currentColor" />
      <path d="M182 28 Q210 32 264 14 L264 16 Q210 34 182 30 Z" fill="white" opacity="0.15" />
      <ellipse cx="276" cy="50" rx="4" ry="46" fill="currentColor" opacity="0.65" />
    </svg>
  );
}

export function TrompetaMini({ className = "w-6 h-6", active = false }: { className?: string; active?: boolean }) {
  const color = active ? "currentColor" : "#C9A84C60";
  return (
    <svg viewBox="0 0 280 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <path d="M4 56 L14 56 C18 56 20 54 20 50 L20 40 C20 36 23 34 27 34 L44 34" stroke={color} strokeWidth="7" strokeLinecap="round" fill="none" />
      <circle cx="4" cy="56" r="4" fill={color} />
      <rect x="42" y="28" width="118" height="16" rx="5" fill={color} />
      <rect x="56" y="12" width="18" height="44" rx="6" fill={color} />
      <ellipse cx="65" cy="12" rx="9" ry="5" fill={color} opacity="0.85" />
      <rect x="83" y="12" width="18" height="44" rx="6" fill={color} />
      <ellipse cx="92" cy="12" rx="9" ry="5" fill={color} opacity="0.85" />
      <rect x="110" y="12" width="18" height="44" rx="6" fill={color} />
      <ellipse cx="119" cy="12" rx="9" ry="5" fill={color} opacity="0.85" />
      <path d="M178 22 Q210 26 276 4 L276 96 Q210 74 178 78 Z" fill={color} />
    </svg>
  );
}
