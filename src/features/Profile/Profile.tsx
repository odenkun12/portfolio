import React from 'react';
import profileImg from '../../assets/profile.png';
import fishingImg from '../../assets/fishing.png';
import boulderingImg from '../../assets/bouldering.png';
import pointImg from '../../assets/point_collecting.png';
import tsImg from '../../assets/typescript.svg';
import cImg from '../../assets/c_lang.svg';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import Header from '../../components/Header';
import Career from '../Career/Career';

export default function Profile() {
  return (
    <section id="profile" className="w-full max-w-3xl mx-auto space-y-6">
      {/* Identity Card */}
      <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
        <Header title="Profile" />

        <div className="flex flex-col items-center text-center mt-4">
          <div className="w-36 h-36 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-green-400 shadow-lg">
            <img src={profileImg} alt="プロフィール画像" className="w-full h-full object-cover" />
          </div>

          <h2 className="mt-4 text-3xl font-semibold text-gray-900">odenkun</h2>
          <p className="mt-1 text-lg text-gray-600">Embedded Software Engineer</p>

          <div className="flex flex-col sm:flex-row items-center sm:justify-center gap-4 mt-4">
            <a href="https://github.com/odenkun12" className="flex items-center text-sm text-gray-800 hover:text-green-600 underline underline-offset-2" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <GitHubIcon className="mr-2" fontSize="small" />
              @odenkun12
            </a>

            <a href="https://twitter.com/odenkun12" className="flex items-center text-sm text-gray-800 hover:text-green-600 underline underline-offset-2" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <TwitterIcon className="mr-2" fontSize="small" />
              @aqeoZkvlC6daOdC
            </a>
          </div>
        </div>
      </div>

      <div className="">
        <div className="w-full flex flex-col gap-4 text-left">
          <div>
            <h3 className="text-xl md:text-xl font-semibold text-gray-700">Career</h3>
            <div className="mt-2">
              <Career />
            </div>
          </div>

          <div>
            <h3 className="text-xl md:text-xl font-semibold text-gray-700">Education</h3>
            <ul className="mt-2 text-base md:text-lg text-gray-600 space-y-1">
              <li>2025 — Master&apos;s Degree, Kyoto Institute of Technology</li>
              <li>2023 — Bachelor&apos;s Degree, Kyoto Institute of Technology</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl md:text-xl font-semibold text-gray-700">Favorite Languages</h3>
            <div className="mt-4 grid grid-cols-3 gap-4">
              <div className="flex flex-col items-center p-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <img src={tsImg} alt="TypeScript" className="w-12 h-12 object-contain mb-2" />
                <span className="text-gray-700 font-medium text-center">Typescript<br /><span className="text-sm text-gray-500">(React, Node.js)</span></span>
              </div>
              <div className="flex flex-col items-center p-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <img src={cImg} alt="C Lang" className="w-12 h-12 object-contain mb-2" />
                <span className="text-gray-700 font-medium">C Lang</span>
              </div>
            </div>
          </div>

          <div>
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
          </div>
        </div>
      </div>
    </section>
  );
}