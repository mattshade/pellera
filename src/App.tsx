import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { presentationData } from './data';
import { VisualRenderer } from './components/Visuals';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import PresenterApp from './Presenter';
import { Logo } from './components/Logo';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPresenterMode, setIsPresenterMode] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('presenter') === 'true') {
      setIsPresenterMode(true);
    }
  }, []);

  useEffect(() => {
    const channel = new BroadcastChannel('presentation_sync');
    channel.onmessage = (event) => {
      if (event.data.type === 'SET_SLIDE') {
        setCurrentSlide(event.data.slideIndex);
      }
    };
    return () => channel.close();
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => {
      const next = Math.min(prev + 1, presentationData.length - 1);
      const channel = new BroadcastChannel('presentation_sync');
      channel.postMessage({ type: 'SET_SLIDE', slideIndex: next });
      channel.close();
      return next;
    });
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => {
      const next = Math.max(prev - 1, 0);
      const channel = new BroadcastChannel('presentation_sync');
      channel.postMessage({ type: 'SET_SLIDE', slideIndex: next });
      channel.close();
      return next;
    });
  }, []);

  const openPresenterMode = useCallback(() => {
    window.open(window.location.origin + window.location.pathname + '?presenter=true', 'presenter_window', 'width=1200,height=800');
  }, []);

  useEffect(() => {
    if (isPresenterMode) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key.toLowerCase() === 'p') {
        openPresenterMode();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide, isPresenterMode, openPresenterMode]);

  if (isPresenterMode) {
    return <PresenterApp />;
  }

  const slide = presentationData[currentSlide];
  const isFullScreen = slide.visualType === 'hero' || slide.visualType === 'final';

  return (
    <div className="w-screen h-screen bg-white text-neutral-900 font-sans overflow-hidden flex flex-col relative">
      {/* Header / Nav */}
      <header className="absolute top-0 w-full p-6 flex justify-between items-center z-50 mix-blend-multiply">
        <div className="flex items-center gap-2">
          <Logo className="h-6 w-auto text-purple-600" />
        </div>
        <div className="flex items-center gap-6">
          <span className="text-xs font-medium text-neutral-400">
            {currentSlide + 1} / {presentationData.length}
          </span>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 relative w-full h-full flex">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
            className={`w-full h-full flex ${isFullScreen ? 'flex-col' : 'flex-row'}`}
          >
            {/* Text Panel */}
            {!isFullScreen && (
              <div className="w-[45%] h-full flex flex-col justify-center px-16 lg:px-24">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <span className="text-purple-600 font-medium text-sm tracking-wider uppercase mb-4 block">
                    {slide.chapter}
                  </span>
                  <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.1] mb-8 text-neutral-900">
                    {slide.headline}
                  </h2>
                  
                  {slide.bullets && (
                    <ul className="space-y-5">
                      {slide.bullets.map((bullet, idx) => (
                        <motion.li 
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + (idx * 0.1) }}
                          className="flex items-start text-lg text-neutral-600 leading-relaxed"
                        >
                          <span className="mr-4 mt-2.5 w-1.5 h-1.5 rounded-full bg-purple-600/50 flex-shrink-0"></span>
                          <span>{bullet}</span>
                        </motion.li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              </div>
            )}

            {/* Visual Panel */}
            <div className={`${isFullScreen ? 'w-full' : 'w-[55%]'} h-full relative flex items-center justify-center bg-neutral-50/50`}>
              <VisualRenderer slide={slide} />
            </div>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Navigation Controls */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-50 glass-panel px-4 py-2 rounded-full">
        <button 
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="p-1.5 rounded-full text-neutral-400 hover:text-neutral-800 disabled:opacity-30 disabled:hover:text-neutral-400 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button 
          onClick={nextSlide}
          disabled={currentSlide === presentationData.length - 1}
          className="p-1.5 rounded-full text-neutral-400 hover:text-neutral-800 disabled:opacity-30 disabled:hover:text-neutral-400 transition-colors"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

export default App;
