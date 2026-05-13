import { useState, useEffect, useCallback } from 'react';
import { presentationData } from './data';
import { ChevronLeft, ChevronRight, Clock } from 'lucide-react';
import { Logo } from './components/Logo';

export default function PresenterApp() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
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

  const setSlide = useCallback((index: number) => {
    setCurrentSlide(index);
    const channel = new BroadcastChannel('presentation_sync');
    channel.postMessage({ type: 'SET_SLIDE', slideIndex: index });
    channel.close();
  }, []);

  const nextSlide = () => setSlide(Math.min(currentSlide + 1, presentationData.length - 1));
  const prevSlide = () => setSlide(Math.max(currentSlide - 1, 0));

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  const slide = presentationData[currentSlide];
  const nextSlideData = currentSlide < presentationData.length - 1 ? presentationData[currentSlide + 1] : null;

  return (
    <div className="w-screen h-screen bg-neutral-900 text-white flex flex-col font-sans overflow-hidden">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 border-b border-neutral-800 bg-black/20">
        <div className="flex items-center gap-3 text-neutral-400">
          <Logo className="h-6 w-auto text-purple-500" />
          <span className="font-semibold uppercase tracking-wider text-sm text-neutral-200">Presenter Mode</span>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 text-neutral-400 font-mono">
            <Clock className="w-4 h-4" />
            {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
          </div>
          <div className="text-sm font-medium text-neutral-400 bg-neutral-800 px-3 py-1 rounded-full">
            Slide {currentSlide + 1} of {presentationData.length}
          </div>
        </div>
      </header>

      {/* Main Layout */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Column: Previews */}
        <div className="w-[45%] flex flex-col border-r border-neutral-800 p-6 gap-6 bg-neutral-900/50">
          <div className="flex-1 flex flex-col gap-2">
            <h3 className="text-sm uppercase tracking-wider text-neutral-500 font-semibold">Current Slide</h3>
            <div className="flex-1 bg-white rounded-xl overflow-hidden relative shadow-lg flex flex-col items-center justify-center p-6 text-neutral-900 border-4 border-purple-500">
              <span className="text-purple-600 font-medium text-xs tracking-wider uppercase mb-2">
                {slide.chapter}
              </span>
              <h2 className="text-2xl font-bold text-center leading-tight mb-2">
                {slide.headline}
              </h2>
              {slide.visualType && (
                <div className="mt-4 px-3 py-1 bg-neutral-100 rounded text-xs text-neutral-500">
                  Visual: {slide.visualType}
                </div>
              )}
            </div>
          </div>
          
          {nextSlideData && (
            <div className="h-1/3 flex flex-col gap-2 opacity-60 hover:opacity-100 transition-opacity">
              <h3 className="text-sm uppercase tracking-wider text-neutral-500 font-semibold">Next Slide</h3>
              <div className="flex-1 bg-neutral-800 rounded-xl overflow-hidden flex flex-col items-center justify-center p-4 border border-neutral-700">
                <span className="text-neutral-400 font-medium text-xs tracking-wider uppercase mb-1">
                  {nextSlideData.chapter}
                </span>
                <h2 className="text-lg font-bold text-neutral-200 text-center leading-tight">
                  {nextSlideData.headline}
                </h2>
              </div>
            </div>
          )}
        </div>

        {/* Right Column: Notes & Controls */}
        <div className="flex-1 flex flex-col p-8 bg-black/20">
          <h3 className="text-sm uppercase tracking-wider text-purple-400 font-semibold mb-6 flex items-center gap-2">
            Speaker Notes
          </h3>
          
          <div className="flex-1 overflow-y-auto mb-8 pr-4 custom-scrollbar">
            <p className="text-3xl leading-[1.6] font-light text-neutral-100 whitespace-pre-wrap">
              {slide.notes}
            </p>
          </div>

          <div className="flex items-center justify-between pt-6 border-t border-neutral-800">
            <button 
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-neutral-800 text-white hover:bg-neutral-700 disabled:opacity-50 disabled:hover:bg-neutral-800 transition-colors font-medium"
            >
              <ChevronLeft className="w-5 h-5" />
              Previous (Left Arrow)
            </button>
            <button 
              onClick={nextSlide}
              disabled={currentSlide === presentationData.length - 1}
              className="flex items-center gap-2 px-8 py-3 rounded-full bg-purple-600 text-white hover:bg-purple-500 disabled:opacity-50 disabled:hover:bg-purple-600 transition-colors font-semibold shadow-lg shadow-purple-500/20"
            >
              Next (Right Arrow / Space)
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
