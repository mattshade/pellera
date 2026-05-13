import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import type { SlideData } from '../data';
import { Logo } from './Logo';
import { 
  Clock, Database, Layers, CheckCircle, Search, FileText, 
  FastForward, Repeat, XCircle, FileOutput,
  Users, GitPullRequest, Monitor, Target, Settings,
  Smartphone, Activity, Cpu, UserCheck, Briefcase, 
  ShieldCheck, Star, Scale, TrendingUp, TrendingDown, 
  PieChart, Check, Zap as ZapIcon, ShieldAlert
} from 'lucide-react';

interface VisualProps {
  slide: SlideData;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
};

export function VisualRenderer({ slide }: VisualProps) {
  switch (slide.visualType) {
    case 'hero':
      return (
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="relative w-full h-full flex flex-col justify-center items-center overflow-hidden bg-neutral-50/50">
          
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent opacity-60 z-10"></div>
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0],
                x: [0, 150, 0],
                y: [0, -100, 0]
              }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] rounded-full bg-purple-300/40 blur-[120px]"
            />
            <motion.div 
              animate={{ 
                scale: [1, 1.3, 1],
                rotate: [0, -90, 0],
                x: [0, -150, 0],
                y: [0, 150, 0]
              }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-violet-300/40 blur-[140px]"
            />
          </div>

          <motion.div variants={itemVariants} className="z-10 text-center space-y-6 max-w-3xl glass-panel p-16 rounded-[2.5rem] border border-white/60 shadow-2xl relative overflow-hidden backdrop-blur-2xl bg-white/40">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-purple-400 via-indigo-400 to-violet-400 opacity-80"></div>
            <Logo className="h-16 w-auto text-purple-600 mx-auto mb-10" />
            <h1 className="text-6xl font-bold tracking-tight text-neutral-900 leading-[1.1]">{slide.headline}</h1>
            <p className="text-2xl text-neutral-600 leading-relaxed font-light">{slide.subtitle}</p>
            <div className="pt-10 flex justify-center gap-4 text-sm text-neutral-500 font-semibold uppercase tracking-widest">
              <span>Audience: {slide.audience}</span>
            </div>
          </motion.div>
        </motion.div>
      );
      
    case 'ribbon':
      return (
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="w-full h-full flex items-center justify-center p-8">
          <div className="flex items-center gap-4 text-neutral-500 w-full max-w-4xl">
            <motion.div variants={itemVariants} className="flex-1 glass-panel p-6 rounded-2xl flex flex-col items-center gap-4 relative border-l-4 border-l-purple-500">
              <span className="font-medium text-neutral-800">Sales</span>
              <div className="text-xs text-neutral-400 text-center">Urgency & Pipeline</div>
            </motion.div>
            <motion.div variants={itemVariants} className="w-8 h-px bg-neutral-300" />
            <motion.div variants={itemVariants} className="flex-1 glass-panel p-6 rounded-2xl flex flex-col items-center gap-4 relative border-red-100 border-l-4 border-l-red-400 shadow-[0_0_30px_rgba(239,68,68,0.05)]">
              <span className="font-medium text-neutral-800">Delivery</span>
              <div className="text-xs text-neutral-400 text-center">Context Gap</div>
              <XCircle className="absolute -top-3 -right-3 text-red-400 w-6 h-6 bg-white rounded-full" />
            </motion.div>
            <motion.div variants={itemVariants} className="w-8 h-px bg-neutral-300" />
            <motion.div variants={itemVariants} className="flex-1 glass-panel p-6 rounded-2xl flex flex-col items-center gap-4 border-l-4 border-l-emerald-500">
              <span className="font-medium text-neutral-800">Client</span>
              <div className="text-xs text-neutral-400 text-center">Inconsistency</div>
            </motion.div>
          </div>
        </motion.div>
      );
      
    case 'cards':
      const issues = [
        { icon: <Clock className="w-6 h-6 text-purple-600" />, title: "Delay", desc: "Salesforce entry is an afterthought." },
        { icon: <FileText className="w-6 h-6 text-purple-600" />, title: "Context Loss", desc: "Reliance on memory and fragmented chats." },
        { icon: <Search className="w-6 h-6 text-purple-600" />, title: "Poor Qualification", desc: "Delivery stretched across unqualified deals." },
        { icon: <Repeat className="w-6 h-6 text-purple-600" />, title: "Duplicate Work", desc: "Rebuilding proposals from scratch." }
      ];
      return (
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="w-full h-full grid grid-cols-2 gap-6 p-8 content-center max-w-4xl mx-auto">
          {issues.map((issue, idx) => (
            <motion.div key={idx} variants={itemVariants} className="glass-panel p-8 rounded-2xl flex items-start gap-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-neutral-100">
              <div className="p-4 bg-white shadow-sm border border-neutral-50 rounded-2xl">{issue.icon}</div>
              <div>
                <h3 className="text-lg font-medium text-neutral-900 mb-2">{issue.title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">{issue.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      );

    case 'canvas':
      return (
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="w-full h-full flex items-center justify-center gap-6 p-8 max-w-5xl mx-auto">
          {/* People Column */}
          <motion.div variants={itemVariants} className="flex-1 h-96 glass-panel rounded-3xl p-6 flex flex-col shadow-lg border border-white/60 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-b from-purple-50/50 to-transparent"></div>
            <div className="flex items-center gap-3 mb-8 relative z-10">
              <div className="p-2 bg-white rounded-lg shadow-sm border border-purple-100"><Users className="w-5 h-5 text-purple-600" /></div>
              <h3 className="text-lg font-semibold text-neutral-800">People</h3>
            </div>
            <div className="relative flex-1 flex flex-col items-center justify-center gap-4 z-10">
              <div className="w-16 h-16 rounded-full bg-white shadow-md border-4 border-purple-50 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8 text-purple-300" />
              </div>
              <div className="flex gap-2">
                 <span className="px-3 py-1 bg-white shadow-sm rounded-full text-[10px] font-bold text-neutral-500 uppercase tracking-wider">Sales</span>
                 <span className="px-3 py-1 bg-purple-600 shadow-sm rounded-full text-[10px] font-bold text-white uppercase tracking-wider">Delivery</span>
              </div>
            </div>
          </motion.div>

          {/* Process Column */}
          <motion.div variants={itemVariants} className="flex-1 h-96 glass-panel rounded-3xl p-6 flex flex-col shadow-lg border border-white/60 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/50 to-transparent"></div>
            <div className="flex items-center gap-3 mb-8 relative z-10">
              <div className="p-2 bg-white rounded-lg shadow-sm border border-indigo-100"><GitPullRequest className="w-5 h-5 text-indigo-600" /></div>
              <h3 className="text-lg font-semibold text-neutral-800">Process</h3>
            </div>
            <div className="relative flex-1 flex flex-col items-center justify-center z-10">
               <div className="absolute top-0 bottom-0 w-1 bg-indigo-100 rounded-full"></div>
               <div className="w-full flex flex-col gap-6 relative z-10">
                 <div className="bg-white p-3 rounded-xl shadow-sm border border-neutral-100 text-[10px] font-bold text-neutral-500 uppercase text-center w-3/4 mx-auto translate-x-4">Intake</div>
                 <div className="bg-indigo-600 p-3 rounded-xl shadow-md border border-indigo-500 text-[10px] font-bold text-white uppercase text-center w-3/4 mx-auto -translate-x-4 group-hover:scale-105 transition-transform">Qualify</div>
                 <div className="bg-white p-3 rounded-xl shadow-sm border border-neutral-100 text-[10px] font-bold text-neutral-500 uppercase text-center w-3/4 mx-auto translate-x-4">SOW</div>
               </div>
            </div>
          </motion.div>

          {/* Platform Column */}
          <motion.div variants={itemVariants} className="flex-1 h-96 glass-panel rounded-3xl p-6 flex flex-col shadow-lg border border-white/60 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-b from-violet-50/50 to-transparent"></div>
            <div className="flex items-center gap-3 mb-8 relative z-10">
              <div className="p-2 bg-white rounded-lg shadow-sm border border-violet-100"><Monitor className="w-5 h-5 text-violet-600" /></div>
              <h3 className="text-lg font-semibold text-neutral-800">Platform</h3>
            </div>
            <div className="relative flex-1 flex flex-col items-center justify-center gap-4 z-10">
               <div className="w-full bg-white p-4 rounded-2xl shadow-sm border border-neutral-100 flex items-end gap-2 h-24 group-hover:-translate-y-1 transition-transform">
                  <div className="w-1/4 bg-violet-100 rounded-t-md h-1/2"></div>
                  <div className="w-1/4 bg-violet-300 rounded-t-md h-full"></div>
                  <div className="w-1/4 bg-violet-600 rounded-t-md h-3/4"></div>
                  <div className="w-1/4 bg-violet-200 rounded-t-md h-1/4"></div>
               </div>
               <div className="w-full bg-white p-3 rounded-xl shadow-sm border border-neutral-100 flex items-center justify-between">
                  <div className="w-6 h-6 rounded-full border-4 border-violet-100 border-t-violet-600"></div>
                  <div className="h-2 w-16 bg-neutral-100 rounded-full"></div>
               </div>
            </div>
          </motion.div>
        </motion.div>
      );

    case 'timeline':
      const icons = [Search, CheckCircle, Activity, FileOutput, ShieldAlert, Users, Database, Layers];
      return (
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="w-full h-full flex flex-col justify-center px-8">
          <div className="relative flex items-center justify-between w-full">
            <div className="absolute left-0 right-0 h-1 bg-gradient-to-r from-purple-200 via-indigo-200 to-purple-200 top-1/2 -translate-y-1/2 rounded-full"></div>
            {slide.visualData?.steps.map((step: string, idx: number) => {
              const friction = slide.visualData.frictions.find((f: any) => f.step === idx);
              const Icon = icons[idx % icons.length];
              const isTop = idx % 2 === 0;
              return (
                <motion.div key={idx} variants={itemVariants} className="relative z-10 flex flex-col items-center justify-center group w-14">
                  {/* Step Label (Alternating Top/Bottom) */}
                  <div className={`absolute ${isTop ? 'bottom-[3.5rem]' : 'top-[3.5rem]'} w-24 text-center text-[10px] uppercase tracking-widest text-neutral-600 font-bold leading-tight break-words px-1`}>
                    {step}
                  </div>
                  
                  <div className={`w-10 h-10 rounded-xl border-4 border-white shadow-lg flex items-center justify-center transition-transform group-hover:scale-110 bg-white`}>
                    <Icon className={`w-4 h-4 text-purple-600`} />
                  </div>
                  
                  {/* Friction Bubble (Opposite to Step Label) */}
                  {friction && (
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1 }} className={`absolute ${isTop ? 'top-[4rem]' : 'bottom-[4rem]'} w-32 bg-purple-100 text-purple-800 text-[10px] p-2.5 rounded-xl border border-purple-200 shadow-xl text-center font-bold z-20`}>
                      {friction.label}
                      <div className={`absolute ${isTop ? '-top-1 border-t border-l' : '-bottom-1 border-b border-r'} left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-purple-100 border-purple-200 rotate-45`}></div>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      );

    case 'tiles':
      const principles = [
        "Capture once, reuse everywhere", "Qualify before scaling effort",
        "Make ownership visible", "Meet teams where they work", "Automate docs, not judgment"
      ];
      return (
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="w-full h-full flex flex-wrap justify-center gap-4 content-center p-8">
          {principles.map((p, idx) => (
            <motion.div key={idx} variants={itemVariants} className="glass-panel px-6 py-4 rounded-full text-sm font-medium text-neutral-700 bg-gradient-to-br from-white to-neutral-50 shadow-sm border border-neutral-100 flex items-center gap-3">
              <Check className="w-4 h-4 text-purple-500" />
              {p}
            </motion.div>
          ))}
        </motion.div>
      );

    case 'roadmap':
      const phases = [
        { phase: "Days 0–30", title: "Align", percent: 33, items: ["Intake form", "Qualification gate", "RACI definition"], icon: <Target className="w-8 h-8 text-purple-600" />, color: "from-purple-100/80 to-white", borderColor: "border-purple-200" },
        { phase: "Days 31–60", title: "Standardize", percent: 66, items: ["Scorecards", "Shared briefs", "Slack alerts"], icon: <Settings className="w-8 h-8 text-purple-600" />, color: "from-purple-200/80 to-white", borderColor: "border-purple-300" },
        { phase: "Days 61–90", title: "Automate", percent: 100, items: ["SOW Generation", "AI synthesis", "Dashboards"], icon: <ZapIcon className="w-8 h-8 text-purple-600" />, color: "from-purple-300/80 to-white", borderColor: "border-purple-400" }
      ];
      return (
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="w-full h-full flex gap-6 p-8 max-w-6xl mx-auto items-center justify-center relative perspective-1000">
          <div className="absolute top-1/2 left-12 right-12 h-1 bg-gradient-to-r from-purple-200 via-purple-300 to-purple-400 -z-10 rounded-full opacity-50 shadow-[0_0_15px_rgba(147,51,234,0.3)]"></div>
          {phases.map((p, idx) => (
            <motion.div key={idx} variants={itemVariants} className={`flex-1 bg-gradient-to-b ${p.color} border-2 ${p.borderColor} rounded-[2rem] shadow-2xl p-8 relative flex flex-col group hover:-translate-y-4 hover:shadow-[0_20px_40px_rgba(147,51,234,0.15)] transition-all duration-500 overflow-hidden`}>
              
              {/* Decorative Background Blob */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-white/40 blur-3xl rounded-full group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>
              
              {/* Header section with Circular Progress */}
              <div className="flex justify-between items-start mb-8 relative z-10">
                <div className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-neutral-100 flex items-center justify-center group-hover:rotate-6 transition-transform duration-300">
                  {p.icon}
                </div>
                
                {/* Circular Progress Indicator */}
                <div className="relative w-14 h-14 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle cx="28" cy="28" r="24" stroke="currentColor" strokeWidth="4" fill="none" className="text-white/50" />
                    <motion.circle 
                      cx="28" cy="28" r="24" stroke="currentColor" strokeWidth="4" fill="none" 
                      className="text-purple-500" 
                      strokeDasharray="150" 
                      initial={{ strokeDashoffset: 150 }}
                      animate={{ strokeDashoffset: 150 - (150 * p.percent) / 100 }}
                      transition={{ duration: 1.5, delay: 0.5 + (idx * 0.2), ease: "easeOut" }}
                      strokeLinecap="round"
                    />
                  </svg>
                  <span className="absolute text-[10px] font-bold text-purple-700">{p.percent}%</span>
                </div>
              </div>

              <div className="relative z-10">
                <div className="text-xs font-black tracking-widest uppercase text-purple-500 mb-2">{p.phase}</div>
                <h3 className="text-3xl font-bold text-neutral-900 mb-6">{p.title}</h3>
              </div>
              
              <div className="relative z-10 flex flex-col gap-3 pt-4">
                {p.items.map((item, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, x: -10 }} 
                    animate={{ opacity: 1, x: 0 }} 
                    transition={{ delay: 1 + (idx * 0.2) + (i * 0.1) }}
                    className="flex items-center gap-3 bg-white/60 backdrop-blur-sm p-3 rounded-xl border border-white/50 shadow-sm"
                  >
                    <CheckCircle className="w-4 h-4 text-purple-500" />
                    <span className="text-sm font-semibold text-neutral-700">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      );

    case 'process':
      return (
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="w-full h-full flex flex-col justify-center items-center p-8">
          <div className="glass-panel p-10 rounded-3xl w-full max-w-3xl flex flex-col gap-8 relative shadow-2xl border border-white/50 bg-white/60">
            <div className="absolute left-14 top-14 bottom-14 w-1 bg-gradient-to-b from-purple-300 via-indigo-300 to-violet-300 rounded-full"></div>
            {[
              { icon: <Database className="w-5 h-5 text-purple-600" />, label: "Intake form & Salesforce pre-opp" },
              { icon: <CheckCircle className="w-5 h-5 text-emerald-600" />, label: "Qualification Score Gate" },
              { icon: <Search className="w-5 h-5 text-indigo-600" />, label: "Shared Discovery" },
              { icon: <FileOutput className="w-5 h-5 text-violet-600" />, label: "Automated SOW Generation" }
            ].map((step, idx) => (
              <motion.div key={idx} variants={itemVariants} className="flex items-center gap-6 relative z-10">
                <div className="w-10 h-10 rounded-full bg-white shadow-md border-2 border-white flex items-center justify-center ring-4 ring-neutral-50">
                  {step.icon}
                </div>
                <div className="flex-1 bg-white/80 backdrop-blur-sm px-6 py-4 rounded-xl shadow-sm border border-neutral-100 text-sm font-semibold text-neutral-800 hover:shadow-md transition-shadow">
                  {step.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      );

    case 'architecture':
      const layers = [
        { name: "Experience Layer", icon: <Smartphone className="w-5 h-5 text-purple-600" /> },
        { name: "Workflow Layer", icon: <Activity className="w-5 h-5 text-purple-600" /> },
        { name: "Data Layer", icon: <Database className="w-5 h-5 text-purple-600" /> },
        { name: "Automation Layer", icon: <Cpu className="w-5 h-5 text-purple-600" /> }
      ];
      return (
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="w-full h-full flex flex-col justify-center items-center gap-4 p-8">
          {layers.map((layer, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants} 
              className={`w-full max-w-2xl py-6 px-8 rounded-2xl flex items-center justify-between border-2 border-purple-100 shadow-md hover:-translate-y-1 hover:shadow-xl transition-all bg-white/80 backdrop-blur-sm relative overflow-hidden`}
              style={{ zIndex: 10 - idx }}
            >
              <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white/80 to-transparent"></div>
              <span className="font-semibold text-neutral-800 text-lg flex items-center gap-4 relative z-10">
                <div className="p-2 bg-purple-50 rounded-lg border border-purple-100 shadow-sm">{layer.icon}</div>
                {layer.name}
              </span>
              <Layers className="w-6 h-6 text-purple-200 relative z-10" />
            </motion.div>
          ))}
        </motion.div>
      );

    case 'curve':
      return (
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="w-full h-full p-12 max-w-4xl mx-auto relative">
          
          {/* Inner Chart Box constrained heavily from all edges */}
          <div className="absolute left-20 bottom-24 right-32 top-32 border-l-2 border-b-2 border-neutral-200 pointer-events-none">
             
             {/* Axis Labels */}
             <span className="absolute -left-16 top-[50%] -translate-y-[50%] -rotate-90 text-xs font-bold text-neutral-400 tracking-widest uppercase">Value</span>
             <span className="absolute -bottom-10 left-[50%] -translate-x-[50%] text-xs font-bold text-neutral-400 tracking-widest uppercase">Maturity</span>

             {/* Curve */}
             <svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
                <motion.path 
                  initial={{ pathLength: 0, opacity: 0 }} 
                  animate={{ pathLength: 1, opacity: 1 }} 
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  d="M 0,100 C 40,100 60,0 100,0" 
                  fill="none" 
                  stroke="url(#gradient)" 
                  strokeWidth="2" 
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#d8b4fe" />
                    <stop offset="100%" stopColor="#9333ea" />
                  </linearGradient>
                </defs>
             </svg>
             
             {/* Data Points */}
             {['Manual', 'Structured', 'Assisted', 'Predictive'].map((stage, idx) => {
                const positions = [
                  { left: '0%', bottom: '0%' },
                  { left: '30%', bottom: '15%' },
                  { left: '60%', bottom: '60%' },
                  { left: '100%', bottom: '100%' }
                ];
                return (
                  <motion.div key={idx} variants={itemVariants} className="absolute flex flex-col items-center gap-3 -translate-x-1/2 translate-y-1/2 pointer-events-auto" style={{ left: positions[idx].left, bottom: positions[idx].bottom }}>
                    <div className="w-5 h-5 rounded-full bg-purple-600 border-4 border-white shadow-[0_0_20px_rgba(147,51,234,0.6)]"></div>
                    <span className="text-xs font-bold text-neutral-600 bg-white/90 px-3 py-1 rounded-full shadow-sm border border-neutral-100 uppercase tracking-wider">{stage}</span>
                  </motion.div>
                );
             })}
          </div>
        </motion.div>
      );

    case 'matrix':
      const roles = [
        { role: "Account Executive", short: "AE", owns: "Commercial & Urgency", icon: <UserCheck className="w-6 h-6 text-purple-600" /> },
        { role: "Delivery Lead", short: "DL", owns: "Feasibility & Estimates", icon: <Briefcase className="w-6 h-6 text-purple-600" /> },
        { role: "Operations", short: "Ops", owns: "Governance & Reporting", icon: <ShieldCheck className="w-6 h-6 text-purple-600" /> },
        { role: "Leadership", short: "Lead", owns: "Enforcement", icon: <Star className="w-6 h-6 text-purple-600" /> }
      ];
      return (
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="w-full h-full flex items-center justify-center p-8">
          <div className="grid grid-cols-2 gap-4 max-w-4xl w-full">
            {roles.map((item, idx) => (
              <motion.div key={idx} variants={itemVariants} className={`p-8 rounded-3xl border border-purple-100 shadow-lg flex flex-col gap-4 bg-purple-50 relative overflow-hidden group hover:shadow-xl transition-all`}>
                <div className="absolute -right-6 -top-6 w-24 h-24 bg-white/60 rounded-full blur-2xl group-hover:scale-150 transition-transform"></div>
                <div className="flex items-center justify-between z-10">
                  <div className="p-3 bg-white rounded-xl shadow-sm">{item.icon}</div>
                  <span className="text-xs font-bold text-purple-700 uppercase tracking-wider bg-purple-100 px-3 py-1 rounded-lg border border-purple-200">{item.short}</span>
                </div>
                <div className="z-10">
                  <h3 className="text-sm font-bold text-purple-600/60 uppercase tracking-wider mb-1">{item.role}</h3>
                  <p className="text-xl font-semibold text-neutral-900">{item.owns}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      );

    case 'scale':
      return (
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="w-full h-full flex flex-col justify-center items-center gap-16 p-8 relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-100/50 via-transparent to-transparent -z-10"></div>
          <div className="relative w-full max-w-xl flex items-center justify-between mt-12">
            
            <motion.div variants={itemVariants} className="glass-panel p-8 rounded-3xl flex flex-col items-center gap-4 shadow-xl z-10 w-48 border-t-4 border-t-purple-600 bg-white/80 backdrop-blur-xl -mt-8 transform -rotate-3">
              <div className="p-4 bg-purple-50 rounded-full"><FastForward className="w-8 h-8 text-purple-600" /></div>
              <span className="font-bold text-lg text-neutral-800 uppercase tracking-wide">Speed</span>
            </motion.div>
            
            <div className="absolute inset-x-12 top-1/2 flex justify-center">
              <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1, type: "spring" }} className="w-full h-2 bg-neutral-300 rounded-full origin-center relative">
                 <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-neutral-400 rounded-lg rotate-45 shadow-sm border-2 border-white"></div>
                 <div className="absolute left-1/2 bottom-full -translate-x-1/2 mb-4"><Scale className="w-8 h-8 text-neutral-300" /></div>
              </motion.div>
            </div>

            <motion.div variants={itemVariants} className="glass-panel p-8 rounded-3xl flex flex-col items-center gap-4 shadow-xl z-10 w-48 border-t-4 border-t-purple-600 bg-white/80 backdrop-blur-xl mt-8 transform rotate-3">
              <div className="p-4 bg-purple-50 rounded-full"><CheckCircle className="w-8 h-8 text-purple-600" /></div>
              <span className="font-bold text-lg text-neutral-800 uppercase tracking-wide">Quality</span>
            </motion.div>
          </div>
          
          <motion.div variants={itemVariants} className="bg-neutral-900 text-white px-8 py-4 rounded-full shadow-2xl mt-12">
            <p className="text-sm font-medium tracking-wide">
              Start lightweight <span className="text-neutral-500 mx-2">•</span> Measure adoption <span className="text-neutral-500 mx-2">•</span> Automate the proven workflow
            </p>
          </motion.div>
        </motion.div>
      );

    case 'dashboard':
      const metrics = [
        { val: "2.4d", label: "Signal to CRM", trend: "down", icon: <TrendingDown className="w-4 h-4 text-emerald-500" /> },
        { val: "85%", label: "Intake Compliance", trend: "up", icon: <TrendingUp className="w-4 h-4 text-emerald-500" /> },
        { val: "-40%", label: "Proposal Rework", trend: "down", icon: <TrendingDown className="w-4 h-4 text-emerald-500" /> },
        { val: "92/100", label: "Delivery Confidence", trend: "up", icon: <Star className="w-4 h-4 text-amber-500" /> },
        { val: "4.1d", label: "SOW Cycle Time", trend: "down", icon: <Clock className="w-4 h-4 text-emerald-500" /> },
        { val: "12", label: "Stale Opportunities", trend: "down", icon: <PieChart className="w-4 h-4 text-purple-500" /> }
      ];
      return (
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="w-full h-full grid grid-cols-2 gap-6 p-8 content-center max-w-2xl mx-auto">
          {metrics.map((stat, idx) => (
            <motion.div key={idx} variants={itemVariants} className="glass-panel p-6 rounded-3xl flex flex-col justify-center relative overflow-hidden group hover:-translate-y-1 transition-transform border border-white">
              <div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition-opacity">
                {stat.icon}
              </div>
              <span className="text-4xl font-semibold text-neutral-900 mb-2 tracking-tight">{stat.val}</span>
              <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">{stat.label}</span>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-neutral-100 to-neutral-200"></div>
            </motion.div>
          ))}
        </motion.div>
      );

    case 'final':
      return (
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="relative w-full h-full flex items-center justify-center overflow-hidden">
          <motion.div variants={itemVariants} className="absolute inset-0 liquid-gradient opacity-80 z-0"></motion.div>
          
          <div className="relative z-10 w-full max-w-5xl grid grid-cols-12 gap-12 items-center p-12">
            <motion.div variants={itemVariants} className="col-span-12 lg:col-span-7 space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-100 text-purple-600 text-sm font-semibold tracking-widest uppercase mb-4">
                <Logo className="h-4 w-auto text-purple-600" /> The Path Forward
              </div>
              <h2 className="text-5xl font-bold tracking-tight text-neutral-900 leading-[1.1]">
                {slide.headline}
              </h2>
              <p className="text-xl text-neutral-600 leading-relaxed font-light border-l-4 border-purple-500 pl-6">
                This creates a scalable handoff model that improves client confidence, protects delivery focus, and helps sales move faster with less ambiguity.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="col-span-12 lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border border-neutral-200 bg-white/60 backdrop-blur-xl p-8 shadow-2xl flex flex-col gap-6">
                
                <h3 className="text-lg font-medium text-neutral-900 mb-2">Key Outcomes</h3>
                {[
                  "Enforced Qualification Gate",
                  "Structured Context Captured Once",
                  "Visible Ownership",
                  "Trusted Data Automation"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 text-neutral-700 bg-white p-4 rounded-xl border border-neutral-100 shadow-sm">
                    <CheckCircle className="w-5 h-5 text-purple-600 shrink-0" />
                    <span className="font-medium text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      );

    case 'qa':
      return (
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="relative w-full h-full flex flex-col justify-center items-center overflow-hidden bg-neutral-50/50">
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 flex items-center justify-center">
            <motion.div 
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="w-[800px] h-[800px] rounded-full bg-purple-200/50 blur-[150px]"
            />
          </div>
          
          <motion.div variants={itemVariants} className="z-10 text-center relative flex flex-col items-center">
            <h1 className="text-[14rem] font-bold tracking-tighter text-neutral-900 leading-none bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-500 drop-shadow-sm mb-4">
              Q&A
            </h1>
            <div className="h-2 w-32 bg-purple-600 rounded-full mb-12"></div>
            <p className="text-2xl text-neutral-600 font-light tracking-wide">{slide.headline}</p>
          </motion.div>
        </motion.div>
      );

    default:
      return <div className="p-8 text-neutral-400">Visual visualization missing.</div>;
  }
}
