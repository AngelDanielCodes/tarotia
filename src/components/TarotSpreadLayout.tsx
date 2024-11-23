import React from 'react';
import ReadingModeIcons from './ReadingModeIcons';
import { motion } from 'framer-motion';

interface TarotSpreadLayoutProps {
  title: string;
  remainingCards: number;
  children: React.ReactNode;
  backgroundImage: string;
}

const TarotSpreadLayout: React.FC<TarotSpreadLayoutProps> = ({
  title,
  remainingCards,
  children,
  backgroundImage
}) => {
  return (
    <div 
      className="min-h-screen pt-20 px-4"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h1 className="text-4xl font-bold text-white mb-4">{title}</h1>
        <div className="inline-block bg-black/30 backdrop-blur-sm rounded-full px-6 py-2 text-white mb-8">
          Cartas restantes: {remainingCards}
        </div>
        <ReadingModeIcons />
      </motion.div>

      {children}
    </div>
  );
};

export default TarotSpreadLayout;