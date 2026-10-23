import React from 'react';

export default function Donate() {
  return (
    <div
      className="min-h-screen pt-24 bg-cover bg-center"
      style={{
        backgroundImage: "url('https://i.ibb.co/GzKtGVL/background.png')"
      }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <img
            src="https://i.ibb.co/XxtvMFnH/logo.png"
            alt="Logo"
            className="w-24 h-24 mx-auto mb-8"
          />
          <h1 className="text-4xl font-bold text-yellow-500 mb-8">DONATION</h1>

          <div className="bg-white/5 rounded-xl p-8 backdrop-blur-sm mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">
              ALL PURCHASES MADE ON THE IntrovertIRL RP WEBSITE ARE FINAL AND NON-REFUNDABLE.
            </h2>
            <p className="text-gray-300">
              By completing a transaction, you agree to this policy and understand
              that digital goods, perks, or services provided are not eligible for
              refunds under any circumstances.
            </p>
          </div>

          <button className="bg-green-500 hover:bg-green-600 px-8 py-3 rounded-full font-medium transition-all">
            SUPPORT
          </button>
        </div>
      </div>
    </div>
  );
}