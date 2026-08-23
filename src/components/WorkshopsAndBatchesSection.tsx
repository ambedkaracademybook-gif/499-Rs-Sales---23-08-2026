import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';
import imgClass1 from '../assets/images/sessions/batch1/image.jpg';
import imgClass2 from '../assets/images/sessions/batch2/image.jpg';
import imgClass3 from '../assets/images/sessions/batch3/image.jpg';
import imgClass4 from '../assets/images/sessions/batch4/image.jpg';

const batches = [
  {
    title: 'Batch 1',
    image: imgClass1,
  },
  {
    title: 'Batch 2',
    image: imgClass2,
  },
  {
    title: 'Batch 3',
    image: imgClass3,
  },
  {
    title: 'Batch 4',
    image: imgClass4,
  }
];

export const WorkshopsAndBatchesSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const directionRef = useRef<1 | -1>(1);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-scroll logic (Continuous Ping-Pong)
  useEffect(() => {
    if (!scrollRef.current || isHovered) return;
    
    let animationId: number;
    const speed = 1.5; // Scroll speed (pixels per frame)

    const step = () => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        
        // Reverse direction at edges
        if (directionRef.current === 1 && scrollLeft + clientWidth >= scrollWidth - 1) {
          directionRef.current = -1;
        } else if (directionRef.current === -1 && scrollLeft <= 1) {
          directionRef.current = 1;
        }
        
        scrollRef.current.scrollLeft += directionRef.current * speed;
      }
      animationId = requestAnimationFrame(step);
    };

    animationId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationId);
  }, [isHovered]);

  const scrollLeft = () => {
    if (scrollRef.current) {
      directionRef.current = -1;
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      directionRef.current = 1;
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <>
      <section id="workshops-sessions-section" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        
        {/* Header Area */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
          <div className="max-w-2xl">
            <span className="text-[#F5B94C] text-[10px] sm:text-xs font-black uppercase tracking-widest block mb-2">
              OFFLINE CLASSROOM HIGHLIGHTS • முந்தைய நேரடி வகுப்புகள்
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Our Workshops & Batches
            </h2>
          </div>
          <div className="max-w-md md:text-right flex flex-col items-start md:items-end gap-4">
            <p className="text-sm sm:text-base text-[#82b8ff] font-medium">
              Real classroom snapshots from our previous batch sessions conducted at Dr. Ambedkar Academy, Chennai.
            </p>
            {/* Navigation Buttons */}
            <div className="flex items-center gap-3">
              <button 
                onClick={scrollLeft}
                className="w-10 h-10 rounded-full bg-[#1A1A1A] border border-[#F5B94C]/40 flex items-center justify-center text-[#F5B94C] hover:bg-[#F5B94C] hover:text-black transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={scrollRight}
                className="w-10 h-10 rounded-full bg-[#1A1A1A] border border-[#F5B94C]/40 flex items-center justify-center text-[#F5B94C] hover:bg-[#F5B94C] hover:text-black transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Scrollable Container */}
        <div 
          className="flex overflow-x-auto gap-6 pb-6 scrollbar-hide"
          ref={scrollRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {/* Custom style block to hide scrollbar for webkit */}
          <style dangerouslySetInnerHTML={{__html: `
            .scrollbar-hide::-webkit-scrollbar {
                display: none;
            }
          `}} />
          
          {batches.map((batch, idx) => (
            <div 
              key={idx}
              className="min-w-[85vw] sm:min-w-[400px] md:min-w-[500px] bg-[#111111] border border-[#F5B94C]/25 rounded-2xl overflow-hidden flex flex-col group hover:border-[#F5B94C]/60 transition-colors duration-300"
            >
              <div className="p-4 border-b border-[#F5B94C]/20 flex justify-between items-center">
                <h3 className="text-lg font-bold text-[#F5B94C] uppercase tracking-wider">
                  {batch.title}
                </h3>
                <span className="text-xs text-[#BDBDBD] bg-[#1A1A1A] px-2 py-1 rounded">OFFLINE</span>
              </div>
              
              {/* Un-cropped Image with Zoom Overlay */}
              <div 
                className="relative bg-black w-full h-64 sm:h-80 md:h-96 cursor-zoom-in flex items-center justify-center"
                onClick={() => setZoomedImage(batch.image)}
              >
                <img 
                  src={batch.image} 
                  alt={batch.title}
                  className="max-w-full max-h-full object-contain transition-opacity duration-300 group-hover:opacity-80"
                  loading="lazy"
                />
                
                {/* Hover overlay hint */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="bg-black/70 p-3 rounded-full text-white backdrop-blur-sm border border-white/20 shadow-lg">
                    <ZoomIn className="w-6 h-6" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Fullscreen Zoom Modal */}
      {zoomedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-8 cursor-zoom-out backdrop-blur-sm"
          onClick={() => setZoomedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 md:top-8 md:right-8 text-white/70 hover:text-white bg-black/50 p-2 rounded-full transition-colors z-[110]"
            onClick={(e) => {
              e.stopPropagation();
              setZoomedImage(null);
            }}
          >
            <X className="w-8 h-8" />
          </button>
          
          <img 
            src={zoomedImage} 
            alt="Zoomed batch"
            className="max-w-full max-h-full object-contain rounded shadow-2xl"
            onClick={(e) => e.stopPropagation()} 
          />
        </div>
      )}
    </>
  );
};
