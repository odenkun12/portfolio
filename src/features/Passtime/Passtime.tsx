import React from 'react';
import fishingImg from '../../assets/fishing.png';
import boulderingImg from '../../assets/bouldering.png';
import pointImg from '../../assets/point_collecting.png';

export default function Passtime() {
  return (
    <section id="passtime" className="w-full max-w-3xl mx-auto">
      <h3 className="text-xl md:text-xl font-semibold text-gray-700">Passtime</h3>
      <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
          <img src={fishingImg} alt="Fishing" className="w-24 h-24 object-contain mb-2" />
          <span className="text-gray-700 font-medium">Fishing</span>
        </div>
        <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
          <img src={boulderingImg} alt="Bouldering" className="w-24 h-24 object-contain mb-2" />
          <span className="text-gray-700 font-medium">Bouldering</span>
        </div>
        <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
          <img src={pointImg} alt="Point Collecting" className="w-24 h-24 object-contain mb-2" />
          <span className="text-gray-700 font-medium">Point Collecting</span>
        </div>
      </div>
    </section>
  );
}
