import React from 'react';
import { Home, User, Map, Image as ImageIcon, Mail, FileText, Cpu, Users } from 'lucide-react';
import { TimelineEvent, GalleryItem } from './types';

export const APP_NAME = "IKARUS AI Hub";

// Image Assets (using the ones provided in prompt or high quality placeholders)
export const IMAGES = {
  PROFILE: "https://loremflickr.com/800/800/artificial_intelligence,robot/all",
  HERO_BG: "https://loremflickr.com/1600/900/technology,abstract/all",
  GALLERY_1: "https://loremflickr.com/800/600/workshop,office/all",
  GALLERY_2: "https://loremflickr.com/800/600/computer,code/all",
  GALLERY_3: "https://loremflickr.com/800/600/team,success/all",
  GALLERY_4: "https://loremflickr.com/800/600/seminar,presentation/all",
};

export const NAV_ITEMS = [
  { id: 'home', label: 'Home', icon: <Home size={20} /> },
  { id: 'about', label: 'About', icon: <User size={20} /> },
  { id: 'journey', label: 'Journey', icon: <Map size={20} /> },
  { id: 'life', label: 'Life', icon: <ImageIcon size={20} /> },
  { id: 'contact', label: 'Contact', icon: <Mail size={20} /> },
];

export const TIMELINE_DATA: TimelineEvent[] = [
  {
    date: "2023. Q4",
    title: "IKARUS 프로젝트 발족",
    description: "삼화페인트 연구소 내 생성형 AI 도입을 위한 TF팀 구성 및 초기 기획 단계.",
    category: "milestone"
  },
  {
    date: "2024. Q1",
    title: "기초 인프라 구축",
    description: "사내 보안 가이드라인 수립 및 폐쇄형 AI 모델 테스트 환경 조성.",
    category: "project"
  },
  {
    date: "2024. Q2",
    title: "임직원 대상 1차 워크샵",
    description: "연구원 50명 대상 프롬프트 엔지니어링 기초 교육 실시 (만족도 4.8/5.0).",
    category: "education"
  },
  {
    date: "2024. Q3",
    title: "R&D 특화 모델 PoC",
    description: "화학 배합 및 물성 예측을 위한 도메인 특화 LLM 개념 증명 수행.",
    category: "project"
  },
  {
    date: "Current",
    title: "IKARUS Hub 오픈",
    description: "전사적 지식 공유를 위한 웹 플랫폼 런칭 및 커뮤니티 활성화.",
    category: "milestone"
  }
];

export const GALLERY_DATA: GalleryItem[] = [
  { id: 1, url: IMAGES.GALLERY_1, title: "제1회 AI 워크샵", category: "Education" },
  { id: 2, url: IMAGES.GALLERY_2, title: "프롬프트 연구 세션", category: "R&D" },
  { id: 3, url: IMAGES.GALLERY_3, title: "해커톤 우승팀", category: "Community" },
  { id: 4, url: IMAGES.GALLERY_4, title: "사내 세미나 발표", category: "Education" },
];

export const KEY_MESSAGES = [
  { title: "업무 가이드", desc: "누구나 쉽게 시작하는 업무용 AI 가이드", icon: <FileText className="text-primary" /> },
  { title: "프롬프트", desc: "연구 효율을 높이는 프롬프트 엔지니어링", icon: <Cpu className="text-secondary" /> },
  { title: "커뮤니티", desc: "함께 성장하는 사내 AI 커뮤니티", icon: <Users className="text-primary" /> },
];
