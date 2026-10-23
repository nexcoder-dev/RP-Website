import React from 'react';

export default function Subscription() {
  const tiers = [
    { name: "SILVER", color: "bg-gradient-to-br from-gray-200 to-gray-400" },
    { name: "GOLD", color: "bg-gradient-to-br from-yellow-300 to-yellow-500" },
    { name: "EMERALD", color: "bg-gradient-to-br from-green-300 to-green-500" },
    { name: "DIAMOND", color: "bg-gradient-to-br from-blue-200 to-blue-400" }
  ];

  return (
    <div
      className="min-h-screen pt-24 bg-cover bg-center"
      style={{
        backgroundImage: "url('https://i.ibb.co/GzKtGVL/background.png')"
      }}
    >
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center gradient-text mb-12 animate-[slideDown_0.5s_ease-out]">
          Subscriptions
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, index) => (
            <div 
              key={tier.name} 
              className={`${tier.color} rounded-xl p-6 card-hover opacity-0 animate-float`}
              style={{ 
                animation: `slideUp 0.5s ease-out ${index * 0.2}s forwards, float 6s ease-in-out ${index}s infinite`
              }}
            >
              <div className="flex justify-center mb-4">
                <img 
                  src="https://i.ibb.co/XxtvMFnH/logo.png" 
                  alt="Logo" 
                  className="w-12 h-12 animate-pulse"
                />
              </div>
              <h2 className="text-xl font-bold text-center text-gray-800 mb-4">{tier.name}</h2>
              <div className="text-center">
                <p className="font-semibold text-gray-800">PRICE</p>
                <button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full text-sm font-medium transition-all transform hover:scale-105">
                  Subscribe Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}