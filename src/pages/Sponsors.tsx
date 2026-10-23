import React from 'react';

export default function Sponsors() {
  const sponsors = [
    {
      name: "Sponsor 1",
      image: "https://i.ibb.co/GzKtGVL/background.png", // Replace with actual logo
      link: "https://sponsor1.com"
    },
    {
      name: "Sponsor 2",
      image: "https://i.ibb.co/sWvCkZn/gamer.png",
      link: "https://sponsor2.com"
    },
    {
      name: "Sponsor 3",
      image: "https://i.ibb.co/tD6rfwP/streamer.png",
      link: "https://sponsor3.com"
    }
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
          Brand Sponsors
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className="glass-effect rounded-xl p-6 card-hover opacity-0"
              style={{ animation: `slideUp 0.5s ease-out ${index * 0.2}s forwards` }}
            >
              <a
                href={sponsor.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block aspect-[4/3] rounded-lg overflow-hidden mb-4 hover:scale-105 transition-transform"
              >
                <img
                  src={sponsor.image}
                  alt={sponsor.name}
                  className="w-full h-full object-cover"
                />
              </a>
              <h3 className="text-xl font-semibold text-center gradient-text">{sponsor.name}</h3>
              <p className="text-gray-400 text-center mt-2">Premium Partner</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
