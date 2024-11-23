import React from 'react';
import { motion } from 'framer-motion';
import TarotCard from '../components/TarotCard';
import TarotSpreadLayout from '../components/TarotSpreadLayout';
import RevealedCards from '../components/RevealedCards';
import useCardReveal from '../hooks/useCardReveal';

const StarSpread = () => {
  const { selectedCards, remainingCards, handleCardClick, isCardSelectable } = useCardReveal(7);

  return (
    <TarotSpreadLayout
      title="Tirada Estrella"
      remainingCards={remainingCards}
      backgroundImage="https://images.unsplash.com/photo-1519810755548-39cd217da494"
    >
      <div className="relative max-w-6xl mx-auto h-[800px] flex items-center justify-center p-8">
        <div className="relative w-full h-full max-w-4xl mx-auto">
          {/* Carta Central */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <TarotCard
              position={7}
              isRevealed={selectedCards.includes(7)}
              isSelectable={isCardSelectable(7)}
              onClick={() => handleCardClick(7)}
              spreadType="star"
            />
          </div>

          {/* Puntas de la Estrella */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2">
            <TarotCard
              position={1}
              isRevealed={selectedCards.includes(1)}
              isSelectable={isCardSelectable(1)}
              onClick={() => handleCardClick(1)}
              spreadType="star"
            />
          </div>

          <div className="absolute top-[25%] right-[20%] rotate-[72deg]">
            <TarotCard
              position={2}
              isRevealed={selectedCards.includes(2)}
              isSelectable={isCardSelectable(2)}
              onClick={() => handleCardClick(2)}
              spreadType="star"
            />
          </div>

          <div className="absolute bottom-[25%] right-[20%] rotate-[144deg]">
            <TarotCard
              position={3}
              isRevealed={selectedCards.includes(3)}
              isSelectable={isCardSelectable(3)}
              onClick={() => handleCardClick(3)}
              spreadType="star"
            />
          </div>

          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 rotate-180">
            <TarotCard
              position={4}
              isRevealed={selectedCards.includes(4)}
              isSelectable={isCardSelectable(4)}
              onClick={() => handleCardClick(4)}
              spreadType="star"
            />
          </div>

          <div className="absolute bottom-[25%] left-[20%] -rotate-[144deg]">
            <TarotCard
              position={5}
              isRevealed={selectedCards.includes(5)}
              isSelectable={isCardSelectable(5)}
              onClick={() => handleCardClick(5)}
              spreadType="star"
            />
          </div>

          <div className="absolute top-[25%] left-[20%] -rotate-[72deg]">
            <TarotCard
              position={6}
              isRevealed={selectedCards.includes(6)}
              isSelectable={isCardSelectable(6)}
              onClick={() => handleCardClick(6)}
              spreadType="star"
            />
          </div>
        </div>
      </div>

      <RevealedCards spreadType="star" />

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

export default StarSpread;