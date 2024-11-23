import React from 'react';
import { Globe } from 'lucide-react';

const languages = [
  { code: 'es', name: 'Español' },
  { code: 'en', name: 'English' },
  { code: 'fr', name: 'Français' },
  { code: 'it', name: 'Italiano' },
  { code: 'pt', name: 'Português' }
];

const LanguageSelector = () => {
  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="relative group">
        <button className="flex items-center space-x-2 bg-black/30 backdrop-blur-sm text-white px-4 py-2 rounded-lg hover:bg-black/40 transition-colors">
          <Globe size={20} />
          <span>ES</span>
        </button>
        <div className="absolute right-0 mt-2 w-48 bg-black/80 backdrop-blur-sm rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity invisible group-hover:visible">
          {languages.map((lang) => (
            <button
              key={lang.code}
              className="block w-full text-left px-4 py-2 text-white hover:bg-purple-600/50 transition-colors first:rounded-t-lg last:rounded-b-lg"
            >
              {lang.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LanguageSelector;