import React from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { RootState } from '../store/store';
import { getSpreadPositions } from '../data/cards';
import RevealedCard from './RevealedCard';

interface RevealedCardsProps {
  spreadType: 'celtic' | 'star' | 'love' | 'time' | 'yesno';
}

const RevealedCards: React.FC<RevealedCardsProps> = ({ spreadType }) => {
  const { revealedCards } = useSelector((state: RootState) => state.tarot);
  const positions = getSpreadPositions(spreadType);

  return (
    <div className="mt-12 space-y-6 max-w-4xl mx-auto px-4">
      {revealedCards.map((card, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
        >
          <RevealedCard
            card={card}
            position={positions[index]}
            spreadType={spreadType}
            positionNumber={index + 1}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default RevealedCards;