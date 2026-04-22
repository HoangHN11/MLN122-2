import { useEffect } from 'react';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import KinhTeThiTruong from './sections/KinhTeThiTruong';
import QuanHeSoHuu from './sections/QuanHeSoHuu';
import GearOfEra from './sections/GearOfEra';

import useScrollReveal from '../hooks/useScrollReveal';
import LotoShow from './sections/LotoShow';

export const GamePage = () => {
  useScrollReveal();

  return (
    <div className="theory-page-container" style={{ width: '100%', minHeight: '100vh', scrollBehavior: 'smooth', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
      <style>{`.theory-page-container::-webkit-scrollbar { display: none; }`}</style>
      <Hero />


      <KinhTeThiTruong />
      <QuanHeSoHuu />
      <section id="loto">
        <LotoShow />
      </section>
      <section id="quiz">
        <GearOfEra />
      </section>
    </div>
  );
};

