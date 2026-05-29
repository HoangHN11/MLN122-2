import { useRef } from "react";
import Hero from "./sections/Hero";
import GiaiCap from "./sections/GiaiCap";
import DauTranhGiaiCap from "./sections/DauTranhGiaiCap";
import DauTranhGiaiCapVoSan from "./sections/DauTranhGiaiCapVoSan";
import LotoShow from "./sections/LotoShow";
import TableOfContents from "./sections/TableOfContents";

import useScrollReveal from "../hooks/useScrollReveal";

export const GamePage = () => {
  useScrollReveal();
  const marioFrameRef = useRef(null);

  const openMarioFullscreen = async () => {
    const frame = marioFrameRef.current;

    if (frame?.requestFullscreen) {
      await frame.requestFullscreen();
      return;
    }

    window.open("/mario/index.html", "_blank", "noopener,noreferrer");
  };

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
      <style>{`
        .theory-page-container::-webkit-scrollbar { display: none; }
        .mario-frame-shell:fullscreen {
          width: 100vw;
          height: 100vh;
          padding: 12px;
          display: flex;
          align-items: stretch;
          background: #10235d;
          border-radius: 0;
        }
        .mario-frame-shell:fullscreen iframe {
          height: calc(100vh - 24px);
          border-radius: 18px;
        }
      `}</style>
      <TableOfContents />
      <Hero />

      <GiaiCap />
      <DauTranhGiaiCap />
      <DauTranhGiaiCapVoSan />
      <section id="loto">
        <LotoShow />
      </section>
      <section
        id="mario"
        className="min-h-screen px-4 py-28 md:px-10"
        style={{
          background:
            "linear-gradient(180deg, rgba(235, 246, 255, 0.96), rgba(208, 228, 246, 0.92))",
        }}
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-blue-700">
                EXE101 Mini Game
              </p>
              <h2 className="text-3xl font-black uppercase text-blue-950 md:text-5xl">
                Mario giải cứu công chúa
              </h2>
            </div>
            <button
              type="button"
              onClick={openMarioFullscreen}
              className="w-fit rounded-full border-2 border-blue-900 bg-white px-5 py-3 text-sm font-black uppercase text-blue-900 shadow-lg transition hover:bg-blue-900 hover:text-white"
            >
              Mở toàn màn hình
            </button>
          </div>
          <div
            ref={marioFrameRef}
            className="mario-frame-shell overflow-hidden rounded-[28px] border-4 border-blue-950 bg-blue-950 shadow-2xl"
          >
            <iframe
              title="Mario giải cứu công chúa"
              src="/mario/index.html"
              className="block h-[760px] w-full bg-sky-200"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </div>
  );
};
