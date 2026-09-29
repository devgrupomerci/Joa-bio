import { Share2, MapPin } from 'lucide-react';
import { JoaLogo } from './JoaLogo';

interface HeaderProps {
  onOpenShare: () => void;
  onScrollToStores: () => void;
}

export function Header({ onOpenShare, onScrollToStores }: HeaderProps) {
  return (
    <header className="relative w-full text-center pt-8 pb-6 px-4">
      {/* Top Floating Controls */}
      <div className="max-w-md mx-auto flex items-center justify-between mb-5 px-1">
        <button
          onClick={onScrollToStores}
          className="inline-flex items-center gap-1.5 text-[11px] font-medium text-neutral-500 hover:text-neutral-800 bg-neutral-100/80 hover:bg-neutral-200/70 px-3 py-1 rounded-full border border-neutral-200/60 transition-all cursor-pointer"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#A8C718]" />
          <span>8 Unidades em SP</span>
        </button>

        <button
          onClick={onOpenShare}
          className="inline-flex items-center gap-1.5 text-[11px] font-medium text-neutral-500 hover:text-neutral-800 bg-neutral-100/80 hover:bg-neutral-200/70 px-3 py-1 rounded-full border border-neutral-200/60 transition-all cursor-pointer"
          title="Compartilhar Link da Bio"
        >
          <Share2 className="w-3 h-3 text-neutral-500" />
          <span>Compartilhar</span>
        </button>
      </div>

      {/* Center Logo with delicate seal frame */}
      <div className="flex flex-col items-center">
        <div className="relative p-1.5 rounded-full bg-gradient-to-b from-neutral-200/60 via-transparent to-neutral-100/40">
          <JoaLogo size={98} className="drop-shadow-sm" />
        </div>

        {/* Accessible Heading for Screen Readers */}
        <h1 className="sr-only">Ótica Joá</h1>
      </div>
    </header>
  );
}
