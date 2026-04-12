'use client';
import React, { useState, useEffect, useRef } from 'react';

/* ═══════════════════════════════════════════════════════════════
   ממשקים — Landing Page (Full Conversion Build)
   Stack: React + Tailwind CSS · RTL Hebrew · Glassmorphism
   Inspired by SimpleTalk.ai patterns, fully localized in Hebrew
   ═══════════════════════════════════════════════════════════════ */

// ── Intersection Observer hook for scroll animations ─────────
function useInView(options = {}) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsInView(true); observer.unobserve(el); } },
      { threshold: 0.15, ...options }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return [ref, isInView];
}

// ── Animated wrapper component ───────────────────────────────
const AnimateIn = ({ children, className = '', delay = 0, direction = 'up' }) => {
  const [ref, isInView] = useInView();
  const transforms = {
    up: 'translateY(40px)',
    down: 'translateY(-40px)',
    left: 'translateX(40px)',
    right: 'translateX(-40px)',
    scale: 'scale(0.9)',
  };
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'none' : transforms[direction],
        transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
};

// ── Custom Brand Logo ────────────────────────────────────────
const MimshakimLogo = ({ size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="25" fill="#00E5FF" fillOpacity="0.2" filter="blur(8px)" />
    <rect x="45" y="25" width="35" height="35" rx="8" transform="rotate(45 62.5 42.5)" stroke="#0D1F3C" strokeWidth="10" strokeLinejoin="round" />
    <rect x="20" y="25" width="35" height="35" rx="8" transform="rotate(45 37.5 42.5)" stroke="#00E5FF" strokeWidth="10" strokeLinejoin="round" />
    <circle cx="50" cy="50" r="4" fill="#0D1F3C" />
  </svg>
);

// ── Section Icons ────────────────────────────────────────────
const ClockIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00E5FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
  </svg>
);
const SyncIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00E5FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 2v6h-6" /><path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
    <path d="M3 22v-6h6" /><path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
  </svg>
);
const SmileIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00E5FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><path d="M8 14s1.5 2 4 2 4-2 4-2" />
    <line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" />
  </svg>
);
const CheckIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00E5FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);
const PhoneIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);
const PlayIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
    <path d="M8 5v14l11-7z"/>
  </svg>
);
const ChevronDownIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

// ── Reusable glass card ──────────────────────────────────────
const GlassCard = ({ children, className = '', hover = true }) => (
  <div className={`
    bg-white/40 backdrop-blur-xl border border-white/60
    shadow-[0_8px_32px_rgba(0,0,0,0.08)]
    rounded-2xl
    ${hover ? 'hover:shadow-[0_12px_40px_rgba(0,229,255,0.12)] hover:-translate-y-1 hover:border-[#00E5FF]/30' : ''}
    transition-all duration-300
    ${className}
  `}>
    {children}
  </div>
);

// ── FAQ Accordion Item ───────────────────────────────────────
const FAQItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-slate-200/60 last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 px-1 text-right hover:text-[#00E5FF] transition-colors"
      >
        <span className="text-lg font-bold text-[#0D1F3C]">{question}</span>
        <span className={`transform transition-transform duration-300 mr-4 ${open ? 'rotate-180' : ''}`}>
          <ChevronDownIcon />
        </span>
      </button>
      <div
        className="overflow-hidden transition-all duration-400"
        style={{ maxHeight: open ? '300px' : '0', opacity: open ? 1 : 0 }}
      >
        <p className="pb-5 px-1 text-slate-500 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

// ── Counter Animation ────────────────────────────────────────
const AnimatedCounter = ({ target, suffix = '', prefix = '' }) => {
  const [count, setCount] = useState(0);
  const [ref, isInView] = useInView();
  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, target]);
  return <span ref={ref}>{prefix}{count.toLocaleString()}{suffix}</span>;
};

