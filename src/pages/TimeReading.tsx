import React from 'react';
import { motion } from 'framer-motion';
import TarotCard from '../components/TarotCard';
import TarotSpreadLayout from '../components/TarotSpreadLayout';
import RevealedCards from '../components/RevealedCards';
import useCardReveal from '../hooks/useCardReveal';

const TimeReading = () => {
  const { selectedCards, remainingCards, handleCardClick, isCardSelectable } = useCardReveal(3);

  return (
    <TarotSpreadLayout
      title="Tirada del Tiempo"
      remainingCards={remainingCards}
      backgroundImage="https://images.unsplash.com/photo-1501139083538-0139583c060f"
    >
      <div className="relative max-w-6xl mx-auto h-[400px] flex items-center justify-center p-8">
        <div className="flex justify-center space-x-16">
          {[1, 2, 3].map((position) => (
            <TarotCard
              key={position}
              position={position}
              isRevealed={selectedCards.includes(position)}
              isSelectable={isCardSelectable(position)}
              onClick={() => handleCardClick(position)}
              spreadType="time"
            />
          ))}
        </div>
      </div>

      <RevealedCards spreadType="time" />

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

export default TimeReading;