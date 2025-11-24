import React from 'react';
import tsImg from '../../assets/typescript.svg';
import cImg from '../../assets/c_lang.svg';

export default function FavoriteLanguages() {
  return (
    <section id="favorite-languages" className="w-full max-w-3xl mx-auto">
      <h3 className="text-xl md:text-xl font-semibold text-gray-700">Favorite Languages</h3>
      <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="flex flex-col items-center p-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
          <img src={tsImg} alt="TypeScript" className="w-12 h-12 object-contain mb-2" />
          <span className="text-gray-700 font-medium text-center">Typescript<br /><span className="text-sm text-gray-500">(React, Node.js)</span></span>
        </div>
        <div className="flex flex-col items-center p-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
          <img src={cImg} alt="C Lang" className="w-12 h-12 object-contain mb-2" />
          <span className="text-gray-700 font-medium">C Lang</span>
        </div>
      </div>
    </section>
  );
}
