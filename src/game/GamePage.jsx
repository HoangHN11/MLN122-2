import { useEffect } from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import GiaiCap from "./sections/GiaiCap";
import DauTranhGiaiCap from "./sections/DauTranhGiaiCap";
import DauTranhGiaiCapVoSan from "./sections/DauTranhGiaiCapVoSan";

import useScrollReveal from "../hooks/useScrollReveal";
import LotoShow from "./sections/LotoShow";

export const GamePage = () => {
  useScrollReveal();

  return (
    <div
      className="theory-page-container"
      style={{
        width: "100%",
        minHeight: "100vh",
        scrollBehavior: "smooth",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      <style>{`.theory-page-container::-webkit-scrollbar { display: none; }`}</style>
      <Hero />

      <GiaiCap />
      <DauTranhGiaiCap />
      <DauTranhGiaiCapVoSan />
      <section id="loto">
        <LotoShow />
      </section>
    </div>
  );
};
