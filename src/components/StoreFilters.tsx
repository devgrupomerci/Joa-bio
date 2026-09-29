import { Search, X } from 'lucide-react';

export type StoreCategoryFilter = 'all' | 'shopping' | 'rua' | 'sports_kids';

interface StoreFiltersProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  selectedCategory: StoreCategoryFilter;
  onSelectCategory: (cat: StoreCategoryFilter) => void;
  counts: {
    all: number;
    shopping: number;
    rua: number;
    sports_kids: number;
  };
  theme?: 'petroleum' | 'light';
}

export function StoreFilters({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onSelectCategory,
  counts,
  theme = 'petroleum',
}: StoreFiltersProps) {
  const isPetroleum = theme === 'petroleum';

  const tabs: { id: StoreCategoryFilter; label: string; count: number }[] = [
    { id: 'all', label: 'Todas', count: counts.all },
    { id: 'shopping', label: 'Shoppings', count: counts.shopping },
    { id: 'rua', label: 'Boutiques', count: counts.rua },
    { id: 'sports_kids', label: 'Sports & Kids', count: counts.sports_kids },
  ];

  return (
    <div className="w-full space-y-2.5">
      {/* Search Input */}
      <div className="relative">
        <Search className={`w-3.5 h-3.5 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none ${isPetroleum ? 'text-[#8BA4B2]' : 'text-neutral-400'}`} />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Buscar unidade, bairro ou rua..."
          className={`w-full rounded-xl pl-9 pr-8 py-2 text-xs focus:outline-none transition-colors border ${
            isPetroleum
              ? 'bg-[#041924] border-[#D5E155]/20 focus:border-[#D5E155] text-[#FCFEFE] placeholder-[#718D9B]'
              : 'bg-white border-neutral-200 focus:border-neutral-400 text-[#011018] placeholder-neutral-400'
          }`}
        />
        {searchQuery && (
          <button
            onClick={() => onSearchChange('')}
            className={`absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer ${
              isPetroleum ? 'text-[#8BA4B2] hover:text-[#FCFEFE]' : 'text-neutral-400 hover:text-neutral-700'
            }`}
            title="Limpar busca"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {/* Category Tabs */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-0.5 scrollbar-none">
        {tabs.map((tab) => {
          const isActive = selectedCategory === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onSelectCategory(tab.id)}
              className={`px-3 py-1.5 rounded-full text-xs transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
                isActive
                  ? 'bg-[#D5E155] text-[#011018] font-bold shadow-xs'
                  : isPetroleum
                  ? 'bg-[#041924] text-[#D1DEE5] hover:text-[#FCFEFE] hover:bg-[#072433] border border-[#D5E155]/20 font-light'
                  : 'bg-white text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 border border-neutral-200 font-light'
              }`}
            >
              <span>{tab.label}</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full font-medium ${
                  isActive
                    ? 'bg-[#011018]/20 text-[#011018]'
                    : isPetroleum
                    ? 'bg-white/10 text-[#8BA4B2]'
                    : 'bg-neutral-100 text-neutral-500'
                }`}
              >
                {tab.count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
