import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Typewriter from 'typewriter-effect';
import { TarotCard } from '../types/cards';
import { getSpreadDescription } from '../data/cards';

interface RevealedCardProps {
  card: TarotCard;
  position: string;
  spreadType: string;
  positionNumber: number;
}

const RevealedCard: React.FC<RevealedCardProps> = ({
  card,
  position,
  spreadType,
  positionNumber
}) => {
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const positionDescription = getSpreadDescription(spreadType, positionNumber);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex gap-6 bg-black/30 backdrop-blur-sm rounded-lg p-6 text-white mb-6"
    >
      <div className="w-1/3">
        <LazyLoadImage
          src={card.image}
          alt={card.name}
          effect="blur"
          className="rounded-lg w-full h-auto"
          wrapperClassName="w-full h-full"
        />
      </div>
      <div className="w-2/3">
        <h3 className="text-xl font-semibold mb-2">{position}</h3>
        <p className="text-sm text-purple-300 mb-4">{positionDescription}</p>
        <h4 className="text-2xl font-bold mb-4">{card.name}</h4>
        <div className="text-sm leading-relaxed">
          <div className={isTypingComplete ? 'block' : 'hidden'}>
            {card.description}
          </div>
          {!isTypingComplete && (
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(card.description)
                  .callFunction(() => setIsTypingComplete(true))
                  .start();
              }}
              options={{
                delay: 30,
                cursor: ''
              }}
            />
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default RevealedCard;