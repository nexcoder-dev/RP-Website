import React from 'react';

export default function Rules() {
  return (
    <div
      className="min-h-screen pt-24 bg-cover bg-center"
      style={{
        backgroundImage: "url('https://i.ibb.co/GzKtGVL/background.png')"
      }}
    >
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center gradient-text mb-12 animate-[slideDown_0.5s_ease-out]">
          RULES
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="glass-effect rounded-xl p-8 card-hover opacity-0 animate-[slideUp_0.5s_ease-out_0.2s_forwards]">
            <h2 className="text-2xl font-bold mb-6 gradient-text">PLAYER RULES</h2>
            <ul className="space-y-4">
              {['NO FAIL RP', 'NO RDM/VDM', 'VALUE YOUR LIFE (VYL)', 'NO METAGAMING OR POWERGAMING'].map((rule, index) => (
                <li 
                  key={index} 
                  className="text-gray-300 opacity-0"
                  style={{ animation: `slideUp 0.5s ease-out ${(index + 1) * 0.2}s forwards` }}
                >
                  <span className="font-semibold">RULE NO {index + 1}:</span> {rule}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="glass-effect rounded-xl p-8 card-hover opacity-0 animate-[slideUp_0.5s_ease-out_0.4s_forwards]">
            <h2 className="text-2xl font-bold mb-6 gradient-text">ADMIN RULES</h2>
            <ul className="space-y-4">
              {['LEAD BY EXAMPLE', 'NO ABUSE OF POWERS', 'STAY NEUTRAL IN RP SITUATIONS', 'HANDLE ALL REPORTS PROFESSIONALLY'].map((rule, index) => (
                <li 
                  key={index} 
                  className="text-gray-300 opacity-0"
                  style={{ animation: `slideUp 0.5s ease-out ${(index + 1) * 0.2}s forwards` }}
                >
                  <span className="font-semibold">RULE NO {index + 1}:</span> {rule}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}