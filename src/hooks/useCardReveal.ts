import { useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCard, revealCard, setSpread, setRevealing, setComplete } from '../store/tarotSlice';
import { RootState } from '../store/store';
import { cards } from '../data/cards';
import { useTarotSound } from './useTarotSound';
import { useLocation } from 'react-router-dom';

// Helper function to get a random card that hasn't been used
const getRandomCard = (usedIds: number[]) => {
  const availableCards = cards.filter(card => !usedIds.includes(card.id));
  if (availableCards.length === 0) return null;
  return availableCards[Math.floor(Math.random() * availableCards.length)];
};

export const useCardReveal = (totalCards: number) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { playCardFlip, playCardSelect } = useTarotSound();
  const [isAnimating, setIsAnimating] = useState(false);
  
  const { selectedCards, usedCardIds, isRevealing, currentSpread } = useSelector(
    (state: RootState) => state.tarot
  );

  // Reset spread when changing routes
  useEffect(() => {
    const spreadType = location.pathname.slice(1);
    if (spreadType && spreadType !== currentSpread) {
      dispatch(setSpread(spreadType));
    }
  }, [location, dispatch, currentSpread]);

  const handleCardClick = useCallback(async (position: number) => {
    if (isRevealing || isAnimating) return;
    if (position !== selectedCards.length + 1) return;

    try {
      setIsAnimating(true);
      dispatch(setRevealing(true));
      
      // Play selection sound
      await playCardSelect();

      // Select the card position first
      dispatch(selectCard(position));

      // Get a random card that hasn't been used
      const newCard = getRandomCard(usedCardIds);
      if (!newCard) {
        console.error('No more available cards');
        return;
      }

      // Wait for flip animation
      await new Promise(resolve => setTimeout(resolve, 300));
      await playCardFlip();

      // Reveal the card
      dispatch(revealCard(newCard));

      // Check if spread is complete
      if (selectedCards.length + 1 === totalCards) {
        dispatch(setComplete(true));
      }
    } catch (error) {
      console.error('Error in card reveal:', error);
    } finally {
      setIsAnimating(false);
      dispatch(setRevealing(false));
    }
  }, [
    selectedCards.length,
    usedCardIds,
    isRevealing,
    isAnimating,
    dispatch,
    playCardFlip,
    playCardSelect,
    totalCards
  ]);

  const isCardSelectable = useCallback((position: number) => {
    return position === selectedCards.length + 1 && !isRevealing && !isAnimating;
  }, [selectedCards.length, isRevealing, isAnimating]);

  return {
    selectedCards,
    remainingCards: totalCards - selectedCards.length,
    handleCardClick,
    isCardSelectable,
    isRevealing: isRevealing || isAnimating
  };
};

export default useCardReveal;