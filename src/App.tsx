import { useState, useRef } from 'react';
import {
  STORES_DATA,
} from './data/stores';
import { Header } from './components/Header';
import { HeroLinks } from './components/HeroLinks';
import { StoreCard } from './components/StoreCard';
import { ShareModal } from './components/ShareModal';
import { SocialLinks } from './components/SocialLinks';
import { Footer } from './components/Footer';

export default function App() {
  const [isShareOpen, setIsShareOpen] = useState(false);
  const storesSectionRef = useRef<HTMLDivElement>(null);

  const scrollToStores = () => {
    storesSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-neutral-900 font-sans antialiased flex flex-col justify-between selection:bg-[#EAF5BC] selection:text-neutral-900">
      <main className="w-full max-w-lg mx-auto flex-1">
        {/* Top Header Section */}
        <Header
          onOpenShare={() => setIsShareOpen(true)}
          onScrollToStores={scrollToStores}
        />

        {/* Primary Hero CTAs */}
        <section aria-label="Ações Principais" className="mt-1">
          <HeroLinks onScrollToStores={scrollToStores} />
        </section>

        {/* Stores Section (Direct List of 8 Stores) */}
        <section
          ref={storesSectionRef}
          aria-label="Nossas Lojas e Endereços"
          className="mt-6 px-4 max-w-md mx-auto scroll-mt-6"
        >
          {/* Store Cards List */}
          <div className="space-y-3">
            {STORES_DATA.map((store) => (
              <StoreCard
                key={store.id}
                store={store}
              />
            ))}
          </div>
        </section>

        {/* Social Media Links */}
        <SocialLinks />
      </main>

      {/* Share Modal */}
      <ShareModal
        isOpen={isShareOpen}
        onClose={() => setIsShareOpen(false)}
      />

      {/* Refined Footer */}
      <Footer />
    </div>
  );
}
