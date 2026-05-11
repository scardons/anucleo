import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useGSAP = () => {
  const contextRef = useRef<gsap.Context>();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Add a small delay to ensure GSAP is fully loaded
    const initGSAP = () => {
      try {
        contextRef.current = gsap.context(() => {});
        setIsReady(true);
      } catch (error) {
        console.error('GSAP initialization error:', error);
        // Fallback to show content if GSAP fails
        const hiddenElements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right, .scale-in');
        hiddenElements.forEach(el => {
          if (el instanceof HTMLElement) {
            el.style.opacity = '1';
            el.style.transform = 'none';
          }
        });
      }
    };

    // Initialize immediately if GSAP is available, otherwise wait a bit
    if (typeof gsap !== 'undefined') {
      initGSAP();
    } else {
      const timeout = setTimeout(initGSAP, 100);
      return () => clearTimeout(timeout);
    }

    return () => {
      contextRef.current?.revert();
    };
  }, []);

  // Return the actual gsap object when ready, not the context
  return isReady ? gsap : null;
};

export const animateInView = (element: string | Element, animation: gsap.TweenVars = {}) => {
  // Check if GSAP is available and element exists
  if (!gsap || !document.querySelector(element as string)) return;
  
  gsap.fromTo(
    element,
    {
      opacity: 0,
      y: 50,
      ...animation.from,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
      },
      ...animation.to,
    }
  );
};

export const staggerAnimateInView = (elements: string, animation: gsap.TweenVars = {}) => {
  // Check if GSAP is available and elements exist
  if (!gsap || !document.querySelector(elements)) return;
  
  gsap.fromTo(
    elements,
    {
      opacity: 0,
      y: 50,
      ...animation.from,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: elements,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
      },
      ...animation.to,
    }
  );
};