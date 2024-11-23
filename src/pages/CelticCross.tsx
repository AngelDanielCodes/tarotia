import React from 'react';
import { motion } from 'framer-motion';
import TarotCard from '../components/TarotCard';
import TarotSpreadLayout from '../components/TarotSpreadLayout';
import RevealedCards from '../components/RevealedCards';
import useCardReveal from '../hooks/useCardReveal';

const CelticCross = () => {
  const { selectedCards, remainingCards, handleCardClick, isCardSelectable } = useCardReveal(10);

  return (
    <TarotSpreadLayout
      title="Tirada Celta"
      remainingCards={remainingCards}
      backgroundImage="https://images.unsplash.com/photo-1534447677768-be436bb09401"
    >
      <div className="relative max-w-6xl mx-auto h-[800px] flex items-center justify-center p-8">
        <div className="relative w-full h-full max-w-4xl mx-auto">
          {/* Centro - Carta 1 */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <TarotCard
              position={1}
              isRevealed={selectedCards.includes(1)}
              isSelectable={isCardSelectable(1)}
              onClick={() => handleCardClick(1)}
              spreadType="celtic"
            />
          </div>

          {/* Carta 2 - Cruzada */}
          <div className="absolute top-1/2 left-[calc(50%+80px)] -translate-x-1/2 -translate-y-1/2 rotate-90 z-20">
            <TarotCard
              position={2}
              isRevealed={selectedCards.includes(2)}
              isSelectable={isCardSelectable(2)}
              onClick={() => handleCardClick(2)}
              spreadType="celtic"
            />
          </div>

          {/* Cruz vertical - Cartas 3 y 4 */}
          <div className="absolute top-[15%] left-1/2 -translate-x-1/2">
            <TarotCard
              position={3}
              isRevealed={selectedCards.includes(3)}
              isSelectable={isCardSelectable(3)}
              onClick={() => handleCardClick(3)}
              spreadType="celtic"
            />
          </div>
          <div className="absolute top-[85%] left-1/2 -translate-x-1/2">
            <TarotCard
              position={4}
              isRevealed={selectedCards.includes(4)}
              isSelectable={isCardSelectable(4)}
              onClick={() => handleCardClick(4)}
              spreadType="celtic"
            />
          </div>

          {/* Cruz horizontal - Cartas 5 y 6 */}
          <div className="absolute top-1/2 left-[15%] -translate-y-1/2">
            <TarotCard
              position={5}
              isRevealed={selectedCards.includes(5)}
              isSelectable={isCardSelectable(5)}
              onClick={() => handleCardClick(5)}
              spreadType="celtic"
            />
          </div>
          <div className="absolute top-1/2 left-[85%] -translate-y-1/2">
            <TarotCard
              position={6}
              isRevealed={selectedCards.includes(6)}
              isSelectable={isCardSelectable(6)}
              onClick={() => handleCardClick(6)}
              spreadType="celtic"
            />
          </div>

          {/* Columna derecha - Cartas 7-10 */}
          <div className="absolute right-[-150px] top-0 h-full flex flex-col justify-between py-8">
            {[7, 8, 9, 10].map(position => (
              <TarotCard
                key={position}
                position={position}
                isRevealed={selectedCards.includes(position)}
                isSelectable={isCardSelectable(position)}
                onClick={() => handleCardClick(position)}
                spreadType="celtic"
              />
            ))}
          </div>
        </div>
      </div>

      <RevealedCards spreadType="celtic" />

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

export default CelticCross;