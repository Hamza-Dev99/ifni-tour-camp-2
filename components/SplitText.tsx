
import React, { useRef, useEffect, useMemo } from 'react';
import gsap from 'https://esm.sh/gsap';
import { ScrollTrigger } from 'https://esm.sh/gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  stagger?: number;
  ease?: string;
  from?: gsap.TweenVars;
  to?: gsap.TweenVars;
  splitType?: 'chars' | 'words';
  textAlign?: 'left' | 'center' | 'right';
  onLetterAnimationComplete?: () => void;
}

const SplitText: React.FC<SplitTextProps> = ({
  text,
  className = '',
  delay = 0,
  duration = 0.6,
  stagger = 0.05,
  ease = 'power3.out',
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  splitType = 'chars',
  textAlign = 'center',
  onLetterAnimationComplete
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Manually split the text into spans to allow animations without the paid GSAP SplitText plugin
  const items = useMemo(() => {
    if (splitType === 'chars') {
      return text.split('').map((char, i) => (
        <span 
          key={i} 
          className="split-char inline-block" 
          style={{ 
            whiteSpace: char === ' ' ? 'pre' : 'normal',
            perspective: '1000px'
          }}
        >
          {char}
        </span>
      ));
    }
    return text.split(' ').map((word, i) => (
      <span 
        key={i} 
        className="split-word inline-block mr-[0.3em]"
        style={{ perspective: '1000px' }}
      >
        {word}
      </span>
    ));
  }, [text, splitType]);

  useEffect(() => {
    if (!containerRef.current) return;

    const elements = containerRef.current.querySelectorAll('.split-char, .split-word');

    const ctx = gsap.context(() => {
      gsap.fromTo(elements, from, {
        ...to,
        duration,
        stagger,
        ease,
        delay: delay / 1000,
        onComplete: () => {
          if (onLetterAnimationComplete) onLetterAnimationComplete();
        },
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
          once: true
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, [text, from, to, duration, stagger, ease, delay, onLetterAnimationComplete]);

  return (
    <div 
      ref={containerRef} 
      className={className} 
      style={{ textAlign, display: 'block' }}
    >
      {items}
    </div>
  );
};

export default SplitText;
