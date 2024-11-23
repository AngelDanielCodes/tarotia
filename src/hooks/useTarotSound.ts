import useSound from 'use-sound';

export const useTarotSound = () => {
  const [playFlip] = useSound('/sounds/card-flip.mp3', { volume: 0.5 });
  const [playSelect] = useSound('/sounds/card-select.mp3', { volume: 0.3 });

  const playCardFlip = async () => {
    try {
      await playFlip();
    } catch (error) {
      console.error('Error playing flip sound:', error);
    }
  };

  const playCardSelect = async () => {
    try {
      await playSelect();
    } catch (error) {
      console.error('Error playing select sound:', error);
    }
  };

  return {
    playCardFlip,
    playCardSelect
  };
};