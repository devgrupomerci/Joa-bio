import logoNovo2 from '../assets/images/LogoNovo2.webp';

interface JoaLogoProps {
  size?: number;
  className?: string;
  showText?: boolean;
}

export function JoaLogo({ size = 110, className = '' }: JoaLogoProps) {
  return (
    <div
      className={`relative inline-flex items-center justify-center shrink-0 rounded-full transition-transform duration-300 hover:scale-[1.03] ${className}`}
      style={{ width: size, height: size }}
      aria-label="Ótica Joá Logo"
    >
      <img
        src={logoNovo2}
        alt="Ótica Joá"
        width={size}
        height={size}
        className="w-full h-full object-contain rounded-full select-none"
        loading="eager"
      />
    </div>
  );
}
