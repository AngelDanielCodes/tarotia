import { useCallback } from 'react';
import { useSpring } from 'framer-motion';

export const useCardAnimation = () => {
  const springConfig = {
    type: 'spring',
    stiffness: 300,
    damping: 30
  };

  const cardSpring = useSpring(0, springConfig);

  const animateCard = useCallback((isRevealed: boolean) => {
    cardSpring.set(isRevealed ? 180 : 0);
  }, [cardSpring]);

  return {
    cardSpring,
    animateCard
  };
};