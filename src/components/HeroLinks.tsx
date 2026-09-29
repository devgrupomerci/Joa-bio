import { Globe, MessageCircle, MapPin, ArrowUpRight } from 'lucide-react';
import { SOCIAL_LINKS } from '../data/stores';

interface HeroLinksProps {
  onScrollToStores: () => void;
}

export function HeroLinks({ onScrollToStores }: HeroLinksProps) {
  const centralWhatsappUrl = `https://wa.me/${SOCIAL_LINKS.centralWhatsapp}?text=${encodeURIComponent('Olá! Acessei pelo Link da Bio da Ótica Joá e gostaria de atendimento.')}`;

  return (
    <div className="w-full space-y-2.5 px-4 max-w-md mx-auto">
      {/* 1. Primary Highlight Button: WhatsApp Direct */}
      <a
        href={centralWhatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-between w-full p-3.5 bg-neutral-900 hover:bg-neutral-800 text-white rounded-2xl transition-all duration-200 active:scale-[0.99] shadow-sm border border-neutral-800"
      >
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-white/10 text-[#D2EA32] flex items-center justify-center shrink-0">
            <MessageCircle className="w-4 h-4 fill-current" />
          </div>
          <div className="text-left">
            <div className="text-xs font-medium tracking-wide text-white flex items-center gap-1.5">
              WhatsApp Central de Atendimento
              <span className="w-1.5 h-1.5 rounded-full bg-[#D2EA32] animate-pulse" />
            </div>
            <p className="text-[11px] text-neutral-400 font-light">
              Tire dúvidas, envie receitas ou consulte produtos
            </p>
          </div>
        </div>

        <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-[#D2EA32] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 ml-2" />
      </a>

      {/* 2. Official Website */}
      <a
        href={SOCIAL_LINKS.website}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-between w-full p-3.5 bg-white hover:bg-neutral-50/90 text-neutral-900 rounded-2xl border border-neutral-200/80 transition-all duration-200 active:scale-[0.99] shadow-[0_2px_8px_-2px_rgba(0,0,0,0.03)]"
      >
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-neutral-100 text-neutral-700 flex items-center justify-center shrink-0 group-hover:bg-[#EBF7B8] group-hover:text-neutral-900 transition-colors">
            <Globe className="w-4 h-4 stroke-[1.6]" />
          </div>
          <div className="text-left">
            <div className="text-xs font-medium tracking-wide text-neutral-900">
              Site Oficial Ótica Joá
            </div>
            <p className="text-[11px] text-neutral-500 font-light">
              Explore o catálogo exclusivo e novidades
            </p>
          </div>
        </div>

        <span className="text-[11px] text-neutral-400 group-hover:text-neutral-700 font-light transition-colors pr-1">
          oticajoa.com.br
        </span>
      </a>

      {/* 3. Scroll to Stores */}
      <button
        onClick={onScrollToStores}
        className="group flex items-center justify-between w-full p-3.5 bg-white hover:bg-neutral-50/90 text-neutral-900 rounded-2xl border border-neutral-200/80 transition-all duration-200 active:scale-[0.99] text-left cursor-pointer shadow-[0_2px_8px_-2px_rgba(0,0,0,0.03)]"
      >
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-neutral-100 text-neutral-700 flex items-center justify-center shrink-0 group-hover:bg-[#EBF7B8] group-hover:text-neutral-900 transition-colors">
            <MapPin className="w-4 h-4 stroke-[1.6]" />
          </div>
          <div>
            <div className="text-xs font-medium tracking-wide text-neutral-900">
              Nossas 8 Lojas em São Paulo
            </div>
            <p className="text-[11px] text-neutral-500 font-light">
              Endereços, telefones, horários e WhatsApp
            </p>
          </div>
        </div>

        <span className="text-[11px] text-neutral-500 group-hover:text-neutral-900 font-normal transition-colors pr-1">
          Ver Lojas ↓
        </span>
      </button>
    </div>
  );
}
