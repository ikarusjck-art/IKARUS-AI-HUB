import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { IMAGES, KEY_MESSAGES } from '../constants';

interface ProfileHeroProps {
  onNavigate: (page: string) => void;
}

const ProfileHero: React.FC<ProfileHeroProps> = ({ onNavigate }) => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 pb-24 pt-8">
      {/* Main Profile Card */}
      <div className="glass-card rounded-3xl p-8 md:p-12 text-center relative overflow-hidden transition-transform hover:scale-[1.01] duration-500">
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-r from-primary/20 to-secondary/20 -z-10" />
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-400/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-20 -left-10 w-40 h-40 bg-purple-400/30 rounded-full blur-3xl animate-pulse delay-700" />

        <div className="relative z-10 flex flex-col items-center">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full p-1 bg-gradient-to-tr from-primary to-secondary shadow-lg mb-6">
             <img 
               src={IMAGES.PROFILE} 
               alt="IKARUS Profile" 
               className="w-full h-full rounded-full object-cover border-4 border-white"
             />
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-3">
            IKARUS
          </h1>
          <p className="text-lg md:text-xl text-gray-600 font-medium mb-2">
            AI Hub for Samhwa Paint
          </p>
          <p className="text-gray-500 max-w-lg mx-auto mb-8">
            생성형 AI로 여는 삼화페인트의 미래.<br/>
            업무 효율 혁신과 새로운 연구 경험을 제공합니다.
          </p>

          <button 
            onClick={() => onNavigate('about')}
            className="group bg-primary text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-blue-700 hover:shadow-primary/50 transition-all flex items-center gap-2"
          >
            시작하기
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Quick Links Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        {KEY_MESSAGES.map((msg, idx) => (
          <div key={idx} className="glass-card p-6 rounded-2xl hover:bg-white/60 transition-colors cursor-default">
            <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm mb-4">
              {msg.icon}
            </div>
            <h3 className="font-bold text-gray-800 mb-1">{msg.title}</h3>
            <p className="text-sm text-gray-500 break-keep">{msg.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileHero;
