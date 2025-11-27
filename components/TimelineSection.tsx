import React from 'react';
import { TIMELINE_DATA } from '../constants';
import { CheckCircle2, Clock, Flag } from 'lucide-react';

const TimelineSection: React.FC = () => {
  return (
    <div className="w-full max-w-3xl mx-auto px-4 pb-24 pt-8">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Our Journey</h2>
        <p className="text-gray-600">IKARUS가 걸어온 길, 그리고 나아갈 방향</p>
      </div>

      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary/50 to-primary/20"></div>

        <div className="space-y-8">
          {TIMELINE_DATA.map((item, index) => {
            const isLeft = index % 2 === 0;
            const Icon = item.category === 'milestone' ? Flag : item.category === 'education' ? CheckCircle2 : Clock;
            
            return (
              <div key={index} className={`relative flex items-center md:justify-between ${isLeft ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Empty space for desktop layout */}
                <div className="hidden md:block w-5/12"></div>
                
                {/* Center Icon */}
                <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-white border-4 border-primary z-10 shadow-md">
                   {/* Small dot inner */}
                   <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>

                {/* Content Card */}
                <div className="ml-16 md:ml-0 w-full md:w-5/12">
                   <div className="glass-card p-5 rounded-xl hover:bg-white/70 transition-all duration-300 border-l-4 border-l-primary md:border-l-0 md:border-t-4 md:border-t-primary">
                      <span className="inline-block px-2 py-1 text-xs font-bold text-primary bg-blue-100 rounded mb-2">
                        {item.date}
                      </span>
                      <h3 className="text-lg font-bold text-gray-800 mb-1 flex items-center gap-2">
                        {item.title}
                        <Icon size={14} className="text-gray-400" />
                      </h3>
                      <p className="text-sm text-gray-600 leading-snug">
                        {item.description}
                      </p>
                   </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TimelineSection;