// ═══════════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════════
export default function MimshakimLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div dir="rtl" className="min-h-screen font-sans bg-[#F2F4F7] text-[#0D1F3C] selection:bg-[#00E5FF]/30 selection:text-[#0D1F3C]">

      {/* ── Global Animations ────────────────────── */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
        @keyframes pulse-glow { 0%,100%{opacity:0.2} 50%{opacity:0.35} }
        @keyframes wave-bar { 0%,100%{height:12px} 50%{height:28px} }
        .animate-float { animation: float 4s ease-in-out infinite; }
        .animate-pulse-glow { animation: pulse-glow 3s ease-in-out infinite; }
      `}} />

      {/* ══════════════════════════════════════════════════════
          1 · HEADER / NAVBAR
          ══════════════════════════════════════════════════════ */}
      <header className="sticky top-0 z-50 bg-white/60 backdrop-blur-xl backdrop-saturate-150 border-b border-white/30 shadow-[0_4px_30px_rgba(0,0,0,0.04)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-1 cursor-pointer">
            <MimshakimLogo size={44} />
            <span className="text-2xl font-black tracking-tight text-[#0D1F3C]">ממשקים</span>
          </div>
          <nav className="hidden md:flex gap-8 font-semibold text-slate-500">
            <a href="#features" className="hover:text-[#00E5FF] transition-colors">יתרונות</a>
            <a href="#demo" className="hover:text-[#00E5FF] transition-colors">הדגמה</a>
            <a href="#how-it-works" className="hover:text-[#00E5FF] transition-colors">איך זה עובד</a>
            <a href="#use-cases" className="hover:text-[#00E5FF] transition-colors">שימושים</a>
            <a href="#faq" className="hover:text-[#00E5FF] transition-colors">שאלות נפוצות</a>
          </nav>
          <div className="flex items-center gap-3">
            <button className="hidden sm:block px-5 py-2.5 rounded-full border-2 border-[#0D1F3C] text-[#0D1F3C] font-semibold text-sm hover:bg-[#0D1F3C] hover:text-white transition-all duration-300">
              כניסת מנהלים
            </button>
            <button className="px-5 py-2.5 rounded-full bg-gradient-to-l from-[#FF7332] to-[#F05306] text-white font-bold text-sm shadow-[0_4px_20px_rgba(240,83,6,0.35)] hover:shadow-[0_4px_28px_rgba(240,83,6,0.5)] hover:scale-105 transition-all duration-300">
              התחילו בחינם
            </button>
          </div>
        </div>
      </header>

      {/* ══════════════════════════════════════════════════════
          2 · HERO SECTION
          ══════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden pt-20 pb-32 lg:pt-28 lg:pb-40">
        <div className="absolute inset-0 bg-gradient-to-b from-[#F2F4F7] via-[#eaf9fc] to-[#F2F4F7] z-0" />
        <div className="absolute top-10 left-16 w-[560px] h-[560px] bg-[#00E5FF] rounded-full mix-blend-multiply blur-[180px] opacity-25 animate-pulse-glow" />
        <div className="absolute bottom-0 right-1/4 w-[420px] h-[420px] bg-[#00E5FF] rounded-full mix-blend-multiply blur-[150px] opacity-15" />
        <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-[#0D1F3C] rounded-full mix-blend-multiply blur-[130px] opacity-[0.04]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* Text column */}
            <AnimateIn direction="right">
              <div className="text-right">
                <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-md border border-white/80 rounded-full px-4 py-1.5 mb-6 text-sm font-semibold text-slate-600 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  סוכני AI שעובדים 24/7
                </div>
                <h1 className="text-5xl lg:text-[3.5rem] font-black leading-[1.15] mb-6 text-[#0D1F3C]">
                  ממשקים: המהפכה הקולית{' '}
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-l from-[#00E5FF] to-[#248BD3]">
                    של המרפאה שלך.
                  </span>
                </h1>
                <p className="text-xl text-slate-500 mb-10 leading-relaxed max-w-lg">
                  סוכני AI חכמים שמנהלים את התורים, עונים ללקוחות ומסנכרנים הכל
                  ישירות ליומן. השכבה המקשרת שחוסכת לך זמן ומשאבים.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="px-8 py-4 rounded-full bg-gradient-to-l from-[#FF7332] to-[#F05306] text-white font-bold text-lg shadow-[0_4px_24px_rgba(240,83,6,0.4)] hover:scale-105 hover:shadow-[0_4px_36px_rgba(240,83,6,0.55)] transition-all duration-300">
                    התנסות חינם עכשיו
                  </button>
                  <button className="px-8 py-4 rounded-full bg-white/50 backdrop-blur-xl border border-white/70 text-[#0D1F3C] font-semibold text-lg shadow-[0_8px_32px_rgba(0,0,0,0.06)] hover:bg-white/70 hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)] transition-all duration-300 flex items-center justify-center gap-2">
                    <PlayIcon />
                    צפו בהדגמה
                  </button>
                </div>
                {/* Trust badges */}
                <div className="flex items-center gap-6 mt-8 text-sm text-slate-400">
                  <span className="flex items-center gap-1">
                    <CheckIcon /> ללא כרטיס אשראי
                  </span>
                  <span className="flex items-center gap-1">
                    <CheckIcon /> הגדרה בדקות
                  </span>
                </div>
              </div>
            </AnimateIn>

            {/* Mockup column */}
            <AnimateIn direction="left" delay={0.2}>
              <div className="relative">
                <div className="absolute inset-0 -m-8 bg-[#00E5FF]/10 rounded-[40px] blur-3xl" />
                <GlassCard hover={false} className="p-7 rounded-3xl relative z-10 transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                  <div className="flex items-center gap-4 mb-6 border-b border-white/40 pb-4">
                    <div className="w-12 h-12 rounded-full bg-[#0D1F3C] flex items-center justify-center shadow-lg">
                      <MimshakimLogo size={30} />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#0D1F3C]">סוכן AI קולי מתקשר...</h3>
                      <p className="text-sm text-emerald-500 font-semibold flex items-center gap-1">
                        <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        מחובר ומסנכרן
                      </p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-10 bg-white/50 backdrop-blur-md border border-white/40 rounded-xl w-full animate-pulse" />
                    <div className="h-10 bg-white/50 backdrop-blur-md border border-white/40 rounded-xl w-5/6 animate-pulse" />
                    <div className="h-11 bg-[#00E5FF]/15 backdrop-blur-sm rounded-xl w-4/6 mt-5 border border-[#00E5FF]/40 flex items-center px-4 shadow-[0_0_16px_rgba(0,229,255,0.1)]">
                      <span className="text-sm font-bold text-[#0D1F3C]">✓ תור נקבע בהצלחה — 14:30</span>
                    </div>
                  </div>
                </GlassCard>
                <div className="absolute -bottom-5 -right-5 z-20 bg-white/50 backdrop-blur-xl border border-white/60 text-[#0D1F3C] px-5 py-3 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.1)] flex items-center gap-3 animate-float">
                  <CheckIcon />
                  <span className="font-bold text-sm">פגישה חדשה סונכרנה</span>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          3 · SOCIAL PROOF — LOGO BAR + STATS
          ══════════════════════════════════════════════════════ */}
      <section className="py-16 bg-white/50 border-y border-white/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Logo strip */}
          <AnimateIn>
            <p className="text-center text-sm font-semibold text-slate-400 mb-8 tracking-wider">מרפאות מובילות כבר משתמשות בממשקים</p>
            <div className="flex flex-wrap items-center justify-center gap-10 mb-16 opacity-40">
              {['מרפאת שן-טוב', 'דנטל קליניק', 'ד"ר גולדשטיין', 'חיוך פלוס', 'מרפאת הבוטיק', 'דנטל ויז\'ן'].map((name, i) => (
                <div key={i} className="flex items-center gap-2 text-lg font-bold text-slate-600">
                  <div className="w-8 h-8 rounded-lg bg-slate-300/60" />
                  {name}
                </div>
              ))}
            </div>
          </AnimateIn>

          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: 98, suffix: '%', label: 'שביעות רצון לקוחות' },
              { value: 15000, suffix: '+', label: 'תורים שנקבעו' },
              { value: 40, suffix: '%', label: 'חיסכון בעלויות' },
              { value: 3, suffix: ' דק\'', label: 'זמן הגדרה ממוצע' },
            ].map((stat, i) => (
              <AnimateIn key={i} delay={i * 0.1} direction="scale">
                <div className="text-center py-6">
                  <div className="text-4xl md:text-5xl font-black text-[#0D1F3C] mb-2">
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-slate-500 font-medium">{stat.label}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          4 · VALUE PROPOSITION — FEATURES GRID
          ══════════════════════════════════════════════════════ */}
      <section id="features" className="py-24 relative overflow-hidden bg-gradient-to-b from-[#F2F4F7] to-white">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00E5FF] rounded-full blur-[200px] opacity-[0.06]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimateIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-[#0D1F3C] mb-4">השכבה החכמה בין העסק ללקוח</h2>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">מערכת שתוכננה לעבוד בשקיפות מלאה ולהוריד את העומס מהצוות שלך.</p>
            </div>
          </AnimateIn>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <ClockIcon />, title: 'זמינות מלאה 24/7', text: 'הסוכן הקולי אף פעם לא נח. כל שיחה נענית, כל תור נקבע באופן אוטומטי ובשפה טבעית, גם מחוץ לשעות הפעילות.' },
              { icon: <SyncIcon />, title: 'סינכרון שקוף וישיר', text: 'חיבור מיידי ל-Dashboard שלך. כל פגישה מתעדכנת בזמן אמת בלי צורך בהתערבות ידנית, ללא כפילויות וללא טעויות אנוש.' },
              { icon: <SmileIcon />, title: 'חוויה אנושית', text: 'בינה מלאכותית שמדברת בגובה העיניים, מקשיבה ללקוח, מבינה ניואנסים ומעניקה שירות אישי, סבלני ומהיר.' },
            ].map((card, i) => (
              <AnimateIn key={i} delay={i * 0.15}>
                <GlassCard className="p-8 h-full">
                  <div className="w-16 h-16 bg-white/70 backdrop-blur-sm rounded-2xl shadow-sm flex items-center justify-center mb-6 border border-white/50">
                    {card.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-[#0D1F3C] mb-3">{card.title}</h3>
                  <p className="text-slate-500 leading-relaxed">{card.text}</p>
                </GlassCard>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          5 · INTERACTIVE DEMO — HEAR THE AGENT
          ══════════════════════════════════════════════════════ */}
      <section id="demo" className="py-28 bg-gradient-to-b from-white to-[#F2F4F7] relative overflow-hidden">
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#00E5FF] rounded-full blur-[200px] opacity-[0.07]" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimateIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-[#0D1F3C] mb-4">שמעו את הסוכן בפעולה</h2>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">הסוכן שלנו מדבר עברית טבעית, מבין הקשר ומנהל שיחות כמו מזכירה מקצועית.</p>
            </div>
          </AnimateIn>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Audio Demo Card */}
            <AnimateIn delay={0.1}>
              <GlassCard hover={false} className="p-8 flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-bl from-[#00E5FF] to-[#248BD3] flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(0,229,255,0.3)] cursor-pointer hover:scale-110 transition-transform">
                  <PlayIcon />
                </div>
                <h3 className="text-xl font-bold text-[#0D1F3C] mb-2">שיחה לדוגמה</h3>
                <p className="text-slate-500 mb-6">האזינו לשיחה אמיתית בין הסוכן ללקוח שקובע תור לטיפול שיניים.</p>
                {/* Simulated waveform */}
                <div className="flex items-end gap-1 h-10 mb-4">
                  {Array.from({ length: 32 }).map((_, i) => (
                    <div
                      key={i}
                      className="w-1.5 bg-gradient-to-t from-[#00E5FF] to-[#248BD3] rounded-full"
                      style={{
                        height: `${12 + Math.sin(i * 0.8) * 16 + Math.random() * 8}px`,
                        opacity: 0.5 + Math.sin(i * 0.5) * 0.3,
                        animation: `wave-bar 1.${i % 5}s ease-in-out infinite`,
                        animationDelay: `${i * 0.05}s`,
                      }}
                    />
                  ))}
                </div>
                <p className="text-xs text-slate-400">0:00 / 1:24</p>
              </GlassCard>
            </AnimateIn>

            {/* Try It Card */}
            <AnimateIn delay={0.25}>
              <GlassCard hover={false} className="p-8 flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-l from-[#FF7332] to-[#F05306] flex items-center justify-center text-white">
                    <PhoneIcon />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0D1F3C]">תנו ל-AI להתקשר אליכם</h3>
                    <p className="text-sm text-slate-400">תחוו את החוויה בעצמכם</p>
                  </div>
                </div>
                <div className="flex-1 flex flex-col gap-4">
                  <input
                    type="tel"
                    placeholder="מספר הטלפון שלכם"
                    className="w-full px-5 py-3.5 rounded-xl bg-white/60 backdrop-blur-md border border-white/70 text-[#0D1F3C] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00E5FF]/50 focus:border-[#00E5FF]/50 transition-all"
                    dir="ltr"
                  />
                  <select className="w-full px-5 py-3.5 rounded-xl bg-white/60 backdrop-blur-md border border-white/70 text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#00E5FF]/50 transition-all">
                    <option>סוג שיחה — קביעת תור</option>
                    <option>סוג שיחה — שאלה כללית</option>
                    <option>סוג שיחה — ביטול תור</option>
                  </select>
                  <button className="w-full py-3.5 rounded-xl bg-gradient-to-l from-[#FF7332] to-[#F05306] text-white font-bold text-lg shadow-[0_4px_20px_rgba(240,83,6,0.35)] hover:shadow-[0_4px_28px_rgba(240,83,6,0.5)] hover:scale-[1.02] transition-all duration-300 mt-auto">
                    שלחו לי שיחת דמו
                  </button>
                </div>
              </GlassCard>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          6 · VIDEO SECTION
          ══════════════════════════════════════════════════════ */}
      <section className="py-24 bg-[#F2F4F7] relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimateIn>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-black text-[#0D1F3C] mb-4">ראו איך ממשקים משנה את המרפאה</h2>
              <p className="text-lg text-slate-400">סרטון קצר שמסביר הכל בפחות מ-2 דקות.</p>
            </div>
          </AnimateIn>
          <AnimateIn delay={0.15} direction="scale">
            <div className="relative aspect-video rounded-3xl overflow-hidden bg-[#0D1F3C] shadow-[0_20px_60px_rgba(0,0,0,0.15)] group cursor-pointer">
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#0D1F3C] via-[#1a3a5c] to-[#0D1F3C]" />
              {/* Grid pattern */}
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(0,229,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,0.3) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-white/20 transition-all duration-300 shadow-[0_0_40px_rgba(0,229,255,0.2)]">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-l from-[#FF7332] to-[#F05306] flex items-center justify-center shadow-[0_4px_20px_rgba(240,83,6,0.4)]">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z"/></svg>
                  </div>
                </div>
              </div>
              {/* Bottom label */}
              <div className="absolute bottom-6 left-0 right-0 text-center text-white/60 text-sm font-medium">
                ▶ צפו בסרטון ההדגמה — 1:48
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          7 · DASHBOARD SHOWCASE
          ══════════════════════════════════════════════════════ */}
      <section id="dashboard" className="py-28 bg-[#0D1F3C] text-white overflow-hidden relative">
        <div className="absolute -top-40 -left-40 w-[480px] h-[480px] bg-[#00E5FF] rounded-full mix-blend-screen blur-[170px] opacity-20" />
        <div className="absolute bottom-20 right-10 w-[300px] h-[300px] bg-[#00E5FF] rounded-full mix-blend-screen blur-[120px] opacity-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimateIn direction="right" className="order-2 lg:order-1">
              <div className="relative">
                <div className="w-full bg-slate-800/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-700/60 overflow-hidden">
                  <div className="bg-slate-900/90 px-4 py-3 flex items-center gap-2 border-b border-slate-700/50">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                    <div className="mx-auto bg-slate-800 text-[11px] px-4 py-1 rounded-lg text-slate-400 font-mono">mimshakim-dashboard.app</div>
                  </div>
                  <div className="p-6 flex gap-5 h-80">
                    <div className="w-1/4 bg-slate-700/50 rounded-xl border border-slate-600/40 p-3 flex flex-col gap-3">
                      <div className="h-2 w-14 bg-[#00E5FF]/60 rounded-full" />
                      <div className="h-2 w-10 bg-white/15 rounded-full" />
                      <div className="h-2 w-12 bg-white/15 rounded-full" />
                      <div className="h-2 w-8 bg-white/15 rounded-full" />
                    </div>
                    <div className="w-3/4 flex flex-col gap-4">
                      <div className="h-12 bg-slate-700/40 rounded-xl border border-slate-600/40 flex items-center px-4">
                        <div className="h-2 w-28 bg-[#00E5FF] rounded-full" />
                      </div>
                      <div className="flex-1 grid grid-cols-2 gap-4">
                        <div className="bg-slate-700/40 rounded-xl border border-slate-600/40 p-4 flex flex-col justify-between">
                          <div className="h-2 w-14 bg-white/20 rounded-full" />
                          <div className="text-2xl font-black text-white/80">128</div>
                        </div>
                        <div className="bg-slate-700/40 rounded-xl border border-slate-600/40 p-4 flex flex-col justify-between">
                          <div className="h-2 w-14 bg-white/20 rounded-full" />
                          <div className="text-2xl font-black text-[#00E5FF]">94%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-5 -right-5 bg-white text-[#0D1F3C] px-5 py-3 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3 animate-float">
                  <CheckIcon />
                  <span className="font-bold text-sm">פגישה חדשה סונכרנה</span>
                </div>
              </div>
            </AnimateIn>

            <AnimateIn direction="left" className="order-1 lg:order-2">
              <div>
                <h2 className="text-4xl font-black mb-6 leading-snug">שליטה מלאה בנקודת המפגש.</h2>
                <p className="text-xl text-slate-300 leading-relaxed mb-10">
                  תקיפות מלאה בכל שיחה. בקרת השליטה שלנו מאפשרת לך לעקוב בזמן אמת
                  אחרי כל פגישה שנקבעה, לנתח ביצועים ולנהל את הממשק בקלות מכל מכשיר.
                </p>
                <ul className="space-y-5">
                  {['צפייה ביומנים בזמן אמת', 'ניתוח נתוני שיחות והמרות', 'ניהול הרשאות לצוות המרפאה'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-200 text-lg">
                      <CheckIcon /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          MID-PAGE CTA BANNER
          ══════════════════════════════════════════════════════ */}
      <section className="py-16 bg-gradient-to-l from-[#248BD3] to-[#2E3E97] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(0,229,255,0.4) 0%, transparent 60%)' }} />
        <AnimateIn>
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl font-black text-white mb-4">מוכנים לחסוך 40% בזמן הצוות?</h2>
            <p className="text-lg text-white/70 mb-8">הצטרפו ל-150+ מרפאות שכבר עברו לעתיד.</p>
            <button className="px-10 py-4 rounded-full bg-gradient-to-l from-[#FF7332] to-[#F05306] text-white font-bold text-lg shadow-[0_4px_24px_rgba(240,83,6,0.4)] hover:scale-105 hover:shadow-[0_4px_36px_rgba(240,83,6,0.55)] transition-all duration-300">
              התחילו שקופת ניסיון חינם
            </button>
          </div>
        </AnimateIn>
      </section>

      {/* ══════════════════════════════════════════════════════
          8 · HOW IT WORKS — 3 STEPS
          ══════════════════════════════════════════════════════ */}
      <section id="how-it-works" className="py-28 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#00E5FF] rounded-full blur-[220px] opacity-[0.05]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimateIn>
            <div className="text-center mb-20">
              <h2 className="text-4xl font-black text-[#0D1F3C] mb-4">איך זה עובד?</h2>
              <p className="text-lg text-slate-400">שלושה שלבים פשוטים שמחברים את הלקוח ליומן שלך.</p>
            </div>
          </AnimateIn>
          <div className="grid md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-14 left-[16%] right-[16%] h-[2px] bg-gradient-to-r from-transparent via-[#00E5FF]/30 to-transparent z-0" />
            {[
              { num: '1', title: 'הלקוח מתקשר', text: 'הלקוח מחייג למרפאה ומקבל מענה מיידי, אנושי וטבעי מסוכן ה-AI.', style: 'bg-white border-4 border-[#F2F4F7] shadow-xl text-[#0D1F3C]' },
              { num: '2', title: 'ממשקים מנתחת ומקשרת', text: 'המערכת מבינה את מטרת השיחה, בודקת זמינות, ומקבעת את התור המבוקש.', style: 'bg-gradient-to-bl from-[#00E5FF] to-[#248BD3] shadow-[0_0_24px_rgba(0,229,255,0.4)] text-white' },
              { num: '3', title: 'היומן מתעדכן', text: 'ה-Dashboard והיומן שלך מתעדכנים אוטומטית. הלקוח מקבל אישור ב-SMS.', style: 'bg-[#0D1F3C] shadow-xl text-white' },
            ].map((step, i) => (
              <AnimateIn key={i} delay={i * 0.2} direction="scale">
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className={`w-28 h-28 rounded-full flex items-center justify-center text-3xl font-black mb-7 ${step.style}`}>
                    {step.num}
                  </div>
                  <h3 className="text-xl font-bold text-[#0D1F3C] mb-2">{step.title}</h3>
                  <p className="text-slate-500 max-w-xs">{step.text}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          9 · USE-CASE CARDS
          ══════════════════════════════════════════════════════ */}
      <section id="use-cases" className="py-24 bg-gradient-to-b from-white to-[#F2F4F7] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimateIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-[#0D1F3C] mb-4">מתאים לכל סוג מרפאה</h2>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">בין אם אתם מרפאה קטנה או רשת ארצית — ממשקים מתאימה את עצמה אליכם.</p>
            </div>
          </AnimateIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { emoji: '🦷', title: 'מרפאות שיניים', desc: 'ניהול תורים, תזכורות טיפולים ומעקב אחרי מטופלים.' },
              { emoji: '👁️', title: 'מרפאות עיניים', desc: 'תיאום בדיקות, מעקב אחרי עדשות ושירות מותאם.' },
              { emoji: '💆', title: 'מרפאות אסתטיקה', desc: 'ניהול ייעוצים, תיאום טיפולים ומעקב רציף.' },
              { emoji: '🏥', title: 'מרפאות משפחה', desc: 'מענה לכל הגילאים, ניהול ריבוי רופאים ותורים.' },
            ].map((useCase, i) => (
              <AnimateIn key={i} delay={i * 0.1}>
                <GlassCard className="p-7 text-center h-full">
                  <div className="text-4xl mb-4">{useCase.emoji}</div>
                  <h3 className="text-lg font-bold text-[#0D1F3C] mb-2">{useCase.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{useCase.desc}</p>
                </GlassCard>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          10 · ROI / STATS SECTION
          ══════════════════════════════════════════════════════ */}
      <section className="py-24 bg-[#0D1F3C] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#00E5FF] rounded-full mix-blend-screen blur-[180px] opacity-15" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimateIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black mb-4">המספרים מדברים בעד עצמם</h2>
              <p className="text-lg text-slate-400">תוצאות ממוצעות של מרפאות שעברו לממשקים.</p>
            </div>
          </AnimateIn>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { value: '73%', label: 'פחות שיחות שהוחמצו', desc: 'הסוכן עונה לכל שיחה, גם בשעות שהצוות לא זמין.' },
              { value: '₪8,200', label: 'חיסכון חודשי ממזצע', desc: 'הפחתה בצורך במזכירות נוספות ובעלויות תפעול.' },
              { value: '2.5x', label: 'יותר תורים מאושרים', desc: 'יותר תורים נקבעים כשהמענה מיידי ואוטומטי.' },
            ].map((stat, i) => (
              <AnimateIn key={i} delay={i * 0.15}>
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300">
                  <div className="text-5xl font-black text-[#00E5FF] mb-3">{stat.value}</div>
                  <h3 className="text-xl font-bold mb-2">{stat.label}</h3>
                  <p className="text-slate-400 text-sm">{stat.desc}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          11 · TESTIMONIALS
          ══════════════════════════════════════════════════════ */}
      <section className="py-24 bg-gradient-to-b from-[#F2F4F7] to-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimateIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-[#0D1F3C] mb-4">מה אומרים עלינו</h2>
              <p className="text-lg text-slate-400">מרפאות שכבר גלו את ההבדל.</p>
            </div>
          </AnimateIn>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'ד"ר שרה כהן', role: 'מנהלת מרפאת שיניים, תל אביב', quote: 'מאז שהתחלנו להשתמש בממשקים, הצוות שלנו יכול להתרכז בטיפולים ולא בטלפונים. ההגלרה לקחה 5 דקות.' },
              { name: 'ד"ר יוסי לוי', role: 'רופא שיניים, חיפה', quote: 'הייתי סבפטי בהתחלה, אבל אחרי שבוע�ה הבנתי שזה באמת עובד. הלקוחות חושבים שהם מדברים עם מזכירה אמיתית.' },
              { name: 'מיכל אברהם', role: 'מנהלת רשת דנטל פלוס', quote: 'בתור מי שלנול פ סניפים — ממשקים חסכה לנו המון כסף ובלבול. הסינכרון עם היומנים מושלם.' },
            ].map((testimonial, i) => (
              <AnimateIn key={i} delay={i * 0.15}>
                <GlassCard hover={false} className="p-8 h-full flex flex-col">
                  {/* Stars */}
                  <div className="flex gap-1 mb-4 text-yellow-400 text-lg">{'★'.repeat(5)}</div>
                  <p className="text-slate-600 leading-relaxed mb-6 flex-1">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-3 pt-4 border-t border-white/40">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-bl from-[#00E5FF] to-[#248BD3] flex items-center justify-center text-white font-bold text-sm">
                      {testimonial.name.charAt(testimonial.name.indexOf("'") + 1 || 0)}
                    </div>
                    <div>
                      <p className="font-bold text-[#0D1F3C] text-sm">{testimonial.name}</p>
                      <p className="text-xs text-slate-400">{testimonial.role}</p>
                    </div>
                  </div>
                </GlassCard>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          12 · FAQ SECTION
          ══════════════════════════════════════════════════════ */}
      <section id="faq" className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimateIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-[#0D1F3C] mb-4">שאלות נפוצות</h2>
              <p className="text-lg text-slate-400">כל מה שצריך לדעת לפני שמתחילים.</p>
            </div>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <GlassCard hover={false} className="p-8 divide-y-0">
              <FAQItem
                question="האם הסוכן באמת נשמע אנושי?"
                answer="כן. הסוכן שלנו מבוסס על טכנולוגיית AI מתקדמת ומדבר עברית טבעית. הוא מבין הקשר, שואל שאלות הבהרה ומגיב בזמן אמת. רוב הלקוחות לא מבחינים שהם מדברים עם AI."
              />
              <FAQItem
                question="כמה זמן לוקח להגדיר את המערכת?"
                answer="ההגדרה לוקחת בין 3 ל-10 דקות. אתם מזינים את פרטי המרפאה, שעות הפעילות, ומחברים את היומן — וזהו. הסוכן מוכן לקבל שיחות."
              />
              <FAQItem
                question="האם ממשקים מתאימה גם למרפאה קטנה?"
                answer="בהחלט. ממשקים מתאימה למרפאות בכל גודל — מרופא יחיד עם מזכירה אחת ועד רשת ארצית עם עשרות סניפים. המחיר מותאם לגודל."
              />
              <FAQItem
                question="מה קורה אם הסוכן לא מצליח לעזור?"
                answer="במקרים שהסוכן מזהה שהוא לא יכול לסייע, הוא מעביר את השיחה לנציג אנושי בצורה חלקה. אף לקוח לא נשאר בלי מענה."
              />
              <FAQItem
                question="איך מתבצע הסינכרון עם היומן?"
                answer="ממשקים מתחברת ישירות למערכות ניהול התורים הנפוצות. כל תור שנקבע בשיחה מופיע אוטומטית ביומן, כולל פרטי הלקוח וסוג הטיפול."
              />
              <FAQItem
                question="האם יש תקופת ניסיון?"
                answer="כן, אנחנו מציעים תקופת ניסיון חינם של 14 יום ללא צורך בכרטיס אשראי. תוכלו לבדוק את המערכת לפני שמתחיבים."
              />
            </GlassCard>
          </AnimateIn>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          13 · FOOTER & FINAL CTA
          ══════════════════════════════════════════════════════ */}
      <footer className="bg-[#0D1F3C] pt-24 pb-10 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#00E5FF] rounded-full blur-[180px] opacity-10" />

        <AnimateIn>
          <div className="max-w-4xl mx-auto px-4 mb-20 relative z-10">
            <h2 className="text-4xl font-black text-white mb-4 leading-snug">מוכנים לחבר את המרפאה שלכם לעתיד?</h2>
            <p className="text-slate-400 text-lg mb-10">התחילו היום — ההגדרה להוקחת דקות ספורות.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-12 py-5 rounded-full bg-gradient-to-l from-[#FF7332] to-[#F05306] text-white font-black text-xl shadow-[0_4px_32px_rgba(240,83,6,0.35)] hover:scale-105 hover:shadow-[0_4px_48px_rgba(240,83,6,0.5)] transition-all duration-300">
                התחילו שקופת ניסיון חינם
              </button>
              <button className="px-10 py-5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold text-lg hover:bg-white/20 transition-all duration-300">
                דברו עם נציג
              </button>
            </div>
          </div>
        </AnimateIn>

        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between pt-8 border-t border-slate-700/40 text-slate-500 text-sm relative z-10">
          <div className="flex items-center gap-1 mb-4 md:mb-0">
            <MimshakimLogo size={28} />
            <span className="font-bold text-white">ממשקים 2026 ©</span>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">תנאי שימוש</a>
            <a href="#" className="hover:text-white transition-colors">מדיניות פרטיות</a>
            <a href="#" className="hover:text-white transition-colors">נגישות</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
