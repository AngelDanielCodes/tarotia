import React from 'react';
import { motion } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';

interface TarotCardProps {
  position: number;
  isRevealed: boolean;
  isSelectable: boolean;
  onClick: () => void;
  cardImage?: string;
  cardName?: string;
  spreadType: 'celtic' | 'star' | 'love' | 'time' | 'yesno';
}

const getBackImage = (spreadType: string) => {
  const backImages = {
    'tirada-celta': 'https://images.unsplash.com/photo-1601024445121-e294d45c0424',
    'tirada-estrella': 'https://images.unsplash.com/photo-1519810755548-39cd217da494',
    'tirada-amor': 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc',
    'tirada-tiempo': 'https://images.unsplash.com/photo-1501139083538-0139583c060f',
    'si-o-no': 'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb'
  };
  return backImages[spreadType] || backImages['tirada-celta'];
};

const TarotCard: React.FC<TarotCardProps> = ({
  position,
  isRevealed,
  isSelectable,
  onClick,
  cardImage,
  cardName,
  spreadType
}) => {
  return (
    <div className="relative">
      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-white text-lg font-medium">
        {position}
      </div>
      <motion.div
        whileHover={isSelectable ? { scale: 1.05 } : {}}
        className={`relative aspect-[2/3] w-32 ${isSelectable ? 'cursor-pointer' : 'cursor-not-allowed'}`}
        onClick={() => isSelectable && onClick()}
      >
        <motion.div
          initial={false}
          animate={{ rotateY: isRevealed ? 180 : 0 }}
          transition={{ duration: 0.6 }}
          className="w-full h-full [transform-style:preserve-3d]"
        >
          {/* Card Back */}
          <div className={`absolute w-full h-full backface-hidden ${!isRevealed ? 'z-10' : 'z-0'}`}>
            <div 
              className={`w-full h-full rounded-lg border-2 ${
                isSelectable ? 'border-gold shadow-lg shadow-purple-500/50' : 'border-gray-500'
              } overflow-hidden`}
            >
              <LazyLoadImage
                src={getBackImage(spreadType)}
                alt="Card Back"
                effect="blur"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Card Front */}
          <div className={`absolute w-full h-full backface-hidden [transform:rotateY(180deg)] ${isRevealed ? 'z-10' : 'z-0'}`}>
            <div className="w-full h-full bg-white rounded-lg border-2 border-gold shadow-lg overflow-hidden">
              {cardImage && (
                <LazyLoadImage
                  src={cardImage}
                  alt={cardName || 'Tarot Card'}
                  effect="blur"
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default TarotCard;