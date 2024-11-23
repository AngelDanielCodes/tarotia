import React from 'react';
import { motion } from 'framer-motion';
import TarotCard from '../components/TarotCard';
import TarotSpreadLayout from '../components/TarotSpreadLayout';
import RevealedCards from '../components/RevealedCards';
import useCardReveal from '../hooks/useCardReveal';

const YesNo = () => {
  const { selectedCards, remainingCards, handleCardClick, isCardSelectable } = useCardReveal(1);

  return (
    <TarotSpreadLayout
      title="Si o No"
      remainingCards={remainingCards}
      backgroundImage="https://images.unsplash.com/photo-1517411032315-54ef2cb783bb"
    >
      <div className="relative max-w-6xl mx-auto h-[400px] flex items-center justify-center p-8">
        <TarotCard
          position={1}
          isRevealed={selectedCards.includes(1)}
          isSelectable={isCardSelectable(1)}
          onClick={() => handleCardClick(1)}
          spreadType="yesno"
        />
      </div>

      <RevealedCards spreadType="yesno" />

      {remainingCards === 0 && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed bottom-8 right-8 bg-purple-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-purple-700 transition-colors"
        >
          Generar Lectura Completa con IA
        </motion.button>
      )}
    </TarotSpreadLayout>
  );
};

export default YesNo;