export interface Store {
  id: string;
  name: string;
  badge?: string;
  type: 'shopping' | 'rua' | 'sports_kids';
  address: string;
  complement?: string;
  neighborhood: string;
  cityState: string;
  cep: string;
  phone: string;
  phoneRaw: string;
  whatsappNumber: string;
  hoursSummary: string;
  email: string;
  mapsUrl: string;
  isShopping: boolean;
}

export const STORES_DATA: Store[] = [
  {
    id: 'higienopolis',
    name: 'Shopping Pátio Higienópolis',
    badge: 'Shopping',
    type: 'shopping',
    address: 'Av. Higienópolis, 618',
    complement: 'Lj. 419 · Piso Vilaboim',
    neighborhood: 'Higienópolis',
    cityState: 'São Paulo - SP',
    cep: '01238-000',
    phone: '(11) 3823-2747',
    phoneRaw: '551138232747',
    whatsappNumber: '551138232747',
    hoursSummary: 'Seg. à Sáb. 10h00 às 22h00 · Dom. e Fer. 14h00 às 20h00',
    email: 'higienopolis@oticajoa.com.br',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Av.+Higienopolis+618+Lj.419+Sao+Paulo+SP',
    isShopping: true,
  },
  {
    id: 'butanta',
    name: 'Shopping Butantã',
    badge: 'Shopping',
    type: 'shopping',
    address: 'Av. Prof. Francisco Morato, 2718',
    complement: 'Lj. 30',
    neighborhood: 'Butantã',
    cityState: 'São Paulo - SP',
    cep: '05512-300',
    phone: '(11) 2155-1505',
    phoneRaw: '551121551505',
    whatsappNumber: '551121551505',
    hoursSummary: 'Seg. à Sáb. 10h00 às 22h00 · Dom. e Fer. 14h00 às 20h00',
    email: 'butanta@oticajoa.com.br',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Shopping+Butanta+Av.+Prof.+Francisco+Morato+2718+Sao+Paulo+SP',
    isShopping: true,
  },
  {
    id: 'vila-nova-conceicao',
    name: 'Vila Nova Conceição',
    badge: 'Boutique',
    type: 'rua',
    address: 'Rua Afonso Braz, 618',
    neighborhood: 'Vila Nova Conceição',
    cityState: 'São Paulo - SP',
    cep: '04511-001',
    phone: '(11) 3849-1211',
    phoneRaw: '551138491211',
    whatsappNumber: '551138491211',
    hoursSummary: 'Seg. à Sex. 09h30 às 18h30 · Sábado 09h00 às 13h00',
    email: 'vilanova@oticajoa.com.br',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Rua+Afonso+Braz+618+Sao+Paulo+SP',
    isShopping: false,
  },
  {
    id: 'sports-kids',
    name: 'Joá Sports & Kids',
    badge: 'Especializada',
    type: 'sports_kids',
    address: 'Rua Afonso Braz, 636 B',
    complement: 'Joá Sports & Kids',
    neighborhood: 'Vila Nova Conceição',
    cityState: 'São Paulo - SP',
    cep: '04511-001',
    phone: '(11) 3331-6245',
    phoneRaw: '551133316245',
    whatsappNumber: '551133316245',
    hoursSummary: 'Seg. à Sex. 09h30 às 18h30 · Sábado 09h00 às 13h00',
    email: 'sportskids@oticajoa.com.br',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Rua+Afonso+Braz+636+B+Sao+Paulo+SP',
    isShopping: false,
  },
  {
    id: 'bela-vista',
    name: 'Bela Vista (Itapeva)',
    badge: 'Boutique',
    type: 'rua',
    address: 'Rua Itapeva, 240',
    complement: 'Lj. 02',
    neighborhood: 'Bela Vista',
    cityState: 'São Paulo - SP',
    cep: '01332-000',
    phone: '(11) 2507-9374',
    phoneRaw: '551125079374',
    whatsappNumber: '551125079374',
    hoursSummary: 'Seg. à Sex. 09h30 às 18h30 · Sábado 09h00 às 13h00',
    email: 'itapeva@oticajoa.com.br',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Rua+Itapeva+240+Lj.02+Sao+Paulo+SP',
    isShopping: false,
  },
  {
    id: 'conjunto-nacional',
    name: 'Conjunto Nacional (Paulista)',
    badge: 'Galeria',
    type: 'rua',
    address: 'Av. Paulista, 2073',
    complement: 'Lj. 127 · Ed. Conjunto Nacional',
    neighborhood: 'Cerqueira César / Bela Vista',
    cityState: 'São Paulo - SP',
    cep: '01311-300',
    phone: '(11) 3262-4545',
    phoneRaw: '551132624545',
    whatsappNumber: '551132624545',
    hoursSummary: 'Seg. à Sex. 09h30 às 18h30 · Sábado 09h00 às 13h00',
    email: 'cnacional@oticajoa.com.br',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Av.+Paulista+2073+Lj.127+Sao+Paulo+SP',
    isShopping: false,
  },
  {
    id: 'mario-ferraz',
    name: 'Mario Ferraz',
    badge: 'Boutique',
    type: 'rua',
    address: 'Rua Dr. Mário Ferraz, 480',
    neighborhood: 'Jardim Paulistano',
    cityState: 'São Paulo - SP',
    cep: '01453-011',
    phone: '(11) 3079-0182',
    phoneRaw: '551130790182',
    whatsappNumber: '551130790182',
    hoursSummary: 'Seg. à Sex. 09h30 às 18h30 · Sábado 09h00 às 13h00',
    email: 'marioferraz@oticajoa.com.br',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Rua+Dr.+Mario+Ferraz+480+Sao+Paulo+SP',
    isShopping: false,
  },
  {
    id: 'faria-lima',
    name: 'Faria Lima',
    badge: 'Boutique',
    type: 'rua',
    address: 'Av. Brigadeiro Faria Lima, 2782',
    neighborhood: 'Pinheiros / Itaim',
    cityState: 'São Paulo - SP',
    cep: '01451-000',
    phone: '(11) 3814-2645',
    phoneRaw: '551138142645',
    whatsappNumber: '551138142645',
    hoursSummary: 'Seg. à Sex. 09h30 às 18h30 · Sábado 09h00 às 13h00',
    email: 'flima@oticajoa.com.br',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Av.+Brigadeiro+Faria+Lima+2782+Sao+Paulo+SP',
    isShopping: false,
  },
];

