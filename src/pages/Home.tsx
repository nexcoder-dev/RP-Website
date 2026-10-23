import React from 'react';
import { Users, ScrollText, ChevronDown } from 'lucide-react';

const teamMembers = [
  {
    role: 'MANAGEMENT',
    name: 'John Doe',
    photo: 'https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?w=300&h=200&fit=crop',
    link: '#management-link',
  },
  {
    role: 'MAIN DEV',
    name: 'Jane Smith',
    photo: 'https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?w=300&h=200&fit=crop',
    link: '#main-dev-link',
  },
  {
    role: 'DEV',
    name: 'Robert Brown',
    photo: 'https://images.unsplash.com/photo-1571647880847-7fa545735963?w=300&h=200&fit=crop',
    link: '#dev-link',
  },
  {
    role: 'SENIOR ADMIN',
    name: 'Emily White',
    photo: 'https://images.unsplash.com/photo-1587588971004-b5d30e264424?w=300&h=200&fit=crop',
    link: '#senior-admin-link',
  },
  {
    role: 'TECHNICAL ADMIN',
    name: 'James Black',
    photo: 'https://images.unsplash.com/photo-1583327047585-6d6f570bc1c8?w=300&h=200&fit=crop',
    link: '#technical-admin-link',
  },
  {
    role: 'DESIGN',
    name: 'Sophia Green',
    photo: 'https://images.unsplash.com/photo-1596495577880-df24f5c914b0?w=300&h=200&fit=crop',
    link: '#design-link',
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="h-screen relative overflow-hidden">
        <img
          src="https://i.ibb.co/GzKtGVL/background.png"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover transform scale-105 "
        />
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="opacity-0 animate-[fadeIn_1s_ease-in_forwards]">
              <h2 className="text-6xl font-bold mb-4 gradient-text">
                Welcome to IntrovertIRL
              </h2>
              <p className="text-xl mb-8 max-w-2xl text-gray-200 animate-[slideUp_0.5s_ease-out_0.5s_forwards] opacity-0">
                A whitelisted, immersive RP server built for streamers, storytellers, and legends. Your legacy begins here.
              </p>
              <div className="flex gap-4 animate-[slideUp_0.5s_ease-out_0.7s_forwards] opacity-0">
                <button className="bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-full flex items-center gap-2 font-medium transition-all transform hover:scale-105">
                  Apply Now <Users className="w-5 h-5" />
                </button>
                <button className="bg-green-500 hover:bg-green-600 px-8 py-3 rounded-full flex items-center gap-2 font-medium transition-all transform hover:scale-105">
                  Join Discord <ScrollText className="w-5 h-5" />
                </button>
              </div>

              <div className="mt-12 animate-[slideUp_0.5s_ease-out_0.9s_forwards] opacity-0">
                <p className="text-lg mb-2 text-gray-300">Current Server Status:</p>
                <span className="bg-orange-500/20 text-orange-400 px-6 py-2 rounded-full font-medium animate-pulse">
                  Online: 0/128
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white opacity-50" />
        </div>
      </section>

      {/* About Us Section */}
      <section className="min-h-screen bg-[#1a1a1a] relative px-4 py-16">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 gradient-text text-center transform hover:scale-105 transition-transform">
            ABOUT US
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6 glass-effect p-8 rounded-2xl card-hover">
              <p className="text-gray-300 leading-relaxed">
                IntrovertIRL RP is more than just a roleplay server—it's a universe where stories come alive, communities thrive, and creators shine.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Built by passionate roleplayers and creators, our mission is to offer a whitelisted, immersive RP experience that values quality storytelling, meaningful interactions, and a strong, respectful community.
              </p>
              <p className="text-gray-300 leading-relaxed">
                From street legends to city officials, from deep lore to spontaneous chaos—IntrovertIRL is your canvas. Whether you're a seasoned RPer or new to the scene, there's a place for your story here.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Driven by creators. Fueled by community. Inspired by you.
              </p>
              <p className="gradient-text font-medium">#TogetherWeRise</p>

              <div className="flex flex-wrap gap-4 mt-12">
                <button className="bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-full font-medium transition-all transform hover:scale-105">
                  YOUTUBE →
                </button>
                <button className="bg-[#5865F2] hover:bg-[#4752C4] px-8 py-3 rounded-full font-medium transition-all transform hover:scale-105">
                  Join Discord →
                </button>
                <button className="bg-green-500 hover:bg-green-600 px-8 py-3 rounded-full font-medium transition-all transform hover:scale-105">
                  Read RP Rules →
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://i.ibb.co/WWNT4Cy8/Post1.png"
                alt="RP Screenshot 1"
                className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 animate-float"
                style={{ animationDelay: '0s' }}
              />
              <img
                src="https://i.ibb.co/Myv49GP5/Post4.png"
                alt="RP Screenshot 2"
                className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 animate-float"
                style={{ animationDelay: '1s' }}
              />
              <img
                src="https://i.ibb.co/0RpWj1L1/Post3.png"
                alt="RP Screenshot 3"
                className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 animate-float"
                style={{ animationDelay: '2s' }}
              />
              <img
                src="https://i.ibb.co/dwfzjMpT/Post2.png"
                alt="RP Screenshot 4"
                className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 animate-float"
                style={{ animationDelay: '3s' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="min-h-screen bg-[#1a1a1a] relative px-4 py-16">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-16">
            {/* FOUNDER */}
            <div className="md:w-1/3">
              <h2 className="text-6xl font-bold mb-8 text-white">
                TEAM<br />IntrovertIRL
              </h2>
              <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm">
                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop"
                    alt="Founder"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-center text-xl font-semibold text-gray-200">FOUNDER</p>
                <p className="text-center text-gray-400">IntrovertIRL</p>
              </div>
            </div>

            {/* Team Members (Roles) */}
            <div className="md:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-6">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                  <div className="aspect-[4/3] rounded-lg overflow-hidden mb-4">
                    {/* Image */}
                    <img
                      src={member.photo}
                      alt={member.role}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <p className="text-center text-gray-200 font-medium">{member.role}</p>
                  <p className="text-center text-gray-400">
                    <a href={member.link} target="_blank" rel="noopener noreferrer">
                      {member.name}
                    </a>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* Features Section */}
      <section className="min-h-screen bg-[#1a1a1a] relative px-4 py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-center gap-4 bg-white/5 p-4 rounded-lg hover:bg-white/10 transition-all">
                <img
                  src="https://i.ibb.co/RkLC8PK3/robbery.png"
                  alt="Robberies"
                  className="w-24 h-24 rounded-lg object-cover"
                />
                <h3 className="text-xl font-semibold">- ROBBERIES</h3>
              </div>

              <div className="flex items-center gap-4 bg-white/5 p-4 rounded-lg hover:bg-white/10 transition-all">
                <img
                  src="https://i.ibb.co/7shSdkB/police.png"
                  alt="Active PD"
                  className="w-24 h-24 rounded-lg object-cover"
                />
                <h3 className="text-xl font-semibold">- ACTIVE PD</h3>
              </div>

              <div className="flex items-center gap-4 bg-white/5 p-4 rounded-lg hover:bg-white/10 transition-all">
                <img
                  src="https://i.ibb.co/DD2YtjTf/ems.png"
                  alt="Active EMS"
                  className="w-24 h-24 rounded-lg object-cover"
                />
                <h3 className="text-xl font-semibold">- ACTIVE EMS</h3>
              </div>

              <div className="flex items-center gap-4 bg-white/5 p-4 rounded-lg hover:bg-white/10 transition-all">
                <img
                  src="https://i.ibb.co/ynxfvR10/jobs.png"
                  alt="Multi Jobs"
                  className="w-24 h-24 rounded-lg object-cover"
                />
                <h3 className="text-xl font-semibold">- MULTI JOBS</h3>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-purple-900 to-indigo-900 rounded-2xl p-8">
                <h2 className="text-3xl font-bold mb-6">GANGS</h2>
                <img
                  src="https://i.ibb.co/tpv1ydvN/gang-character.png"
                  alt="Gang Character"
                  className="w-full rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}