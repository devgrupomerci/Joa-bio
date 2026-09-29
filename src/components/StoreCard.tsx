import { useState } from 'react';
import {
  MessageCircle,
  Phone,
  MapPin,
  Clock,
  Mail,
  Copy,
  Check,
  Navigation,
  ChevronDown,
} from 'lucide-react';
import { Store, getStoreWhatsappUrl, getStoreCurrentStatus } from '../data/stores';

interface StoreCardProps {
  store: Store;
  onSelectForSchedule?: (store: Store) => void;
}

export function StoreCard({ store }: StoreCardProps) {
  const [copied, setCopied] = useState(false);
  const [showFullHours, setShowFullHours] = useState(false);
  const currentStatus = getStoreCurrentStatus(store.isShopping);
  const whatsappUrl = getStoreWhatsappUrl(store);

  const fullAddressString = `${store.address}${store.complement ? `, ${store.complement}` : ''} - ${store.neighborhood}, ${store.cityState} - CEP ${store.cep}`;

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(fullAddressString);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // Fallback
    }
  };

  return (
    <article className="w-full bg-white rounded-2xl border border-neutral-200/80 hover:border-neutral-300/90 transition-all duration-300 ease-out transform hover:scale-[1.015] hover:-translate-y-0.5 shadow-[0_2px_10px_-3px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_26px_-6px_rgba(0,0,0,0.08),0_4px_10px_-2px_rgba(0,0,0,0.03)] overflow-hidden">
      {/* Store Header Section */}
      <div className="p-4 sm:p-5 pb-3">
        <div className="flex items-start justify-between gap-2 mb-2">
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[10px] font-medium tracking-wider uppercase text-neutral-500 bg-neutral-100 px-2 py-0.5 rounded">
                {store.badge || (store.isShopping ? 'Shopping' : 'Boutique')}
              </span>

              {/* Real-time delicate status indicator */}
              <div className="flex items-center gap-1.5 text-[11px]">
                <span
                  className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                    currentStatus.isOpen ? 'bg-emerald-500' : 'bg-neutral-400'
                  }`}
                />
                <span className={currentStatus.isOpen ? 'text-emerald-700 font-medium' : 'text-neutral-500'}>
                  {currentStatus.statusText}
                </span>
                <span className="text-neutral-400 text-[10px] hidden sm:inline">
                  · {currentStatus.nextInfo}
                </span>
              </div>
            </div>

            <h3 className="mt-1.5 text-base font-semibold text-neutral-900 tracking-tight leading-snug">
              {store.name}
            </h3>
          </div>
        </div>

        {/* Address details with delicate typography */}
        <div className="text-xs text-neutral-600 space-y-0.5 mt-2.5">
          <p className="font-normal text-neutral-800 flex items-start gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-neutral-400 shrink-0 mt-0.5" />
            <span>
              {store.address}
              {store.complement && (
                <span className="text-neutral-500 font-light"> · {store.complement}</span>
              )}
            </span>
          </p>
          <p className="pl-5 text-neutral-400 text-[11px] font-light">
            {store.neighborhood} · {store.cityState} · CEP {store.cep}
          </p>
        </div>

        {/* Delicate hours summary disclosure */}
        <div className="mt-3 pt-2 border-t border-neutral-100">
          <button
            onClick={() => setShowFullHours(!showFullHours)}
            className="w-full flex items-center justify-between text-left text-[11px] text-neutral-500 hover:text-neutral-800 transition-colors py-1 cursor-pointer"
          >
            <div className="flex items-center gap-1.5 truncate">
              <Clock className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
              <span className="truncate font-light">{store.hoursSummary}</span>
            </div>
            <ChevronDown
              className={`w-3.5 h-3.5 text-neutral-400 transition-transform duration-200 shrink-0 ml-1 ${
                showFullHours ? 'rotate-180' : ''
              }`}
            />
          </button>

          {showFullHours && (
            <div className="mt-2 p-2.5 bg-neutral-50 rounded-xl text-[11px] space-y-1.5 border border-neutral-100">
              <div className="flex items-center justify-between text-neutral-600">
                <span className="text-neutral-400">Status atual:</span>
                <span className={currentStatus.isOpen ? 'text-emerald-700 font-medium' : 'text-neutral-600'}>
                  {currentStatus.statusText} ({currentStatus.nextInfo})
                </span>
              </div>
              <div className="flex items-center justify-between text-neutral-600">
                <span className="text-neutral-400">Horário:</span>
                <span className="text-neutral-800 font-medium text-right">{store.hoursSummary}</span>
              </div>
              <div className="flex items-center justify-between text-neutral-600 pt-1 border-t border-neutral-200/60">
                <span className="text-neutral-400">E-mail:</span>
                <a
                  href={`mailto:${store.email}`}
                  className="text-neutral-800 hover:text-black font-medium hover:underline"
                >
                  {store.email}
                </a>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* WhatsApp Button (Clean, Soft Lime Tint with Contrast Text) */}
      <div className="px-4 sm:px-5 pb-3">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-[#F2F8D3] hover:bg-[#E8F3B8] text-[#324004] font-medium text-xs rounded-xl border border-[#D0E648]/60 transition-all duration-200 active:scale-[0.99]"
        >
          <MessageCircle className="w-3.5 h-3.5 fill-current shrink-0" />
          <span>Falar no WhatsApp desta Loja</span>
        </a>
      </div>

      {/* Secondary Fast Actions Grid */}
      <div className="grid grid-cols-4 border-t border-neutral-100 bg-neutral-50/60 divide-x divide-neutral-100">
        <a
          href={`tel:${store.phoneRaw}`}
          className="flex flex-col items-center justify-center py-2 px-1 text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100/60 transition-colors"
          title={`Ligar para ${store.phone}`}
        >
          <Phone className="w-3.5 h-3.5 text-neutral-400 mb-0.5" />
          <span className="text-[10px] font-normal">Ligar</span>
        </a>

        <a
          href={store.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100/60 transition-colors"
          title="Ver rota no Google Maps"
        >
          <Navigation className="w-3.5 h-3.5 text-neutral-400 mb-0.5" />
          <span className="text-[10px] font-normal">Rota</span>
        </a>

        <button
          onClick={handleCopyAddress}
          className="flex flex-col items-center justify-center py-2 px-1 text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100/60 transition-colors cursor-pointer"
          title="Copiar endereço completo"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-600 mb-0.5" />
              <span className="text-[10px] font-medium text-emerald-600">Copiado</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5 text-neutral-400 mb-0.5" />
              <span className="text-[10px] font-normal">Copiar</span>
            </>
          )}
        </button>

        <a
          href={`mailto:${store.email}`}
          className="flex flex-col items-center justify-center py-2 px-1 text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100/60 transition-colors"
          title={`Enviar e-mail para ${store.email}`}
        >
          <Mail className="w-3.5 h-3.5 text-neutral-400 mb-0.5" />
          <span className="text-[10px] font-normal">E-mail</span>
        </a>
      </div>
    </article>
  );
}
