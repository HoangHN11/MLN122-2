import { useEffect } from 'react';

export default function useScrollReveal() {
  useEffect(() => {
    // Observer 1: existing reveal animations
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .ri-item')
      .forEach((el) => revealObserver.observe(el));

    // Observer 2: slide sections — trigger when 30% visible
    const slideObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('slide-in');
        } else {
          // Reset when fully out so it re-animates on scroll back up
          entry.target.classList.remove('slide-in');
        }
      });
    }, { threshold: 0.18 });

    document.querySelectorAll('.slide-section')
      .forEach((el) => slideObserver.observe(el));

    return () => {
      revealObserver.disconnect();
      slideObserver.disconnect();
    };
  }, []);
}
