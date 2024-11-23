import React from 'react';
import { motion } from 'framer-motion';
import TarotCard from '../components/TarotCard';
import TarotSpreadLayout from '../components/TarotSpreadLayout';
import RevealedCards from '../components/RevealedCards';
import useCardReveal from '../hooks/useCardReveal';

const LoveReading = () => {
  const { selectedCards, remainingCards, handleCardClick, isCardSelectable } = useCardReveal(8);

  return (
    <TarotSpreadLayout
      title="Tirada del Amor"
      remainingCards={remainingCards}
      backgroundImage="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc"
    >
      <div className="relative max-w-6xl mx-auto h-[800px] flex items-center justify-center p-8">
        <div className="relative w-full h-full max-w-4xl mx-auto">
          {/* Parte superior del corazón */}
          <div className="absolute top-[5%] left-1/2 -translate-x-1/2">
            <TarotCard
              position={1}
              isRevealed={selectedCards.includes(1)}
              isSelectable={isCardSelectable(1)}
              onClick={() => handleCardClick(1)}
              spreadType="love"
            />
          </div>

          {/* Curvas superiores */}
          <div className="absolute top-[20%] left-[30%] -rotate-[30deg]">
            <TarotCard
              position={2}
              isRevealed={selectedCards.includes(2)}
              isSelectable={isCardSelectable(2)}
              onClick={() => handleCardClick(2)}
              spreadType="love"
            />
          </div>
          <div className="absolute top-[20%] right-[30%] rotate-[30deg]">
            <TarotCard
              position={3}
              isRevealed={selectedCards.includes(3)}
              isSelectable={isCardSelectable(3)}
              onClick={() => handleCardClick(3)}
              spreadType="love"
            />
          </div>

          {/* Centro del corazón */}
          <div className="absolute top-[40%] left-[20%]">
            <TarotCard
              position={4}
              isRevealed={selectedCards.includes(4)}
              isSelectable={isCardSelectable(4)}
              onClick={() => handleCardClick(4)}
              spreadType="love"
            />
          </div>
          <div className="absolute top-[40%] right-[20%]">
            <TarotCard
              position={5}
              isRevealed={selectedCards.includes(5)}
              isSelectable={isCardSelectable(5)}
              onClick={() => handleCardClick(5)}
              spreadType="love"
            />
          </div>

          {/* Parte inferior del corazón */}
          <div className="absolute bottom-[30%] left-[25%] rotate-[45deg]">
            <TarotCard
              position={6}
              isRevealed={selectedCards.includes(6)}
              isSelectable={isCardSelectable(6)}
              onClick={() => handleCardClick(6)}
              spreadType="love"
            />
          </div>
          <div className="absolute bottom-[30%] right-[25%] -rotate-[45deg]">
            <TarotCard
              position={7}
              isRevealed={selectedCards.includes(7)}
              isSelectable={isCardSelectable(7)}
              onClick={() => handleCardClick(7)}
              spreadType="love"
            />
          </div>

          {/* Punta del corazón */}
          <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2">
            <TarotCard
              position={8}
              isRevealed={selectedCards.includes(8)}
              isSelectable={isCardSelectable(8)}
              onClick={() => handleCardClick(8)}
              spreadType="love"
            />
          </div>
        </div>
      </div>

      <RevealedCards spreadType="love" />

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

export default LoveReading;