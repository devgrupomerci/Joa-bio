import { useState } from 'react';
import { X, Copy, Check, Share2, MessageCircle } from 'lucide-react';
import { JoaLogo } from './JoaLogo';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  theme?: 'petroleum' | 'light';
}

export function ShareModal({ isOpen, onClose, theme = 'petroleum' }: ShareModalProps) {
  const [copied, setCopied] = useState(false);
  const isPetroleum = theme === 'petroleum';

  if (!isOpen) return null;

  const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://www.oticajoa.com.br';

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Ótica Joá - Link na Bio Oficial',
          text: 'Confira os contatos, endereços das 8 lojas e WhatsApp da Ótica Joá em São Paulo!',
          url: currentUrl,
        });
      } catch {
        // User cancelled
      }
    } else {
      handleCopy();
    }
  };

  const shareWhatsappUrl = `https://wa.me/?text=${encodeURIComponent(
    `Acesse o Link na Bio da Ótica Joá com todas as lojas, WhatsApp e site: ${currentUrl}`,
  )}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs animate-fade-in">
      <div
        className={`relative w-full max-w-sm rounded-3xl p-6 shadow-2xl text-center border ${
          isPetroleum
            ? 'bg-[#041924] border-[#D5E155]/25 text-[#FCFEFE]'
            : 'bg-white border-neutral-200 text-neutral-900'
        }`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className={`absolute right-4 top-4 w-7 h-7 rounded-full flex items-center justify-center transition-colors cursor-pointer ${
            isPetroleum ? 'bg-white/5 hover:bg-white/10 text-white' : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-600'
          }`}
          title="Fechar"
        >
          <X className="w-3.5 h-3.5" />
        </button>

        <div className="flex justify-center mb-3">
          <JoaLogo size={66} />
        </div>

        <h3 className="text-sm font-bold tracking-tight">
          Compartilhar Link da Bio
        </h3>
        <p className={`text-[11px] mt-1 mb-4 font-light ${isPetroleum ? 'text-[#8BA4B2]' : 'text-neutral-500'}`}>
          Envie os contatos e endereços das 8 lojas da Ótica Joá
        </p>

        {/* Copy Link Row */}
        <div
          className={`flex items-center gap-1.5 rounded-xl p-1.5 pl-3 mb-3 border ${
            isPetroleum
              ? 'bg-[#011018] border-[#D5E155]/20 text-[#FCFEFE]'
              : 'bg-neutral-50 border-neutral-200 text-neutral-700'
          }`}
        >
          <input
            type="text"
            readOnly
            value={currentUrl}
            className="w-full bg-transparent text-xs focus:outline-none truncate font-light"
          />
          <button
            onClick={handleCopy}
            className="shrink-0 px-3 py-1.5 bg-[#D5E155] text-[#011018] font-bold text-[11px] rounded-lg hover:bg-[#c6d246] transition-colors flex items-center gap-1 cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-3 h-3 text-[#011018]" />
                <span>Copiado</span>
              </>
            ) : (
              <>
                <Copy className="w-3 h-3 text-[#011018]" />
                <span>Copiar</span>
              </>
            )}
          </button>
        </div>

        {/* Action Buttons */}
        <div className="space-y-1.5">
          <a
            href={shareWhatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 px-3 bg-[#D5E155] hover:bg-[#c6d246] text-[#011018] font-bold text-xs rounded-xl flex items-center justify-center gap-2 transition-colors shadow-xs"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-current" />
            <span>Compartilhar via WhatsApp</span>
          </a>

          {typeof navigator !== 'undefined' && 'share' in navigator && (
            <button
              onClick={handleNativeShare}
              className={`w-full py-2 px-3 font-normal text-xs rounded-xl flex items-center justify-center gap-1.5 transition-colors cursor-pointer border ${
                isPetroleum
                  ? 'bg-[#011018] hover:bg-white/5 border-[#D5E155]/20 text-[#FCFEFE]'
                  : 'bg-neutral-50 hover:bg-neutral-100 border-neutral-200 text-neutral-700'
              }`}
            >
              <Share2 className="w-3.5 h-3.5 text-[#D5E155]" />
              <span>Outros Aplicativos</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
