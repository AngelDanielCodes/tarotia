import { useState, useCallback } from 'react';

export const useCardSelection = (totalCards: number) => {
  const [revealedCards, setRevealedCards] = useState<number[]>([]);
  const [remainingCards, setRemainingCards] = useState(totalCards);

  const handleCardClick = useCallback((position: number) => {
    if (!revealedCards.includes(position) && position === revealedCards.length + 1) {
      setRevealedCards(prev => [...prev, position]);
      setRemainingCards(prev => prev - 1);
    }
  }, [revealedCards]);

  const isCardSelectable = useCallback((position: number) => {
    return position === revealedCards.length + 1;
  }, [revealedCards]);

  return {
    revealedCards,
    remainingCards,
    handleCardClick,
    isCardSelectable
  };
};

export default useCardSelection;