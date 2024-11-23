import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { resetSpread } from '../store/tarotSlice';
import { 
  Sparkles, 
  Heart, 
  Clock, 
  HelpCircle, 
  Stars, 
  Compass, 
  MessageCircle 
} from 'lucide-react';
import { motion } from 'framer-motion';

export const readingModes = [
  { id: 'tirada-celta', name: 'Tirada Celta', path: '/tirada-celta', icon: Compass, cards: 10 },
  { id: 'tirada-estrella', name: 'Tirada Estrella', path: '/tirada-estrella', icon: Stars, cards: 7 },
  { id: 'tirada-amor', name: 'Tirada del Amor', path: '/tirada-amor', icon: Heart, cards: 8 },
  { id: 'tirada-tiempo', name: 'Tirada del Tiempo', path: '/tirada-tiempo', icon: Clock, cards: 3 },
  { id: 'si-o-no', name: 'Si o No', path: '/si-o-no', icon: HelpCircle, cards: 1 },
  { id: 'pregunta', name: 'Pregunta Concreta', path: '/pregunta', icon: Sparkles, cards: 0 },
  { id: 'chat', name: 'Chat con TarotiA', path: '/chat', icon: MessageCircle, cards: 0 }
];

const ReadingModeIcons = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleModeSelect = (path: string) => {
    dispatch(resetSpread());
    navigate(path);
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 max-w-5xl mx-auto px-4">
      {readingModes.map((mode, index) => (
        <motion.button
          key={mode.id}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1 }}
          onClick={() => handleModeSelect(mode.path)}
          className="group flex flex-col items-center"
        >
          <div className="w-12 h-12 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center mb-2 group-hover:scale-110 group-hover:bg-purple-600/50 transition-all">
            <mode.icon className="w-6 h-6 text-white" />
          </div>
          <span className="text-white text-xs text-center font-medium">{mode.name}</span>
        </motion.button>
      ))}
    </div>
  );
};

export default ReadingModeIcons;