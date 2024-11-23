import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onProceed: () => void;
}

const PaymentModal: React.FC<PaymentModalProps> = ({ isOpen, onClose, onProceed }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-lg p-8 max-w-md w-full mx-4"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Lectura Completa con IA</h2>
              <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                <X size={24} />
              </button>
            </div>
            
            <p className="text-gray-600 mb-6">
              Obtén una lectura personalizada y detallada de tus cartas generada por nuestra IA especializada en Tarot.
            </p>

            <div className="bg-purple-50 rounded-lg p-4 mb-6">
              <p className="text-purple-800 font-semibold text-lg mb-2">Precio: 1€</p>
              <ul className="text-purple-700 text-sm space-y-2">
                <li>✨ Interpretación profunda de cada carta</li>
                <li>🔮 Análisis de las conexiones entre cartas</li>
                <li>💫 Consejos personalizados</li>
              </ul>
            </div>

            <button
              onClick={onProceed}
              className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              Proceder al Pago Seguro
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PaymentModal;