export const SOCIAL_LINKS = {
  instagram: 'https://www.instagram.com/oticajoa',
  facebook: 'https://www.facebook.com/oticajoa',
  youtube: 'https://www.youtube.com/channel/UClHPCjCR6WhpCLCWIBls2LQ',
  website: 'https://www.oticajoa.com.br',
  centralWhatsapp: '551138232747',
};

/**
 * Creates a pre-formatted direct WhatsApp URL for a given store.
 */
export function getStoreWhatsappUrl(store: Store, customMessage?: string): string {
  const defaultText = `Olá! Encontrei a Ótica Joá pelo Link da Bio e gostaria de atendimento na unidade ${store.name}.`;
  const message = customMessage || defaultText;
  return `https://wa.me/${store.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * Creates a direct WhatsApp URL for quick service scheduling.
 */
export function getConsultationWhatsappUrl(
  store: Store,
  serviceName: string,
  clientName?: string,
  datePreference?: string,
): string {
  let msg = `Olá! Gostaria de agendar *${serviceName}* na unidade *${store.name}*.`;
  if (clientName) {
    msg += `\nMeu nome: ${clientName}`;
  }
  if (datePreference) {
    msg += `\nPreferência de data/horário: ${datePreference}`;
  }
  return `https://wa.me/${store.whatsappNumber}?text=${encodeURIComponent(msg)}`;
}

/**
 * Calculates whether a store is currently open based on current São Paulo time.
 */
export function getStoreCurrentStatus(isShopping: boolean): {
  isOpen: boolean;
  statusText: string;
  nextInfo: string;
} {
  try {
    const spDate = new Date(new Date().toLocaleString('en-US', { timeZone: 'America/Sao_Paulo' }));
    const day = spDate.getDay(); // 0 is Sunday, 1 is Monday ... 6 is Saturday
    const hours = spDate.getHours();
    const minutes = spDate.getMinutes();
    const currentTime = hours + minutes / 60;

    if (isShopping) {
      // Shopping: Mon-Sat 10:00 - 22:00, Sun 14:00 - 20:00
      if (day === 0) {
        // Sunday
        if (currentTime >= 14 && currentTime < 20) {
          return { isOpen: true, statusText: 'Aberto agora', nextInfo: 'Fecha hoje às 20h00' };
        }
        if (currentTime < 14) {
          return { isOpen: false, statusText: 'Fechado no momento', nextInfo: 'Abre hoje às 14h00' };
        }
        return { isOpen: false, statusText: 'Fechado no momento', nextInfo: 'Abre amanhã às 10h00' };
      } else {
        // Mon-Sat
        if (currentTime >= 10 && currentTime < 22) {
          return { isOpen: true, statusText: 'Aberto agora', nextInfo: 'Fecha hoje às 22h00' };
        }
        if (currentTime < 10) {
          return { isOpen: false, statusText: 'Fechado no momento', nextInfo: 'Abre hoje às 10h00' };
        }
        return {
          isOpen: false,
          statusText: 'Fechado no momento',
          nextInfo: day === 6 ? 'Abre amanhã às 14h00' : 'Abre amanhã às 10h00',
        };
      }
    } else {
      // Rua: Mon-Fri 09:30 - 18:30, Sat 09:00 - 13:00, Sun Closed
      if (day === 0) {
        return { isOpen: false, statusText: 'Fechado aos domingos', nextInfo: 'Abre segunda às 09h30' };
      } else if (day === 6) {
        // Saturday
        if (currentTime >= 9 && currentTime < 13) {
          return { isOpen: true, statusText: 'Aberto agora', nextInfo: 'Fecha hoje às 13h00' };
        }
        if (currentTime < 9) {
          return { isOpen: false, statusText: 'Fechado no momento', nextInfo: 'Abre hoje às 09h00' };
        }
        return { isOpen: false, statusText: 'Fechado no momento', nextInfo: 'Abre segunda às 09h30' };
      } else {
        // Mon-Fri
        if (currentTime >= 9.5 && currentTime < 18.5) {
          return { isOpen: true, statusText: 'Aberto agora', nextInfo: 'Fecha hoje às 18h30' };
        }
        if (currentTime < 9.5) {
          return { isOpen: false, statusText: 'Fechado no momento', nextInfo: 'Abre hoje às 09h30' };
        }
        return {
          isOpen: false,
          statusText: 'Fechado no momento',
          nextInfo: day === 5 ? 'Abre amanhã às 09h00' : 'Abre amanhã às 09h30',
        };
      }
    }
  } catch {
    return { isOpen: true, statusText: 'Consulte horário', nextInfo: 'Horário de atendimento' };
  }
}
