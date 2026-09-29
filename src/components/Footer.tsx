import { JoaLogo } from './JoaLogo';

export function Footer() {
  return (
    <footer className="w-full border-t border-neutral-200/60 bg-neutral-50/80 mt-12 py-8 px-4 text-center">
      <div className="max-w-md mx-auto flex flex-col items-center space-y-3">
        {/* Subtle Brand Lockup */}
        <div className="flex items-center gap-2">
          <JoaLogo size={28} />
          <span className="text-xs font-semibold tracking-[0.18em] text-neutral-800 uppercase">
            Ótica Joá
          </span>
        </div>

        {/* Quiet Copyright */}
        <div className="pt-3 border-t border-neutral-200/40 w-full flex flex-col sm:flex-row items-center justify-between text-[10px] text-neutral-400 font-light gap-1">
          <span>© {new Date().getFullYear()} Ótica Joá</span>
          <span>São Paulo · SP</span>
        </div>
      </div>
    </footer>
  );
}
