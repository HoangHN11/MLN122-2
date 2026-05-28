import Hero from "./sections/Hero";
import GiaiCap from "./sections/GiaiCap";
import DauTranhGiaiCap from "./sections/DauTranhGiaiCap";
import DauTranhGiaiCapVoSan from "./sections/DauTranhGiaiCapVoSan";
import LotoShow from "./sections/LotoShow";
import TableOfContents from "./sections/TableOfContents";

import useScrollReveal from "../hooks/useScrollReveal";

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
      <TableOfContents />
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
