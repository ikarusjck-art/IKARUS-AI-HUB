import React from 'react';
import { Target, Lightbulb, TrendingUp } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <div className="w-full max-w-3xl mx-auto px-4 pb-24 pt-8 animate-fade-in-up">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">About IKARUS</h2>
        <p className="text-gray-600">AI와 함께 그리는 새로운 연구 문화</p>
      </div>

      <div className="glass-card rounded-2xl p-8 mb-6">
        <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
          <Target /> Our Mission
        </h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          IKARUS는 삼화페인트 연구원들이 생성형 AI라는 강력한 도구를 통해 
          반복적인 업무에서 벗어나, 더욱 창의적이고 가치 있는 연구에 집중할 수 있도록 
          돕는 사내 AI 허브입니다.
        </p>
        <p className="text-gray-700 leading-relaxed">
          우리는 기술의 도입을 넘어, 모든 임직원이 AI 리터러시를 갖추고 
          실제 업무 현장에서 즉각적인 효율을 경험할 수 있는 환경을 구축합니다.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="glass-card rounded-2xl p-6">
          <h3 className="text-lg font-bold text-secondary mb-3 flex items-center gap-2">
            <Lightbulb size={20}/> Vision
          </h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5"></span>
              데이터 기반의 신속한 의사결정 지원
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5"></span>
              글로벌 트렌드 실시간 분석 및 적용
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5"></span>
              연구 개발(R&D) 사이클 단축
            </li>
          </ul>
        </div>
        
        <div className="glass-card rounded-2xl p-6">
          <h3 className="text-lg font-bold text-secondary mb-3 flex items-center gap-2">
            <TrendingUp size={20}/> Goals
          </h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5"></span>
              전 연구원 프롬프트 엔지니어링 마스터
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5"></span>
              AI 협업 성공 사례 100건 발굴
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5"></span>
              사내 맞춤형 sLLM 모델 고도화
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
