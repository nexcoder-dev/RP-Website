import React from 'react';

export default function Media() {
  const youtubers = [
    {
      name: "YOUTUBER.XYZ",
      image: "https://i.ibb.co/GzKtGVL/background.png", // Replace with actual image
      link: "https://www.youtube.com/@YOUTUBER" // Replace with actual channel link
    },
    {
      name: "GAMER.FREAK",
      image: "https://i.ibb.co/sWvCkZn/gamer.png",
      link: "https://www.youtube.com/@GAMERFREAK"
    },
    {
      name: "IILRP CREATOR",
      image: "https://i.ibb.co/HD0WnWf/creator.png",
      link: "https://www.youtube.com/@youtube"
    },
    {
      name: "LIVE.STREAMER",
      image: "https://i.ibb.co/tD6rfwP/streamer.png",
      link: "https://www.youtube.com/@LIVESTREAMER"
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
          IIRP MEDIA'S
        </h1>

        <div className="max-w-3xl mx-auto space-y-6">
          {youtubers.map((youtuber, index) => (
            <div
              key={index}
              className="flex items-center gap-4 glass-effect p-6 rounded-xl card-hover opacity-0"
              style={{ animation: `slideUp 0.5s ease-out ${index * 0.2}s forwards` }}
            >
              <p className="text-xl gradient-text">{youtuber.name}</p>
              <div className="flex-1 border-b border-dotted border-gray-600"></div>
              <a
                href={youtuber.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-48 h-32 overflow-hidden rounded-lg hover:scale-105 transition-transform"
              >
                <img
                  src={youtuber.image}
                  alt={youtuber.name}
                  className="w-full h-full object-cover rounded-lg"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
