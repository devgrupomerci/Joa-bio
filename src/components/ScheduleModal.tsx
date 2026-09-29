import { useState } from 'react';
import { X, Calendar, MessageCircle, MapPin } from 'lucide-react';
import { STORES_DATA, getConsultationWhatsappUrl } from '../data/stores';

interface ScheduleModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialStoreId?: string;
  theme?: 'petroleum' | 'light';
}

const SERVICES = [
  'Exame de Vista / Avaliação',
  'Consultoria de Estilo & Armações',
  'Lentes Multifocais e Monofocais',
  'Ajuste & Manutenção',
  'Armações Joá Sports & Kids',
  'Outras Dúvidas sobre Receita',
];

export function ScheduleModal({ isOpen, onClose, initialStoreId, theme = 'petroleum' }: ScheduleModalProps) {
  const [selectedStoreId, setSelectedStoreId] = useState<string>(
    initialStoreId || STORES_DATA[0].id,
  );
  const [selectedService, setSelectedService] = useState<string>(SERVICES[0]);
  const [clientName, setClientName] = useState<string>('');
  const [preferredShift, setPreferredShift] = useState<string>('Manhã');

  if (!isOpen) return null;

  const currentStore = STORES_DATA.find((s) => s.id === selectedStoreId) || STORES_DATA[0];

  const handleSendWhatsapp = (e: React.FormEvent) => {
    e.preventDefault();
    const preference = `${preferredShift}`;
    const url = getConsultationWhatsappUrl(currentStore, selectedService, clientName, preference);
    window.open(url, '_blank', 'noopener,noreferrer');
    onClose();
  };

  const isPetroleum = theme === 'petroleum';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-fade-in">
      <div
        className={`relative w-full max-w-md rounded-3xl p-5 sm:p-6 shadow-2xl text-left overflow-hidden border ${
          isPetroleum
            ? 'bg-[#041924] border-[#D5E155]/25 text-[#FCFEFE]'
            : 'bg-white border-neutral-200 text-neutral-900'
        }`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className={`absolute right-4 top-4 w-7 h-7 rounded-full flex items-center justify-center transition-colors cursor-pointer ${
            isPetroleum
              ? 'bg-white/5 hover:bg-white/10 text-[#FCFEFE]'
              : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-600'
          }`}
          title="Fechar"
        >
          <X className="w-3.5 h-3.5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-4">
          <div
            className={`w-9 h-9 rounded-xl flex items-center justify-center ${
              isPetroleum ? 'bg-[#011018] text-[#D5E155] border border-[#D5E155]/30' : 'bg-neutral-100 text-[#011018]'
            }`}
          >
            <Calendar className="w-4 h-4 stroke-[1.8]" />
          </div>
          <div>
            <h2 className="text-base font-bold tracking-tight">
              Agendamento & Consultoria
            </h2>
            <p className={`text-[11px] font-light ${isPetroleum ? 'text-[#8BA4B2]' : 'text-neutral-500'}`}>
              Envie sua solicitação diretamente para a unidade de sua escolha
            </p>
          </div>
        </div>

        <form onSubmit={handleSendWhatsapp} className="space-y-3.5">
          {/* Store Selection */}
          <div>
            <label className={`block text-[11px] font-medium mb-1 flex items-center gap-1.5 ${isPetroleum ? 'text-[#D1DEE5]' : 'text-neutral-700'}`}>
              <MapPin className="w-3 h-3 text-[#D5E155]" />
              Selecione a Loja Ótica Joá:
            </label>
            <select
              value={selectedStoreId}
              onChange={(e) => setSelectedStoreId(e.target.value)}
              className={`w-full rounded-xl px-3 py-2 text-xs focus:outline-none font-light border ${
                isPetroleum
                  ? 'bg-[#011018] border-[#D5E155]/20 focus:border-[#D5E155] text-[#FCFEFE]'
                  : 'bg-neutral-50 border-neutral-200 focus:border-neutral-400 text-neutral-900'
              }`}
            >
              {STORES_DATA.map((store) => (
                <option key={store.id} value={store.id}>
                  {store.name} ({store.neighborhood})
                </option>
              ))}
            </select>
          </div>

          {/* Service Selection */}
          <div>
            <label className={`block text-[11px] font-medium mb-1 ${isPetroleum ? 'text-[#D1DEE5]' : 'text-neutral-700'}`}>
              Tipo de Atendimento:
            </label>
            <div className="grid grid-cols-2 gap-1.5">
              {SERVICES.map((serv) => (
                <button
                  type="button"
                  key={serv}
                  onClick={() => setSelectedService(serv)}
                  className={`text-left p-2 rounded-xl text-[11px] transition-all border cursor-pointer ${
                    selectedService === serv
                      ? isPetroleum
                        ? 'bg-[#D5E155]/20 border-[#D5E155] text-[#D5E155] font-semibold'
                        : 'bg-[#F1F5D8] border-[#D5E155] text-[#011018] font-medium'
                      : isPetroleum
                      ? 'bg-[#011018] border-white/5 text-[#A2BAC7] hover:border-white/20'
                      : 'bg-neutral-50 border-neutral-200 text-neutral-600 hover:border-neutral-300'
                  }`}
                >
                  {serv}
                </button>
              ))}
            </div>
          </div>

          {/* Name & Time */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <div>
              <label className={`block text-[11px] font-medium mb-1 ${isPetroleum ? 'text-[#D1DEE5]' : 'text-neutral-700'}`}>
                Seu Nome (opcional):
              </label>
              <input
                type="text"
                placeholder="Ex: Carlos"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                className={`w-full rounded-xl px-3 py-2 text-xs focus:outline-none font-light border ${
                  isPetroleum
                    ? 'bg-[#011018] border-[#D5E155]/20 focus:border-[#D5E155] text-[#FCFEFE] placeholder-[#718D9B]'
                    : 'bg-neutral-50 border-neutral-200 focus:border-neutral-400 text-neutral-900 placeholder-neutral-400'
                }`}
              />
            </div>

            <div>
              <label className={`block text-[11px] font-medium mb-1 ${isPetroleum ? 'text-[#D1DEE5]' : 'text-neutral-700'}`}>
                Período Preferencial:
              </label>
              <select
                value={preferredShift}
                onChange={(e) => setPreferredShift(e.target.value)}
                className={`w-full rounded-xl px-3 py-2 text-xs focus:outline-none font-light border ${
                  isPetroleum
                    ? 'bg-[#011018] border-[#D5E155]/20 focus:border-[#D5E155] text-[#FCFEFE]'
                    : 'bg-neutral-50 border-neutral-200 focus:border-neutral-400 text-neutral-900'
                }`}
              >
                <option value="Manhã (09h30 - 12h00)">Manhã</option>
                <option value="Tarde (12h00 - 18h00)">Tarde</option>
                <option value="Noite (apenas Shoppings)">Noite (Shoppings)</option>
                <option value="Sábado">Sábado</option>
              </select>
            </div>
          </div>

          {/* Submit Button in #D5E155 with #011018 text */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-2.5 px-4 bg-[#D5E155] hover:bg-[#c6d246] text-[#011018] font-bold text-xs rounded-xl flex items-center justify-center gap-2 shadow-md transition-all active:scale-[0.99] cursor-pointer"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>Confirmar no WhatsApp da Unidade</span>
            </button>
            <p className={`text-[10px] text-center mt-2 font-light ${isPetroleum ? 'text-[#8BA4B2]' : 'text-neutral-500'}`}>
              Você será direcionado diretamente ao WhatsApp de {currentStore.name}.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
