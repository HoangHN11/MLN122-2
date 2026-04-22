import { useState, useEffect } from 'react';

const NAV_LINKS = [
  { href: '#hero', label: 'Home' },
  { href: '#ton-tai', label: 'Học Thuyết' },
  { href: '#loto', label: 'Lô Tô' },
  { href: '#quiz', label: 'Khảo Nghiệm' },
  { href: '#chat', label: 'AI Chatbot' },
  { href: '#ai', label: 'AI Usage' },
];

export default function Navbar({ activeTab, onTabChange }) {
  const [active, setActive] = useState('#hero');

  useEffect(() => {
    // Only observe scroll if we are on the game tab
    if (activeTab === 'book') {
      setActive('#book');
      return;
    }
    if (activeTab === 'ai') {
      setActive('#ai');
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActive('#' + entry.target.id);
        }
      });
    }, { root: null, rootMargin: '-20% 0px -60% 0px', threshold: 0 });

    const sections = ['hero', 'ton-tai', 'quiz']
      .map(id => document.getElementById(id))
      .filter(el => el !== null);
      
    sections.forEach(sec => observer.observe(sec));
    return () => sections.forEach(sec => observer.unobserve(sec));
  }, [activeTab]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const id = href.replace('#', '');
    
    // Switch to Book Tab
    if (id === 'book') {
      if (activeTab !== 'book' && onTabChange) {
        onTabChange('book');
      }
      return;
    }

    // Switch to AI Usage Tab
    if (id === 'ai') {
      if (activeTab !== 'ai' && onTabChange) {
        onTabChange('ai');
      }
      return;
    }

    // Handing clicks to Game Tab sections while currently on another Tab
    if (activeTab !== 'game' && id !== 'book' && id !== 'ai') {
      if (onTabChange) {
        onTabChange('game');
      }
      // Give DOM time to render GamePage then scroll
      setTimeout(() => {
        const target = document.getElementById(id);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
      return;
    }

    // Normal internal scroll within Game Tab
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActive(href);
    }
  };

  const isBook = activeTab === 'book';
  const isGray = active !== '#hero' && !isBook && activeTab !== 'ai';

  return (
    <div className="navbar-theory-wrapper w-full flex justify-center z-[100] fixed top-6 pointer-events-none">
      <nav className={`navbar-theory pointer-events-auto ${isBook ? 'nav-mode-book' : ''} ${isGray ? 'nav-gray' : ''} navbar-glass`}>

        <ul className="navbar-nav">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={active === l.href ? 'active group' : 'group'}
                onClick={(e) => handleNavClick(e, l.href)}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
