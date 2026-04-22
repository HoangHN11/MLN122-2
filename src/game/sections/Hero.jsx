// Hero section – redesigned to match reference layout (Chương 5 - Kinh tế Mác Lênin)
const IMG_URL = "https://noisy-blush-eudqama4ce.edgeone.app/upscalemedia-transformed.png";

export default function Hero() {
  return (
    <section className="hero-v2" id="hero">
      {/* Full-bleed background image */}
      <div
        className="hero-v2-bg"
        style={{ backgroundImage: `url('${IMG_URL}')` }}
      />
      {/* Dark overlay: opaque left → transparent right */}
      <div className="hero-v2-overlay" />

      {/* Decorative circles */}
      <div className="hero-v2-deco-circle hero-v2-deco-tl" />
      <div className="hero-v2-deco-circle hero-v2-deco-br" />

      {/* Left content */}
      <div className="hero-v2-content">
        {/* Chapter badge */}
        <div className="hero-v2-chapter-badge">CHƯƠNG 5</div>

        {/* Subtitle line */}
        <p className="hero-v2-chapter-sub">Kinh tế chính trị</p>

        {/* Main title */}
        <h1 className="hero-v2-title">
          <span className="hero-v2-title-lg">Mác Lênin</span>
        </h1>

        {/* Yellow description */}
        <p className="hero-v2-yellow-desc">
          Kinh tế thị trường định hướng<br />
          xã hội chủ nghĩa ở Việt Nam
        </p>

        {/* Action buttons */}
        <div className="hero-v2-actions">
          <a href="#quiz" className="hero-v2-btn-ref">
            <span>Bắt đầu học ngay!</span>
            <div className="hero-v2-btn-arrow">›</div>
          </a>
          <a href="#loto" className="hero-v2-btn-ref">
            <span>Lô Tô liền</span>
            <div className="hero-v2-btn-arrow">›</div>
          </a>
        </div>
      </div>
    </section>
  );
}
