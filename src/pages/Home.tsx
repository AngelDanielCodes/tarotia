import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import ReadingModeIcons from '../components/ReadingModeIcons';

const Home = () => {
  return (
    <div className="min-h-screen pt-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-6xl font-bold text-white mb-4">TarotiA</h1>
        <div className="w-24 h-24 mx-auto mb-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
          <Sparkles className="w-12 h-12 text-white" />
        </div>
        <ReadingModeIcons />
      </motion.div>
    </div>
  );
};

export default Home;