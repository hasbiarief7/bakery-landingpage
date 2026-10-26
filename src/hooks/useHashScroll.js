import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const PAGE_TRANSITION_DURATION = 400; // matches AnimatePresence transition time

export default function useHashScroll() {
  const location = useLocation();
  const prevHash = useRef('');

  useEffect(() => {
    const hash = location.hash?.replace('#', '');

    // Skip if no hash or same hash as before
    if (!hash || hash === prevHash.current) return;
    prevHash.current = hash;

    // Wait for page transition animation to finish before scrolling
    const timeout = setTimeout(() => {
      const el = document.getElementById(hash);
      if (el) {
        const navbarHeight = 100; // accounts for fixed navbar height
        const top = el.getBoundingClientRect().top + window.scrollY - navbarHeight;

        window.scrollTo({
          top,
          behavior: 'smooth',
        });
      }
    }, PAGE_TRANSITION_DURATION);

    return () => clearTimeout(timeout);
  }, [location.hash, location.pathname]);
}
