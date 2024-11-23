import React from 'react';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';

interface CardDescriptionProps {
  name: string;
  position: string;
  description: string;
}

const CardDescription: React.FC<CardDescriptionProps> = ({ name, position, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-black/30 backdrop-blur-sm rounded-lg p-6 text-white mt-4"
    >
      <h3 className="text-xl font-semibold mb-2">{position}</h3>
      <h4 className="text-lg mb-4">{name}</h4>
      <div className="text-sm leading-relaxed">
        <Typewriter
          options={{
            strings: [description],
            autoStart: true,
            delay: 30,
            cursor: ''
          }}
        />
      </div>
    </motion.div>
  );
};

export default CardDescription;